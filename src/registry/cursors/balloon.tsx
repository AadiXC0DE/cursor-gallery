"use client"
import { motion } from "framer-motion"
export default function BalloonCursor({ x, y }: { x: number; y: number }) {
  return <motion.div className="fixed top-0 left-0 pointer-events-none z-50 text-2xl" style={{ x, y }} animate={{ y: [y - 3, y + 3, y - 3] }} transition={{ duration: 2, repeat: Infinity }}>🎈</motion.div>
}
