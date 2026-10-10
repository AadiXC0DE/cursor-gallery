"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function KoiCursor({
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
        data-cursor="koi"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.g
          initial={{ rotate: -6 }}
          animate={
            frozen
              ? { rotate: -6 }
              : isHovering
                ? { rotate: [-18, 18, -18] }
                : { rotate: [-6, 6, -6] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.6 : 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <motion.path
            d="M9 17 L4 11 Q6 17 4 23 Z"
            fill="#f59e0b"
            fillOpacity={0.65}
            initial={{ rotate: -8 }}
            animate={
              frozen
                ? { rotate: -8 }
                : isHovering
                  ? { rotate: [-24, 24, -24] }
                  : { rotate: [-8, 8, -8] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.65 : 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "9px",
              originY: "17px",
            }}
          />
          <path
            d="M9 17 C12 8 24 9 28 16 Q29 17 28 18 C24 25 12 26 9 17 Z"
            fill="#f59e0b"
            fillOpacity={0.28}
          />
          <path d="M16 11 L19 7 L22 11" fill="#f59e0b" fillOpacity={0.65} />
          <circle cx={24} cy={15} r={1.5} fill="#e4e4e7" stroke="none" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
