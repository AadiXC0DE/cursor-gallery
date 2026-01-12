"use client";
import { motion } from "framer-motion";

export default function TreeCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "bottom center" }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20V22"
            stroke="#78350f"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 2L19 9H16L21 14H15L22 20H2L9 14H3L8 9H5L12 2Z"
            fill="#15803d"
            stroke="#166534"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <motion.circle
            cx="12"
            cy="12"
            r="1"
            fill="#facc15"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
