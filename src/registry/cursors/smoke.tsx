"use client"
import { motion } from "framer-motion"

export default function SmokeCursor({ x, y }: { x: number; y: number }) {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 rounded-full pointer-events-none"
          style={{
            width: 20 + i * 15,
            height: 20 + i * 15,
            x, y,
            translateX: "-50%",
            translateY: "-50%",
            background: `radial-gradient(circle, rgba(100,100,100,${0.3 - i * 0.08}) 0%, transparent 70%)`,
            filter: "blur(8px)",
          }}
          animate={{ 
            y: [y, y - 30 - i * 20],
            opacity: [0.4, 0],
            scale: [1, 1.5 + i * 0.3],
          }}
          transition={{ 
            duration: 1 + i * 0.3,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.15,
          }}
        />
      ))}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50"
        style={{
          x, y, translateX: "-50%", translateY: "-50%",
          background: "#666",
          boxShadow: "0 0 10px rgba(100,100,100,0.5)"
        }}
      />
    </>
  )
}
