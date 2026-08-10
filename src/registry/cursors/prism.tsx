"use client";

import { motion } from "framer-motion";

const SPECTRUM = [
  "#ef4444",
  "#f59e0b",
  "#facc15",
  "#22c55e",
  "#3b82f6",
  "#8b5cf6",
];

export default function PrismCursor({
  x,
  y,
  isHovering,
  isStatic,
}: {
  x: number;
  y: number;
  isHovering?: boolean;
  isStatic?: boolean;
}) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          rotate: isHovering ? 8 : 0,
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
      >
        <svg
          width="44"
          height="36"
          viewBox="0 0 44 36"
          style={{ filter: "drop-shadow(0 0 8px rgba(139,92,246,0.35))" }}
        >
          <defs>
            <linearGradient id="prismGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.55" />
            </linearGradient>
          </defs>

          {/* Incoming white beam */}
          <motion.line
            x1="0"
            y1="20"
            x2="15"
            y2="18"
            stroke="#f8fafc"
            strokeWidth="1.6"
            strokeLinecap="round"
            animate={isStatic ? {} : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />

          {/* Rainbow fan */}
          {SPECTRUM.map((color, i) => (
            <motion.line
              key={color}
              x1="24"
              y1="18"
              x2="43"
              y2={8 + i * 4}
              stroke={color}
              strokeWidth="1.6"
              strokeLinecap="round"
              animate={isStatic ? {} : { opacity: [0.65, 1, 0.65] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: i * 0.12,
              }}
            />
          ))}

          {/* Prism */}
          <path
            d="M14 29 L24 29 L19 8 Z"
            fill="url(#prismGlass)"
            stroke="#c7d2fe"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          {/* Glass highlight */}
          <path
            d="M18.2 12 L16 26"
            stroke="#ffffff"
            strokeWidth="0.8"
            opacity="0.7"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
