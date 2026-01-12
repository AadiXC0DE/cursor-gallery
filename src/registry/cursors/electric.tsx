"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function ElectricCursor({ x, y, isStatic }: { x: number; y: number; isStatic?: boolean }) {
  const [bolts, setBolts] = useState<{ id: number; path: string }[]>([])

  useEffect(() => {
    if (isStatic) return;
    const triggerBolt = () => {
      const boltCount = Math.floor(Math.random() * 2) + 1
      const newBolts = Array.from({ length: boltCount }).map(() => {
        const angle = Math.random() * Math.PI * 2
        const length = 15 + Math.random() * 25
        const x2 = Math.cos(angle) * length
        const y2 = Math.sin(angle) * length
        const midX = x2 / 2 + (Math.random() - 0.5) * 15
        const midY = y2 / 2 + (Math.random() - 0.5) * 15
        
        return {
          id: Math.random(),
          path: `M0 0 L${midX} ${midY} L${x2} ${y2}`
        }
      })
      setBolts(newBolts)
      setTimeout(() => setBolts([]), 60)
    }

    const interval = setInterval(triggerBolt, 200) // Increased from 150ms to 200ms
    return () => clearInterval(interval)
  }, [isStatic])

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-50 overflow-visible">
      {/* Glow Core */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-cyan-100 shadow-[0_0_15px_#22d3ee,0_0_30px_#0891b2] z-50 flex items-center justify-center translate-x-[-50%] translate-y-[-50%]"
        style={{ x, y }}
      />
      
      {/* Lightning Bolts - Centered on x, y */}
      <div className="absolute" style={{ left: x, top: y }}>
        <AnimatePresence>
          {bolts.map(bolt => (
            <motion.svg
              key={bolt.id}
              initial={{ opacity: 1, scale: 0.9 }}
              animate={{ opacity: [1, 0, 1, 0], scale: 1.1 }}
              exit={{ opacity: 0 }}
              className="absolute overflow-visible -translate-x-1/2 -translate-y-1/2"
              width="60" height="60" viewBox="-30 -30 60 60"
            >
              <path
                d={bolt.path}
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2"
                strokeLinecap="round"
                filter="drop-shadow(0 0 3px #06b6d4)"
              />
              <path
                d={bolt.path}
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </motion.svg>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
