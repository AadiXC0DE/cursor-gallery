"use client";

import { motion } from "framer-motion";

export default function CrownCursor({
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
          rotate: isHovering ? -8 : 0,
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { type: "spring", stiffness: 300, damping: 18 },
          scale: { type: "spring", stiffness: 300, damping: 18 },
        }}
        style={{ filter: "drop-shadow(0 0 8px rgba(250,204,21,0.4))" }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="crownGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="55%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>
          </defs>

          {/* Crown body */}
          <path
            d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z"
            fill="url(#crownGold)"
            stroke="#a16207"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          {/* Base band */}
          <path
            d="M5 16H19V19H5V16Z"
            fill="url(#crownGold)"
            stroke="#a16207"
            strokeWidth="0.8"
          />
          {/* Highlight */}
          <path
            d="M5.5 15.5 L4 7"
            stroke="#fef9c3"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Gems */}
          <motion.circle
            cx="12"
            cy="13"
            r="1.5"
            fill="#ef4444"
            animate={isStatic ? {} : { opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <circle cx="7" cy="13" r="1" fill="#3b82f6" />
          <circle cx="17" cy="13" r="1" fill="#3b82f6" />
          <circle cx="12" cy="17.5" r="0.8" fill="#fef9c3" opacity="0.8" />
        </svg>

        {/* Royal aura */}
        {!isStatic && (
          <motion.div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-yellow-200/50 rounded-full blur-md"
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
