"use client"

import { useCursorActions } from "@/components/cursor/cursor-context"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState, useRef, useEffect, memo, useMemo, useCallback } from "react"
import { CURSORS } from "@/registry/cursors"

interface CursorCardProps {
  id: string
  name: string
  description?: string
  tags?: string[]
  className?: string
  onClick?: () => void
}

export const CursorCard = memo(function CursorCard({ id, name, description, tags, className, onClick }: CursorCardProps) {
  const { setCursor, resetCursor } = useCursorActions()
  const [isHovered, setIsHovered] = useState(false)
  const [isInViewport, setIsInViewport] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Memoize cursor component lookup to prevent re-renders
  const CursorComponent = useMemo(() => {
    const cursorDef = CURSORS.find(c => c.id === id)
    return cursorDef?.component
  }, [id])

  // Stable callbacks to prevent re-renders
  const handleMouseEnter = useCallback(() => {
    setCursor(id)
    setIsHovered(true)
  }, [id, setCursor])

  const handleMouseLeave = useCallback(() => {
    resetCursor()
    setIsHovered(false)
  }, [resetCursor])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { rootMargin: "100px" }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative group h-64 w-full rounded-xl overflow-hidden cursor-none",
        "bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/5",
        "hover:-translate-y-1 will-change-transform",
        className
      )}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Preview Area */}
      <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]" 
                 style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            
            {/* Actual Cursor Component (Static Mode) */}
            {isInViewport && CursorComponent && (
                <div className={cn(
                    "scale-[2] transform-gpu pointer-events-none transition-all duration-500",
                    isHovered ? "opacity-20 blur-sm" : "opacity-70"
                )}>
                    <div className="flex items-center justify-center w-0 h-0 text-foreground">
                        {/* 
                          We pass isStatic={true} to the component. 
                          The component will render its core shape but skip the heavy animations/intervals.
                        */}
                        <CursorComponent x={0} y={0} isStatic={!isHovered} />
                    </div>
                </div>
            )}

            {/* Status Badge */}
            <div className={cn(
              "absolute top-4 right-4 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300",
              isHovered 
                ? "bg-primary text-primary-foreground shadow-lg" 
                : "bg-secondary/50 text-muted-foreground"
            )}>
              {isHovered ? "• Live" : "Preview"}
            </div>

            {!isHovered && (
              <div className="absolute bottom-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Hover to test
                </p>
              </div>
            )}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-card via-card/80 to-transparent pt-12">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags?.slice(0, 2).map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 rounded-md text-[9px] uppercase tracking-wider font-black bg-secondary text-secondary-foreground border border-border/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-black text-lg text-foreground tracking-tighter uppercase italic">
          {name}
        </h3>
        {description && (
          <p className="text-[10px] text-muted-foreground mt-1 line-clamp-1 font-medium uppercase tracking-wider">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  )
})
