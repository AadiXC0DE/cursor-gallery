"use client"
import { motion } from "framer-motion"

export default function LockCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-slate-400/10 blur-md rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
          <motion.path
            d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 1 }}
            animate={{ y: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <circle cx="12" cy="16" r="1.5" fill="currentColor" />
        </svg>
      </div>
    </motion.div>
  )
}
