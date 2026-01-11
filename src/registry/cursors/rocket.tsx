"use client"
import { motion } from "framer-motion"

export default function RocketCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, rotate: -45 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M4.5 16.5c-1.5 1.25-2 3.5-2 3.5s2.25-.5 3.5-2c.72-.72.5-2-.5-2.5-.5-.5-1.5-.5-1 1z" fill="#f97316"/>
        <path d="M12 2C6.5 7 5 11 5 14c0 2.5 2 4 4 4s4.5-2.5 4.5-2.5c3-2 5.5-5.5 8.5-11.5-5 2-10 4-10 4z" fill="url(#rocketGrad)" stroke="#fff" strokeWidth="0.5"/>
        <circle cx="11" cy="11" r="2" fill="#06b6d4"/>
        <defs>
          <linearGradient id="rocketGrad" x1="5" y1="14" x2="22" y2="4">
            <stop offset="0%" stopColor="#64748b"/>
            <stop offset="100%" stopColor="#cbd5e1"/>
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
