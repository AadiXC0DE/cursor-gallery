"use client";

import { useId } from "react";
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
        data-cursor="dial"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(225,29,72,0.4))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-plate`} cx="50%" cy="50%" r="50%">
            <stop offset={0} stopColor="#fffbeb" />
            <stop offset={1} stopColor="#e7e5e4" />
          </radialGradient>
          <radialGradient id={`${uid}-wheel`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#fb7185" />
            <stop offset={0.5} stopColor="#e11d48" />
            <stop offset={1} stopColor="#881337" />
          </radialGradient>
          <radialGradient id={`${uid}-center`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={1} stopColor="#e7e5e4" />
          </radialGradient>
          <linearGradient id={`${uid}-chrome`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#f8fafc" />
            <stop offset={0.5} stopColor="#cbd5e1" />
            <stop offset={1} stopColor="#475569" />
          </linearGradient>
        </defs>
        <circle
          cx={17}
          cy={17}
          r={15}
          fill={`url(#${uid}-chrome)`}
          stroke="#334155"
          strokeWidth={0.5}
        />
        <circle cx={17} cy={17} r={13.4} fill={`url(#${uid}-plate)`} />
        <path
          d="M25.24 13.82 H26.24 M22.6 9.98 H23.6 M18.43 7.9 H19.43 M13.78 8.11 H14.78 M9.81 10.54 H10.81 M7.52 14.59 H8.52 M7.48 19.25 H8.48 M9.7 23.34 H10.7 M13.63 25.84 H14.63 M18.27 26.13 H19.27"
          stroke="#7f1d1d"
          strokeWidth={0.7}
          strokeLinecap="round"
        />
        <motion.g
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, 0, 225, 225, -8, 0] }
                : { rotate: [0, 0, 150, 150, -6, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 2.2 : 3.2,
                  repeat: Infinity,
                  ease: [
                    "linear",
                    "easeInOut",
                    "linear",
                    "easeOut",
                    "easeInOut",
                  ],
                  times: [0, 0.12, 0.5, 0.58, 0.9, 1],
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <path
            d="M4 17 a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0 Z M23.59 13.82 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M20.95 9.98 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M16.78 7.9 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M12.13 8.11 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M8.16 10.54 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M5.87 14.59 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M5.83 19.25 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M8.05 23.34 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M11.98 25.84 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M16.62 26.13 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z"
            fill={`url(#${uid}-wheel)`}
            fillRule="evenodd"
            stroke="#881337"
            strokeWidth={0.5}
          />
          <path
            d="M23.59 13.82 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M20.95 9.98 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M16.78 7.9 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M12.13 8.11 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M8.16 10.54 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M5.87 14.59 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M5.83 19.25 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M8.05 23.34 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M11.98 25.84 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z M16.62 26.13 a2.15 2.15 0 1 0 4.3 0 a2.15 2.15 0 1 0 -4.3 0 Z"
            stroke="#fecdd3"
            strokeWidth={0.35}
            opacity={0.6}
          />
        </motion.g>
        <path
          d="M7.2 10.2 A12 12 0 0 1 14.4 5.3"
          stroke="#ffffff"
          strokeWidth={1.2}
          strokeLinecap="round"
          opacity={0.55}
        />
        <circle
          cx={17}
          cy={17}
          r={4.6}
          fill={`url(#${uid}-center)`}
          stroke="#881337"
          strokeWidth={0.6}
        />
        <path
          d="M14.9 16 C15.6 15.1 16.3 14.8 17 14.8 C17.7 14.8 18.4 15.1 19.1 16 L18.5 16.8 L17.8 16.4 V15.8 C17.3 15.7 16.7 15.7 16.2 15.8 V16.4 L15.5 16.8 Z M15.6 17.6 H18.4 L17.9 19.2 H16.1 Z"
          fill="#e11d48"
        />
        <line
          x1={23.53}
          y1={25.35}
          x2={27.56}
          y2={27.93}
          stroke="#334155"
          strokeWidth={2.4}
          strokeLinecap="round"
        />
        <line
          x1={23.53}
          y1={25.35}
          x2={27.56}
          y2={27.93}
          stroke={`url(#${uid}-chrome)`}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
