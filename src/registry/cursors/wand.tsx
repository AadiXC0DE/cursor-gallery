"use client"
import { motion } from "framer-motion"

export default function WandCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y }}
      animate={{ rotate: [-5, 5, -5] }}
      transition={{ duration: 0.5, repeat: Infinity }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <line x1="3" y1="21" x2="18" y2="6" stroke="url(#wandGrad)" strokeWidth="3" strokeLinecap="round"/>
        <polygon points="18,6 24,0 22,8 24,12 18,6" fill="#fbbf24"/>
        <circle cx="20" cy="3" r="1.5" fill="#fbbf24"/>
        <circle cx="23" cy="6" r="1" fill="#fbbf24"/>
        <circle cx="21" cy="9" r="1" fill="#fbbf24"/>
        <defs>
          <linearGradient id="wandGrad" x1="3" y1="21" x2="18" y2="6">
            <stop offset="0%" stopColor="#92400e"/>
            <stop offset="100%" stopColor="#fbbf24"/>
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
