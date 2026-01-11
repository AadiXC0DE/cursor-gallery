"use client"

import { motion } from "framer-motion"

export default function DotRingCursor({
  x,
  y,
}: {
  x: number
  y: number
}) {
  return (
    <>
      {/* Central Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-50 opacity-50"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </>
  )
}
