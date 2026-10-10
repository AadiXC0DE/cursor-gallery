"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function NewtonsCradleCursor({
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
        data-cursor="newtons-cradle"
        fill="none"
        stroke="#e4e4e7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 26 V7 H31 V26" opacity={0.65} />
        <motion.g
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, 16, 0, 0, 0] }
                : { rotate: [0, 8, 0, 0, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.7 : 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "7px", originY: "8px" }}
        >
          <line x1={7} y1={8} x2={7} y2={18} strokeWidth={1.75} />
          <circle
            cx={7}
            cy={20}
            r={1.65}
            fill="#e4e4e7"
            fillOpacity={0.65}
            strokeWidth={1.75}
          />
        </motion.g>
        <g>
          <line x1={12} y1={8} x2={12} y2={18} strokeWidth={1.75} />
          <circle
            cx={12}
            cy={20}
            r={1.65}
            fill="#e4e4e7"
            fillOpacity={0.65}
            strokeWidth={1.75}
          />
        </g>
        <g>
          <line x1={17} y1={8} x2={17} y2={18} strokeWidth={1.75} />
          <circle
            cx={17}
            cy={20}
            r={1.65}
            fill="#e4e4e7"
            fillOpacity={0.65}
            strokeWidth={1.75}
          />
        </g>
        <g>
          <line x1={22} y1={8} x2={22} y2={18} strokeWidth={1.75} />
          <circle
            cx={22}
            cy={20}
            r={1.65}
            fill="#e4e4e7"
            fillOpacity={0.65}
            strokeWidth={1.75}
          />
        </g>
        <motion.g
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, 0, 0, -16, 0] }
                : { rotate: [0, 0, 0, -8, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.7 : 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "27px", originY: "8px" }}
        >
          <line x1={27} y1={8} x2={27} y2={18} strokeWidth={1.75} />
          <circle
            cx={27}
            cy={20}
            r={1.65}
            fill="#e4e4e7"
            fillOpacity={0.65}
            strokeWidth={1.75}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
