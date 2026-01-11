"use client"
import { motion } from "framer-motion"
export default function IdeaCursor({ x, y }: { x: number; y: number }) {
  return <motion.div className="fixed top-0 left-0 pointer-events-none z-50 text-2xl" style={{ x, y }} animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 0.8, repeat: Infinity }}>💡</motion.div>
}
