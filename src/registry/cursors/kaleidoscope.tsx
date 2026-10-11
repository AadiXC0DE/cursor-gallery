"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function KaleidoscopeCursor({
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
        data-cursor="kaleidoscope"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(168,85,247,0.5))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-bg`} cx="50%" cy="50%" r="50%">
            <stop offset={0} stopColor="#312e81" />
            <stop offset={0.7} stopColor="#1e1b4b" />
            <stop offset={1} stopColor="#0f0a2e" />
          </radialGradient>
          <linearGradient id={`${uid}-rim`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#fde68a" />
            <stop offset={0.5} stopColor="#f59e0b" />
            <stop offset={1} stopColor="#b45309" />
          </linearGradient>
          <linearGradient id={`${uid}-k1`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#fda4af" />
            <stop offset={1} stopColor="#e11d48" />
          </linearGradient>
          <linearGradient id={`${uid}-k2`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#fef08a" />
            <stop offset={1} stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id={`${uid}-k3`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#a5f3fc" />
            <stop offset={1} stopColor="#0891b2" />
          </linearGradient>
          <linearGradient id={`${uid}-k4`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#d8b4fe" />
            <stop offset={1} stopColor="#7c3aed" />
          </linearGradient>
          <radialGradient id={`${uid}-core`} cx="50%" cy="50%" r="50%">
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={0.5} stopColor="#fef9c3" />
            <stop offset={1} stopColor="#f472b6" />
          </radialGradient>
          <clipPath id={`${uid}-lens`}>
            <circle cx={17} cy={17} r={13} />
          </clipPath>
        </defs>
        <circle
          cx={17}
          cy={17}
          r={14.6}
          fill={`url(#${uid}-rim)`}
          stroke="#78350f"
          strokeWidth={0.6}
        />
        <circle cx={17} cy={17} r={13} fill={`url(#${uid}-bg)`} />
        <g clipPath={`url(#${uid}-lens)`}>
          <motion.g
            initial={{ rotate: 0 }}
            animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 5 : 16,
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
              d="M17 4.4 C19.3 7.1 19.5 9.6 17 11.4 C14.5 9.6 14.7 7.1 17 4.4 Z"
              fill={`url(#${uid}-k1)`}
              transform="rotate(0 17 17)"
            />
            <path
              d="M17 4.4 C19.3 7.1 19.5 9.6 17 11.4 C14.5 9.6 14.7 7.1 17 4.4 Z"
              fill={`url(#${uid}-k3)`}
              transform="rotate(60 17 17)"
            />
            <path
              d="M17 4.4 C19.3 7.1 19.5 9.6 17 11.4 C14.5 9.6 14.7 7.1 17 4.4 Z"
              fill={`url(#${uid}-k1)`}
              transform="rotate(120 17 17)"
            />
            <path
              d="M17 4.4 C19.3 7.1 19.5 9.6 17 11.4 C14.5 9.6 14.7 7.1 17 4.4 Z"
              fill={`url(#${uid}-k3)`}
              transform="rotate(180 17 17)"
            />
            <path
              d="M17 4.4 C19.3 7.1 19.5 9.6 17 11.4 C14.5 9.6 14.7 7.1 17 4.4 Z"
              fill={`url(#${uid}-k1)`}
              transform="rotate(240 17 17)"
            />
            <path
              d="M17 4.4 C19.3 7.1 19.5 9.6 17 11.4 C14.5 9.6 14.7 7.1 17 4.4 Z"
              fill={`url(#${uid}-k3)`}
              transform="rotate(300 17 17)"
            />
            <path
              d="M17 6.6 C18.3 8.2 18.3 9.8 17 10.9 C15.7 9.8 15.7 8.2 17 6.6 Z"
              fill={`url(#${uid}-k2)`}
              transform="rotate(30 17 17)"
            />
            <path
              d="M17 6.6 C18.3 8.2 18.3 9.8 17 10.9 C15.7 9.8 15.7 8.2 17 6.6 Z"
              fill={`url(#${uid}-k2)`}
              transform="rotate(90 17 17)"
            />
            <path
              d="M17 6.6 C18.3 8.2 18.3 9.8 17 10.9 C15.7 9.8 15.7 8.2 17 6.6 Z"
              fill={`url(#${uid}-k2)`}
              transform="rotate(150 17 17)"
            />
            <path
              d="M17 6.6 C18.3 8.2 18.3 9.8 17 10.9 C15.7 9.8 15.7 8.2 17 6.6 Z"
              fill={`url(#${uid}-k2)`}
              transform="rotate(210 17 17)"
            />
            <path
              d="M17 6.6 C18.3 8.2 18.3 9.8 17 10.9 C15.7 9.8 15.7 8.2 17 6.6 Z"
              fill={`url(#${uid}-k2)`}
              transform="rotate(270 17 17)"
            />
            <path
              d="M17 6.6 C18.3 8.2 18.3 9.8 17 10.9 C15.7 9.8 15.7 8.2 17 6.6 Z"
              fill={`url(#${uid}-k2)`}
              transform="rotate(330 17 17)"
            />
            <path
              d="M28.14 20.13 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M25.01 25.56 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M19.58 28.69 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M13.32 28.69 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M7.89 25.56 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M4.76 20.13 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M4.76 13.87 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M7.89 8.44 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M13.32 5.31 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M19.58 5.31 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M25.01 8.44 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z M28.14 13.87 a0.55 0.55 0 1 0 1.1 0 a0.55 0.55 0 1 0 -1.1 0 Z"
              fill="#fef9c3"
            />
          </motion.g>
          <motion.g
            initial={{ rotate: 0 }}
            animate={frozen ? { rotate: 0 } : { rotate: [0, -360] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 3.4 : 10,
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
              d="M17 10.4 L19.3 13.8 L17 15.1 L14.7 13.8 Z"
              fill={`url(#${uid}-k2)`}
              stroke="#ffffff"
              strokeWidth={0.3}
              strokeOpacity={0.6}
              transform="rotate(30 17 17)"
            />
            <path
              d="M17 10.4 L19.3 13.8 L17 15.1 L14.7 13.8 Z"
              fill={`url(#${uid}-k4)`}
              stroke="#ffffff"
              strokeWidth={0.3}
              strokeOpacity={0.6}
              transform="rotate(90 17 17)"
            />
            <path
              d="M17 10.4 L19.3 13.8 L17 15.1 L14.7 13.8 Z"
              fill={`url(#${uid}-k2)`}
              stroke="#ffffff"
              strokeWidth={0.3}
              strokeOpacity={0.6}
              transform="rotate(150 17 17)"
            />
            <path
              d="M17 10.4 L19.3 13.8 L17 15.1 L14.7 13.8 Z"
              fill={`url(#${uid}-k4)`}
              stroke="#ffffff"
              strokeWidth={0.3}
              strokeOpacity={0.6}
              transform="rotate(210 17 17)"
            />
            <path
              d="M17 10.4 L19.3 13.8 L17 15.1 L14.7 13.8 Z"
              fill={`url(#${uid}-k2)`}
              stroke="#ffffff"
              strokeWidth={0.3}
              strokeOpacity={0.6}
              transform="rotate(270 17 17)"
            />
            <path
              d="M17 10.4 L19.3 13.8 L17 15.1 L14.7 13.8 Z"
              fill={`url(#${uid}-k4)`}
              stroke="#ffffff"
              strokeWidth={0.3}
              strokeOpacity={0.6}
              transform="rotate(330 17 17)"
            />
          </motion.g>
          <motion.g
            initial={{ rotate: 0, scale: 1 }}
            animate={
              frozen
                ? { rotate: 0, scale: 1 }
                : { rotate: [0, 60], scale: [1, 1.14, 1] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1 : 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <path
              d="M17 12.6 L17.95 15.35 L20.81 14.8 L18.9 17 L20.81 19.2 L17.95 18.65 L17 21.4 L16.05 18.65 L13.19 19.2 L15.1 17 L13.19 14.8 L16.05 15.35 Z"
              fill={`url(#${uid}-core)`}
              stroke="#ffffff"
              strokeWidth={0.3}
            />
            <circle cx={17} cy={17} r={1.5} fill="#ffffff" />
          </motion.g>
        </g>
        <path
          d="M7.2 11 A11 11 0 0 1 12 6.2"
          stroke="#ffffff"
          strokeWidth={1.4}
          strokeLinecap="round"
          opacity={0.3}
        />
        <circle
          cx={17}
          cy={17}
          r={13}
          stroke="#fef3c7"
          strokeWidth={0.4}
          opacity={0.5}
        />
      </svg>
    </motion.div>
  );
}
