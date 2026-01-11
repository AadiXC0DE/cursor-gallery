"use client"
import { motion } from "framer-motion"

export default function HandCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 text-2xl pointer-events-none z-50 select-none"
      style={{ x, y }}
      whileHover={{ scale: 1.1 }}
    >
      ✋
    </motion.div>
  )
}
