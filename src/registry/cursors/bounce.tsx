"use client"
import { motion } from "framer-motion"

export default function BounceCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-50"
      style={{
        x, translateX: "-50%",
        background: "linear-gradient(135deg, #10b981, #34d399)",
        boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)"
      }}
      animate={{ y: [y - 5, y + 5, y - 5] }}
      transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
    />
  )
}
