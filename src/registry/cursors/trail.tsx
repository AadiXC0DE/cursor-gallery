"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface Point { x: number; y: number; id: number }

export default function TrailCursor({ x, y }: { x: number; y: number }) {
  const [trail, setTrail] = useState<Point[]>([])

  useEffect(() => {
    setTrail(prev => {
      const newTrail = [...prev, { x, y, id: Date.now() }]
      return newTrail.slice(-12)
    })
  }, [x, y])

  return (
    <>
      {trail.map((point, i) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 rounded-full pointer-events-none"
          style={{
            width: 4 + i * 0.8,
            height: 4 + i * 0.8,
            background: `rgba(139, 92, 246, ${0.1 + i * 0.07})`,
            x: point.x,
            y: point.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-50"
        style={{
          x, y,
          translateX: "-50%",
          translateY: "-50%",
          background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
          boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)"
        }}
      />
    </>
  )
}
