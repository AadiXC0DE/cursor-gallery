"use client"
import { motion } from "framer-motion"

export default function AtomCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative w-8 h-8">
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500"/>
        {[0, 60, 120].map((angle, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-8 h-3 -translate-x-1/2 -translate-y-1/2"
            style={{ rotate: angle }}
            animate={{ rotate: angle + 360 }}
            transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full border border-violet-400/50 rounded-full"/>
            <div className="absolute right-0 top-1/2 w-1.5 h-1.5 -translate-y-1/2 rounded-full bg-fuchsia-400"/>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
