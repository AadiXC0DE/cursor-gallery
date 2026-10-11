"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function CaliperCursor({
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
        data-cursor="caliper"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(251,146,60,0.35))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-steel`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#f8fafc" />
            <stop offset={0.5} stopColor="#cbd5e1" />
            <stop offset={1} stopColor="#64748b" />
          </linearGradient>
          <linearGradient id={`${uid}-slider`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#64748b" />
            <stop offset={1} stopColor="#1e293b" />
          </linearGradient>
          <radialGradient id={`${uid}-bead`} cx="38%" cy="32%" r="70%">
            <stop offset={0} stopColor="#fed7aa" />
            <stop offset={0.5} stopColor="#fb923c" />
            <stop offset={1} stopColor="#c2410c" />
          </radialGradient>
          <radialGradient id={`${uid}-wheel`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#fef3c7" />
            <stop offset={1} stopColor="#b45309" />
          </radialGradient>
        </defs>
        <motion.g
          initial={{ scaleX: 1 }}
          animate={
            frozen
              ? { scaleX: 1 }
              : isHovering
                ? { scaleX: [1, 1, 0.86, 0.86, 1] }
                : { scaleX: [1, 1, 0.94, 0.94, 1] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.6 : 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.45, 0.75, 1],
                }
          }
          style={{
            transformBox: "view-box",
            originX: "10.1px",
            originY: "23.4px",
          }}
        >
          <circle
            cx={10.1}
            cy={23.4}
            r={3}
            fill={`url(#${uid}-bead)`}
            stroke="#9a3412"
            strokeWidth={0.5}
          />
          <circle cx={9.1} cy={22.4} r={0.85} fill="#ffffff" opacity={0.9} />
        </motion.g>
        <rect
          x={2}
          y={8.6}
          width={30}
          height={4.6}
          rx={1}
          fill={`url(#${uid}-steel)`}
          stroke="#334155"
          strokeWidth={0.6}
        />
        <path
          d="M8.4 8.6 V10.6 M9.52 8.6 V9.7 M10.64 8.6 V9.7 M11.76 8.6 V9.7 M12.88 8.6 V9.7 M14 8.6 V10.6 M15.12 8.6 V9.7 M16.24 8.6 V9.7 M17.36 8.6 V9.7 M18.48 8.6 V9.7 M19.6 8.6 V10.6 M20.72 8.6 V9.7 M21.84 8.6 V9.7 M22.96 8.6 V9.7 M24.08 8.6 V9.7 M25.2 8.6 V10.6 M26.32 8.6 V9.7 M27.44 8.6 V9.7 M28.56 8.6 V9.7 M29.68 8.6 V9.7 M30.8 8.6 V10.6"
          stroke="#334155"
          strokeWidth={0.35}
        />
        <path
          d="M3 12.2 H31"
          stroke="#ffffff"
          strokeWidth={0.5}
          strokeLinecap="round"
          opacity={0.6}
        />
        <path
          d="M2 13 V24 C2 26 4 28.6 6.8 30.6 L7.1 30.6 V13 Z"
          fill={`url(#${uid}-steel)`}
          stroke="#334155"
          strokeWidth={0.6}
          strokeLinejoin="round"
        />
        <path
          d="M3 8.6 V4.6 C3 4 3.6 3.6 4.2 3.8 L6.2 5 V8.6 Z"
          fill={`url(#${uid}-steel)`}
          stroke="#334155"
          strokeWidth={0.6}
          strokeLinejoin="round"
        />
        <motion.g
          initial={{ x: 3 }}
          animate={
            frozen
              ? { x: 3 }
              : isHovering
                ? { x: [3, 3, -0.8, -0.8, 3] }
                : { x: [3, 3, -0.3, -0.3, 3] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.6 : 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.45, 0.75, 1],
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <path
            d="M13.1 13 V30.6 L13.4 30.6 C16.2 28.6 18.2 26 18.2 24 V13 Z"
            fill={`url(#${uid}-steel)`}
            stroke="#334155"
            strokeWidth={0.6}
            strokeLinejoin="round"
          />
          <path
            d="M13.1 8.6 V5 L15 3.8 C15.6 3.6 16.2 4 16.2 4.6 V8.6 Z"
            fill={`url(#${uid}-steel)`}
            stroke="#334155"
            strokeWidth={0.6}
            strokeLinejoin="round"
          />
          <rect
            x={12.4}
            y={7.4}
            width={10}
            height={7.4}
            rx={1.4}
            fill={`url(#${uid}-slider)`}
            stroke="#0f172a"
            strokeWidth={0.5}
          />
          <rect
            x={14}
            y={9.1}
            width={6.8}
            height={2.6}
            rx={0.6}
            fill="#e2e8f0"
          />
          <path
            d="M15 9.1 V10.3 M16.2 9.1 V10 M17.4 9.1 V10.3 M18.6 9.1 V10 M19.8 9.1 V10.3"
            stroke="#334155"
            strokeWidth={0.3}
          />
          <circle
            cx={17.4}
            cy={16.2}
            r={1.5}
            fill={`url(#${uid}-wheel)`}
            stroke="#78350f"
            strokeWidth={0.4}
          />
          <circle
            cx={21.2}
            cy={8.2}
            r={0.75}
            fill="#cbd5e1"
            stroke="#334155"
            strokeWidth={0.3}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
