"use client";

import { motion } from "framer-motion";

export default function LockCursor({
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
        animate={{ scale: isHovering ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
        style={{ filter: "drop-shadow(0 0 8px rgba(100,116,139,0.45))" }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="lockBody" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="lockShackle" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
          </defs>

          {/* Shackle — lifts teasingly on hover */}
          <motion.path
            d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"
            stroke="url(#lockShackle)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
            animate={{ y: isHovering ? -1.6 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          />

          {/* Body */}
          <rect
            x="5"
            y="11"
            width="14"
            height="10"
            rx="2"
            fill="url(#lockBody)"
            stroke="#475569"
            strokeWidth="0.75"
          />
          {/* Body highlight */}
          <path
            d="M6.5 12.5 H17.5"
            stroke="#f8fafc"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Keyhole */}
          <circle cx="12" cy="15.5" r="1.6" fill="#1e293b" />
          <path
            d="M12 15.5 L11 19 H13 L12 15.5"
            fill="#1e293b"
            stroke="#1e293b"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
          {/* Keyhole glow */}
          {!isStatic && (
            <motion.circle
              cx="12"
              cy="15.5"
              r="0.7"
              fill="#34d399"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
          )}
        </svg>
      </motion.div>
    </motion.div>
  );
}
