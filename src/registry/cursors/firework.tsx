"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

interface Spark {
  id: number
  angle: number
  distance: number
  color: string
}

export default function FireworkCursor({ x, y }: { x: number; y: number }) {
  const [sparks, setSparks] = useState<Spark[]>([])
  const idCounter = useRef(0)

  useEffect(() => {
    const triggerFirework = () => {
      const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"]
      const color = colors[Math.floor(Math.random() * colors.length)]
      const newSparks = Array.from({ length: 8 }).map((_, i) => ({ // Reduced from 12 to 8
        id: idCounter.current++,
        angle: (i * 360) / 8,
        distance: Math.random() * 40 + 20,
        color,
      }))
      setSparks(newSparks)
    }

    const interval = setInterval(triggerFirework, 2000) // Increased from 1500ms to 2000ms
    triggerFirework()
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 px-10"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <AnimatePresence>
        {sparks.map(s => (
          <motion.div
            key={s.id}
            className="absolute w-1 h-1 rounded-full shadow-[0_0_4px_currentColor]"
            style={{ color: s.color, backgroundColor: "currentColor" }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: Math.cos(s.angle * (Math.PI / 180)) * s.distance,
              y: Math.sin(s.angle * (Math.PI / 180)) * s.distance,
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
      <motion.div
        className="w-2 h-2 rounded-full bg-white opacity-20"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </motion.div>
  )
}
