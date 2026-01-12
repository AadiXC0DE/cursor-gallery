"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ZapCursor({ x, y }: { x: number; y: number }) {
  const [repeatDelay] = useState(() => Math.random());

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-blue-400/30 blur-lg"
        animate={{ scale: [1, 2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
      <motion.svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay,
        }}
      >
        <path
          d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
          fill="#3b82f6"
          stroke="#60a5fa"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  );
}
