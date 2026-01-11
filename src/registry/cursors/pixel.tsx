"use client"
import { motion } from "framer-motion"

export default function PixelCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y }}
    >
      {/* Pixel art arrow */}
      <div className="grid grid-cols-4 gap-0">
        {[
          1,0,0,0,
          1,1,0,0,
          1,1,1,0,
          1,1,1,1,
          1,1,1,0,
          1,0,1,1,
          0,0,0,1,
        ].map((pixel, i) => (
          <div 
            key={i}
            className="w-1 h-1"
            style={{ background: pixel ? "#22c55e" : "transparent" }}
          />
        ))}
      </div>
    </motion.div>
  )
}
