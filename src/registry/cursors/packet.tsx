"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function PacketCursor({
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
        data-cursor="packet"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 23 V27 H30 V23" opacity={0.55} />
        <rect
          x={2}
          y={21}
          width={4}
          height={4}
          rx={1}
          fill="#38bdf8"
          fillOpacity={0.3}
        />
        <rect
          x={28}
          y={21}
          width={4}
          height={4}
          rx={1}
          fill="#38bdf8"
          fillOpacity={0.3}
        />
        <motion.g
          initial={{ x: 0, y: 0 }}
          animate={
            frozen
              ? { x: 0, y: 0 }
              : { x: [0, 3, 0, -2, 0], y: [0, -3, 0, -1, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.9 : 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <path d="M6 12 H9 M7 16 H9" opacity={0.65} />
          <path
            d="M15 8 H21 Q23 8 23 10 V17 H20 V20 H13 Q11 20 11 18 V11 H15 Z"
            fill="#38bdf8"
            fillOpacity={0.2}
            stroke="#e4e4e7"
          />
          <path d="M16 13 H19 M16 16 H18" stroke="#38bdf8" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
