"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function PlasmaCursor({
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
  // Jagged electric tendrils radiating from the core.
  // Jitter is deterministic (derived from index) to keep render pure.
  const tendrils = useMemo(() => {
    const jitter = (seed: number) => ((seed * 2654435761) % 100) / 100 - 0.5;
    return [0, 60, 130, 200, 280].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const mid1 = {
        x: 17 + Math.cos(rad) * 7 + jitter(i * 3 + 1) * 4,
        y: 17 + Math.sin(rad) * 7 + jitter(i * 3 + 2) * 4,
      };
      const reach = 13 + jitter(i * 3 + 3) * 4;
      const end = {
        x: 17 + Math.cos(rad) * reach,
        y: 17 + Math.sin(rad) * reach,
      };
      return `M17 17 L${mid1.x.toFixed(1)} ${mid1.y.toFixed(1)} L${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
    });
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{ scale: isHovering ? 1.15 : 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 16 }}
        style={{ filter: "drop-shadow(0 0 10px rgba(192,132,252,0.6))" }}
      >
        <svg width="34" height="34" viewBox="0 0 34 34">
          <defs>
            <radialGradient id="plasmaCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#faf5ff" />
              <stop offset="45%" stopColor="#d8b4fe" />
              <stop offset="100%" stopColor="#9333ea" />
            </radialGradient>
          </defs>

          {/* Tendrils */}
          {tendrils.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke="#c084fc"
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
              animate={isStatic ? {} : { opacity: [0.15, 0.9, 0.2] }}
              transition={{
                duration: 0.7 + i * 0.13,
                repeat: Infinity,
                delay: i * 0.11,
              }}
            />
          ))}

          {/* Orb */}
          <circle cx="17" cy="17" r="6.5" fill="url(#plasmaCore)" />
          <circle
            cx="17"
            cy="17"
            r="6.5"
            fill="none"
            stroke="#e9d5ff"
            strokeWidth="0.5"
            opacity="0.8"
          />
          {/* Specular */}
          <circle cx="15" cy="15" r="1.6" fill="#ffffff" opacity="0.9" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
