"use client"
import { motion } from "framer-motion"

export default function PulseCursor({ x, y }: { x: number; y: number }) {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-violet-500/50 pointer-events-none z-40"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-fuchsia-500/50 pointer-events-none z-40"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-50"
        style={{
          x, y, translateX: "-50%", translateY: "-50%",
          background: "linear-gradient(135deg, #8b5cf6, #d946ef)",
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
        }}
      />
    </>
  )
}
