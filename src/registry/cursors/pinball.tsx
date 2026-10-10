"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function PinballCursor({
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
        data-cursor="pinball"
        fill="none"
        stroke="#fb7185"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M6 30 V7 Q6 3 10 3 H24 Q28 3 28 7 V30 Z"
          fill="#fb7185"
          fillOpacity={0.08}
        />
        <path d="M24 5 V25" opacity={0.7} />
        <circle cx={12} cy={11} r={2.25} fill="#fb7185" fillOpacity={0.2} />
        <motion.path
          d="M9 24 L15 26 L14 28 L8 26 Z"
          fill="#fb7185"
          strokeWidth={1.75}
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, -30, 0] }
                : { rotate: [0, -5, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.7 : 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "9px", originY: "25px" }}
        />
        <motion.path
          d="M23 24 L17 26 L18 28 L24 26 Z"
          fill="#fb7185"
          strokeWidth={1.75}
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, 30, 0] }
                : { rotate: [0, 5, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.7 : 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "23px", originY: "25px" }}
        />
        <motion.path
          d="M24 27 H29 M26.5 27 V30"
          strokeWidth={2.25}
          initial={{ y: 0 }}
          animate={
            frozen
              ? { y: 0 }
              : isHovering
                ? { y: [0, 1, 0] }
                : { y: [0, 0.4, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.7 : 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.circle
          cx={17}
          cy={17}
          r={2}
          fill="#e4e4e7"
          stroke="none"
          initial={{ x: 0, y: 0 }}
          animate={
            frozen ? { x: 0, y: 0 } : { x: [0, -5, 4, 0], y: [0, 5, -9, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.7 : 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
      </svg>
    </motion.div>
  );
}
