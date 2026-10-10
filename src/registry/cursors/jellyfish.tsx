"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function JellyfishCursor({
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
        data-cursor="jellyfish"
        fill="none"
        stroke="#2dd4bf"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M10 18 C7 22 13 25 10 29"
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, 5, 0, -5, 0] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.5 : 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "18px" }}
        />
        <motion.path
          d="M17 18 C14 22 20 25 17 29"
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, 5, 0, -5, 0] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.5 : 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "18px" }}
        />
        <motion.path
          d="M24 18 C21 22 27 25 24 29"
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, 5, 0, -5, 0] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.5 : 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "18px" }}
        />
        <motion.path
          d="M7 16 C7 2 27 2 27 16 Q17 20 7 16 Z"
          fill="#2dd4bf"
          fillOpacity={0.25}
          initial={{ scaleX: 1, scaleY: 1 }}
          animate={
            frozen
              ? { scaleX: 1, scaleY: 1 }
              : isHovering
                ? { scaleX: [1.1, 1.26, 1.1], scaleY: [1, 0.85, 1] }
                : { scaleX: [1, 1.06, 1], scaleY: [1, 0.92, 1] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.5 : 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "16px" }}
        />
      </svg>
    </motion.div>
  );
}
