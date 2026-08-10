"use client";

import { motion } from "framer-motion";

export default function BrowserCursor({
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
      {/* Atmosphere */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
          filter: "blur(6px)",
        }}
        animate={isStatic ? {} : { opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        animate={{ scale: isHovering ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        style={{ filter: "drop-shadow(0 0 10px rgba(59,130,246,0.45))" }}
      >
        <svg width="34" height="34" viewBox="0 0 34 34">
          <defs>
            <radialGradient id="globeOcean" cx="36%" cy="32%" r="80%">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </radialGradient>
            <clipPath id="globeClip">
              <circle cx="17" cy="17" r="13" />
            </clipPath>
          </defs>

          {/* Ocean sphere */}
          <circle cx="17" cy="17" r="13" fill="url(#globeOcean)" />

          {/* Continents */}
          <g clipPath="url(#globeClip)" fill="#34d399" opacity="0.9">
            <path d="M8 11 C10 8.5 13.5 8.5 14.5 10.5 C15.5 12.4 13 13.5 13.8 15.5 C14.4 17 12.5 19.5 10.5 18.5 C8.5 17.5 6.5 13.5 8 11 Z" />
            <path d="M20 9 C23 7.5 26.5 9 27 11.5 C27.4 13.6 24.5 14 24.8 16 C25 17.5 22 18.5 20.8 17 C19.6 15.5 18 10.5 20 9 Z" />
            <path d="M19 22.5 C21 21.5 23.5 22.5 23.2 24.5 C22.9 26.3 19.8 27 18.5 25.8 C17.4 24.8 17.6 23.2 19 22.5 Z" />
          </g>

          {/* Graticule */}
          <g
            clipPath="url(#globeClip)"
            stroke="#e0f2fe"
            strokeWidth="0.5"
            opacity="0.45"
            fill="none"
          >
            <ellipse cx="17" cy="17" rx="13" ry="5.2" />
            <ellipse cx="17" cy="17" rx="13" ry="9.6" opacity="0.6" />
            <ellipse cx="17" cy="17" rx="5.2" ry="13" />
          </g>

          {/* Specular shine */}
          <ellipse
            cx="11.5"
            cy="10.5"
            rx="4.5"
            ry="3"
            fill="#ffffff"
            opacity="0.35"
            transform="rotate(-28 11.5 10.5)"
          />

          {/* Rim */}
          <circle
            cx="17"
            cy="17"
            r="13"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="0.75"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      {/* Orbiting satellite */}
      {!isStatic && (
        <motion.div
          className="absolute left-1/2 top-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full bg-slate-100 shadow-[0_0_5px_rgba(255,255,255,0.9)]"
            style={{ transform: "translateX(21px)" }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
