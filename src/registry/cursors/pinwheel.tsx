"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function PinwheelCursor({
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
        data-cursor="pinwheel"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(244,114,182,0.35))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-stick`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#fde68a" />
            <stop offset={1} stopColor="#b45309" />
          </linearGradient>
        </defs>
        <motion.path
          d="M2.4 9 q2 -1 4 0 M1.6 13 q2.4 -1 4.8 0 M2.4 17 q2 -1 4 0"
          stroke="#7dd3fc"
          strokeWidth={0.7}
          strokeLinecap="round"
          initial={{ x: 0, opacity: 0.8 }}
          animate={
            frozen
              ? { x: 0, opacity: 0.8 }
              : { x: [-1.5, 1.5], opacity: [0, 1] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.4 : 1,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <line
          x1={17}
          y1={13}
          x2={17}
          y2={32}
          stroke="#78350f"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <line
          x1={17}
          y1={13}
          x2={17}
          y2={32}
          stroke={`url(#${uid}-stick)`}
          strokeWidth={1.3}
          strokeLinecap="round"
        />
        <motion.g
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.5 : 2.4,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "13px" }}
        >
          <path
            d="M17 13 L17 3 C21.6 3 25.4 6 26.2 10.6 Z"
            fill="#f472b6"
            stroke="#be185d"
            strokeWidth={0.4}
            strokeLinejoin="round"
            transform="rotate(0 17 13)"
          />
          <path
            d="M17 13 L21 4.2 C23.6 5.4 25.6 7.8 26.2 10.6 Z"
            fill="#be185d"
            opacity={0.55}
            transform="rotate(0 17 13)"
          />
          <path
            d="M17 13 L17 3 C21.6 3 25.4 6 26.2 10.6 Z"
            fill="#fde047"
            stroke="#ca8a04"
            strokeWidth={0.4}
            strokeLinejoin="round"
            transform="rotate(90 17 13)"
          />
          <path
            d="M17 13 L21 4.2 C23.6 5.4 25.6 7.8 26.2 10.6 Z"
            fill="#ca8a04"
            opacity={0.55}
            transform="rotate(90 17 13)"
          />
          <path
            d="M17 13 L17 3 C21.6 3 25.4 6 26.2 10.6 Z"
            fill="#22d3ee"
            stroke="#0e7490"
            strokeWidth={0.4}
            strokeLinejoin="round"
            transform="rotate(180 17 13)"
          />
          <path
            d="M17 13 L21 4.2 C23.6 5.4 25.6 7.8 26.2 10.6 Z"
            fill="#0e7490"
            opacity={0.55}
            transform="rotate(180 17 13)"
          />
          <path
            d="M17 13 L17 3 C21.6 3 25.4 6 26.2 10.6 Z"
            fill="#a78bfa"
            stroke="#6d28d9"
            strokeWidth={0.4}
            strokeLinejoin="round"
            transform="rotate(270 17 13)"
          />
          <path
            d="M17 13 L21 4.2 C23.6 5.4 25.6 7.8 26.2 10.6 Z"
            fill="#6d28d9"
            opacity={0.55}
            transform="rotate(270 17 13)"
          />
        </motion.g>
        <circle
          cx={17}
          cy={13}
          r={1.6}
          fill="#ffffff"
          stroke="#64748b"
          strokeWidth={0.4}
        />
        <circle cx={17} cy={13} r={0.6} fill="#64748b" />
      </svg>
    </motion.div>
  );
}
