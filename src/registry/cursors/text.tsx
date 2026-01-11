"use client"
import { motion } from "framer-motion"

export default function TextCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 font-bold text-sm"
      style={{ 
        x, y, 
        translateX: "-50%", 
        translateY: "-50%",
        background: "linear-gradient(90deg, #8b5cf6, #d946ef)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
      }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 0.8, repeat: Infinity }}
    >
      CLICK
    </motion.div>
  )
}
