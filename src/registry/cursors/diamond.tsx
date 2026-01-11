"use client"
import { motion } from "framer-motion"

export default function DiamondCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50"
      style={{ 
        x, y, 
        translateX: "-50%", 
        translateY: "-50%",
        background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
        transform: "rotate(45deg)",
        boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)"
      }}
      animate={{ rotate: 45 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}
