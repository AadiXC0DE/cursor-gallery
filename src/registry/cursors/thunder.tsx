"use client"
import { motion } from "framer-motion"
export default function ThunderCursor({ x, y }: { x: number; y: number }) {
  return <motion.div className="fixed top-0 left-0 pointer-events-none z-50 text-2xl" style={{ x, y }} animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.15, repeat: Infinity }}>⚡</motion.div>
}
