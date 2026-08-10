"use client";

import { motion } from "framer-motion";

const CENTER = 17;
const BLADE_COUNT = 6;

export default function ApertureCursor({
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
  const blades = Array.from({ length: BLADE_COUNT }, (_, i) => {
    const a = (i * 360) / BLADE_COUNT;
    const rad = (a * Math.PI) / 180;
    const rad2 = ((a + 44) * Math.PI) / 180;
    return {
      x1: CENTER + 13 * Math.cos(rad),
      y1: CENTER + 13 * Math.sin(rad),
      x2: CENTER + 5.5 * Math.cos(rad2),
      y2: CENTER + 5.5 * Math.sin(rad2),
    };
  });

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          rotate: isStatic ? 0 : 360,
          scale: isHovering ? 1.25 : 1,
        }}
        transition={{
          rotate: { duration: 9, repeat: Infinity, ease: "linear" },
          scale: { type: "spring", stiffness: 320, damping: 20 },
        }}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          style={{
            filter: "drop-shadow(0 0 6px rgba(45,212,191,0.45))",
          }}
        >
          <circle
            cx={CENTER}
            cy={CENTER}
            r="15.5"
            fill="none"
            stroke="#2dd4bf"
            strokeWidth="1.5"
            opacity="0.9"
          />
          <circle
            cx={CENTER}
            cy={CENTER}
            r="4"
            fill="none"
            stroke="#2dd4bf"
            strokeWidth="1.2"
            opacity="0.8"
          />
          {blades.map((b, i) => (
            <line
              key={i}
              x1={b.x1}
              y1={b.y1}
              x2={b.x2}
              y2={b.y2}
              stroke="#5eead4"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </motion.div>
      {/* Center pip */}
      <div className="absolute left-1/2 top-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300" />
    </motion.div>
  );
}
