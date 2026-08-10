"use client";

import { motion } from "framer-motion";

export default function TerminalCursor({
  x,
  y,
  isHovering,
}: {
  x: number;
  y: number;
  isHovering?: boolean;
}) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      {/* Prompt chevron */}
      <svg
        width="12"
        height="16"
        viewBox="0 0 12 16"
        className="mr-[3px]"
        style={{ filter: "drop-shadow(0 0 4px rgba(52,211,153,0.6))" }}
      >
        <path
          d="M2 2 L9 8 L2 14"
          fill="none"
          stroke="#34d399"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Blinking block caret */}
      <motion.div
        className="w-[11px] h-[20px] rounded-[2px] bg-emerald-400"
        style={{
          boxShadow:
            "0 0 12px rgba(52,211,153,0.8), 0 0 32px rgba(52,211,153,0.35)",
          transformOrigin: "bottom center",
        }}
        animate={{
          opacity: [1, 1, 0, 0],
          scaleY: isHovering ? 0.25 : 1,
        }}
        transition={{
          opacity: {
            duration: 1.06,
            repeat: Infinity,
            times: [0, 0.5, 0.5, 1],
            ease: "linear",
          },
          scaleY: { type: "spring", stiffness: 500, damping: 26 },
        }}
      />
    </motion.div>
  );
}
