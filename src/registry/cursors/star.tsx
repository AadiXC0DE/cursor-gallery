"use client"
import { motion } from "framer-motion"

export default function StarCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ rotate: 360, scale: [1, 1.1, 1] }}
      transition={{ rotate: { duration: 4, repeat: Infinity, ease: "linear" }, scale: { duration: 1, repeat: Infinity } }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path 
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="url(#starGrad)"
        />
        <defs>
          <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24"/>
            <stop offset="100%" stopColor="#f97316"/>
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
