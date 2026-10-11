"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function NewtonsCradleCursor({
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
        data-cursor="newtons-cradle"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(148,163,184,0.45))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-ball`} cx="35%" cy="30%" r="70%">
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={0.35} stopColor="#e2e8f0" />
            <stop offset={0.75} stopColor="#64748b" />
            <stop offset={1} stopColor="#1e293b" />
          </radialGradient>
          <linearGradient id={`${uid}-bar`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#e2e8f0" />
            <stop offset={1} stopColor="#475569" />
          </linearGradient>
          <linearGradient id={`${uid}-post`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#94a3b8" />
            <stop offset={1} stopColor="#334155" />
          </linearGradient>
          <linearGradient id={`${uid}-base`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#334155" />
            <stop offset={1} stopColor="#0f172a" />
          </linearGradient>
        </defs>
        <rect
          x={1.5}
          y={27.4}
          width={31}
          height={3.4}
          rx={1.7}
          fill={`url(#${uid}-base)`}
          stroke="#020617"
          strokeWidth={0.5}
        />
        <path
          d="M3.2 28.4 H30.8"
          stroke="#ffffff"
          strokeWidth={0.6}
          strokeLinecap="round"
          opacity={0.25}
        />
        <rect
          x={3}
          y={5}
          width={1.8}
          height={22.8}
          rx={0.9}
          fill={`url(#${uid}-post)`}
        />
        <rect
          x={29.2}
          y={5}
          width={1.8}
          height={22.8}
          rx={0.9}
          fill={`url(#${uid}-post)`}
        />
        <rect
          x={2.4}
          y={4.4}
          width={29.2}
          height={2.2}
          rx={1.1}
          fill={`url(#${uid}-bar)`}
          stroke="#1e293b"
          strokeWidth={0.4}
        />
        <motion.g
          initial={{ rotate: 26 }}
          animate={
            frozen
              ? { rotate: 26 }
              : isHovering
                ? { rotate: [38, 0, 0, 0, 38] }
                : { rotate: [26, 0, 0, 0, 26] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.1 : 1.5,
                  repeat: Infinity,
                  ease: ["easeIn", "linear", "linear", "easeOut"],
                  times: [0, 0.25, 0.5, 0.75, 1],
                }
          }
          style={{
            transformBox: "view-box",
            originX: "6.6px",
            originY: "6.6px",
          }}
        >
          <path
            d="M5 6.6 L6.6 20 L8.2 6.6"
            stroke="#94a3b8"
            strokeWidth={0.45}
            strokeLinejoin="round"
          />
          <circle
            cx={6.6}
            cy={22.4}
            r={2.55}
            fill={`url(#${uid}-ball)`}
            stroke="#1e293b"
            strokeWidth={0.35}
          />
          <circle cx={5.8} cy={21.5} r={0.55} fill="#ffffff" opacity={0.9} />
        </motion.g>
        <path
          d="M10.2 6.6 L11.8 20 L13.4 6.6"
          stroke="#94a3b8"
          strokeWidth={0.45}
          strokeLinejoin="round"
        />
        <circle
          cx={11.8}
          cy={22.4}
          r={2.55}
          fill={`url(#${uid}-ball)`}
          stroke="#1e293b"
          strokeWidth={0.35}
        />
        <circle cx={11} cy={21.5} r={0.55} fill="#ffffff" opacity={0.9} />
        <path
          d="M15.4 6.6 L17 20 L18.6 6.6"
          stroke="#94a3b8"
          strokeWidth={0.45}
          strokeLinejoin="round"
        />
        <circle
          cx={17}
          cy={22.4}
          r={2.55}
          fill={`url(#${uid}-ball)`}
          stroke="#1e293b"
          strokeWidth={0.35}
        />
        <circle cx={16.2} cy={21.5} r={0.55} fill="#ffffff" opacity={0.9} />
        <path
          d="M20.6 6.6 L22.2 20 L23.8 6.6"
          stroke="#94a3b8"
          strokeWidth={0.45}
          strokeLinejoin="round"
        />
        <circle
          cx={22.2}
          cy={22.4}
          r={2.55}
          fill={`url(#${uid}-ball)`}
          stroke="#1e293b"
          strokeWidth={0.35}
        />
        <circle cx={21.4} cy={21.5} r={0.55} fill="#ffffff" opacity={0.9} />
        <motion.g
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, 0, -38, 0, 0] }
                : { rotate: [0, 0, -26, 0, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.1 : 1.5,
                  repeat: Infinity,
                  ease: ["linear", "easeOut", "easeIn", "linear"],
                  times: [0, 0.25, 0.5, 0.75, 1],
                }
          }
          style={{
            transformBox: "view-box",
            originX: "27.4px",
            originY: "6.6px",
          }}
        >
          <path
            d="M25.8 6.6 L27.4 20 L29 6.6"
            stroke="#94a3b8"
            strokeWidth={0.45}
            strokeLinejoin="round"
          />
          <circle
            cx={27.4}
            cy={22.4}
            r={2.55}
            fill={`url(#${uid}-ball)`}
            stroke="#1e293b"
            strokeWidth={0.35}
          />
          <circle cx={26.6} cy={21.5} r={0.55} fill="#ffffff" opacity={0.9} />
        </motion.g>
      </svg>
    </motion.div>
  );
}
