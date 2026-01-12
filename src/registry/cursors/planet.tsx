"use client";
import { motion } from "framer-motion";

export default function PlanetCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="8" fill="url(#planetGrad)" />
        <ellipse
          cx="14"
          cy="14"
          rx="13"
          ry="4"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          transform="rotate(-20 14 14)"
        />
        <defs>
          <linearGradient id="planetGrad" x1="6" y1="6" x2="22" y2="22">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
