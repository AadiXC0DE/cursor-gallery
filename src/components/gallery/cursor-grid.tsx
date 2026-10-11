"use client";

import React, { useState, useMemo, useCallback } from "react";
import { CursorCard } from "./cursor-card";
import { CursorDetailDialog } from "./cursor-detail-dialog";
import {
  CURSORS,
  CursorDefinition,
  FEATURED_CURSORS,
} from "@/registry/cursors";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All",
  "Animated",
  "Nature",
  "Mechanical",
  "Retro",
  "Effect",
  "Shape",
  "Minimal",
  "Dark Mode",
];

export function CursorGrid({
  onlyFeatured = false,
}: {
  onlyFeatured?: boolean;
}) {
  const [selectedCursor, setSelectedCursor] = useState<CursorDefinition | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCardClick = (cursor: CursorDefinition) => {
    setSelectedCursor(cursor);
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const filteredCursors = useMemo(() => {
    // The landing page shows the curated selection in its own order.
    const cursors = onlyFeatured ? FEATURED_CURSORS : CURSORS;

    const query = searchQuery.trim().toLowerCase();
    return cursors.filter((cursor) => {
      const matchesSearch =
        !query ||
        cursor.name.toLowerCase().includes(query) ||
        cursor.description.toLowerCase().includes(query) ||
        cursor.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesCategory =
        selectedCategory === "All" ||
        cursor.tags.some((tag) =>
          tag
            .toLowerCase()
            .includes(selectedCategory.toLowerCase().replace(" ", "-"))
        );

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, onlyFeatured]);

  const [visibleCount, setVisibleCount] = useState(onlyFeatured ? 100 : 24);
  const paginatedCursors = useMemo(
    () => filteredCursors.slice(0, visibleCount),
    [filteredCursors, visibleCount]
  );

  // Infinite scroll on the full library page
  const observerRef = React.useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (onlyFeatured) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      if (!node) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (
            entries[0].isIntersecting &&
            visibleCount < filteredCursors.length
          ) {
            setVisibleCount((prev: number) => prev + 24);
          }
        },
        { threshold: 0.1 }
      );

      observerRef.current.observe(node);
    },
    [onlyFeatured, visibleCount, filteredCursors.length]
  );

  React.useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
      {!onlyFeatured && (
        <div className="flex flex-col lg:flex-row gap-4 mb-8 lg:items-center justify-between">
          <label className="relative w-full lg:w-80 block">
            <span className="sr-only">Search cursors</span>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder={`Search ${CURSORS.length} cursors`}
              className="w-full h-12 pl-11 pr-4 bg-transparent border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>

          <div className="flex gap-1 overflow-x-auto no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "h-10 px-4 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap border transition-colors",
                  selectedCategory === cat
                    ? "bg-foreground text-background border-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hairline-ruled wall: every cell draws its own right and bottom edge */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t border-l border-border [&>*]:border-r [&>*]:border-b [&>*]:border-border">
        {paginatedCursors.map((cursor, idx) => (
          <motion.div
            key={cursor.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: Math.min((idx % 4) * 0.04, 0.16),
            }}
            ref={idx === paginatedCursors.length - 1 ? lastElementRef : null}
          >
            <CursorCard
              id={cursor.id}
              name={cursor.name}
              description={cursor.description}
              index={CURSORS.indexOf(cursor)}
              onClick={() => handleCardClick(cursor)}
            />
          </motion.div>
        ))}
      </div>

      {filteredCursors.length === 0 && (
        <div className="py-32 text-center border border-t-0 border-border">
          <p className="font-black text-2xl uppercase italic tracking-tighter text-foreground">
            Nothing here.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            No cursor matches &ldquo;{searchQuery}&rdquo;. Try a shorter word.
          </p>
        </div>
      )}

      {!onlyFeatured && visibleCount < filteredCursors.length && (
        <div className="mt-16 flex justify-center">
          <div className="w-8 h-8 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <CursorDetailDialog
        cursor={selectedCursor}
        isOpen={isDialogOpen}
        onClose={handleClose}
      />
    </div>
  );
}
