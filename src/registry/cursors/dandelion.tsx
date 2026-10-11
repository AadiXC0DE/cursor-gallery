"use client";

import { useId } from "react";
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
        data-cursor="dandelion"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 0 0.6px rgba(15,23,42,0.6)) drop-shadow(0 1px 1.5px rgba(15,23,42,0.25))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-halo`} cx="50%" cy="50%" r="50%">
            <stop offset={0} stopColor="#fef9c3" stopOpacity={0.6} />
            <stop offset={0.6} stopColor="#fde68a" stopOpacity={0.2} />
            <stop offset={1} stopColor="#fde68a" stopOpacity={0} />
          </radialGradient>
          <linearGradient id={`${uid}-stem`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#bbf7d0" />
            <stop offset={1} stopColor="#15803d" />
          </linearGradient>
          <radialGradient id={`${uid}-core`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#fef3c7" />
            <stop offset={1} stopColor="#b45309" />
          </radialGradient>
        </defs>
        <circle cx={17} cy={13} r={12.5} fill={`url(#${uid}-halo)`} />
        <motion.g
          initial={{ rotate: -3 }}
          animate={
            frozen
              ? { rotate: -3 }
              : isHovering
                ? { rotate: [-6, 6, -6] }
                : { rotate: [-3, 3, -3] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.6 : 3.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "32px" }}
        >
          <path
            d="M17 15 C17.4 20 16.5 25.5 17.4 32"
            stroke={`url(#${uid}-stem)`}
            strokeWidth={1.5}
            strokeLinecap="round"
          />
          <path
            d="M17.2 27.8 C19 25.6 21.8 25.4 23.4 26.4 C21.8 28 19.4 28.6 17.2 27.8 Z"
            fill="#4ade80"
            stroke="#15803d"
            strokeWidth={0.4}
          />
          <path
            d="M17.45 11.05 L18.25 7.54 M18.25 7.54 L17.57 6.21 M18.25 7.54 L18.58 6.08 M18.25 7.54 L19.45 6.63 M18.25 11.44 L20.49 8.62 M20.49 8.62 L20.45 7.12 M20.49 8.62 L21.43 7.45 M20.49 8.62 L21.96 8.32 M18.8 12.13 L22.05 10.57 M22.05 10.57 L22.67 9.2 M22.05 10.57 L23.4 9.92 M22.05 10.57 L23.5 10.94 M19 13 L22.6 13 M22.6 13 L23.75 12.04 M22.6 13 L24.1 13 M22.6 13 L23.75 13.96 M18.8 13.87 L22.05 15.43 M22.05 15.43 L23.5 15.06 M22.05 15.43 L23.4 16.08 M22.05 15.43 L22.67 16.8 M18.25 14.56 L20.49 17.38 M20.49 17.38 L21.96 17.68 M20.49 17.38 L21.43 18.55 M20.49 17.38 L20.45 18.88 M17.45 14.95 L18.25 18.46 M18.25 18.46 L19.45 19.37 M18.25 18.46 L18.58 19.92 M18.25 18.46 L17.57 19.79 M16.55 14.95 L15.75 18.46 M15.75 18.46 L16.43 19.79 M15.75 18.46 L15.42 19.92 M15.75 18.46 L14.55 19.37 M15.75 14.56 L13.51 17.38 M13.51 17.38 L13.55 18.88 M13.51 17.38 L12.57 18.55 M13.51 17.38 L12.04 17.68 M15.2 13.87 L11.95 15.43 M11.95 15.43 L11.33 16.8 M11.95 15.43 L10.6 16.08 M11.95 15.43 L10.5 15.06 M15 13 L11.4 13 M11.4 13 L10.25 13.96 M11.4 13 L9.9 13 M11.4 13 L10.25 12.04 M15.2 12.13 L11.95 10.57 M11.95 10.57 L10.5 10.94 M11.95 10.57 L10.6 9.92 M11.95 10.57 L11.33 9.2 M15.75 11.44 L13.51 8.62 M13.51 8.62 L12.04 8.32 M13.51 8.62 L12.57 7.45 M13.51 8.62 L13.55 7.12 M16.55 11.05 L15.75 7.54 M15.75 7.54 L14.55 6.63 M15.75 7.54 L15.42 6.08 M15.75 7.54 L16.43 6.21"
            stroke="#e2e8f0"
            strokeWidth={0.4}
            strokeLinecap="round"
            opacity={0.7}
          />
          <path
            d="M17 11 L17 5.6 M17.68 11.12 L19.53 6.05 M18.29 11.47 L21.76 7.33 M18.97 12.65 L24.29 11.72 M18.97 13.35 L24.29 14.28 M18.73 14 L23.41 16.7 M18.29 14.53 L21.76 18.67 M17.68 14.88 L19.53 19.95 M17 15 L17 20.4 M16.32 14.88 L14.47 19.95 M15.71 14.53 L12.24 18.67 M15.27 14 L10.59 16.7 M15.03 13.35 L9.71 14.28 M15.03 12.65 L9.71 11.72 M15.27 12 L10.59 9.3 M15.71 11.47 L12.24 7.33 M16.32 11.12 L14.47 6.05"
            stroke="#cbd5e1"
            strokeWidth={0.45}
            strokeLinecap="round"
          />
          <path
            d="M17 5.6 L15.51 4.26 M17 5.6 L16.19 3.77 M17 5.6 L17 3.6 M17 5.6 L17.81 3.77 M17 5.6 L18.49 4.26 M19.53 6.05 L18.59 4.28 M19.53 6.05 L19.39 4.05 M19.53 6.05 L20.21 4.17 M19.53 6.05 L20.92 4.61 M19.53 6.05 L21.38 5.3 M21.76 7.33 L21.48 5.35 M21.76 7.33 L22.31 5.41 M21.76 7.33 L23.05 5.8 M21.76 7.33 L23.56 6.45 M21.76 7.33 L23.76 7.26 M24.29 11.72 L25.35 10.02 M24.29 11.72 L25.95 10.6 M24.29 11.72 L26.26 11.37 M24.29 11.72 L26.23 12.2 M24.29 11.72 L25.87 12.95 M24.29 14.28 L25.87 13.05 M24.29 14.28 L26.23 13.8 M24.29 14.28 L26.26 14.63 M24.29 14.28 L25.95 15.4 M24.29 14.28 L25.35 15.98 M23.41 16.7 L25.31 16.08 M23.41 16.7 L25.4 16.91 M23.41 16.7 L25.14 17.7 M23.41 16.7 L24.59 18.32 M23.41 16.7 L23.83 18.66 M21.76 18.67 L23.76 18.74 M21.76 18.67 L23.56 19.55 M21.76 18.67 L23.05 20.2 M21.76 18.67 L22.31 20.59 M21.76 18.67 L21.48 20.65 M19.53 19.95 L21.38 20.7 M19.53 19.95 L20.92 21.39 M19.53 19.95 L20.21 21.83 M19.53 19.95 L19.39 21.95 M19.53 19.95 L18.59 21.72 M17 20.4 L18.49 21.74 M17 20.4 L17.81 22.23 M17 20.4 L17 22.4 M17 20.4 L16.19 22.23 M17 20.4 L15.51 21.74 M14.47 19.95 L15.41 21.72 M14.47 19.95 L14.61 21.95 M14.47 19.95 L13.79 21.83 M14.47 19.95 L13.08 21.39 M14.47 19.95 L12.62 20.7 M12.24 18.67 L12.52 20.65 M12.24 18.67 L11.69 20.59 M12.24 18.67 L10.95 20.2 M12.24 18.67 L10.44 19.55 M12.24 18.67 L10.24 18.74 M10.59 16.7 L10.17 18.66 M10.59 16.7 L9.41 18.32 M10.59 16.7 L8.86 17.7 M10.59 16.7 L8.6 16.91 M10.59 16.7 L8.69 16.08 M9.71 14.28 L8.65 15.98 M9.71 14.28 L8.05 15.4 M9.71 14.28 L7.74 14.63 M9.71 14.28 L7.77 13.8 M9.71 14.28 L8.13 13.05 M9.71 11.72 L8.13 12.95 M9.71 11.72 L7.77 12.2 M9.71 11.72 L7.74 11.37 M9.71 11.72 L8.05 10.6 M9.71 11.72 L8.65 10.02 M10.59 9.3 L8.69 9.92 M10.59 9.3 L8.6 9.09 M10.59 9.3 L8.86 8.3 M10.59 9.3 L9.41 7.68 M10.59 9.3 L10.17 7.34 M12.24 7.33 L10.24 7.26 M12.24 7.33 L10.44 6.45 M12.24 7.33 L10.95 5.8 M12.24 7.33 L11.69 5.41 M12.24 7.33 L12.52 5.35 M14.47 6.05 L12.62 5.3 M14.47 6.05 L13.08 4.61 M14.47 6.05 L13.79 4.17 M14.47 6.05 L14.61 4.05 M14.47 6.05 L15.41 4.28"
            stroke="#ffffff"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
          <circle
            cx={17}
            cy={13}
            r={2}
            fill={`url(#${uid}-core)`}
            stroke="#78350f"
            strokeWidth={0.4}
          />
        </motion.g>
        <motion.g
          initial={{ x: 4, y: -4, rotate: 20, opacity: 1 }}
          animate={
            frozen
              ? { x: 4, y: -4, rotate: 20, opacity: 1 }
              : {
                  x: [0, 5, 10],
                  y: [0, -5, -11],
                  rotate: [0, 25, 50],
                  opacity: [0, 1, 0],
                }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 2 : 4.2,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "23.2px",
            originY: "8.4px",
          }}
        >
          <path
            d="M23.2 9.8 L23.2 7.4"
            stroke="#94a3b8"
            strokeWidth={0.45}
            strokeLinecap="round"
          />
          <path
            d="M23.2 7.4 L21.6 6.2 M23.2 7.4 L22.2 5.6 M23.2 7.4 L23.2 5.4 M23.2 7.4 L24.2 5.6 M23.2 7.4 L24.8 6.2"
            stroke="#ffffff"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
          <circle cx={23.2} cy={9.9} r={0.35} fill="#a16207" />
        </motion.g>
        <motion.g
          initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
          animate={
            frozen
              ? { x: 0, y: 0, rotate: 0, opacity: 0 }
              : {
                  x: [0, 5, 10],
                  y: [0, -5, -11],
                  rotate: [0, 25, 50],
                  opacity: [0, 1, 0],
                }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 2 : 4.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.4,
                }
          }
          style={{
            transformBox: "view-box",
            originX: "23.2px",
            originY: "8.4px",
          }}
        >
          <path
            d="M23.2 9.8 L23.2 7.4"
            stroke="#94a3b8"
            strokeWidth={0.45}
            strokeLinecap="round"
          />
          <path
            d="M23.2 7.4 L21.6 6.2 M23.2 7.4 L22.2 5.6 M23.2 7.4 L23.2 5.4 M23.2 7.4 L24.2 5.6 M23.2 7.4 L24.8 6.2"
            stroke="#ffffff"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
          <circle cx={23.2} cy={9.9} r={0.35} fill="#a16207" />
        </motion.g>
        <motion.g
          initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
          animate={
            frozen
              ? { x: 0, y: 0, rotate: 0, opacity: 0 }
              : {
                  x: [0, 5, 10],
                  y: [0, -5, -11],
                  rotate: [0, 25, 50],
                  opacity: [0, 1, 0],
                }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 2 : 4.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2.8,
                }
          }
          style={{
            transformBox: "view-box",
            originX: "23.2px",
            originY: "8.4px",
          }}
        >
          <path
            d="M23.2 9.8 L23.2 7.4"
            stroke="#94a3b8"
            strokeWidth={0.45}
            strokeLinecap="round"
          />
          <path
            d="M23.2 7.4 L21.6 6.2 M23.2 7.4 L22.2 5.6 M23.2 7.4 L23.2 5.4 M23.2 7.4 L24.2 5.6 M23.2 7.4 L24.8 6.2"
            stroke="#ffffff"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
          <circle cx={23.2} cy={9.9} r={0.35} fill="#a16207" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
