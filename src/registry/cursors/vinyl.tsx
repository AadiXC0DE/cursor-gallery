"use client";

import { motion } from "framer-motion";

export default function VinylCursor({
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
          rotate: isStatic ? 0 : 360,
          scale: isHovering ? 1.12 : 1,
        }}
        transition={{
          rotate: { duration: 2.4, repeat: Infinity, ease: "linear" },
          scale: { type: "spring", stiffness: 320, damping: 18 },
        }}
        style={{ filter: "drop-shadow(0 0 8px rgba(0,0,0,0.5))" }}
      >
        <svg width="34" height="34" viewBox="0 0 34 34">
          <defs>
            <radialGradient id="vinylDisc" cx="42%" cy="38%" r="70%">
              <stop offset="0%" stopColor="#3f3f46" />
              <stop offset="70%" stopColor="#18181b" />
              <stop offset="100%" stopColor="#09090b" />
            </radialGradient>
            <linearGradient id="vinylLabel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>

          {/* Disc */}
          <circle
            cx="17"
            cy="17"
            r="16"
            fill="url(#vinylDisc)"
            stroke="#27272a"
            strokeWidth="0.75"
          />
          {/* Grooves */}
          <circle
            cx="17"
            cy="17"
            r="13"
            fill="none"
            stroke="#3f3f46"
            strokeWidth="0.4"
            opacity="0.8"
          />
          <circle
            cx="17"
            cy="17"
            r="10.5"
            fill="none"
            stroke="#3f3f46"
            strokeWidth="0.4"
            opacity="0.7"
          />
          <circle
            cx="17"
            cy="17"
            r="8"
            fill="none"
            stroke="#3f3f46"
            strokeWidth="0.4"
            opacity="0.6"
          />
          {/* Shine */}
          <path
            d="M6 10 A13 13 0 0 1 14 4.5"
            stroke="#fafafa"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.35"
            fill="none"
          />
          {/* Label */}
          <circle cx="17" cy="17" r="5" fill="url(#vinylLabel)" />
          <circle cx="17" cy="17" r="1.1" fill="#fafafa" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
