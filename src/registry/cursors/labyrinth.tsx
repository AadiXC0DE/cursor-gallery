"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function LabyrinthCursor({
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
  // Gradient and clip ids must be unique per instance; the gallery mounts several.
  const uid = useId().replace(/[^\w-]/g, "");
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        aria-hidden="true"
        data-cursor="labyrinth"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(103,232,249,0.45))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-floor`} cx="50%" cy="50%" r="50%">
            <stop offset={0} stopColor="#1e3a8a" />
            <stop offset={1} stopColor="#0f172a" />
          </radialGradient>
          <linearGradient id={`${uid}-gold`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#fde68a" />
            <stop offset={0.5} stopColor="#fbbf24" />
            <stop offset={1} stopColor="#d97706" />
          </linearGradient>
        </defs>
        <circle
          cx={17}
          cy={17}
          r={14.2}
          fill={`url(#${uid}-floor)`}
          stroke="#fbbf24"
          strokeWidth={0.6}
        />
        <path
          d="M14.42 29.13 A12.4 12.4 0 1 1 19.58 29.13 M23.99 23.29 A9.4 9.4 0 1 1 25.94 19.9 M13.61 22.43 A6.4 6.4 0 1 1 16.11 23.34 M20.23 15.95 A3.4 3.4 0 1 1 19.53 14.72 M19.43 26.08 L20.21 28.98 M21.53 21.53 L23.65 23.65 M16.7 20.39 L16.44 23.38"
          stroke={`url(#${uid}-gold)`}
          strokeWidth={1.3}
          strokeLinecap="round"
        />
        <motion.path
          d="M17 31.4 L17 27.9 A10.9 10.9 0 1 1 26.44 22.45 L23.84 20.95 A7.9 7.9 0 1 0 14.3 24.42 L15.32 21.6 A4.9 4.9 0 1 1 21.24 14.55 L17 17"
          stroke="#67e8f9"
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="4 148.89"
          opacity={0.45}
          initial={{ strokeDashoffset: -37.24 }}
          animate={
            frozen
              ? { strokeDashoffset: -37.24 }
              : { strokeDashoffset: [4, -124.89, -124.89] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 3 : 7,
                  repeat: Infinity,
                  ease: "linear",
                  times: [0, 0.85, 1],
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.path
          d="M17 31.4 L17 27.9 A10.9 10.9 0 1 1 26.44 22.45 L23.84 20.95 A7.9 7.9 0 1 0 14.3 24.42 L15.32 21.6 A4.9 4.9 0 1 1 21.24 14.55 L17 17"
          stroke="#ecfeff"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0.01 148.89"
          initial={{ strokeDashoffset: -41.24 }}
          animate={
            frozen
              ? { strokeDashoffset: -41.24 }
              : { strokeDashoffset: [0, -128.89, -128.89] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 3 : 7,
                  repeat: Infinity,
                  ease: "linear",
                  times: [0, 0.85, 1],
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.path
          d="M17 14.6 Q17 17 19.4 17 Q17 17 17 19.4 Q17 17 14.6 17 Q17 17 17 14.6 Z"
          fill="#f9a8d4"
          stroke="#ffffff"
          strokeWidth={0.3}
          initial={{ scale: 1, rotate: 0 }}
          animate={
            frozen
              ? { scale: 1, rotate: 0 }
              : { scale: [1, 1, 1.6, 1], rotate: [0, 0, 45, 90] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 3 : 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.82, 0.9, 1],
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
      </svg>
    </motion.div>
  );
}
