"use client"
import { motion } from "framer-motion"
export default function ToolCursor({ x, y }: { x: number; y: number }) {
  return <motion.div className="fixed top-0 left-0 pointer-events-none z-50 text-2xl" style={{ x, y }}>🔧</motion.div>
}
