"use client";

import { useCursorActions } from "@/components/cursor/cursor-context";
import { CursorPreview } from "@/components/gallery/cursor-preview";
import { CURSORS } from "@/registry/cursors";
import { cn } from "@/lib/utils";

const ROWS = [
  [
    "jellyfish",
    "cassette",
    "gear-train",
    "koi",
    "kaleidoscope",
    "typewriter",
    "moon-phase",
    "robot",
    "pinball",
    "snail",
    "lantern",
    "newtons-cradle",
  ],
  [
    "arcade-coin",
    "dandelion",
    "dial",
    "flame",
    "oscilloscope",
    "dragonfly",
    "zen",
    "key",
    "labyrinth",
    "slinky",
    "camera",
    "gyroscope",
  ],
].map((row) => row.filter((id) => CURSORS.some((c) => c.id === id)));

function Row({ ids, reverse }: { ids: string[]; reverse?: boolean }) {
  const { setCursor, resetCursor } = useCursorActions();
  // The track holds the row twice and slides by half its width, so the loop
  // has no seam.
  return (
    <div className="flex w-max cursor-strip-track" data-reverse={reverse}>
      {[...ids, ...ids].map((id, i) => {
        const name = CURSORS.find((c) => c.id === id)?.name;
        return (
          <div
            key={`${id}-${i}`}
            data-cursor-preview
            aria-hidden={i >= ids.length}
            onMouseEnter={() => setCursor(id)}
            onMouseLeave={resetCursor}
            className="group relative w-32 h-32 md:w-40 md:h-40 shrink-0 border-r border-border cursor-none"
          >
            <CursorPreview
              id={id}
              scale={2.2}
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
            />
            <span className="absolute inset-x-0 bottom-3 text-center text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function CursorStrip({ className }: { className?: string }) {
  return (
    <section
      aria-label="A few of the cursors"
      className={cn(
        "relative border-y border-border overflow-hidden bg-background",
        className
      )}
    >
      <div className="cursor-strip [&>*+*]:border-t [&>*+*]:border-border">
        <Row ids={ROWS[0]} />
        <Row ids={ROWS[1]} reverse />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}
