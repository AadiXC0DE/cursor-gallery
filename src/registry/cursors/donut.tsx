"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring", stiffness: 320, damping: 20 } as const;

export default function DonutCursor({
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
        data-cursor="donut"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(244,114,182,0.4))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-dough`} cx="50%" cy="50%" r="50%">
            <stop offset={0.3} stopColor="#92400e" />
            <stop offset={0.45} stopColor="#fcd34d" />
            <stop offset={0.8} stopColor="#d97706" />
            <stop offset={1} stopColor="#92400e" />
          </radialGradient>
          <radialGradient id={`${uid}-icing`} cx="42%" cy="38%" r="65%">
            <stop offset={0} stopColor="#fdf2f8" />
            <stop offset={0.5} stopColor="#f9a8d4" />
            <stop offset={1} stopColor="#db2777" />
          </radialGradient>
        </defs>
        <motion.g
          initial={false}
          animate={!frozen && isHovering ? { scale: 1.08 } : { scale: 1 }}
          transition={spring}
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <motion.g
            initial={{ rotate: 0 }}
            animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 3 : 14,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <path
              d="M4 17 a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0 Z M12.6 17 a4.4 4.4 0 1 0 8.8 0 a4.4 4.4 0 1 0 -8.8 0 Z"
              fill={`url(#${uid}-dough)`}
              fillRule="evenodd"
              stroke="#78350f"
              strokeWidth={0.6}
            />
            <path
              d="M27.6 17 L27.78 17.42 L27.92 17.86 L27.99 18.3 L27.96 18.74 L27.85 19.16 L27.65 19.56 L27.39 19.93 L27.08 20.28 L26.77 20.6 L26.47 20.92 L26.21 21.24 L26 21.59 L25.85 21.95 L25.74 22.35 L25.65 22.78 L25.58 23.23 L25.48 23.68 L25.34 24.13 L25.17 24.56 L24.99 24.99 L24.81 25.45 L24.64 25.94 L24.43 26.42 L24.09 26.76 L23.59 26.86 L22.96 26.73 L22.33 26.51 L21.77 26.36 L21.32 26.37 L20.94 26.52 L20.61 26.78 L20.28 27.09 L19.93 27.39 L19.56 27.65 L19.16 27.85 L18.74 27.96 L18.3 27.99 L17.86 27.92 L17.42 27.78 L17 27.6 L16.59 27.4 L16.2 27.21 L15.81 27.07 L15.42 26.98 L15.02 26.94 L14.61 26.96 L14.17 27.02 L13.72 27.09 L13.26 27.14 L12.78 27.18 L12.3 27.21 L11.78 27.25 L11.22 27.32 L10.67 27.34 L10.2 27.18 L9.91 26.76 L9.81 26.12 L9.82 25.41 L9.82 24.77 L9.72 24.28 L9.5 23.93 L9.19 23.67 L8.82 23.45 L8.42 23.23 L8.03 23 L7.66 22.72 L7.35 22.41 L7.11 22.04 L6.95 21.63 L6.88 21.19 L6.88 20.74 L6.92 20.28 L6.98 19.83 L7.04 19.39 L7.06 18.98 L7.02 18.58 L6.93 18.19 L6.79 17.8 L6.6 17.41 L6.4 17 L6.21 16.58 L6.07 16.14 L5.97 15.69 L5.91 15.24 L5.84 14.78 L5.73 14.3 L5.62 13.79 L5.6 13.3 L5.83 12.88 L6.31 12.57 L6.93 12.36 L7.51 12.16 L7.93 11.92 L8.18 11.59 L8.32 11.2 L8.42 10.76 L8.52 10.32 L8.67 9.89 L8.88 9.49 L9.15 9.15 L9.49 8.88 L9.89 8.67 L10.32 8.53 L10.77 8.42 L11.22 8.35 L11.65 8.26 L12.05 8.15 L12.41 8 L12.76 7.79 L13.08 7.53 L13.4 7.23 L13.72 6.92 L14.07 6.61 L14.44 6.35 L14.84 6.15 L15.26 6.04 L15.7 6.01 L16.14 6.08 L16.58 6.22 L17 6.4 L17.41 6.6 L17.8 6.79 L18.19 6.93 L18.58 7.02 L18.98 7.06 L19.39 7.03 L19.83 6.96 L20.3 6.84 L20.81 6.67 L21.37 6.44 L21.99 6.18 L22.61 6 L23.13 6.05 L23.47 6.44 L23.62 7.09 L23.65 7.84 L23.68 8.53 L23.76 9.09 L23.92 9.52 L24.15 9.85 L24.45 10.12 L24.79 10.35 L25.17 10.56 L25.58 10.77 L25.97 11 L26.34 11.28 L26.65 11.59 L26.89 11.96 L27.05 12.37 L27.12 12.81 L27.12 13.26 L27.08 13.72 L27.02 14.17 L26.96 14.61 L26.94 15.02 L26.98 15.42 L27.07 15.81 L27.21 16.2 L27.4 16.59 Z M11.8 17 a5.2 5.2 0 1 0 10.4 0 a5.2 5.2 0 1 0 -10.4 0 Z"
              fill={`url(#${uid}-icing)`}
              fillRule="evenodd"
              stroke="#be185d"
              strokeWidth={0.5}
              strokeLinejoin="round"
            />
            <path
              d="M24.74 16.29 L25.68 17.71 M19.11 25.25 L18.63 26.87 M25.31 14.77 L23.69 15.29 M25.78 13.39 L26.54 14.91"
              stroke="#fde047"
              strokeWidth={0.75}
              strokeLinecap="round"
            />
            <path
              d="M26.07 18.89 L26.55 20.53 M8.53 13.64 L9.79 14.78 M26.82 17.6 L25.42 18.56 M22.07 11.57 L21.23 13.05"
              stroke="#22d3ee"
              strokeWidth={0.75}
              strokeLinecap="round"
            />
            <path
              d="M8.7 15.24 L8.84 16.94 M12.79 25.82 L14.49 25.88 M23.51 14.18 L24.99 15.04 M25.63 13.69 L24.73 15.13"
              stroke="#a3e635"
              strokeWidth={0.75}
              strokeLinecap="round"
            />
            <path
              d="M16.07 23.57 L15.01 24.91 M20.56 24.46 L19.5 25.8 M20.64 6.84 L19.5 8.1 M7.17 15.6 L7.53 17.26"
              stroke="#ffffff"
              strokeWidth={0.75}
              strokeLinecap="round"
            />
            <path
              d="M22.29 22.34 L21.83 23.98 M25.75 17.38 L24.15 17.98 M26.3 16.16 L26.66 17.82"
              stroke="#a78bfa"
              strokeWidth={0.75}
              strokeLinecap="round"
            />
            <path
              d="M19.88 9.71 L21.52 10.15 M10.41 15.24 L9.83 16.84 M15.87 25.75 L17.57 25.87"
              stroke="#fb923c"
              strokeWidth={0.75}
              strokeLinecap="round"
            />
          </motion.g>
          <path
            d="M8.8 12.4 A9.6 9.6 0 0 1 14.6 7.6"
            stroke="#ffffff"
            strokeWidth={1.3}
            strokeLinecap="round"
            opacity={0.7}
          />
          <circle
            cx={17}
            cy={17}
            r={4.4}
            stroke="#78350f"
            strokeWidth={0.6}
            opacity={0.6}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
