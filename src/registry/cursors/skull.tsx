"use client"
import { motion } from "framer-motion"

export default function SkullCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C7.02944 2 3 6.02944 3 11C3 13.5 4 15.6 5.6 17H5.5C5.22386 17 5 17.2239 5 17.5V20.5C5 20.7761 5.22386 21 5.5 21H18.5C18.7761 21 19 20.7761 19 20.5V17.5C19 17.2239 18.7761 17 18.5 17H18.4C20 15.6 21 13.5 21 11C21 6.02944 16.9706 2 12 2Z"
            fill="#e2e8f0"
            stroke="#94a3b8"
            strokeWidth="1.5"
          />
          <path d="M8 18V21M12 18V21M16 18V21" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Eyes with glow */}
          <circle cx="8" cy="11" r="3" fill="#1e293b" />
          <circle cx="16" cy="11" r="3" fill="#1e293b" />
          <motion.circle 
            cx="8" cy="11" r="1.5" fill="#ef4444"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle 
            cx="16" cy="11" r="1.5" fill="#ef4444"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Nose */}
          <path d="M12 14L11 15H13L12 14Z" fill="#1e293b" />
        </svg>
      </div>
    </motion.div>
  )
}
