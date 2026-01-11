"use client"
import { motion } from "framer-motion"
export default function BirdCursor({ x, y }: { x: number; y: number }) {
  return <motion.div className="fixed top-0 left-0 pointer-events-none z-50 text-2xl" style={{ x, y }} animate={{ y: [y - 4, y + 4, y - 4] }} transition={{ duration: 0.8, repeat: Infinity }}>🐦</motion.div>
}
