"use client";
import { motion } from "framer-motion";

export default function CloudCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ y: [y - 2, y + 2, y - 2] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="32" height="20" viewBox="0 0 32 20">
        <path
          d="M8 18c-3.3 0-6-2.7-6-6s2.7-6 6-6c.5-3.4 3.4-6 7-6 3.9 0 7 3.1 7 7h1c2.8 0 5 2.2 5 5s-2.2 5-5 5H8z"
          fill="white"
          stroke="#94a3b8"
          strokeWidth="1"
        />
      </svg>
    </motion.div>
  );
}
