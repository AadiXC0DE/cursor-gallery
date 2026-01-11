"use client"
import { motion } from "framer-motion"

export default function GhostCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ y: [y - 3, y + 3, y - 3], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="24" height="28" viewBox="0 0 24 28">
        <path 
          d="M12 0C6 0 2 4 2 10v14l3-3 3 3 4-4 4 4 3-3 3 3V10c0-6-4-10-10-10z"
          fill="white"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
        <circle cx="8" cy="10" r="2" fill="#333"/>
        <circle cx="16" cy="10" r="2" fill="#333"/>
      </svg>
    </motion.div>
  )
}
