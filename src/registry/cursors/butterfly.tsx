"use client"
import { motion } from "framer-motion"
export default function ButterfyCursor({ x, y }: { x: number; y: number }) {
  return <motion.div className="fixed top-0 left-0 pointer-events-none z-50 text-2xl" style={{ x, y }} animate={{ y: [y - 5, y + 5, y - 5] }} transition={{ duration: 1, repeat: Infinity }}>🦋</motion.div>
}
