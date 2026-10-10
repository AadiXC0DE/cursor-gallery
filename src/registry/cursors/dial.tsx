"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function DialCursor({
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
        data-cursor="dial"
        fill="none"
        stroke="#2dd4bf"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx={16} cy={17} r={13} fill="#2dd4bf" fillOpacity={0.08} />
        <motion.g
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, 115, 0] }
                : { rotate: [0, 35, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 2.2 : 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "16px", originY: "17px" }}
        >
          <circle cx={23.54} cy={11.72} r={1.65} strokeWidth={1.75} />
          <circle cx={18.38} cy={8.11} r={1.65} strokeWidth={1.75} />
          <circle cx={12.11} cy={8.66} r={1.65} strokeWidth={1.75} />
          <circle cx={7.66} cy={13.11} r={1.65} strokeWidth={1.75} />
          <circle cx={7.11} cy={19.38} r={1.65} strokeWidth={1.75} />
          <circle cx={10.72} cy={24.54} r={1.65} strokeWidth={1.75} />
          <circle cx={16.8} cy={26.16} r={1.65} strokeWidth={1.75} />
          <circle cx={22.51} cy={23.51} r={1.65} strokeWidth={1.75} />
        </motion.g>
        <circle cx={16} cy={17} r={4} fill="#2dd4bf" fillOpacity={0.12} />
        <path
          d="M25.5 20.5 L30.5 23 L32 19"
          stroke="#e4e4e7"
          strokeWidth={2.25}
        />
      </svg>
    </motion.div>
  );
}
