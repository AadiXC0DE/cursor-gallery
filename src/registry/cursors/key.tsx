"use client";

import { motion } from "framer-motion";

export default function KeyCursor({
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
          rotate: isHovering ? -25 : -45,
          scale: isHovering ? 1.12 : 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        style={{
          filter: "drop-shadow(0 0 8px rgba(251,191,36,0.45))",
        }}
      >
        <svg width="38" height="38" viewBox="0 0 36 36">
          <defs>
            <linearGradient id="keyGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="45%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>

          {/* Ornate bow (ring) */}
          <path
            d="M9 11.5 A6 6 0 1 0 9 23.5 A6 6 0 1 0 9 11.5 Z M9 14.5 A3 3 0 1 1 9 20.5 A3 3 0 1 1 9 14.5 Z"
            fill="url(#keyGold)"
            fillRule="evenodd"
            stroke="#92400e"
            strokeWidth="0.5"
          />
          {/* Clover dots on the bow */}
          <circle cx="9" cy="12.6" r="0.7" fill="#92400e" opacity="0.55" />
          <circle cx="13.4" cy="17.5" r="0.7" fill="#92400e" opacity="0.55" />
          <circle cx="9" cy="22.4" r="0.7" fill="#92400e" opacity="0.55" />
          <circle cx="4.6" cy="17.5" r="0.7" fill="#92400e" opacity="0.55" />

          {/* Shank */}
          <rect
            x="14.4"
            y="16.6"
            width="13.6"
            height="2.2"
            rx="1.1"
            fill="url(#keyGold)"
            stroke="#92400e"
            strokeWidth="0.4"
          />
          {/* Collars */}
          <rect
            x="16.4"
            y="15.6"
            width="1.5"
            height="4.2"
            rx="0.7"
            fill="url(#keyGold)"
            stroke="#92400e"
            strokeWidth="0.4"
          />
          <rect
            x="19.2"
            y="16.1"
            width="1"
            height="3.2"
            rx="0.5"
            fill="url(#keyGold)"
            stroke="#92400e"
            strokeWidth="0.35"
          />

          {/* Bit teeth */}
          <rect
            x="25.6"
            y="18.8"
            width="2.6"
            height="4.6"
            rx="0.5"
            fill="url(#keyGold)"
            stroke="#92400e"
            strokeWidth="0.4"
          />
          <rect
            x="22.9"
            y="18.8"
            width="1.7"
            height="3.1"
            rx="0.5"
            fill="url(#keyGold)"
            stroke="#92400e"
            strokeWidth="0.4"
          />

          {/* Traveling glint */}
          {!isStatic && (
            <motion.circle
              r="1.1"
              fill="#fffbeb"
              style={{ filter: "drop-shadow(0 0 3px #fde68a)" }}
              animate={{
                cx: [16, 27, 16],
                cy: [17.7, 17.7, 17.7],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </svg>
      </motion.div>
    </motion.div>
  );
}
