"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function CompassCursor({
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
        data-cursor="compass"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(245,158,11,0.35))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-brass`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#fef3c7" />
            <stop offset={0.4} stopColor="#f59e0b" />
            <stop offset={1} stopColor="#78350f" />
          </linearGradient>
          <radialGradient id={`${uid}-face`} cx="45%" cy="40%" r="70%">
            <stop offset={0} stopColor="#fffbeb" />
            <stop offset={1} stopColor="#fde68a" />
          </radialGradient>
          <linearGradient id={`${uid}-north`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#f87171" />
            <stop offset={1} stopColor="#b91c1c" />
          </linearGradient>
          <linearGradient id={`${uid}-south`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#f8fafc" />
            <stop offset={1} stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        <circle
          cx={17}
          cy={3.4}
          r={1.7}
          stroke={`url(#${uid}-brass)`}
          strokeWidth={1.1}
        />
        <circle
          cx={17}
          cy={17}
          r={12.4}
          fill={`url(#${uid}-brass)`}
          stroke="#78350f"
          strokeWidth={0.6}
        />
        <circle
          cx={17}
          cy={17}
          r={10.2}
          fill={`url(#${uid}-face)`}
          stroke="#92400e"
          strokeWidth={0.5}
        />
        <path
          d="M26 17 L24.4 17 M24.79 21.5 L23.93 21 M21.5 24.79 L21 23.93 M17 26 L17 24.4 M12.5 24.79 L13 23.93 M9.21 21.5 L10.07 21 M8 17 L9.6 17 M9.21 12.5 L10.07 13 M12.5 9.21 L13 10.07 M17 8 L17 9.6 M21.5 9.21 L21 10.07 M24.79 12.5 L23.93 13"
          stroke="#78350f"
          strokeWidth={0.55}
          strokeLinecap="round"
        />
        <path
          d="M17 10.4 Q17 17 23.6 17 Q17 17 17 23.6 Q17 17 10.4 17 Q17 17 17 10.4 Z"
          fill="#d6d3d1"
          opacity={0.5}
        />
        <path d="M17 7.4 L18.2 9.6 H15.8 Z" fill="#dc2626" />
        <motion.g
          initial={{ rotate: -8 }}
          animate={
            frozen
              ? { rotate: -8 }
              : isHovering
                ? { rotate: [0, 120, 300, 390, 350, 365, 360] }
                : { rotate: [-14, 9, -5, 3, -1, 0, -14] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 2 : 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <path
            d="M17 7.6 L19 17 H15 Z"
            fill={`url(#${uid}-north)`}
            stroke="#7f1d1d"
            strokeWidth={0.35}
            strokeLinejoin="round"
          />
          <path
            d="M17 26.4 L19 17 H15 Z"
            fill={`url(#${uid}-south)`}
            stroke="#475569"
            strokeWidth={0.35}
            strokeLinejoin="round"
          />
        </motion.g>
        <circle
          cx={17}
          cy={17}
          r={1.4}
          fill={`url(#${uid}-brass)`}
          stroke="#78350f"
          strokeWidth={0.4}
        />
        <path
          d="M9.4 12 A9 9 0 0 1 15 7.8"
          stroke="#ffffff"
          strokeWidth={1.2}
          strokeLinecap="round"
          opacity={0.6}
        />
      </svg>
    </motion.div>
  );
}
