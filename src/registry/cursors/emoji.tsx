"use client"
import { motion } from "framer-motion"

export default function EmojiCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 text-2xl pointer-events-none z-50 select-none"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ rotate: [-10, 10, -10] }}
      transition={{ duration: 0.5, repeat: Infinity }}
    >
      👆
    </motion.div>
  )
}
