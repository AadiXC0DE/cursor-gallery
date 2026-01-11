"use client"
import { motion } from "framer-motion"

export default function FloatCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-50"
      style={{
        translateX: "-50%",
        background: "linear-gradient(135deg, #06b6d4, #0891b2)",
        boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)"
      }}
      animate={{ 
        x: [x - 3, x + 3, x - 3],
        y: [y - 3, y + 3, y - 3],
      }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  )
}
