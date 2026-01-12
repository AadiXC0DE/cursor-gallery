"use client"
import { motion } from "framer-motion"

export default function KeyCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="relative"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gold-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fcd34d" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#fcd34d" />
            </linearGradient>
          </defs>
          <path
            d="M21 2L11 12M11 12C11 14.2091 9.20914 16 7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C8.34969 8 9.5312 8.667 10.2543 9.682M11 12L13 14L15 12L17 14L21 10V2H17L11 12Z"
            stroke="url(#gold-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(251, 191, 36, 0.1)"
          />
          <motion.circle
            cx="7" cy="12" r="1.5"
            fill="#fff"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-200 rounded-full blur-[2px]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  )
}
