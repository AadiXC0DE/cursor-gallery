"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ArcadeCoinCursor({
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
        data-cursor="arcade-coin"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M9 3 H25 L28 7 V16 L30 22 V31 H6 V22 L8 16 V7 Z"
          fill="#f59e0b"
          fillOpacity={0.08}
        />
        <path
          d="M11 9 H24 V15 H11 Z"
          stroke="#e4e4e7"
          fill="#38bdf8"
          fillOpacity={0.14}
        />
        <path d="M8 17 H26 L30 22 H6 Z" fill="#f59e0b" fillOpacity={0.15} />
        <path d="M12 20 V17" stroke="#e4e4e7" />
        <circle cx={12} cy={17} r={1.75} fill="#f59e0b" />
        <rect x={13} y={25} width={10} height={6} rx={1} stroke="#e4e4e7" />
        <path d="M18 26.5 V29" stroke="#e4e4e7" strokeWidth={2.25} />
        <motion.g
          initial={{ opacity: 1 }}
          animate={
            frozen
              ? { opacity: 1 }
              : isHovering
                ? { opacity: [1, 0.35, 1] }
                : { opacity: [0.75, 1, 0.75] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.65 : 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <rect
            x={12}
            y={5}
            width={10}
            height={2}
            rx={0.5}
            fill="#a3e635"
            stroke="none"
          />
          <circle cx={22} cy={20} r={1.8} fill="#f59e0b" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
