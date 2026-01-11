"use client"
import { motion } from "framer-motion"

export default function GlassCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50"
      style={{
        x, y,
        translateX: "-50%",
        translateY: "-50%",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}
