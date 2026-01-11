"use client"
import { motion } from "framer-motion"

export default function CrosshairCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
        <line x1="12" y1="0" x2="12" y2="8" stroke="#8b5cf6" strokeWidth="1.5"/>
        <line x1="12" y1="16" x2="12" y2="24" stroke="#8b5cf6" strokeWidth="1.5"/>
        <line x1="0" y1="12" x2="8" y2="12" stroke="#8b5cf6" strokeWidth="1.5"/>
        <line x1="16" y1="12" x2="24" y2="12" stroke="#8b5cf6" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2" fill="#d946ef"/>
      </svg>
    </motion.div>
  )
}
