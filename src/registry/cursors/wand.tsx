"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function WandCursor({ x, y, isStatic }: { x: number; y: number; isStatic?: boolean }) {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([])
  const idCounter = useRef(0)

  useEffect(() => {
    if (isStatic) return;
    const interval = setInterval(() => {
      setSparkles(prev => [...prev.slice(-6), { id: idCounter.current++, x, y }]) // Reduced from 10 to 6
    }, 200) // Increased from 150ms to 200ms
    return () => clearInterval(interval)
  }, [x, y, isStatic])

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-50">
      <AnimatePresence>
        {sparkles.map(s => (
          <motion.div
            key={s.id}
            initial={{ opacity: 1, scale: 0, x: s.x + 10, y: s.y - 10 }}
            animate={{ 
              opacity: 0, 
              scale: [0, 1, 0.5], 
              y: s.y - 30 - Math.random() * 20,
              x: s.x + 10 + (Math.random() - 0.5) * 20
            }}
            exit={{ opacity: 0 }}
            className="absolute w-1.5 h-1.5 bg-yellow-200 rounded-full shadow-[0_0_8px_#fef08a] blur-[0.5px]"
          />
        ))}
      </AnimatePresence>
      
      <motion.div
        style={{ x, y, rotate: -45, originX: "0%", originY: "100%" }}
        animate={{ rotate: [-43, -47, -43] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-12 h-2 flex items-center">
          {/* Wand Handle */}
          <div className="w-8 h-full bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700 rounded-l-full shadow-lg" />
          {/* Wand Tip (Glowy) */}
          <div className="w-4 h-full bg-gradient-to-r from-amber-700 to-zinc-100 rounded-r-md relative">
            <motion.div 
              className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_10px_white]"
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
