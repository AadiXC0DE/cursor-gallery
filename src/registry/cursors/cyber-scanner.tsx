"use client";
import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const IDLE = "#06b6d4";
const LOCKED = "#f43f5e";

// Each corner bracket, with the direction it travels toward the center.
const BRACKETS = [
  { d: "M7 13 V9 Q7 7 9 7 H13", dx: 1, dy: 1 },
  { d: "M27 7 H31 Q33 7 33 9 V13", dx: -1, dy: 1 },
  { d: "M33 27 V31 Q33 33 31 33 H27", dx: -1, dy: -1 },
  { d: "M13 33 H9 Q7 33 7 31 V27", dx: 1, dy: -1 },
];

export default function CyberScannerCursor({
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
  const locked = !!isHovering && !frozen;
  const uid = useId().replace(/[^a-zA-Z0-9-]/g, "");
  const color = locked ? LOCKED : IDLE;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        aria-hidden="true"
        fill="none"
        style={{
          overflow: "visible",
          filter: `drop-shadow(0 0 0.6px rgba(8,51,68,0.9)) drop-shadow(0 0 5px ${
            locked ? "rgba(244,63,94,0.55)" : "rgba(34,211,238,0.55)"
          })`,
        }}
      >
        <defs>
          <clipPath id={`${uid}-window`}>
            <rect x="8" y="8" width="24" height="24" rx="2" />
          </clipPath>
          <linearGradient id={`${uid}-beam`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0" />
            <stop offset="50%" stopColor="#a5f3fc" />
            <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`${uid}-wake`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Glass plate */}
        <rect
          x="8"
          y="8"
          width="24"
          height="24"
          rx="2"
          fill="#22d3ee"
          fillOpacity="0.1"
        />

        {/* Scan beam sweeping down the window */}
        <g clipPath={`url(#${uid}-window)`}>
          <motion.g
            initial={{ y: frozen ? -4 : -14, opacity: 1 }}
            animate={
              frozen || locked
                ? { y: frozen ? -4 : 0, opacity: frozen ? 1 : 0 }
                : { y: [-14, 14], opacity: [0, 1, 1, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : locked
                  ? { duration: 0.2 }
                  : {
                      y: { duration: 1.8, repeat: Infinity, ease: "linear" },
                      opacity: {
                        duration: 1.8,
                        times: [0, 0.12, 0.88, 1],
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }
            }
          >
            <rect
              x="8"
              y="14"
              width="24"
              height="6"
              fill={`url(#${uid}-wake)`}
            />
            <rect
              x="8"
              y="19.4"
              width="24"
              height="1.2"
              fill={`url(#${uid}-beam)`}
            />
          </motion.g>
        </g>

        {/* Segmented ring, spinning up when locked */}
        <motion.circle
          cx="20"
          cy="20"
          r="8"
          stroke={color}
          strokeWidth="1.4"
          strokeDasharray="4.2 2.8"
          strokeLinecap="round"
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
          transition={
            frozen
              ? { duration: 0 }
              : { duration: locked ? 1.2 : 6, repeat: Infinity, ease: "linear" }
          }
          style={{ transformBox: "view-box", originX: "20px", originY: "20px" }}
        />
        <circle
          cx="20"
          cy="20"
          r="4.6"
          stroke={color}
          strokeWidth="0.6"
          opacity="0.6"
        />

        {/* Compass ticks */}
        <path
          d="M20 9.6 V11.6 M20 28.4 V30.4 M9.6 20 H11.6 M28.4 20 H30.4"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Corner brackets breathe, then snap shut on a target */}
        {BRACKETS.map((bracket) => (
          <motion.path
            key={bracket.d}
            d={bracket.d}
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ x: 0, y: 0 }}
            animate={
              frozen
                ? { x: 0, y: 0 }
                : locked
                  ? { x: bracket.dx * 4, y: bracket.dy * 4 }
                  : {
                      x: [0, bracket.dx * 1.4, 0],
                      y: [0, bracket.dy * 1.4, 0],
                    }
            }
            transition={
              frozen
                ? { duration: 0 }
                : locked
                  ? { type: "spring", stiffness: 420, damping: 18 }
                  : { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }
          />
        ))}

        {/* Core */}
        <motion.circle
          cx="20"
          cy="20"
          r="1.7"
          fill={locked ? "#fda4af" : "#cffafe"}
          stroke={color}
          strokeWidth="0.8"
          initial={{ scale: 1 }}
          animate={
            frozen
              ? { scale: 1 }
              : { scale: locked ? [1, 1.6, 1] : [1, 1.25, 1] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: locked ? 0.5 : 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "fill-box", originX: "50%", originY: "50%" }}
        />
      </svg>
    </motion.div>
  );
}
