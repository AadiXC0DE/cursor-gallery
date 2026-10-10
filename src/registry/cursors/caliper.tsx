"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function CaliperCursor({
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
        data-cursor="caliper"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          x={4}
          y={10}
          width={26}
          height={3}
          rx={0.5}
          fill="#38bdf8"
          fillOpacity={0.22}
        />
        <path d="M10 4 H6 V29 H11" strokeWidth={2} />
        <path d="M11 10 V12 M14 10 V12 M27 10 V12" strokeWidth={1.75} />
        <motion.g
          initial={{ x: 0 }}
          animate={
            frozen
              ? { x: 0 }
              : isHovering
                ? { x: [0, -4, 0] }
                : { x: [0, -1, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.8 : 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <rect
            x={18}
            y={8}
            width={5}
            height={7}
            rx={0.75}
            fill="#38bdf8"
            fillOpacity={0.4}
            stroke="#e4e4e7"
          />
          <path d="M16 4 H20 V29 H15" strokeWidth={2} />
        </motion.g>
      </svg>
    </motion.div>
  );
}
