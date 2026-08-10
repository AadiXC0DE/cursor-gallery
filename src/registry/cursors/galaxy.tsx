"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const STAR_COLORS = ["#e0e7ff", "#c4b5fd", "#93c5fd", "#f0abfc"];

export default function GalaxyCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  // Two logarithmic spiral arms of stars
  const stars = useMemo(() => {
    const pts: {
      cx: number;
      cy: number;
      r: number;
      color: string;
      opacity: number;
    }[] = [];
    for (let arm = 0; arm < 2; arm++) {
      for (let i = 0; i < 9; i++) {
        const t = i / 9;
        const angle = arm * Math.PI + t * Math.PI * 1.7;
        const radius = 3 + t * 15;
        pts.push({
          cx: 22 + Math.cos(angle) * radius,
          cy: 22 + Math.sin(angle) * radius * 0.62,
          r: 0.8 + (1 - t) * 1.1,
          color: STAR_COLORS[(arm + i) % STAR_COLORS.length],
          opacity: 0.5 + (1 - t) * 0.5,
        });
      }
    }
    return pts;
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={isStatic ? {} : { rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{ filter: "drop-shadow(0 0 10px rgba(196,181,253,0.45))" }}
      >
        <svg width="44" height="44" viewBox="0 0 44 44">
          <defs>
            <radialGradient id="galaxyCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#ddd6fe" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Core glow */}
          <ellipse cx="22" cy="22" rx="9" ry="6" fill="url(#galaxyCore)" />

          {/* Spiral arms */}
          {stars.map((s, i) => (
            <circle
              key={i}
              cx={s.cx}
              cy={s.cy}
              r={s.r}
              fill={s.color}
              opacity={s.opacity}
            />
          ))}
        </svg>
      </motion.div>

      {/* Bright center */}
      <div className="absolute left-1/2 top-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
    </motion.div>
  );
}
