"use client"
import { motion } from "framer-motion"

export default function ArrowCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4L20 12L12 14L10 22L4 4Z" fill="url(#arrowGrad)" stroke="#7c3aed" strokeWidth="1.5"/>
        <defs>
          <linearGradient id="arrowGrad" x1="4" y1="4" x2="20" y2="22">
            <stop stopColor="#8b5cf6"/>
            <stop offset="1" stopColor="#d946ef"/>
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
