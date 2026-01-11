"use client"
import { motion } from "framer-motion"

export default function MusicCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div 
      className="fixed top-0 left-0 pointer-events-none z-50 text-2xl" 
      style={{ x, y }}
      animate={{ y: [y - 3, y + 3, y - 3], scale: [1, 1.1, 1] }}
      transition={{ duration: 0.6, repeat: Infinity }}
    >
      🎵
    </motion.div>
  )
}
