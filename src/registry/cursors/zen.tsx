"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ZenCursor({
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
        data-cursor="zen"
        fill="none"
        stroke="#e4e4e7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M12.2 5.1 C18.4 2.1 25.3 6.6 28.2 12.2 C30.4 16.6 28.7 23.4 25.1 26.8 C21.2 32.5 13.2 31.5 7.8 26.8 C3.1 23.4 2.9 16.8 5.4 12.7 L7.4 9.9 L7.6 11.5 L6.7 11.1 L7.1 12.8 C5.8 17.1 8.9 23.4 13.5 25.3 C18.2 27.3 24.2 25.1 25.9 20 C28.2 14.4 23.7 7.3 18.9 6.6 C16.5 6.1 14.4 6.2 12.4 7.1 L11.1 6.4 L12.2 5.1 Z"
          fill="#e4e4e7"
          stroke="none"
          initial={{ scale: 1 }}
          animate={
            frozen
              ? { scale: 1 }
              : isHovering
                ? { scale: [1, 1.075, 1] }
                : { scale: [1, 1.015, 1] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 2.4 : 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
      </svg>
    </motion.div>
  );
}
