"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function YoyoCursor({
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
        data-cursor="yoyo"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(59,130,246,0.45))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-disc`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#bae6fd" />
            <stop offset={0.45} stopColor="#3b82f6" />
            <stop offset={1} stopColor="#1e3a8a" />
          </radialGradient>
          <radialGradient id={`${uid}-face`} cx="45%" cy="40%" r="65%">
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={1} stopColor="#dbeafe" />
          </radialGradient>
          <clipPath id={`${uid}-string`}>
            <rect x={-10} y={3.4} width={54} height={60} />
          </clipPath>
        </defs>
        <circle cx={17} cy={2.4} r={1.3} stroke="#b45309" strokeWidth={0.9} />
        <g clipPath={`url(#${uid}-string)`}>
          <motion.g
            initial={{ y: 1 }}
            animate={
              frozen
                ? { y: 1 }
                : isHovering
                  ? { y: [-4, 9, -4] }
                  : { y: [-4, 6, -4] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.9 : 1.6,
                    repeat: Infinity,
                    ease: ["easeIn", "easeOut"],
                    times: [0, 0.5, 1],
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <line
              x1={17}
              y1={-16}
              x2={17}
              y2={17}
              stroke="#d97706"
              strokeWidth={0.8}
            />
            <motion.g
              initial={{ rotate: 0 }}
              animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 0.4 : 0.8,
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
              <circle
                cx={17}
                cy={17}
                r={8}
                fill={`url(#${uid}-disc)`}
                stroke="#1e3a8a"
                strokeWidth={0.7}
              />
              <circle
                cx={17}
                cy={17}
                r={6.2}
                stroke="#1e3a8a"
                strokeWidth={0.6}
                opacity={0.35}
              />
              <circle cx={17} cy={17} r={4.4} fill={`url(#${uid}-face)`} />
              <path
                d="M17 13.2 C19.8 13.6 20.6 16.4 19 18.2 C17.6 19.6 15.4 19 15.2 17.2"
                stroke="#f59e0b"
                strokeWidth={1.1}
                strokeLinecap="round"
              />
              <path
                d="M17 20.8 C14.2 20.4 13.4 17.6 15 15.8"
                stroke="#fb7185"
                strokeWidth={1.1}
                strokeLinecap="round"
              />
              <circle cx={17} cy={17} r={1.1} fill="#334155" />
            </motion.g>
            <path
              d="M11.4 12.6 A7 7 0 0 1 15.4 9.6"
              stroke="#ffffff"
              strokeWidth={1.4}
              strokeLinecap="round"
              opacity={0.75}
            />
            <circle cx={21.6} cy={11.8} r={0.7} fill="#ffffff" opacity={0.6} />
          </motion.g>
        </g>
      </svg>
    </motion.div>
  );
}
