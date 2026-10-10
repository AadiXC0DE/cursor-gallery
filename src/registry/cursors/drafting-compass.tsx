"use client";

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
        stroke="#a78bfa"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 3 V7" strokeWidth={2.25} />
        <circle cx={17} cy={8} r={2} fill="#a78bfa" stroke="none" />
        <path d="M13 17 H21" strokeWidth={1.75} />
        <motion.path
          d="M17 8 L9 28"
          strokeWidth={2.25}
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, 10, 0] }
                : { rotate: [0, -3, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.8 : 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "8px" }}
        />
        <motion.path
          d="M17 8 L25 28"
          strokeWidth={2.25}
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, -10, 0] }
                : { rotate: [0, 3, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.8 : 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "8px" }}
        />
      </svg>
    </motion.div>
  );
}
