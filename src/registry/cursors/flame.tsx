"use client"
import { motion } from "framer-motion"
export default function FlameCursor({ x, y }: { x: number; y: number }) {
  return <motion.div className="fixed top-0 left-0 pointer-events-none z-50 text-2xl" style={{ x, y }} animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 0.3, repeat: Infinity }}>🔥</motion.div>
}
