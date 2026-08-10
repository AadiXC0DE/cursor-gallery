"use client";

import { motion } from "framer-motion";

export default function RobotCursor({
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
        className="relative overflow-hidden rounded-lg"
        animate={{
          rotate: isHovering ? -6 : 0,
          scale: isHovering ? 1.08 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        style={{ filter: "drop-shadow(0 0 8px rgba(34,211,238,0.35))" }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="robotMetal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="55%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
          </defs>

          {/* Antenna */}
          <path
            d="M12 8V4"
            stroke="#64748b"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <motion.circle
            cx="12"
            cy="3"
            r="1.3"
            fill="#22d3ee"
            style={{ filter: "drop-shadow(0 0 3px #22d3ee)" }}
            animate={isStatic ? {} : { opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />

          {/* Head */}
          <rect
            x="3"
            y="8"
            width="18"
            height="13"
            rx="3"
            fill="url(#robotMetal)"
            stroke="#475569"
            strokeWidth="0.75"
          />
          {/* Face plate */}
          <rect
            x="5.5"
            y="10.5"
            width="13"
            height="6.5"
            rx="2"
            fill="#0f172a"
          />

          {/* Eyes */}
          <motion.circle
            cx="9"
            cy="13.8"
            r="1.5"
            fill="#22d3ee"
            style={{ filter: "drop-shadow(0 0 3px #22d3ee)" }}
            animate={isStatic ? {} : { opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="15"
            cy="13.8"
            r="1.5"
            fill="#22d3ee"
            style={{ filter: "drop-shadow(0 0 3px #22d3ee)" }}
            animate={isStatic ? {} : { opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Mouth grille */}
          <path
            d="M8.5 18.8 H15.5"
            stroke="#475569"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="1.6 1.4"
          />

          {/* Ear bolts */}
          <circle cx="3" cy="14.5" r="1.1" fill="#94a3b8" />
          <circle cx="21" cy="14.5" r="1.1" fill="#94a3b8" />
        </svg>

        {/* Scan line */}
        {!isStatic && (
          <motion.div
            className="absolute left-0 w-full h-[1px] bg-cyan-400/70 shadow-[0_0_6px_cyan]"
            animate={{ top: ["22%", "82%", "22%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
