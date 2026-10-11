"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function DraftingCompassCursor({
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
        data-cursor="drafting-compass"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(56,189,248,0.4))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-steel`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#f8fafc" />
            <stop offset={0.5} stopColor="#94a3b8" />
            <stop offset={1} stopColor="#475569" />
          </linearGradient>
          <radialGradient id={`${uid}-hinge`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#fef3c7" />
            <stop offset={0.6} stopColor="#f59e0b" />
            <stop offset={1} stopColor="#92400e" />
          </radialGradient>
          <linearGradient id={`${uid}-pencil`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#fde047" />
            <stop offset={1} stopColor="#ca8a04" />
          </linearGradient>
          <linearGradient
            id={`${uid}-ink`}
            x1={24.5}
            y1={29.5}
            x2={20.99}
            y2={19.86}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#38bdf8" />
            <stop offset={1} stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <motion.path
          d="M24.5 29.5 A15 15 0 0 0 20.99 19.86"
          stroke={`url(#${uid}-ink)`}
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeDasharray="10.47 40"
          initial={{ strokeDashoffset: 5.76, opacity: 1 }}
          animate={
            frozen
              ? { strokeDashoffset: 5.76, opacity: 1 }
              : isHovering
                ? { strokeDashoffset: [11.47, 0, 0], opacity: [1, 1, 0] }
                : { strokeDashoffset: [11.47, 3.93, 3.93], opacity: [1, 1, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.8 : 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.6, 1],
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.g
          initial={{ rotate: -18 }}
          animate={
            frozen
              ? { rotate: -18 }
              : isHovering
                ? { rotate: [0, -40, 0] }
                : { rotate: [0, -25, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.8 : 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.6, 1],
                }
          }
          style={{
            transformBox: "view-box",
            originX: "9.5px",
            originY: "29.5px",
          }}
        >
          <path
            d="M15.35 6.68 L9.73 26.72 L10.87 27.08 L17.45 7.32 Z"
            fill={`url(#${uid}-steel)`}
            stroke="#334155"
            strokeWidth={0.5}
            strokeLinejoin="round"
          />
          <line
            x1={10.3}
            y1={26.9}
            x2={9.5}
            y2={29.6}
            stroke="#1e293b"
            strokeWidth={0.7}
            strokeLinecap="round"
          />
          <path
            d="M16.55 7.31 L21.53 22.6 L22.87 22.2 L18.65 6.69 Z"
            fill={`url(#${uid}-steel)`}
            stroke="#334155"
            strokeWidth={0.5}
            strokeLinejoin="round"
          />
          <path
            d="M20.99 21.44 L22.69 27.14 L24.31 26.66 L22.61 20.96 Z"
            fill={`url(#${uid}-pencil)`}
            stroke="#a16207"
            strokeWidth={0.4}
            strokeLinejoin="round"
          />
          <path
            d="M22.68 27.15 L24.32 26.65 L24.5 29.5 Z"
            fill="#fcd9a8"
            stroke="#a16207"
            strokeWidth={0.3}
            strokeLinejoin="round"
          />
          <path d="M23.95 28.2 L24.5 29.5 L24.3 28.1 Z" fill="#334155" />
          <circle
            cx={22.1}
            cy={21.6}
            r={0.8}
            fill="#e2e8f0"
            stroke="#334155"
            strokeWidth={0.3}
          />
          <line
            x1={13.6}
            y1={18}
            x2={20.2}
            y2={18}
            stroke="#64748b"
            strokeWidth={0.7}
            strokeLinecap="round"
          />
          <circle
            cx={16.9}
            cy={18}
            r={0.95}
            fill={`url(#${uid}-hinge)`}
            stroke="#78350f"
            strokeWidth={0.3}
          />
          <rect
            x={15.9}
            y={0.8}
            width={2.2}
            height={4.4}
            rx={1}
            fill="#1e293b"
          />
          <path
            d="M16.1 2 H17.9 M16.1 3 H17.9 M16.1 4 H17.9"
            stroke="#64748b"
            strokeWidth={0.35}
          />
          <circle
            cx={17}
            cy={6.6}
            r={2.6}
            fill={`url(#${uid}-hinge)`}
            stroke="#78350f"
            strokeWidth={0.5}
          />
          <circle cx={17} cy={6.6} r={0.8} fill="#fef3c7" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
