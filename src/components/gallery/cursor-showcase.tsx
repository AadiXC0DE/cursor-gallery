"use client";

import { useState } from "react";
import { useCursorActions } from "@/components/cursor/cursor-context";
import { CursorPreview } from "@/components/gallery/cursor-preview";
import { cn } from "@/lib/utils";

/**
 * The big preview on a cursor's page. It shows the cursor frozen, and while
 * the pointer is inside, the real cursor takes over so you can try it.
 */
export function CursorShowcase({ id, name }: { id: string; name: string }) {
  const { setCursor, resetCursor } = useCursorActions();
  const [inside, setInside] = useState(false);

  return (
    <div
      className="border border-border bg-background flex flex-col"
      onMouseEnter={() => {
        setInside(true);
        setCursor(id);
      }}
      onMouseLeave={() => {
        setInside(false);
        resetCursor();
      }}
    >
      <div
        data-cursor-preview
        className="relative h-72 md:h-96 cursor-none overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklab, currentColor 12%, transparent) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <CursorPreview
          id={id}
          scale={4.2}
          className={cn(
            "absolute inset-0 transition-all duration-500",
            inside ? "opacity-15 blur-sm" : "opacity-100"
          )}
        />
        <p
          className={cn(
            "absolute bottom-4 left-4 text-[10px] font-black uppercase tracking-[0.2em] transition-colors",
            inside ? "text-foreground" : "text-muted-foreground/60"
          )}
        >
          {inside ? "Your pointer is now the " + name : "Move your pointer in"}
        </p>
      </div>
      <button
        type="button"
        className="h-14 border-t border-border text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
      >
        Hover here to see its hover state
      </button>
    </div>
  );
}
