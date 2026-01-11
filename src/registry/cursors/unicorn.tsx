"use client"
import { motion } from "framer-motion"

export default function UnicornCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div 
      className="fixed top-0 left-0 pointer-events-none z-50 text-2xl" 
      style={{ x, y }}
      animate={{ y: [y - 4, y + 4, y - 4] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
    >
      🦄
    </motion.div>
  )
}
