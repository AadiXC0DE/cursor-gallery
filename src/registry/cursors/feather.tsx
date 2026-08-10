"use client";

import { motion } from "framer-motion";

export default function FeatherCursor({
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
          rotate: isStatic ? -30 : [-34, -26, -34],
          y: isStatic ? 0 : [0, -3, 0],
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{
          rotate: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 300, damping: 18 },
        }}
        style={{ filter: "drop-shadow(0 2px 8px rgba(125,211,252,0.4))" }}
      >
        <svg width="22" height="34" viewBox="0 0 22 34">
          <defs>
            <linearGradient
              id="featherVane"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f0f9ff" />
              <stop offset="55%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>
          </defs>

          {/* Vane */}
          <path
            d="M11 2 C17 5 19 12 16.5 19 C14.8 23.5 12 26 11 27 C10 26 7.2 23.5 5.5 19 C3 12 5 5 11 2 Z"
            fill="url(#featherVane)"
            stroke="#7dd3fc"
            strokeWidth="0.6"
          />
          {/* Barb separations */}
          <path
            d="M11 6 L7 12 M11 10 L15.5 14 M11 14 L6.8 18 M11 18 L14.8 21"
            stroke="#e0f2fe"
            strokeWidth="0.7"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* Rachis (shaft) */}
          <path
            d="M11 2.5 C10.6 12 10.9 22 11.3 31.5"
            stroke="#0ea5e9"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
          />
          {/* Quill tip */}
          <path
            d="M11.3 31.5 L11.6 33.5"
            stroke="#e2e8f0"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
