"use client"
import { motion } from "framer-motion"

export default function CoffeeCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative">
        <div className="absolute -top-4 w-full flex justify-center space-x-1">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-1 h-3 bg-white/30 rounded-full blur-[1px]"
              animate={{ y: [-2, -10], opacity: [0, 0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
            />
          ))}
        </div>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 8H19V11C19 15.4183 15.4183 19 11 19V19C6.58172 19 3 15.4183 3 11V10H5V8Z"
            fill="#78350f"
            stroke="#92400e"
            strokeWidth="2"
          />
          <path
            d="M19 8H20C21.1046 8 22 8.89543 22 10V11C22 12.1046 21.1046 13 20 13H19"
            stroke="#92400e"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M7 19H17" stroke="#92400e" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </motion.div>
  )
}
