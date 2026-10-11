"use client";

import {
  useEffect,
  useState,
  useSyncExternalStore,
  type ComponentType,
} from "react";

type CursorComponent = ComponentType<{
  x: number;
  y: number;
  isHovering?: boolean;
}>;

type PointerState = { x: number; y: number; isHovering: boolean };

// Anything that would normally show the pointing hand.
const INTERACTIVE =
  'a, button, input, select, textarea, label, [role="button"], .cursor-pointer';

// Touch screens and pens keep their native behavior.
const FINE_POINTER = "(hover: hover) and (pointer: fine)";

const subscribe = (onChange: () => void) => {
  const query = window.matchMedia(FINE_POINTER);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

/**
 * Follows the pointer and renders `cursor` in place of the system cursor.
 * Mount it once, inside <body> of your root layout.
 */
export function CustomCursor({ cursor: Cursor }: { cursor: CursorComponent }) {
  const finePointer = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(FINE_POINTER).matches,
    () => false
  );
  const [pointer, setPointer] = useState<PointerState | null>(null);

  useEffect(() => {
    if (!finePointer) return;

    // Hide the system cursor everywhere, including over links and buttons.
    const style = document.createElement("style");
    style.textContent = "html, html * { cursor: none !important; }";

    let latest: PointerState = { x: 0, y: 0, isHovering: false };
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      if (!style.isConnected) document.head.appendChild(style);
      latest = {
        x: event.clientX,
        y: event.clientY,
        isHovering:
          event.target instanceof Element &&
          event.target.closest(INTERACTIVE) !== null,
      };
      // At most one render per frame, however fast the mouse reports.
      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          setPointer(latest);
        });
      }
    };
    const onLeave = () => setPointer(null);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
      style.remove();
    };
  }, [finePointer]);

  if (!finePointer || !pointer) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 2147483647,
      }}
    >
      <Cursor x={pointer.x} y={pointer.y} isHovering={pointer.isHovering} />
    </div>
  );
}
