"use client"

import { motion } from "framer-motion"

export default function GlowCursor({
  x,
  y,
}: {
  x: number
  y: number
}) {
  return (
    <>
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50"
            style={{
                x,
                y,
                translateX: "-50%",
                translateY: "-50%",
                background: "radial-gradient(circle, #fff 0%, #a855f7 100%)",
                boxShadow: "0 0 30px #a855f7, 0 0 60px #8b5cf6, 0 0 90px #7c3aed",
            }}
            transition={{
                type: "tween",
                ease: "backOut",
                duration: 0.1
            }}
        />
      <motion.div
        className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-40"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        transition={{
            type: "tween",
            ease: "circOut",
            duration: 0.5
        }}
      />
    </>
  )
}
