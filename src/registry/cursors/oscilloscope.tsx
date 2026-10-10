"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function OscilloscopeCursor({
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
        data-cursor="oscilloscope"
        fill="none"
        stroke="#a3e635"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          x={3}
          y={4}
          width={28}
          height={26}
          rx={3}
          stroke="#e4e4e7"
          opacity={0.5}
        />
        <line x1={5} y1={17} x2={29} y2={17} opacity={0.4} strokeWidth={1.75} />
        <motion.path
          d="M6 17 C9 5 12 5 15 17 S21 29 24 17 S27 5 28 17"
          strokeWidth={2.25}
          initial={{ scaleY: 0.75 }}
          animate={
            frozen
              ? { scaleY: 0.75 }
              : isHovering
                ? { scaleY: [1, 1.35, 1] }
                : { scaleY: [0.75, 1, 0.75] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.4 : 2.4,
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
