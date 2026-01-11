"use client"
import { motion } from "framer-motion"

export default function CoffeeCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div 
      className="fixed top-0 left-0 pointer-events-none z-50 text-2xl" 
      style={{ x, y }}
      animate={{ rotate: [-5, 5, -5] }}
      transition={{ duration: 0.5, repeat: Infinity }}
    >
      ☕
    </motion.div>
  )
}
