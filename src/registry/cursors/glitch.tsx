"use client"

import { motion } from "framer-motion"

export default function GlitchCursor({
  x,
  y,
}: {
  x: number
  y: number
}) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-transparent border-2 border-red-500 pointer-events-none z-50"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
        {/* Pseudo-elements for glitch effect can be done via multiple divs here */}
        <motion.div 
            className="absolute inset-0 border-2 border-cyan-500 translate-x-[2px] translate-y-[-2px]"
            animate={{
                opacity: [0, 1, 0, 1, 0],
                x: [2, -2, 4, 0],
            }}
            transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatDelay: 2
            }}
        />
    </motion.div>
  )
}
