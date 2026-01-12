"use client"
import { motion } from "framer-motion"

export default function RobotCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative overflow-hidden rounded-lg p-1">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M12 11V7M12 7V3M12 7H16M12 7H8" stroke="currentColor" strokeWidth="2" />
          <circle cx="8" cy="16" r="1.5" fill="currentColor">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="16" cy="16" r="1.5" fill="currentColor">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
        <motion.div
          className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400 shadow-[0_0_8px_cyan]"
          animate={{ top: ["20%", "80%", "20%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  )
}
