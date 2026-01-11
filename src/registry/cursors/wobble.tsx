"use client"
import { motion } from "framer-motion"

export default function WobbleCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50"
      style={{
        x, y,
        translateX: "-50%",
        translateY: "-50%",
        background: "linear-gradient(135deg, #ec4899, #f43f5e)",
        boxShadow: "0 0 20px rgba(236, 72, 153, 0.4)"
      }}
      animate={{ 
        scaleX: [1, 1.2, 0.9, 1.1, 1],
        scaleY: [1, 0.9, 1.2, 0.95, 1],
      }}
      transition={{ duration: 0.5, repeat: Infinity }}
    />
  )
}
