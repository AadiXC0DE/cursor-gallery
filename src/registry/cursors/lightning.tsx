"use client";
import { motion } from "framer-motion";

export default function LightningCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y }}
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 0.2, repeat: Infinity }}
    >
      <svg width="20" height="28" viewBox="0 0 20 28">
        <path
          d="M11 0L0 16h8l-3 12 14-18h-9l4-10z"
          fill="#fbbf24"
          stroke="#f97316"
          strokeWidth="1"
        />
      </svg>
    </motion.div>
  );
}
