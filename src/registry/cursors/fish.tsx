"use client"
import { motion } from "framer-motion"
export default function FishCursor({ x, y }: { x: number; y: number }) {
  return <motion.div className="fixed top-0 left-0 pointer-events-none z-50 text-2xl" style={{ x, y }} animate={{ x: [x - 3, x + 3, x - 3] }} transition={{ duration: 0.5, repeat: Infinity }}>🐟</motion.div>
}
