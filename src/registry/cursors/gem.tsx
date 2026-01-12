"use client";
import { motion } from "framer-motion";

export default function GemCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 2L18 9L12 22L6 9Z"
            fill="url(#gem-gradient)"
            stroke="#60a5fa"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M6 9H18" stroke="#60a5fa" strokeWidth="1" />
          <path
            d="M12 2L12 22"
            stroke="#60a5fa"
            strokeWidth="1"
            opacity="0.5"
          />
          <path
            d="M9 5.5L15 5.5"
            stroke="#60a5fa"
            strokeWidth="1"
            opacity="0.5"
          />
          <path
            d="M9 13L15 13"
            stroke="#60a5fa"
            strokeWidth="1"
            opacity="0.5"
          />
          <defs>
            <linearGradient
              id="gem-gradient"
              x1="6"
              y1="2"
              x2="18"
              y2="22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#93c5fd" />
              <stop offset="0.5" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
        </svg>
        {/* Twinkle effect */}
        <motion.div
          className="absolute top-2 left-2 w-4 h-4 text-white"
          animate={{ rotate: 360, scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-4 right-3 w-2 h-2 text-white"
          animate={{ rotate: -360, scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
