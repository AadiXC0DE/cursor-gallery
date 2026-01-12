"use client"
import { motion } from "framer-motion"

export default function CrownCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z"
            fill="#facc15"
            stroke="#eab308"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M5 16H19V19H5V16Z" fill="#eab308" />
          
          {/* Gems */}
          <circle cx="12" cy="13" r="1.5" fill="#ef4444">
             <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="7" cy="13" r="1" fill="#3b82f6" />
          <circle cx="17" cy="13" r="1" fill="#3b82f6" />
        </svg>
        <motion.div
          className="absolute -top-2 left-1/2 w-4 h-4 bg-yellow-200/50 rounded-full blur-md"
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  )
}
