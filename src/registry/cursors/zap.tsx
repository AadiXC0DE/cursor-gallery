"use client";
import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const SPARKS = [
  { d: "M24.4 5.6 L26.6 7.2 L25.3 8 L28 9.8", delay: 0 },
  { d: "M27.4 18.6 L28.8 20.4 L27.5 20.9 L29.4 23.2", delay: 0.45 },
  { d: "M6.6 21.8 L8.8 22.4 L7.8 23.8 L10.4 24.8", delay: 0.9 },
  { d: "M8.6 8.4 L10 10.2 L8.8 10.6 L10.6 12.6", delay: 1.25 },
];

export default function ZapCursor({
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
  const reducedMotion = useReducedMotion();
  const frozen = isStatic || reducedMotion;
  const charged = !!isHovering && !frozen;
  const uid = useId().replace(/[^a-zA-Z0-9-]/g, "");

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        aria-hidden="true"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1px rgba(30,58,138,0.45)) drop-shadow(0 0 7px rgba(56,189,248,0.6))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-bolt`} x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="40%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>

        {/* Charge ring, only while hovering */}
        <motion.circle
          cx="18"
          cy="18"
          r="15"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="3 4.5"
          initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
          animate={
            charged
              ? { opacity: 0.85, scale: 1, rotate: [0, 360] }
              : { opacity: 0, scale: 0.7, rotate: 0 }
          }
          transition={
            charged
              ? {
                  opacity: { duration: 0.2 },
                  scale: { type: "spring", stiffness: 300, damping: 16 },
                  rotate: { duration: 2.4, repeat: Infinity, ease: "linear" },
                }
              : { duration: 0.2 }
          }
          style={{ transformBox: "view-box", originX: "18px", originY: "18px" }}
        />

        {/* Crackling sparks */}
        {SPARKS.map((spark) => (
          <motion.path
            key={spark.d}
            d={spark.d}
            fill="none"
            stroke="#7dd3fc"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0.8 }}
            animate={
              frozen ? { opacity: 0.8 } : { opacity: [0, 1, 0.2, 1, 0, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: charged ? 0.5 : 1.6,
                    times: [0, 0.08, 0.14, 0.2, 0.3, 1],
                    repeat: Infinity,
                    delay: charged ? spark.delay / 4 : spark.delay,
                  }
            }
          />
        ))}

        {/* The bolt: punches in on hover, flashes on a pulse */}
        <motion.g
          initial={{ scale: 1, rotate: 0 }}
          animate={
            frozen
              ? { scale: 1, rotate: 0 }
              : charged
                ? { scale: [1.12, 1.18, 1.12], rotate: -8 }
                : { scale: [1, 1, 1.07, 1, 1], rotate: 0 }
          }
          transition={
            frozen
              ? { duration: 0 }
              : charged
                ? {
                    scale: { duration: 0.25, repeat: Infinity },
                    rotate: { type: "spring", stiffness: 300, damping: 14 },
                  }
                : {
                    duration: 1.6,
                    times: [0, 0.05, 0.12, 0.22, 1],
                    repeat: Infinity,
                  }
          }
          style={{ transformBox: "view-box", originX: "18px", originY: "18px" }}
        >
          <path
            d="M20.6 3.5 L9.4 19.4 H16.6 L14.4 32.5 L26.6 15.6 H19.2 Z"
            fill={`url(#${uid}-bolt)`}
            stroke="#1e3a8a"
            strokeWidth="0.85"
            strokeLinejoin="round"
          />
          {/* Facet highlight */}
          <path
            d="M20.6 3.5 L9.4 19.4 H12.3 L19.4 8.7 Z"
            fill="#ffffff"
            opacity="0.6"
          />
          <path
            d="M19.2 15.6 H26.6 L24.9 18 H18.8 Z"
            fill="#ffffff"
            opacity="0.35"
          />
          {/* Flash */}
          <motion.path
            d="M20.6 3.5 L9.4 19.4 H16.6 L14.4 32.5 L26.6 15.6 H19.2 Z"
            fill="#ffffff"
            initial={{ opacity: 0 }}
            animate={
              frozen
                ? { opacity: 0 }
                : charged
                  ? { opacity: [0, 0.55, 0] }
                  : { opacity: [0, 0, 0.7, 0, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : charged
                  ? { duration: 0.25, repeat: Infinity }
                  : {
                      duration: 1.6,
                      times: [0, 0.05, 0.1, 0.22, 1],
                      repeat: Infinity,
                    }
            }
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
