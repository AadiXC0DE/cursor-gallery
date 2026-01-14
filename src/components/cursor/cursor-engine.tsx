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

// Memoized cursor renderer to prevent unnecessary re-renders
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
    // Only re-render if position changed significantly (> 2px) or component/hover changed
    return (
      prev.Component === next.Component &&
      prev.isHovering === next.isHovering &&
      Math.abs(prev.x - next.x) < 2 &&
      Math.abs(prev.y - next.y) < 2
    );
  }
);

CursorRenderer.displayName = "CursorRenderer";

export function CursorEngine() {
  const { cursorStyle, isCursorVisible } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Use refs to track position without triggering re-renders
  const positionRef = useRef({ x: 0, y: 0 });
  const rafIdRef = useRef<number | null>(null);
  const lastUpdateRef = useRef(0);
  const hasMovedRef = useRef(false);

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

  // Stable mouse move handler using refs
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Update ref immediately (no re-render)
    positionRef.current = { x: e.clientX, y: e.clientY };

    if (!hasMovedRef.current) {
      hasMovedRef.current = true;
      setHasMoved(true);
    }

    // Check for interactive elements
    const target = e.target as HTMLElement;
    // Expand detection to include common interactive elements
    const interactive = !!target.closest(
      'button, a, input, [role="button"], label, select, textarea, .cursor-pointer'
    );
    setIsHovering(interactive);

    // Throttle React state updates to ~60fps
    const now = performance.now();
    if (now - lastUpdateRef.current < 16) return;

    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    rafIdRef.current = requestAnimationFrame(() => {
      setMousePosition({ x: positionRef.current.x, y: positionRef.current.y });
      lastUpdateRef.current = now;
      rafIdRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
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
