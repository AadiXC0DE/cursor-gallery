"use client";
import { motion } from "framer-motion";

export default function TargetCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28">
        <circle
          cx="14"
          cy="14"
          r="12"
          fill="none"
          stroke="#ef4444"
          strokeWidth="1.5"
        />
        <circle
          cx="14"
          cy="14"
          r="8"
          fill="none"
          stroke="#ef4444"
          strokeWidth="1.5"
        />
        <circle
          cx="14"
          cy="14"
          r="4"
          fill="none"
          stroke="#ef4444"
          strokeWidth="1.5"
        />
        <circle cx="14" cy="14" r="2" fill="#ef4444" />
      </svg>
    </motion.div>
  );
}
