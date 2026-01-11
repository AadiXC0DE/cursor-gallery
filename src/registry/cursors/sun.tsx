"use client"
import { motion } from "framer-motion"

export default function SunCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="6" fill="#fbbf24"/>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1="14"
            y1="14"
            x2={14 + Math.cos(angle * Math.PI / 180) * 12}
            y2={14 + Math.sin(angle * Math.PI / 180) * 12}
            stroke="#fbbf24"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </motion.div>
  )
}
