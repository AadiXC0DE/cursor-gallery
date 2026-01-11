"use client"
import { motion } from "framer-motion"

export default function SnowflakeCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        {[0, 60, 120].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 12 12)`}>
            <line x1="12" y1="2" x2="12" y2="22" stroke="#06b6d4" strokeWidth="2"/>
            <line x1="12" y1="4" x2="8" y2="7" stroke="#06b6d4" strokeWidth="1.5"/>
            <line x1="12" y1="4" x2="16" y2="7" stroke="#06b6d4" strokeWidth="1.5"/>
            <line x1="12" y1="20" x2="8" y2="17" stroke="#06b6d4" strokeWidth="1.5"/>
            <line x1="12" y1="20" x2="16" y2="17" stroke="#06b6d4" strokeWidth="1.5"/>
          </g>
        ))}
      </svg>
    </motion.div>
  )
}
