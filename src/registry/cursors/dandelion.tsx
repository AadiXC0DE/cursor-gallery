"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function DandelionCursor({
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
        data-cursor="dandelion"
        fill="none"
        stroke="#e4e4e7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 15 V30" />
        <circle cx={15} cy={13} r={8.8} opacity={0.3} strokeWidth={1.75} />
        <path
          d="M17.5 13.0 L21.7 13.0 M23.83 11.28 L21.7 13.0 L23.83 14.72"
          strokeWidth={1.75}
        />
        <path
          d="M16.77 14.77 L19.74 17.74 M22.46 18.03 L19.74 17.74 L20.03 20.46"
          strokeWidth={1.75}
        />
        <path
          d="M15.0 15.5 L15.0 19.7 M16.72 21.83 L15.0 19.7 L13.28 21.83"
          strokeWidth={1.75}
        />
        <path
          d="M13.23 14.77 L10.26 17.74 M9.97 20.46 L10.26 17.74 L7.54 18.03"
          strokeWidth={1.75}
        />
        <path
          d="M12.5 13.0 L8.3 13.0 M6.17 14.72 L8.3 13.0 L6.17 11.28"
          strokeWidth={1.75}
        />
        <path
          d="M13.23 11.23 L10.26 8.26 M7.54 7.97 L10.26 8.26 L9.97 5.54"
          strokeWidth={1.75}
        />
        <path
          d="M15.0 10.5 L15.0 6.3 M13.28 4.17 L15.0 6.3 L16.72 4.17"
          strokeWidth={1.75}
        />
        <path
          d="M16.77 11.23 L19.74 8.26 M20.03 5.54 L19.74 8.26 L22.46 7.97"
          strokeWidth={1.75}
        />
        <circle cx={15} cy={13} r={1.75} fill="#e4e4e7" stroke="none" />
        <motion.path
          d="M26 14 L28 9 M25 8 L28 9 L30 7 M28 6 V9"
          strokeWidth={1.75}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={
            frozen
              ? { x: 0, y: 0, opacity: 1 }
              : isHovering
                ? { x: [0, 2, 2], y: [0, -3, -3], opacity: [1, 1, 0] }
                : { x: [0, 0.5, 0], y: [0, -0.5, 0], opacity: [1, 1, 1] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.8 : 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "28px", originY: "9px" }}
        />
      </svg>
    </motion.div>
  );
}
