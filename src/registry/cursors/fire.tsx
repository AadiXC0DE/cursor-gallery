"use client"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

interface Flame { id: number; x: number; y: number; size: number }

export default function FireCursor({ x, y, isStatic }: { x: number; y: number; isStatic?: boolean }) {
  const [flames, setFlames] = useState<Flame[]>([])
  const idCounter = useRef(0)

  useEffect(() => {
    if (isStatic) return;
    const interval = setInterval(() => {
      const newFlame = {
        id: idCounter.current++,
        x: x + (Math.random() - 0.5) * 16,
        y: y,
        size: Math.random() * 12 + 6,
      }
      setFlames(prev => [...prev.slice(-6), newFlame]) // Reduced from 10 to 6
    }, 60) // Increased from 40ms to 60ms
    return () => clearInterval(interval)
  }, [x, y])

  return (
    <>
      {flames.map(f => (
        <motion.div
          key={f.id}
          className="fixed top-0 left-0 rounded-full pointer-events-none"
          style={{
            width: f.size,
            height: f.size * 1.5,
            x: f.x,
            y: f.y,
            translateX: "-50%",
            translateY: "-50%",
            background: "radial-gradient(ellipse at bottom, #f97316, #dc2626, transparent)",
            filter: "blur(2px)",
          }}
          initial={{ y: f.y, opacity: 1, scale: 1 }}
          animate={{ y: f.y - 40, opacity: 0, scale: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      ))}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50"
        style={{
          x, y, translateX: "-50%", translateY: "-50%",
          background: "#fbbf24",
          boxShadow: "0 0 20px #f97316, 0 0 40px #dc2626"
        }}
      />
    </>
  )
}
