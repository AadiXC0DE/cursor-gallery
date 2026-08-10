"use client";

import { motion } from "framer-motion";

export default function ButterflyCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  const flap = isStatic ? {} : { scaleX: [1, 0.35, 1] };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={isStatic ? {} : { rotate: [0, -6, 6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "drop-shadow(0 0 8px rgba(129,140,248,0.5))" }}
      >
        <svg width="30" height="26" viewBox="0 0 30 26">
          {/* Left wing */}
          <motion.g
            style={{ transformOrigin: "15px 13px" }}
            animate={flap}
            transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M15 11 C9 2 2 1 3 7 C3.6 11.5 9 13 15 12.4 Z"
              fill="url(#butterflyGradL)"
            />
            <path
              d="M15 13.6 C9 14 4 16.5 6 20.5 C8 24 13 19.5 15 15 Z"
              fill="url(#butterflyGradL)"
              opacity="0.85"
            />
          </motion.g>
          {/* Right wing */}
          <motion.g
            style={{ transformOrigin: "15px 13px" }}
            animate={flap}
            transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M15 11 C21 2 28 1 27 7 C26.4 11.5 21 13 15 12.4 Z"
              fill="url(#butterflyGradR)"
            />
            <path
              d="M15 13.6 C21 14 26 16.5 24 20.5 C22 24 17 19.5 15 15 Z"
              fill="url(#butterflyGradR)"
              opacity="0.85"
            />
          </motion.g>
          {/* Body */}
          <rect
            x="14.2"
            y="7"
            width="1.6"
            height="11"
            rx="0.8"
            fill="#312e81"
          />
          {/* Antennae */}
          <path
            d="M14.6 7.5 C13 5 11.5 4.5 10.5 3.5 M15.4 7.5 C17 5 18.5 4.5 19.5 3.5"
            stroke="#312e81"
            strokeWidth="0.8"
            strokeLinecap="round"
            fill="none"
          />
          <defs>
            <linearGradient
              id="butterflyGradL"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <linearGradient
              id="butterflyGradR"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
}
