"use client";

import React, {
  useEffect,
  useState,
  useMemo,
  memo,
  useRef,
  useCallback,
} from "react";
import { useCursor } from "@/components/cursor/cursor-context";
import { CURSORS } from "@/registry/cursors";

// Memoized cursor renderer. Re-renders only when the component, hover state,
// or actual position changes — no dead-zone, so precise slow movements stay
// pixel-perfect and never feel "stuck".
const CursorRenderer = memo(
  ({
    Component,
    x,
    y,
    isHovering,
  }: {
    Component: React.ComponentType<{
      x: number;
      y: number;
      isHovering?: boolean;
    }>;
    x: number;
    y: number;
    isHovering: boolean;
  }) => {
    return <Component x={x} y={y} isHovering={isHovering} />;
  },
  (prev, next) => {
    return (
      prev.Component === next.Component &&
      prev.isHovering === next.isHovering &&
      prev.x === next.x &&
      prev.y === next.y
    );
  }
);

CursorRenderer.displayName = "CursorRenderer";

export function CursorEngine() {
  const { cursorStyle, isCursorVisible } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Refs keep the mousemove handler free of re-renders
  const positionRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const hasMovedRef = useRef(false);
  const isHoveringRef = useRef(false);

  // Build cursor map from registry - memoized
  const CURSOR_MAP = useMemo(() => {
    return Object.fromEntries(CURSORS.map((c) => [c.id, c.component]));
  }, []);

  // Get the cursor component - memoized based on cursorStyle
  const CursorComponent = useMemo(() => {
    return (
      CURSOR_MAP[cursorStyle] || CURSOR_MAP["default"] || CURSORS[0]?.component
    );
  }, [cursorStyle, CURSOR_MAP]);

  // Stable mouse move handler. Schedules at most ONE state update per frame —
  // never cancels/reschedules, so high-polling-rate mice (120Hz+) can't starve
  // the animation frame and freeze the cursor mid-movement.
  const handleMouseMove = useCallback((e: MouseEvent) => {
    positionRef.current.x = e.clientX;
    positionRef.current.y = e.clientY;

    if (!hasMovedRef.current) {
      hasMovedRef.current = true;
      setHasMoved(true);
    }

    // Interactive-element detection (only set state on actual change)
    const target = e.target as HTMLElement;
    const interactive = !!target.closest(
      'button, a, input, [role="button"], label, select, textarea, .cursor-pointer'
    );
    if (isHoveringRef.current !== interactive) {
      isHoveringRef.current = interactive;
      setIsHovering(interactive);
    }

    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        setMousePosition({
          x: positionRef.current.x,
          y: positionRef.current.y,
        });
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [handleMouseMove]);

  // Check if we are on a mobile/touch device
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isMobileWidth = window.innerWidth <= 768;
      setIsMobile(isTouch || isMobileWidth);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile || !isCursorVisible || !hasMoved || !CursorComponent)
    return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <CursorRenderer
        Component={CursorComponent}
        x={mousePosition.x}
        y={mousePosition.y}
        isHovering={isHovering}
      />
    </div>
  );
}
