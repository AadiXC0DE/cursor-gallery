"use client";

import { motion } from "framer-motion";

export default function UfoCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={isStatic ? {} : { y: [0, -4, 0], rotate: [0, -3, 3, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="38" height="30" viewBox="0 0 38 30">
          {/* Tractor beam */}
          <motion.path
            d="M13 17 L25 17 L31 29 L7 29 Z"
            fill="url(#ufoBeamGrad)"
            animate={isStatic ? {} : { opacity: [0.15, 0.45, 0.15] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Glass dome */}
          <path
            d="M13 12 C13 5 25 5 25 12 Z"
            fill="url(#ufoDomeGrad)"
            opacity="0.95"
          />
          {/* Saucer body */}
          <ellipse
            cx="19"
            cy="13.5"
            rx="16"
            ry="5.5"
            fill="url(#ufoBodyGrad)"
          />
          <ellipse
            cx="19"
            cy="12.6"
            rx="16"
            ry="5.5"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.6"
          />
          {/* Running lights */}
          {[8, 19, 30].map((cx, i) => (
            <motion.circle
              key={cx}
              cx={cx}
              cy="15.5"
              r="1.6"
              fill="#fbbf24"
              animate={isStatic ? {} : { opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
          <defs>
            <linearGradient id="ufoBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="55%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="ufoDomeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a5f3fc" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
            <linearGradient id="ufoBeamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(190,242,100,0.55)" />
              <stop offset="100%" stopColor="rgba(190,242,100,0)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
}
