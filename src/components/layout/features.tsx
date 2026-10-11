"use client";

import { useState } from "react";
import { useCursorActions } from "@/components/cursor/cursor-context";
import { CursorPreview } from "@/components/gallery/cursor-preview";
import { cn } from "@/lib/utils";

const DETAILS = [
  {
    id: "dial",
    title: "It knows what it's pointing at",
    body: "Over a link or a button the cursor gets a hover state. The dial winds further, the coin drops into its slot, the snail pokes its eyes out. Hover this tile.",
  },
  {
    id: "gear-train",
    title: "The file is yours",
    body: "The CLI copies the source into your project. There's no package to update, so change the colors, the timing, or the whole drawing.",
  },
  {
    id: "moon-phase",
    title: "Drawn for both themes",
    body: "Every illustration has its own shading and edge, so it reads on a white page and on a black one.",
    split: true,
  },
  {
    id: "zen",
    title: "Calm when asked",
    body: "With reduced motion turned on, the illustrated cursors stop on a good frame instead of looping.",
    frozen: true,
  },
  {
    id: "typewriter",
    title: "Plain HTML, too",
    body: "The illustrated set also comes as one snippet with no dependencies, for the sites that aren't React.",
  },
  {
    id: "snail",
    title: "Off on touch screens",
    body: "A finger has no pointer to follow, so on phones and tablets the cursor renders nothing at all.",
  },
];

function Detail({ id, title, body, split, frozen }: (typeof DETAILS)[number]) {
  const { setCursor, resetCursor } = useCursorActions();
  const [hover, setHover] = useState(false);

  return (
    <div
      className="group bg-background flex flex-col"
      onMouseEnter={() => {
        setHover(true);
        setCursor(id);
      }}
      onMouseLeave={() => {
        setHover(false);
        resetCursor();
      }}
    >
      <div
        data-cursor-preview
        className={cn(
          "relative h-48 md:h-56 overflow-hidden cursor-none",
          split && "grid grid-cols-2 m-6 md:m-8 mb-6 h-36 md:h-44"
        )}
      >
        {split ? (
          <>
            <div className="relative bg-white border border-black/10">
              <CursorPreview
                id={id}
                live
                hovering={hover}
                scale={2}
                className="absolute inset-0"
              />
            </div>
            <div className="relative bg-[#0a0a0a] border border-white/10">
              <CursorPreview
                id={id}
                live
                hovering={hover}
                scale={2}
                className="absolute inset-0"
              />
            </div>
          </>
        ) : (
          <CursorPreview
            id={id}
            live={!frozen}
            hovering={hover}
            scale={2.6}
            className="absolute inset-0"
          />
        )}
      </div>
      <div className="p-6 md:p-8 pt-0 md:pt-0 flex flex-col gap-3">
        <h3 className="font-black text-xl uppercase italic tracking-tighter text-foreground leading-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 bg-background border-t border-border scroll-mt-16"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 md:mb-20 items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Details
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-foreground leading-[0.9]">
              Small things,
              <br />
              <span className="text-foreground/40">sweated.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            A cursor is on screen for every second someone spends on your site,
            so these are the parts that got the attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {DETAILS.map((detail) => (
            <Detail key={detail.id} {...detail} />
          ))}
        </div>
      </div>
    </section>
  );
}
