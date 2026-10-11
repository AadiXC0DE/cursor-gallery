"use client";

import { memo } from "react";
import { CURSORS } from "@/registry/cursors";
import { cn } from "@/lib/utils";

const COMPONENTS = Object.fromEntries(CURSORS.map((c) => [c.id, c.component]));

/**
 * Renders a cursor in place instead of following the pointer. Cursors are
 * position: fixed, so the scaled wrapper's transform becomes their containing
 * block and pins them to the center of this box.
 */
export const CursorPreview = memo(function CursorPreview({
  id,
  scale = 2,
  live = false,
  hovering = false,
  className,
}: {
  id: string;
  scale?: number;
  live?: boolean;
  hovering?: boolean;
  className?: string;
}) {
  const Component = COMPONENTS[id];
  if (!Component) return null;
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none flex items-center justify-center",
        className
      )}
    >
      <div
        className="w-0 h-0 text-foreground"
        style={{ transform: `scale(${scale})` }}
      >
        <Component x={0} y={0} isStatic={!live} isHovering={hovering} />
      </div>
    </div>
  );
});
