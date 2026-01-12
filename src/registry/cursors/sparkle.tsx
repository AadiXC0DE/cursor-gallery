"use client"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

interface Sparkle { id: number; x: number; y: number; size: number; rotation: number }

export default function SparkleCursor({ x, y, isStatic }: { x: number; y: number; isStatic?: boolean }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const idCounter = useRef(0)

  useEffect(() => {
    if (isStatic) return;
    const interval = setInterval(() => {
      const newSparkle = {
        id: idCounter.current++,
        x: x + (Math.random() - 0.5) * 30,
        y: y + (Math.random() - 0.5) * 30,
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
      }
      setSparkles(prev => [...prev.slice(-5), newSparkle]) // Reduced from 8 to 5
    }, 80) // Increased from 50ms to 80ms
    return () => clearInterval(interval)
  }, [x, y, isStatic])

  return (
    <>
      {sparkles.map(s => (
        <motion.div
          key={s.id}
          className="fixed top-0 left-0 pointer-events-none"
          style={{ x: s.x, y: s.y, translateX: "-50%", translateY: "-50%" }}
          initial={{ scale: 1, opacity: 1, rotate: s.rotation }}
          animate={{ scale: 0, opacity: 0, rotate: s.rotation + 180 }}
          transition={{ duration: 0.6 }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 24 24">
            <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" fill="#fbbf24"/>
          </svg>
        </motion.div>
      ))}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50"
        style={{
          x, y, translateX: "-50%", translateY: "-50%",
          background: "linear-gradient(135deg, #fbbf24, #f97316)",
          boxShadow: "0 0 20px rgba(251, 191, 36, 0.6)"
        }}
      />
    </>
  )
}
