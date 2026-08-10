"use client";

import { motion } from "framer-motion";

export default function CoffeeCursor({
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
      {/* Steam wisps */}
      {!isStatic &&
        [0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[10px] bg-white/40 rounded-full blur-[1.5px]"
            style={{ left: 11 + i * 5, top: -12 }}
            animate={{
              y: [-2, -12],
              x: [0, (i - 1) * 3],
              opacity: [0, 0.7, 0],
              scaleY: [0.6, 1.3],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              delay: i * 0.45,
              ease: "easeOut",
            }}
          />
        ))}

      <motion.div
        animate={{
          rotate: isHovering ? -6 : 0,
          scale: isHovering ? 1.08 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        style={{ filter: "drop-shadow(0 0 8px rgba(120,53,15,0.4))" }}
      >
        <svg width="30" height="34" viewBox="0 0 30 34">
          <defs>
            <linearGradient id="coffeeCup" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f5f0e8" />
              <stop offset="100%" stopColor="#d6c9b4" />
            </linearGradient>
            <linearGradient
              id="coffeeSleeve"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#a16207" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
          </defs>

          {/* Lid */}
          <path
            d="M6 8 L7.4 4.5 C7.6 4 8.1 3.5 8.7 3.5 L21.3 3.5 C21.9 3.5 22.4 4 22.6 4.5 L24 8 Z"
            fill="#e7e0d2"
            stroke="#b8ab91"
            strokeWidth="0.6"
          />
          <rect
            x="12"
            y="1.8"
            width="6"
            height="2.2"
            rx="1.1"
            fill="#e7e0d2"
            stroke="#b8ab91"
            strokeWidth="0.5"
          />

          {/* Cup body (tapered) */}
          <path
            d="M6 8 L24 8 L22.2 30 C22.1 31.1 21.2 32 20.1 32 L9.9 32 C8.8 32 7.9 31.1 7.8 30 Z"
            fill="url(#coffeeCup)"
            stroke="#b8ab91"
            strokeWidth="0.7"
          />

          {/* Sleeve */}
          <path d="M7.2 14 L22.8 14 L22 23 L8 23 Z" fill="url(#coffeeSleeve)" />
          {/* Coffee bean emblem */}
          <ellipse cx="15" cy="18.5" rx="2.6" ry="3.4" fill="#451a03" />
          <path
            d="M15 15.4 C13.8 17 13.8 20 15 21.6 C16.2 20 16.2 17 15 15.4"
            stroke="#d6a565"
            strokeWidth="0.9"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
