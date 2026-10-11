"use client";

import Link from "next/link";
import { useState } from "react";
import { useCursorActions } from "@/components/cursor/cursor-context";
import { CursorPreview } from "@/components/gallery/cursor-preview";
import { cn } from "@/lib/utils";

/** A small card that links to a cursor's page and lets you try it on hover. */
export function CursorLinkCard({
  id,
  name,
  description,
}: {
  id: string;
  name: string;
  description: string;
}) {
  const { setCursor, resetCursor } = useCursorActions();
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/cursors/${id}`}
      prefetch={false}
      data-cursor-preview
      onMouseEnter={() => {
        setHovered(true);
        setCursor(id);
      }}
      onMouseLeave={() => {
        setHovered(false);
        resetCursor();
      }}
      className="group relative block aspect-square bg-background hover:bg-muted/40 transition-colors cursor-none overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
    >
      <CursorPreview
        id={id}
        scale={2.4}
        className={cn(
          "absolute inset-0 -translate-y-3 transition-all duration-500",
          hovered ? "opacity-0 scale-90 blur-sm" : "opacity-100"
        )}
      />
      <span className="absolute inset-x-0 bottom-0 p-4">
        <span className="block font-black text-sm md:text-base uppercase italic tracking-tighter leading-none text-foreground">
          {name}
        </span>
        <span className="mt-1 block text-[11px] leading-snug text-muted-foreground line-clamp-1">
          {description}
        </span>
      </span>
    </Link>
  );
}
