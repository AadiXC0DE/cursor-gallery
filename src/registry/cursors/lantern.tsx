"use client";

import { motion } from "framer-motion";

export default function LanternCursor({
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
      {/* Warm ambient glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[64px] h-[64px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(251,191,36,0.32) 0%, transparent 70%)",
          filter: "blur(6px)",
        }}
        animate={isStatic ? {} : { opacity: [0.75, 1, 0.8, 1, 0.75] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        animate={{
          y: isStatic ? 0 : [0, -4, 0],
          rotate: isHovering ? 5 : 0,
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { type: "spring", stiffness: 260, damping: 16 },
        }}
      >
        <svg width="26" height="34" viewBox="0 0 26 34">
          <defs>
            <radialGradient id="lanternPaper" cx="50%" cy="42%" r="65%">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="60%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </radialGradient>
          </defs>

          {/* Hanging string */}
          <path d="M13 0 V4" stroke="#a16207" strokeWidth="1" />
          {/* Top cap */}
          <rect x="9" y="4" width="8" height="2.4" rx="1" fill="#78350f" />
          {/* Paper body */}
          <ellipse
            cx="13"
            cy="17"
            rx="10"
            ry="11"
            fill="url(#lanternPaper)"
            stroke="#b45309"
            strokeWidth="0.75"
          />
          {/* Ribs */}
          <ellipse
            cx="13"
            cy="17"
            rx="6.5"
            ry="11"
            fill="none"
            stroke="#b45309"
            strokeWidth="0.5"
            opacity="0.55"
          />
          <ellipse
            cx="13"
            cy="17"
            rx="3"
            ry="11"
            fill="none"
            stroke="#b45309"
            strokeWidth="0.5"
            opacity="0.55"
          />
          <path
            d="M3.6 13.5 H22.4 M3.6 20.5 H22.4"
            stroke="#b45309"
            strokeWidth="0.5"
            opacity="0.45"
          />
          {/* Inner flame shimmer */}
          {!isStatic && (
            <motion.ellipse
              cx="13"
              cy="18"
              rx="4"
              ry="5.5"
              fill="#fef3c7"
              animate={{ opacity: [0.35, 0.7, 0.4, 0.65, 0.35] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          )}
          {/* Bottom cap + tassel */}
          <rect x="9.5" y="27" width="7" height="2.2" rx="1" fill="#78350f" />
          <path
            d="M13 29.5 C12.4 31 13.6 32.2 13 33.5"
            stroke="#dc2626"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
