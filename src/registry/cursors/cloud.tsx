"use client";

import { motion } from "framer-motion";

export default function CloudCursor({
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
          y: isStatic ? 0 : [0, -3, 0],
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{
          y: { duration: 2.6, repeat: Infinity, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 300, damping: 18 },
        }}
        style={{ filter: "drop-shadow(0 2px 8px rgba(148,163,184,0.45))" }}
      >
        <svg width="36" height="26" viewBox="0 0 36 26">
          <defs>
            <linearGradient id="cloudBody" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#eef4fb" />
              <stop offset="100%" stopColor="#cbdcee" />
            </linearGradient>
          </defs>

          {/* Puffy silhouette */}
          <path
            d="M9 22 C5.7 22 3 19.3 3 16 C3 13 5.2 10.6 8.1 10.1 C9 6.4 12.2 3.5 16 3.5 C20.1 3.5 23.5 6.7 23.9 10.5 C26.9 10.8 29 13.2 29 16 C29 19.3 26.3 22 23 22 Z"
            fill="url(#cloudBody)"
            stroke="#b6c9dd"
            strokeWidth="0.75"
          />
          {/* Bottom shading */}
          <path
            d="M5.5 19.5 C8 21 24 21 26.8 19"
            stroke="#a8c0d8"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
          {/* Top highlight */}
          <path
            d="M10.5 9 C11.5 6.5 13.7 5 16.2 5"
            stroke="#ffffff"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
