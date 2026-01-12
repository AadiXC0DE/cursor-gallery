"use client"
import { motion } from "framer-motion"

export default function BrowserCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotateY: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M12 2C12 2 15 5 15 12C15 19 12 22 12 22C12 22 9 19 9 12C9 5 12 2 12 2Z" stroke="#3b82f6" strokeWidth="1" />
          <path d="M2.5 9H21.5" stroke="#3b82f6" strokeWidth="1" />
          <path d="M2.5 15H21.5" stroke="#3b82f6" strokeWidth="1" />
        </motion.svg>
      </div>
    </motion.div>
  )
}
