"use client";
import { motion } from "framer-motion";

export default function TriangleCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20">
        <polygon points="10,0 20,20 0,20" fill="url(#triGrad)" />
        <defs>
          <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
