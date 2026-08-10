"use client";

import { motion } from "framer-motion";

export default function MoonCursor({
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
      {/* Twinkling companions */}
      {!isStatic && (
        <>
          <motion.div
            className="absolute -left-4 -top-3"
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1, 0.7] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            <svg width="8" height="8" viewBox="0 0 24 24">
              <path
                d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z"
                fill="#fde68a"
              />
            </svg>
          </motion.div>
          <motion.div
            className="absolute -right-3 top-4"
            animate={{ opacity: [1, 0.2, 1], scale: [1, 0.6, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: 0.6 }}
          >
            <svg width="6" height="6" viewBox="0 0 24 24">
              <path
                d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z"
                fill="#fef3c7"
              />
            </svg>
          </motion.div>
        </>
      )}

      <motion.div
        animate={{
          rotate: isStatic ? 0 : [0, 8, -8, 0],
          scale: isHovering ? 1.12 : 1,
        }}
        transition={{
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 300, damping: 18 },
        }}
        style={{ filter: "drop-shadow(0 0 10px rgba(251,191,36,0.55))" }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28">
          <defs>
            <radialGradient id="moonGlowGrad" cx="38%" cy="35%" r="75%">
              <stop offset="0%" stopColor="#fef9c3" />
              <stop offset="55%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#f59e0b" />
            </radialGradient>
            <mask id="moonCrescent">
              <rect width="28" height="28" fill="black" />
              <circle cx="14" cy="14" r="11" fill="white" />
              <circle cx="20.5" cy="9.5" r="9.5" fill="black" />
            </mask>
            <clipPath id="moonCrescentClip">
              <path d="M14 3 A11 11 0 1 0 14 25 A11 11 0 0 0 20.5 9.5 A9.5 9.5 0 0 1 14 3 Z" />
            </clipPath>
          </defs>

          {/* Crescent body */}
          <rect
            width="28"
            height="28"
            fill="url(#moonGlowGrad)"
            mask="url(#moonCrescent)"
          />

          {/* Craters */}
          <g clipPath="url(#moonCrescentClip)">
            <circle cx="10" cy="15" r="1.8" fill="#d97706" opacity="0.4" />
            <circle cx="13.5" cy="20" r="1.2" fill="#d97706" opacity="0.35" />
            <circle cx="8.5" cy="10" r="1" fill="#d97706" opacity="0.3" />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}
