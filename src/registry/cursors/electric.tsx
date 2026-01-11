"use client"
import { motion } from "framer-motion"

export default function ElectricCursor({ x, y }: { x: number; y: number }) {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60">
          <motion.path
            d="M30 5 L35 25 L45 25 L28 40 L32 30 L20 30 Z"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.5 }}
          />
        </svg>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50"
        style={{
          x, y, translateX: "-50%", translateY: "-50%",
          background: "#60a5fa",
          boxShadow: "0 0 15px #3b82f6, 0 0 30px #1d4ed8"
        }}
      />
    </>
  )
}
