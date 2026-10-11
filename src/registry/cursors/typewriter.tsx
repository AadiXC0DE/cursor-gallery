"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function TypewriterCursor({
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
        data-cursor="typewriter"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(45,212,191,0.4))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-body`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#99f6e4" />
            <stop offset={0.35} stopColor="#2dd4bf" />
            <stop offset={1} stopColor="#0f766e" />
          </linearGradient>
          <linearGradient id={`${uid}-roller`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#475569" />
            <stop offset={1} stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id={`${uid}-paper`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={1} stopColor="#f1f5f9" />
          </linearGradient>
          <radialGradient id={`${uid}-key`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={1} stopColor="#e7e5e4" />
          </radialGradient>
        </defs>
        <motion.g
          initial={{ x: 0 }}
          animate={frozen ? { x: 0 } : { x: [3, 1.5, 0, -1.5, -3, 3] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.4 : 3,
                  repeat: Infinity,
                  ease: [
                    "easeOut",
                    "easeOut",
                    "easeOut",
                    "easeOut",
                    "easeInOut",
                  ],
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <rect
            x={10}
            y={1.5}
            width={14}
            height={12}
            rx={0.8}
            fill={`url(#${uid}-paper)`}
            stroke="#94a3b8"
            strokeWidth={0.5}
          />
          <path
            d="M12 4 H22 M12 6.2 H20.5 M12 8.4 H21.5"
            stroke="#94a3b8"
            strokeWidth={0.7}
            strokeLinecap="round"
          />
          <motion.path
            d="M12 10.6 H18.2"
            stroke="#334155"
            strokeWidth={0.8}
            strokeLinecap="round"
            initial={{ scaleX: 0.55 }}
            animate={
              frozen
                ? { scaleX: 0.55 }
                : { scaleX: [0.08, 0.3, 0.55, 0.8, 1, 0.08] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1.4 : 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "12px",
              originY: "10.6px",
            }}
          />
          <rect
            x={6}
            y={11.6}
            width={22}
            height={3.6}
            rx={1.8}
            fill={`url(#${uid}-roller)`}
            stroke="#020617"
            strokeWidth={0.4}
          />
          <path
            d="M7.4 12.5 H26.6"
            stroke="#ffffff"
            strokeWidth={0.6}
            strokeLinecap="round"
            opacity={0.3}
          />
          <circle
            cx={5.4}
            cy={13.4}
            r={2}
            fill="#e2e8f0"
            stroke="#475569"
            strokeWidth={0.5}
          />
          <circle
            cx={28.6}
            cy={13.4}
            r={2}
            fill="#e2e8f0"
            stroke="#475569"
            strokeWidth={0.5}
          />
          <circle cx={5.4} cy={13.4} r={0.7} fill="#94a3b8" />
          <circle cx={28.6} cy={13.4} r={0.7} fill="#94a3b8" />
          <path
            d="M6.2 11.2 L3.4 8.6"
            stroke="#cbd5e1"
            strokeWidth={1}
            strokeLinecap="round"
          />
          <circle
            cx={3.1}
            cy={8.3}
            r={0.8}
            fill="#e2e8f0"
            stroke="#475569"
            strokeWidth={0.3}
          />
        </motion.g>
        <path
          d="M5.6 16 H28.4 L31.4 27.2 C31.6 28.2 30.9 29 29.9 29 H4.1 C3.1 29 2.4 28.2 2.6 27.2 Z"
          fill={`url(#${uid}-body)`}
          stroke="#134e4a"
          strokeWidth={0.8}
          strokeLinejoin="round"
        />
        <rect x={5} y={15.4} width={24} height={1.6} rx={0.8} fill="#0f766e" />
        <path
          d="M15.6 15.4 L17 13.9 L18.4 15.4 Z"
          fill="#e2e8f0"
          stroke="#475569"
          strokeWidth={0.3}
        />
        <path
          d="M6.8 17.8 H27.2"
          stroke="#ffffff"
          strokeWidth={0.7}
          strokeLinecap="round"
          opacity={0.45}
        />
        <circle
          cx={8.6}
          cy={20.4}
          r={1.35}
          fill={`url(#${uid}-key)`}
          stroke="#1f2937"
          strokeWidth={0.6}
        />
        <motion.circle
          cx={12.8}
          cy={20.4}
          r={1.35}
          fill={`url(#${uid}-key)`}
          stroke="#1f2937"
          strokeWidth={0.6}
          initial={{ y: 0 }}
          animate={frozen ? { y: 0 } : { y: [0, 0.8, 0, 0] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.3 : 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.12, 0.25, 1],
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <circle
          cx={17}
          cy={20.4}
          r={1.35}
          fill={`url(#${uid}-key)`}
          stroke="#1f2937"
          strokeWidth={0.6}
        />
        <motion.circle
          cx={21.2}
          cy={20.4}
          r={1.35}
          fill={`url(#${uid}-key)`}
          stroke="#1f2937"
          strokeWidth={0.6}
          initial={{ y: 0 }}
          animate={frozen ? { y: 0 } : { y: [0, 0.8, 0, 0] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.3 : 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.12, 0.25, 1],
                  delay: 0.2,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <circle
          cx={25.4}
          cy={20.4}
          r={1.35}
          fill={`url(#${uid}-key)`}
          stroke="#1f2937"
          strokeWidth={0.6}
        />
        <circle
          cx={6.6}
          cy={24}
          r={1.35}
          fill={`url(#${uid}-key)`}
          stroke="#1f2937"
          strokeWidth={0.6}
        />
        <circle
          cx={10.8}
          cy={24}
          r={1.35}
          fill={`url(#${uid}-key)`}
          stroke="#1f2937"
          strokeWidth={0.6}
        />
        <motion.circle
          cx={15}
          cy={24}
          r={1.35}
          fill={`url(#${uid}-key)`}
          stroke="#1f2937"
          strokeWidth={0.6}
          initial={{ y: 0 }}
          animate={frozen ? { y: 0 } : { y: [0, 0.8, 0, 0] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.3 : 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.12, 0.25, 1],
                  delay: 0.4,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <circle
          cx={19.2}
          cy={24}
          r={1.35}
          fill={`url(#${uid}-key)`}
          stroke="#1f2937"
          strokeWidth={0.6}
        />
        <circle
          cx={23.4}
          cy={24}
          r={1.35}
          fill={`url(#${uid}-key)`}
          stroke="#1f2937"
          strokeWidth={0.6}
        />
        <circle
          cx={27.6}
          cy={24}
          r={1.35}
          fill={`url(#${uid}-key)`}
          stroke="#1f2937"
          strokeWidth={0.6}
        />
        <rect
          x={10.4}
          y={26.3}
          width={13.2}
          height={1.6}
          rx={0.8}
          fill={`url(#${uid}-key)`}
          stroke="#1f2937"
          strokeWidth={0.5}
        />
      </svg>
    </motion.div>
  );
}
