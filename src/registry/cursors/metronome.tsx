"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function MetronomeCursor({
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
        data-cursor="metronome"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(217,119,6,0.35))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-wood`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#c2410c" />
            <stop offset={0.5} stopColor="#9a3412" />
            <stop offset={1} stopColor="#431407" />
          </linearGradient>
          <linearGradient id={`${uid}-panel`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#fef3c7" />
            <stop offset={1} stopColor="#fcd34d" />
          </linearGradient>
          <linearGradient id={`${uid}-steel`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#f8fafc" />
            <stop offset={1} stopColor="#64748b" />
          </linearGradient>
          <linearGradient id={`${uid}-gold`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#fef08a" />
            <stop offset={1} stopColor="#b45309" />
          </linearGradient>
        </defs>
        <motion.path
          d="M6.8 5.6 L5.4 4.4 M6.8 7 L5 7 M6.8 8.4 L5.4 9.6"
          stroke="#fbbf24"
          strokeWidth={0.7}
          strokeLinecap="round"
          initial={{ opacity: 1 }}
          animate={frozen ? { opacity: 1 } : { opacity: [1, 0, 0, 0, 1] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.6 : 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.12, 0.5, 0.88, 1],
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.path
          d="M27.2 5.6 L28.6 4.4 M27.2 7 L29 7 M27.2 8.4 L28.6 9.6"
          stroke="#fbbf24"
          strokeWidth={0.7}
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={frozen ? { opacity: 0 } : { opacity: [0, 0, 1, 0, 0] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.6 : 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.38, 0.5, 0.62, 1],
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <path
          d="M12.6 4.4 H21.4 L27.2 29 H6.8 Z"
          fill={`url(#${uid}-wood)`}
          stroke="#292524"
          strokeWidth={0.7}
          strokeLinejoin="round"
        />
        <rect
          x={12}
          y={3}
          width={10}
          height={1.8}
          rx={0.9}
          fill="#7c2d12"
          stroke="#292524"
          strokeWidth={0.4}
        />
        <path
          d="M14.4 6.8 H19.6 L22.6 25 H11.4 Z"
          fill={`url(#${uid}-panel)`}
          stroke="#78350f"
          strokeWidth={0.4}
          strokeLinejoin="round"
        />
        <path
          d="M15.4 9 H18.6 M16.1 10.75 H17.9 M15.4 12.5 H18.6 M16.1 14.25 H17.9 M15.4 16 H18.6 M16.1 17.75 H17.9 M15.4 19.5 H18.6 M16.1 21.25 H17.9 M15.4 23 H18.6"
          stroke="#78350f"
          strokeWidth={0.4}
          opacity={0.7}
        />
        <path
          d="M13.2 5.4 L8 28"
          stroke="#ffffff"
          strokeWidth={0.6}
          strokeLinecap="round"
          opacity={0.3}
        />
        <motion.g
          initial={{ rotate: -16 }}
          animate={frozen ? { rotate: -16 } : { rotate: [-24, 24, -24] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.6 : 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "25px" }}
        >
          <line
            x1={17}
            y1={25}
            x2={17}
            y2={6.4}
            stroke={`url(#${uid}-steel)`}
            strokeWidth={1}
            strokeLinecap="round"
          />
          <path
            d="M15.3 11 H18.7 L18.2 14 H15.8 Z"
            fill={`url(#${uid}-gold)`}
            stroke="#78350f"
            strokeWidth={0.4}
            strokeLinejoin="round"
          />
        </motion.g>
        <circle
          cx={17}
          cy={25}
          r={1.2}
          fill={`url(#${uid}-gold)`}
          stroke="#78350f"
          strokeWidth={0.4}
        />
        <rect
          x={5}
          y={28.6}
          width={24}
          height={2.8}
          rx={1.2}
          fill="#431407"
          stroke="#1c1917"
          strokeWidth={0.5}
        />
      </svg>
    </motion.div>
  );
}
