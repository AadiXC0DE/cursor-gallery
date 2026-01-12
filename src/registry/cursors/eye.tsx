"use client";
import { motion } from "framer-motion";

export default function EyeCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <svg width="28" height="20" viewBox="0 0 28 20">
        <ellipse
          cx="14"
          cy="10"
          rx="13"
          ry="9"
          fill="white"
          stroke="#333"
          strokeWidth="1"
        />
        <circle cx="14" cy="10" r="5" fill="#3b82f6" />
        <circle cx="14" cy="10" r="2" fill="#111" />
        <circle cx="12" cy="8" r="1" fill="white" />
      </svg>
    </motion.div>
  );
}
