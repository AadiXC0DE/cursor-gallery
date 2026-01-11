"use client"
import { motion } from "framer-motion"
export default function WaveCursor({ x, y }: { x: number; y: number }) {
  return <motion.div className="fixed top-0 left-0 pointer-events-none z-50 text-2xl" style={{ x, y }} animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.4, repeat: Infinity }}>👋</motion.div>
}
