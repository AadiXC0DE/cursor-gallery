"use client"
import { motion } from "framer-motion"

export default function OrbitCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500" />
      {/* Orbiting dots */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
        >
          <div 
            className="absolute rounded-full"
            style={{
              width: 4,
              height: 4,
              background: ["#d946ef", "#f97316", "#06b6d4"][i],
              transform: `translateX(${12}px)`,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
