"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function SoapBubbleCursor({
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
        data-cursor="soap-bubble"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 0 0.6px rgba(15,23,42,0.45)) drop-shadow(0 0 6px rgba(34,211,238,0.4))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-film`} cx="45%" cy="40%" r="60%">
            <stop offset={0} stopColor="#ffffff" stopOpacity={0.04} />
            <stop offset={0.75} stopColor="#e0f2fe" stopOpacity={0.12} />
            <stop offset={1} stopColor="#bae6fd" stopOpacity={0.45} />
          </radialGradient>
        </defs>
        <motion.g
          initial={{ y: -3, opacity: 1 }}
          animate={
            frozen
              ? { y: -3, opacity: 1 }
              : { y: [0, -5, -10], opacity: [0, 1, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.6 : 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.6,
                }
          }
          style={{
            transformBox: "view-box",
            originX: "28.4px",
            originY: "26px",
          }}
        >
          <circle
            cx={28.4}
            cy={26}
            r={2}
            fill="#e0f2fe"
            fillOpacity={0.15}
            stroke="#7dd3fc"
            strokeWidth={0.45}
          />
          <path
            d="M27.27 25.59 A1.2 1.2 0 0 1 27.99 24.87"
            stroke="#ffffff"
            strokeWidth={0.4}
            strokeLinecap="round"
          />
        </motion.g>
        <motion.g
          initial={{ y: -3, opacity: 1 }}
          animate={
            frozen
              ? { y: -3, opacity: 1 }
              : { y: [0, -5, -10], opacity: [0, 1, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.6 : 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.8,
                }
          }
          style={{
            transformBox: "view-box",
            originX: "6.4px",
            originY: "25px",
          }}
        >
          <circle
            cx={6.4}
            cy={25}
            r={1.3}
            fill="#e0f2fe"
            fillOpacity={0.15}
            stroke="#7dd3fc"
            strokeWidth={0.45}
          />
          <path
            d="M5.67 24.73 A0.78 0.78 0 0 1 6.13 24.27"
            stroke="#ffffff"
            strokeWidth={0.4}
            strokeLinecap="round"
          />
        </motion.g>
        <motion.g
          initial={{ scaleX: 1, scaleY: 1 }}
          animate={
            frozen
              ? { scaleX: 1, scaleY: 1 }
              : isHovering
                ? { scaleX: [1, 1.1, 0.93, 1], scaleY: [1, 0.9, 1.07, 1] }
                : { scaleX: [1, 1.05, 0.97, 1], scaleY: [1, 0.95, 1.03, 1] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.8 : 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "16px" }}
        >
          <circle cx={17} cy={16} r={11} fill={`url(#${uid}-film)`} />
          <motion.g
            initial={{ rotate: 0 }}
            animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1.8 : 6,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "16px",
            }}
          >
            <path
              d="M7.51 12.55 A10.1 10.1 0 0 1 17.88 5.94"
              stroke="#f472b6"
              strokeWidth={2.2}
              strokeLinecap="round"
              opacity={0.4}
            />
            <path
              d="M7.64 11.02 A10.6 10.6 0 0 1 16.45 5.41"
              stroke="#f472b6"
              strokeWidth={0.8}
              strokeLinecap="round"
              opacity={0.85}
            />
            <path
              d="M19.61 6.24 A10.1 10.1 0 0 1 27.06 15.12"
              stroke="#22d3ee"
              strokeWidth={2.2}
              strokeLinecap="round"
              opacity={0.4}
            />
            <path
              d="M21.14 6.24 A10.6 10.6 0 0 1 27.33 13.62"
              stroke="#22d3ee"
              strokeWidth={0.8}
              strokeLinecap="round"
              opacity={0.85}
            />
            <path
              d="M26.95 17.75 A10.1 10.1 0 0 1 18.75 25.95"
              stroke="#fde047"
              strokeWidth={2.2}
              strokeLinecap="round"
              opacity={0.4}
            />
            <path
              d="M27.08 19.28 A10.6 10.6 0 0 1 20.28 26.08"
              stroke="#fde047"
              strokeWidth={0.8}
              strokeLinecap="round"
              opacity={0.85}
            />
            <path
              d="M16.12 26.06 A10.1 10.1 0 0 1 6.94 16.88"
              stroke="#a78bfa"
              strokeWidth={2.2}
              strokeLinecap="round"
              opacity={0.4}
            />
            <path
              d="M14.62 26.33 A10.6 10.6 0 0 1 6.67 18.38"
              stroke="#a78bfa"
              strokeWidth={0.8}
              strokeLinecap="round"
              opacity={0.85}
            />
          </motion.g>
          <circle
            cx={17}
            cy={16}
            r={11}
            stroke="#bae6fd"
            strokeWidth={0.6}
            opacity={0.9}
          />
          <path
            d="M10.4 11.6 C11.2 9.2 13.2 7.6 15.6 7.2"
            stroke="#ffffff"
            strokeWidth={1.6}
            strokeLinecap="round"
            opacity={0.95}
          />
          <circle cx={10.2} cy={13.8} r={0.6} fill="#ffffff" opacity={0.9} />
          <path
            d="M24.89 18.87 A8.4 8.4 0 0 1 19.87 23.89"
            stroke="#ffffff"
            strokeWidth={0.8}
            strokeLinecap="round"
            opacity={0.55}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
