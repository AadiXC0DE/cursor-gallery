"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function SmokeCursor({ x, y, isStatic }: { x: number; y: number; isStatic?: boolean }) {
  const [puffs, setPuffs] = useState<{ id: number; x: number; y: number; size: number }[]>([])
  const idCounter = useRef(0)

  useEffect(() => {
    if (isStatic) return;
    const interval = setInterval(() => {
      setPuffs(prev => [
        ...prev.slice(-8), // Reduced from 12 to 8 particles max
        { id: idCounter.current++, x, y, size: 10 + Math.random() * 20 }
      ])
    }, 150) // Increased from 120ms to 150ms (slower emission)
    return () => clearInterval(interval)
  }, [x, y, isStatic])

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-50">
      <AnimatePresence>
        {puffs.map(p => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.6, scale: 0.5, x: p.x, y: p.y }}
            animate={{ 
              opacity: 0, 
              scale: [0.5, 2.5], 
              y: p.y - 60 - Math.random() * 40,
              x: p.x + (Math.random() - 0.5) * 30
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ 
              width: p.size, 
              height: p.size,
              translateX: "-50%",
              translateY: "-50%"
            }}
            className="absolute rounded-full bg-gradient-to-b from-gray-400/40 via-gray-500/20 to-transparent blur-[6px]"
          />
        ))}
      </AnimatePresence>
      
      {/* Small Core */}
      <motion.div
        className="w-3 h-3 rounded-full bg-gray-500/50 shadow-lg blur-[1px]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  )
}
