"use client"
import { motion } from "framer-motion"

export default function CatCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ears */}
          <path d="M4 8L6 2L11 4" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#fdba74"/>
          <path d="M20 8L18 2L13 4" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#fdba74"/>
          
          {/* Face */}
          <circle cx="12" cy="13" r="8" fill="#ffedd5" stroke="#f97316" strokeWidth="2" />
          
          {/* Eyes */}
          <motion.ellipse 
            cx="9" cy="12" rx="1.5" ry="2" fill="#1e293b" 
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: Math.random() * 2 }}
          />
          <motion.ellipse 
            cx="15" cy="12" rx="1.5" ry="2" fill="#1e293b"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: Math.random() * 2 }}
          />
          
          {/* Nose & Mouth */}
          <path d="M11 15L12 16L13 15" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 16V17" stroke="#f97316" strokeWidth="1.5" />
          <path d="M5 14H2" stroke="#f97316" strokeWidth="1" strokeLinecap="round" />
          <path d="M5 12H1" stroke="#f97316" strokeWidth="1" strokeLinecap="round" />
          <path d="M19 14H22" stroke="#f97316" strokeWidth="1" strokeLinecap="round" />
          <path d="M19 12H23" stroke="#f97316" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>
    </motion.div>
  )
}
