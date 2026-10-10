"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function DominoCursor({
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
        data-cursor="domino"
        fill="none"
        stroke="#a3e635"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.g
          initial={{ rotate: -8 }}
          animate={
            frozen
              ? { rotate: -8 }
              : isHovering
                ? { rotate: [-8, 40, -8] }
                : { rotate: [-8, 18, -8] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.7 : 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <rect
            x={11}
            y={4}
            width={12}
            height={25}
            rx={2.5}
            fill="#a3e635"
            fillOpacity={0.12}
          />
          <line x1={12} y1={16.5} x2={22} y2={16.5} />
          <circle cx={17} cy={10} r={1.9} fill="#a3e635" stroke="none" />
          <circle cx={15} cy={21} r={1.9} fill="#a3e635" stroke="none" />
          <circle cx={19} cy={25} r={1.9} fill="#a3e635" stroke="none" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
