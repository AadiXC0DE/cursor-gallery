"use client"
import { motion } from "framer-motion"

export default function DNACursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ rotateY: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    >
      <svg width="16" height="32" viewBox="0 0 16 32">
        {[0, 8, 16, 24].map((y, i) => (
          <g key={i}>
            <circle cx={i % 2 === 0 ? 2 : 14} cy={y + 4} r="2" fill="#ec4899"/>
            <circle cx={i % 2 === 0 ? 14 : 2} cy={y + 4} r="2" fill="#06b6d4"/>
            <line x1="4" y1={y + 4} x2="12" y2={y + 4} stroke="#8b5cf6" strokeWidth="1"/>
          </g>
        ))}
      </svg>
    </motion.div>
  )
}
