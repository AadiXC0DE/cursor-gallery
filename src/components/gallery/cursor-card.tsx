"use client"

import { useCursor } from "@/components/cursor/cursor-context"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { CURSORS } from "@/registry/cursors"
import { useState, useCallback } from "react"

interface CursorCardProps {
  id: string
  name: string
  description?: string
  tags?: string[]
  className?: string
  onClick?: () => void
}

export function CursorCard({ id, name, description, tags, className, onClick }: CursorCardProps) {
  const { setCursor, resetCursor } = useCursor()
  const [isHovered, setIsHovered] = useState(false)
  
  const cursorDef = CURSORS.find(c => c.id === id)
  const CursorComponent = cursorDef?.component

  return (
    <motion.div
      className={cn(
        "relative group h-64 w-full rounded-xl overflow-hidden cursor-none",
        "bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/5",
        className
      )}
      onClick={onClick}
      onMouseEnter={() => {
        setCursor(id)
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        resetCursor()
        setIsHovered(false)
      }}
      whileHover={{ y: -4 }}
    >
      {/* Static Preview Area */}
      <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]" 
                 style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            
            {/* Cursor Component Placeholder/Static */}
            {!isHovered && CursorComponent && (
                <div className="scale-[2] transform-gpu pointer-events-none opacity-50 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center justify-center w-0 h-0 text-foreground">
                        <div className="[&>*]:!static [&>*]:!transform-none [&>*]:!top-auto [&>*]:!left-auto">
                            <CursorComponent x={0} y={0} />
                        </div>
                    </div>
                </div>
            )}

            {/* Hint message on hover */}
            <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors italic">
                {isHovered ? "Playing" : "Preview"}
            </div>
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


      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  )
}
