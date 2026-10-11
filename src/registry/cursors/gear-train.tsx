"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function GearTrainCursor({
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
        data-cursor="gear-train"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(245,158,11,0.4))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-gold`} cx="50%" cy="50%" r="50%">
            <stop offset={0} stopColor="#fef3c7" />
            <stop offset={0.55} stopColor="#fbbf24" />
            <stop offset={0.85} stopColor="#d97706" />
            <stop offset={1} stopColor="#92400e" />
          </radialGradient>
          <radialGradient id={`${uid}-copper`} cx="50%" cy="50%" r="50%">
            <stop offset={0} stopColor="#ffedd5" />
            <stop offset={0.55} stopColor="#fb923c" />
            <stop offset={0.85} stopColor="#c2410c" />
            <stop offset={1} stopColor="#7c2d12" />
          </radialGradient>
          <radialGradient id={`${uid}-hub`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#f1f5f9" />
            <stop offset={1} stopColor="#334155" />
          </radialGradient>
        </defs>
        <motion.g
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 2.4 : 8,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "12.6px",
            originY: "20.6px",
          }}
        >
          <path
            d="M19.55 21.4 L21.65 22.28 L21.27 23.67 L19.02 23.38 L18.66 24.1 L18.22 24.77 L19.6 26.57 L18.57 27.6 L16.77 26.22 L16.1 26.66 L15.38 27.02 L15.67 29.27 L14.28 29.65 L13.4 27.55 L12.6 27.6 L11.8 27.55 L10.92 29.65 L9.53 29.27 L9.82 27.02 L9.1 26.66 L8.43 26.22 L6.63 27.6 L5.6 26.57 L6.98 24.77 L6.54 24.1 L6.18 23.38 L3.93 23.67 L3.55 22.28 L5.65 21.4 L5.6 20.6 L5.65 19.8 L3.55 18.92 L3.93 17.53 L6.18 17.82 L6.54 17.1 L6.98 16.43 L5.6 14.63 L6.63 13.6 L8.43 14.98 L9.1 14.54 L9.82 14.18 L9.53 11.93 L10.92 11.55 L11.8 13.65 L12.6 13.6 L13.4 13.65 L14.28 11.55 L15.67 11.93 L15.38 14.18 L16.1 14.54 L16.77 14.98 L18.57 13.6 L19.6 14.63 L18.22 16.43 L18.66 17.1 L19.02 17.82 L21.27 17.53 L21.65 18.92 L19.55 19.8 L19.6 20.6 Z M11.35 16.2 a1.25 1.25 0 1 0 2.5 0 a1.25 1.25 0 1 0 -2.5 0 Z M15.53 19.24 a1.25 1.25 0 1 0 2.5 0 a1.25 1.25 0 1 0 -2.5 0 Z M13.94 24.16 a1.25 1.25 0 1 0 2.5 0 a1.25 1.25 0 1 0 -2.5 0 Z M8.76 24.16 a1.25 1.25 0 1 0 2.5 0 a1.25 1.25 0 1 0 -2.5 0 Z M7.17 19.24 a1.25 1.25 0 1 0 2.5 0 a1.25 1.25 0 1 0 -2.5 0 Z"
            fill={`url(#${uid}-gold)`}
            fillRule="evenodd"
            stroke="#78350f"
            strokeWidth={0.6}
            strokeLinejoin="round"
          />
          <circle
            cx={12.6}
            cy={20.6}
            r={6}
            stroke="#92400e"
            strokeWidth={0.5}
            opacity={0.45}
          />
        </motion.g>
        <motion.g
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, -540] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 2.4 : 8,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "22.04px",
            originY: "11.16px",
          }}
        >
          <path
            d="M26.33 11.91 L28.3 12.92 L27.71 14.34 L25.6 13.66 L25.12 14.24 L24.54 14.72 L25.22 16.83 L23.8 17.42 L22.79 15.45 L22.04 15.51 L21.29 15.45 L20.28 17.42 L18.86 16.83 L19.54 14.72 L18.96 14.24 L18.48 13.66 L16.37 14.34 L15.78 12.92 L17.75 11.91 L17.69 11.16 L17.75 10.41 L15.78 9.4 L16.37 7.98 L18.48 8.66 L18.96 8.08 L19.54 7.6 L18.86 5.49 L20.28 4.9 L21.29 6.87 L22.04 6.81 L22.79 6.87 L23.8 4.9 L25.22 5.49 L24.54 7.6 L25.12 8.08 L25.6 8.66 L27.71 7.98 L28.3 9.4 L26.33 10.41 L26.39 11.16 Z M23.1 9.25 a0.85 0.85 0 1 0 1.7 0 a0.85 0.85 0 1 0 -1.7 0 Z M23.1 13.07 a0.85 0.85 0 1 0 1.7 0 a0.85 0.85 0 1 0 -1.7 0 Z M19.28 13.07 a0.85 0.85 0 1 0 1.7 0 a0.85 0.85 0 1 0 -1.7 0 Z M19.28 9.25 a0.85 0.85 0 1 0 1.7 0 a0.85 0.85 0 1 0 -1.7 0 Z"
            fill={`url(#${uid}-copper)`}
            fillRule="evenodd"
            stroke="#7c2d12"
            strokeWidth={0.6}
            strokeLinejoin="round"
          />
        </motion.g>
        <path
          d="M5.18 17.9 A7.9 7.9 0 0 1 10.56 12.97"
          stroke="#ffffff"
          strokeWidth={0.9}
          strokeLinecap="round"
          opacity={0.5}
        />
        <path
          d="M17.25 9.42 A5.1 5.1 0 0 1 20.72 6.23"
          stroke="#ffffff"
          strokeWidth={0.8}
          strokeLinecap="round"
          opacity={0.5}
        />
        <circle
          cx={12.6}
          cy={20.6}
          r={1.9}
          fill={`url(#${uid}-hub)`}
          stroke="#1e293b"
          strokeWidth={0.4}
        />
        <circle
          cx={22.04}
          cy={11.16}
          r={1.3}
          fill={`url(#${uid}-hub)`}
          stroke="#1e293b"
          strokeWidth={0.4}
        />
        <motion.path
          d="M18.6 13 Q18.6 14.6 20.2 14.6 Q18.6 14.6 18.6 16.2 Q18.6 14.6 17 14.6 Q18.6 14.6 18.6 13 Z"
          fill="#fef9c3"
          initial={{ opacity: 1, scale: 1 }}
          animate={
            frozen
              ? { opacity: 1, scale: 1 }
              : { opacity: [0, 1, 0], scale: [0.4, 1, 0.4] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.5 : 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "18.6px",
            originY: "14.6px",
          }}
        />
      </svg>
    </motion.div>
  );
}
