"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function CassetteCursor({
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
        data-cursor="cassette"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          x={3.5}
          y={7}
          width={27}
          height={21}
          rx={3}
          fill="#f59e0b"
          fillOpacity={0.1}
        />
        <circle cx={11} cy={14} r={4} />
        <motion.path
          d="M9 14 H13 M11 12 V16"
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.8 : 3,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{ transformBox: "view-box", originX: "11px", originY: "14px" }}
        />
        <circle cx={23} cy={14} r={4} />
        <motion.path
          d="M21 14 H25 M23 12 V16"
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, -360] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.8 : 3,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{ transformBox: "view-box", originX: "23px", originY: "14px" }}
        />
        <path d="M9 28 L12 22 H22 L25 28" />
      </svg>
    </motion.div>
  );
}
