"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function OrigamiCraneCursor({
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
  // Gradient and clip ids must be unique per instance; the gallery mounts several.
  const uid = useId().replace(/[^\w-]/g, "");
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
        data-cursor="origami-crane"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(251,113,133,0.4))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-light`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={1} stopColor="#fecdd3" />
          </linearGradient>
          <linearGradient id={`${uid}-deep`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#fda4af" />
            <stop offset={1} stopColor="#e11d48" />
          </linearGradient>
        </defs>
        <motion.g
          initial={{ y: 0, rotate: 0 }}
          animate={
            frozen
              ? { y: 0, rotate: 0 }
              : { y: [0, -1.6, 0], rotate: [0, -3, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.6 : 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "20px" }}
        >
          <motion.g
            initial={{ scaleY: 1 }}
            animate={
              frozen
                ? { scaleY: 1 }
                : isHovering
                  ? { scaleY: [1, -0.5, 1] }
                  : { scaleY: [1, 0.35, 1] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.6 : 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "18px",
            }}
          >
            <path
              d="M14.6 18 L8.6 4.4 L16.6 15.6 Z"
              fill={`url(#${uid}-light)`}
              stroke="#be123c"
              strokeWidth={0.35}
              strokeLinejoin="round"
            />
            <path
              d="M16.6 15.6 L8.6 4.4 L19 17.4 Z"
              fill="#fda4af"
              stroke="#be123c"
              strokeWidth={0.35}
              strokeLinejoin="round"
            />
          </motion.g>
          <path
            d="M13 19 L3.4 12 L11.4 20.6 Z"
            fill="#fecdd3"
            stroke="#be123c"
            strokeWidth={0.35}
            strokeLinejoin="round"
          />
          <path
            d="M13 19 L3.4 12 L8.2 19.4 Z"
            fill="#fda4af"
            stroke="#be123c"
            strokeWidth={0.35}
            strokeLinejoin="round"
          />
          <path
            d="M11 20 L17 16.4 L23 20 Z"
            fill="#fecdd3"
            stroke="#be123c"
            strokeWidth={0.35}
            strokeLinejoin="round"
          />
          <path
            d="M11 20 L23 20 L17 23.6 Z"
            fill={`url(#${uid}-deep)`}
            stroke="#be123c"
            strokeWidth={0.35}
            strokeLinejoin="round"
          />
          <path
            d="M21 19 L29.4 8.6 L23.6 20.4 Z"
            fill="#fda4af"
            stroke="#be123c"
            strokeWidth={0.35}
            strokeLinejoin="round"
          />
          <path
            d="M21 19 L29.4 8.6 L22 19.6 Z"
            fill="#ffe4e6"
            stroke="#be123c"
            strokeWidth={0.35}
            strokeLinejoin="round"
          />
          <path
            d="M29.4 8.6 L32.2 9.6 L28.8 10.6 Z"
            fill="#f43f5e"
            stroke="#be123c"
            strokeWidth={0.35}
            strokeLinejoin="round"
          />
          <motion.g
            initial={{ scaleY: 1 }}
            animate={
              frozen
                ? { scaleY: 1 }
                : isHovering
                  ? { scaleY: [1, -0.5, 1] }
                  : { scaleY: [1, 0.35, 1] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.6 : 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "18px",
            }}
          >
            <path
              d="M16 18.4 L24.8 4 L18.4 17 Z"
              fill={`url(#${uid}-light)`}
              stroke="#be123c"
              strokeWidth={0.35}
              strokeLinejoin="round"
            />
            <path
              d="M18.4 17 L24.8 4 L20.6 18.2 Z"
              fill={`url(#${uid}-deep)`}
              stroke="#be123c"
              strokeWidth={0.35}
              strokeLinejoin="round"
            />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  );
}
