"use client";

import { useCursorActions } from "@/components/cursor/cursor-context";
import { CursorPreview } from "@/components/gallery/cursor-preview";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect, memo, useCallback } from "react";

interface CursorCardProps {
  id: string;
  name: string;
  description?: string;
  index?: number;
  className?: string;
  onClick?: () => void;
}

export const CursorCard = memo(function CursorCard({
  id,
  name,
  description,
  index,
  className,
  onClick,
}: CursorCardProps) {
  const { setCursor, resetCursor } = useCursorActions();
  const [isHovered, setIsHovered] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const cardRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = useCallback(() => {
    setCursor(id);
    setIsHovered(true);
  }, [id, setCursor]);

  const handleMouseLeave = useCallback(() => {
    resetCursor();
    setIsHovered(false);
  }, [resetCursor]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { rootMargin: "200px" }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      ref={cardRef}
      type="button"
      data-cursor-preview
      className={cn(
        "group relative block w-full aspect-[4/5] sm:aspect-square text-left overflow-hidden cursor-none",
        "bg-background transition-colors duration-300 hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
        className
      )}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`${name}: ${description ?? "view cursor"}`}
    >
      {/* Frozen preview. The real, animated cursor takes over on hover. */}
      {isInViewport && (
        <CursorPreview
          id={id}
          scale={2.8}
          className={cn(
            "absolute inset-0 -translate-y-3 transition-all duration-500",
            isHovered ? "opacity-0 scale-90 blur-sm" : "opacity-100"
          )}
        />
      )}

      {index !== undefined && (
        <span className="absolute top-4 left-4 font-mono text-[10px] text-muted-foreground/50 tabular-nums">
          {String(index + 1).padStart(3, "0")}
        </span>
      )}
      <span
        className={cn(
          "absolute top-4 right-4 text-[9px] font-black uppercase tracking-[0.2em] transition-colors",
          isHovered ? "text-foreground" : "text-muted-foreground/0"
        )}
      >
        Live
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <h3 className="font-black text-base md:text-lg text-foreground tracking-tighter uppercase italic leading-none">
          {name}
        </h3>
        {description && (
          <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground line-clamp-2 md:line-clamp-1">
            {description}
          </p>
        )}
      </div>
    </button>
  );
});
