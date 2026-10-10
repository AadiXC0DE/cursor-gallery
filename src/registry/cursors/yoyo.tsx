"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function YoyoCursor({
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
        data-cursor="yoyo"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx={17} cy={7} rx={3.5} ry={2.5} />
        <motion.line
          x1={17}
          y1={9.5}
          x2={17}
          y2={21.5}
          initial={{ scaleY: 1 }}
          animate={
            frozen
              ? { scaleY: 1 }
              : isHovering
                ? { scaleY: [1, 1.3333333333333333, 1] }
                : { scaleY: [1, 1.1666666666666667, 1] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.1 : 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "17px",
            originY: "9.5px",
          }}
        />
        <motion.g
          initial={{ y: 0 }}
          animate={
            frozen ? { y: 0 } : isHovering ? { y: [0, 4, 0] } : { y: [0, 2, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.1 : 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <path d="M12.5 15 H21.5 M12.5 28 H21.5" opacity={0.7} />
          <ellipse
            cx={12.5}
            cy={21.5}
            rx={3}
            ry={6.5}
            fill="#38bdf8"
            fillOpacity={0.18}
          />
          <ellipse
            cx={21.5}
            cy={21.5}
            rx={3}
            ry={6.5}
            fill="#38bdf8"
            fillOpacity={0.18}
          />
          <line
            x1={15.5}
            y1={21.5}
            x2={18.5}
            y2={21.5}
            stroke="#e4e4e7"
            strokeWidth={2.25}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
