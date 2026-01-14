"use client";

import React, { useState, useMemo, useCallback } from "react";
import { CursorCard } from "./cursor-card";
import { CursorDetailDialog } from "./cursor-detail-dialog";
import { CURSORS, CursorDefinition } from "@/registry/cursors";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Minimal", "Effect", "Shape", "Dark Mode"];

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

  // Filter Logic
  const filteredCursors = useMemo(() => {
    let cursors = CURSORS;
    if (onlyFeatured) {
      cursors = cursors.filter((c) => c.featured);
    }

    return cursors.filter((cursor) => {
      const matchesSearch =
        cursor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cursor.description.toLowerCase().includes(searchQuery.toLowerCase());

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

  // State for pagination
  const [visibleCount, setVisibleCount] = useState(onlyFeatured ? 100 : 12);
  const paginatedCursors = useMemo(
    () => filteredCursors.slice(0, visibleCount),
    [filteredCursors, visibleCount]
  );

  // Infinite Scroll Logic
  const observerRef = React.useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (onlyFeatured) return;

      // Cleanup previous observer
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
            setVisibleCount((prev: number) => prev + 12);
          }
        },
        { threshold: 0.5 }
      );

      observerRef.current.observe(node);
    },
    [onlyFeatured, visibleCount, filteredCursors.length]
  );

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={`Search ${CURSORS.length}+ icons...`}
            className="pl-11 h-12 bg-muted/20 border-border/50 rounded-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border italic",
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20"
                  : "bg-muted/50 text-muted-foreground border-border/50 hover:bg-muted"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedCursors.map((cursor, idx) => (
          <motion.div
            key={cursor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: Math.min((idx % 4) * 0.03, 0.15),
            }}
            ref={idx === paginatedCursors.length - 1 ? lastElementRef : null}
            layout="position"
          >
            <CursorCard {...cursor} onClick={() => handleCardClick(cursor)} />
          </motion.div>
        ))}
      </div>

      {filteredCursors.length === 0 && (
        <div className="text-center py-32 border border-dashed border-border/50 rounded-3xl bg-muted/5">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground font-bold uppercase tracking-widest italic">
            No cursors found.
          </p>
        </div>
      )}

      {/* Loading state indicator for infinite scroll */}
      {!onlyFeatured && visibleCount < filteredCursors.length && (
        <div className="mt-20 flex justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
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
