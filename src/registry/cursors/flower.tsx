"use client"
import { motion } from "framer-motion"

export default function FlowerCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <ellipse
            key={angle}
            cx="12"
            cy="4"
            rx="4"
            ry="6"
            fill="#ec4899"
            transform={`rotate(${angle} 12 12)`}
          />
        ))}
        <circle cx="12" cy="12" r="4" fill="#fbbf24"/>
      </svg>
    </motion.div>
  )
}
