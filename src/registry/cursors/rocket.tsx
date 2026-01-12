"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function RocketCursor({ x, y, isStatic }: { x: number; y: number; isStatic?: boolean }) {
  const [flameId, setFlameId] = useState(0)

  useEffect(() => {
    if (isStatic) return;
    const interval = setInterval(() => {
      setFlameId(prev => (prev + 1) % 5)
    }, 80) // Increased from 50ms to 80ms
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-50">
      <motion.div
        style={{ x, y, rotate: -45 }}
        animate={{ y: [y, y - 1, y] }}
        transition={{ duration: 0.1, repeat: Infinity }}
        className="relative flex items-center justify-center translate-x-[-50%] translate-y-[-50%]"
      >
        {/* Exhaust Flames - Positioned relative to the rocket engine */}
        <div className="absolute top-[30px] left-1/2 -translate-x-1/2 flex flex-col items-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`${flameId}-${i}`}
              initial={{ opacity: 0.8, scale: 0.8, y: 0 }}
              animate={{ 
                opacity: 0, 
                scale: [1, 1.5, 0.5], 
                y: 15 + i * 5,
              }}
              className="absolute w-2 h-2 bg-gradient-to-t from-orange-600 via-yellow-400 to-white rounded-full blur-[1.5px]"
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          ))}
        </div>

        <svg width="40" height="40" viewBox="0 0 40 40">
          {/* Fins */}
          <path d="M10 25 L5 35 L15 30 Z" fill="#ef4444" />
          <path d="M30 25 L35 35 L25 30 Z" fill="#ef4444" />
          
          {/* Body */}
          <path d="M12 30 L28 30 Q28 10 20 2 Q12 10 12 30" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
          
          {/* Window */}
          <circle cx="20" cy="18" r="4" fill="#38bdf8" stroke="#0ea5e9" strokeWidth="1.5" />
          <path d="M18 16 Q20 15 22 16" stroke="white" strokeWidth="1" strokeLinecap="round" />

          {/* Nose Cone */}
          <path d="M15 10 Q20 2 25 10" fill="#ef4444" />
        </svg>
      </motion.div>
    </div>
  )
}
