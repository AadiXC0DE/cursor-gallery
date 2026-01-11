"use client"
import { motion } from "framer-motion"

export default function CircleCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-violet-500 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}
