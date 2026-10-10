"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function GearTrainCursor({
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
        data-cursor="gear-train"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.g
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.6 : 5,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{ transformBox: "view-box", originX: "12px", originY: "16px" }}
        >
          <path
            d="M18.35 16.0 L19.85 17.56 L19.39 19.06 L17.28 19.53 L16.49 20.49 L16.44 22.65 L15.06 23.39 L13.24 22.23 L12.0 22.35 L10.44 23.85 L8.94 23.39 L8.47 21.28 L7.51 20.49 L5.35 20.44 L4.61 19.06 L5.77 17.24 L5.65 16.0 L4.15 14.44 L4.61 12.94 L6.72 12.47 L7.51 11.51 L7.56 9.35 L8.94 8.61 L10.76 9.77 L12.0 9.65 L13.56 8.15 L15.06 8.61 L15.53 10.72 L16.49 11.51 L18.65 11.56 L19.39 12.94 L18.23 14.76 Z"
            stroke="#e4e4e7"
            strokeWidth={1.75}
            fill="#e4e4e7"
            fillOpacity={0.12}
          />
          <circle cx={12} cy={16} r={2.2} fill="#f59e0b" stroke="none" />
        </motion.g>
        <motion.g
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, -360] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.2 : 3.75,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{ transformBox: "view-box", originX: "25px", originY: "20px" }}
        >
          <path
            d="M28.85 20.0 L30.31 21.42 L29.76 22.75 L27.72 22.72 L26.93 23.33 L26.42 25.31 L25.0 25.5 L24.0 23.72 L23.07 23.33 L21.11 23.89 L20.24 22.75 L21.28 21.0 L21.15 20.0 L19.69 18.58 L20.24 17.25 L22.28 17.28 L23.07 16.67 L23.58 14.69 L25.0 14.5 L26.0 16.28 L26.93 16.67 L28.89 16.11 L29.76 17.25 L28.72 19.0 Z"
            stroke="#e4e4e7"
            strokeWidth={1.75}
            fill="#e4e4e7"
            fillOpacity={0.12}
          />
          <circle cx={25} cy={20} r={2.2} fill="#f59e0b" stroke="none" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
