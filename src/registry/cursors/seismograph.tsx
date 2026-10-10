"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SeismographCursor({
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
        data-cursor="seismograph"
        fill="none"
        stroke="#fb7185"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M4 13 V27 C4 31 28 31 28 27 V13"
          stroke="#e4e4e7"
          fill="#e4e4e7"
          fillOpacity={0.04}
        />
        <ellipse
          cx={16}
          cy={13}
          rx={12}
          ry={3}
          stroke="#e4e4e7"
          fill="#09090b"
          strokeWidth={1.75}
        />
        <motion.path
          d="M6 22 H9 L11 18 L14 26 L17 19 L20 24 L23 22 H26"
          strokeWidth={2}
          initial={{ scaleY: 0.9 }}
          animate={
            frozen
              ? { scaleY: 0.9 }
              : isHovering
                ? { scaleY: [1, 1.25, 1] }
                : { scaleY: [0.9, 1, 0.9] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.75 : 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "23px", originY: "22px" }}
        />
        <motion.g
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, 5, 0, -5, 0] }
                : { rotate: [0, 2, 0, -2, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.75 : 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "29px", originY: "6px" }}
        >
          <path d="M29 6 L20 17 L23 22" />
          <circle cx={29} cy={6} r={2} fill="#fb7185" fillOpacity={0.25} />
        </motion.g>
      </svg>
    </motion.div>
  );
}
