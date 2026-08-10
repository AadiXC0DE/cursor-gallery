"use client";

import { motion } from "framer-motion";

export default function PotionCursor({
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
          rotate: isHovering ? -8 : 0,
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 16 }}
        style={{ filter: "drop-shadow(0 0 10px rgba(168,85,247,0.5))" }}
      >
        <svg width="28" height="36" viewBox="0 0 28 36">
          <defs>
            <linearGradient id="potionLiquid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
            <linearGradient
              id="potionGlass"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#e9d5ff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Cork */}
          <rect x="11" y="1" width="6" height="5" rx="1.2" fill="#92400e" />
          {/* Neck */}
          <path
            d="M11.5 6 L11.5 12 L5 22 A9.5 9.5 0 1 0 23 22 L16.5 12 L16.5 6 Z"
            fill="url(#potionGlass)"
            stroke="#d8b4fe"
            strokeWidth="0.75"
          />
          {/* Liquid */}
          <path
            d="M7.2 20.5 L5.6 22.6 A9 9 0 1 0 22.4 22.6 L20.8 20.5 C18.5 19 16 21.8 13.5 20.6 C11 19.4 9.5 19 7.2 20.5 Z"
            fill="url(#potionLiquid)"
          />
          {/* Rising bubbles */}
          {!isStatic && (
            <>
              {[9.5, 13.5, 17.5].map((cx, i) => (
                <motion.circle
                  key={cx}
                  cx={cx}
                  cy="27"
                  r={0.9 + i * 0.25}
                  fill="#e9d5ff"
                  animate={{ cy: [27, 21], opacity: [0, 0.9, 0] }}
                  transition={{
                    duration: 1.3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeOut",
                  }}
                />
              ))}
            </>
          )}
          {/* Glass shine */}
          <path
            d="M8.5 15.5 C7 18 6.4 20.5 6.8 23"
            stroke="#faf5ff"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.7"
            fill="none"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
