"use client"
import { motion } from "framer-motion"

export default function PlusCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="relative w-6 h-6">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-fuchsia-500 -translate-x-1/2" />
      </div>
    </motion.div>
  )
}
