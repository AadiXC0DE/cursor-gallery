"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function LabyrinthCursor({
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
        data-cursor="labyrinth"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 27 V6 H28 V28 H11 V11 H23 V23 H16 V16" strokeWidth={2.25} />
        <motion.circle
          cx={6}
          cy={27}
          r={1.35}
          fill="#e4e4e7"
          stroke="none"
          initial={{ x: 0, y: 0 }}
          animate={
            frozen
              ? { x: 0, y: 0 }
              : {
                  x: [
                    0, 0, 22, 22, 5, 5, 17, 17, 10, 10, 10, 10, 10, 17, 17, 5,
                    5, 22, 22, 0, 0,
                  ],
                  y: [
                    0, -21, -21, 1, 1, -16, -16, -4, -4, -11, -11, -11, -4, -4,
                    -16, -16, 1, 1, -21, -21, 0,
                  ],
                }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 5 : 12,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
      </svg>
    </motion.div>
  );
}
