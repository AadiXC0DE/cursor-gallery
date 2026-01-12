"use client";
import { motion } from "framer-motion";

export default function SpinnerCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="#3b3b3b"
          strokeWidth="3"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="url(#spinGrad)"
          strokeWidth="3"
          strokeDasharray="40 60"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="spinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
