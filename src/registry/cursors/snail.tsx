"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring", stiffness: 320, damping: 20 } as const;

export default function SnailCursor({
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
        data-cursor="snail"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(132,204,22,0.35))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-body`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#f7fee7" />
            <stop offset={0.45} stopColor="#bef264" />
            <stop offset={1} stopColor="#65a30d" />
          </linearGradient>
          <radialGradient id={`${uid}-shell`} cx="38%" cy="32%" r="72%">
            <stop offset={0} stopColor="#fef3c7" />
            <stop offset={0.35} stopColor="#fbbf24" />
            <stop offset={0.75} stopColor="#d97706" />
            <stop offset={1} stopColor="#92400e" />
          </radialGradient>
          <radialGradient id={`${uid}-eye`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={1} stopColor="#e5e7eb" />
          </radialGradient>
        </defs>
        <path
          d="M1.2 28.4 H9"
          stroke="#a5f3fc"
          strokeWidth={1}
          strokeLinecap="round"
          opacity={0.7}
        />
        <motion.path
          d="M3.4 27.2 Q3.4 28.3 4.5 28.3 Q3.4 28.3 3.4 29.4 Q3.4 28.3 2.3 28.3 Q3.4 28.3 3.4 27.2 Z"
          fill="#ffffff"
          initial={{ opacity: 1, scale: 1 }}
          animate={
            frozen
              ? { opacity: 1, scale: 1 }
              : { opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
          }
          style={{
            transformBox: "view-box",
            originX: "3.4px",
            originY: "28.3px",
          }}
        />
        <motion.g
          initial={{ x: 0 }}
          animate={frozen ? { x: 0 } : { x: [0, 0.6, 0] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.2 : 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <motion.g
            initial={false}
            animate={
              !frozen && isHovering
                ? { scale: 1.2, y: -0.6 }
                : { scale: 1, y: 0 }
            }
            transition={spring}
            style={{
              transformBox: "view-box",
              originX: "26.8px",
              originY: "18px",
            }}
          >
            <motion.g
              initial={{ rotate: -5 }}
              animate={frozen ? { rotate: -5 } : { rotate: [-5, 5, -5] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 0.9 : 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "26.8px",
                originY: "18px",
              }}
            >
              <path
                d="M26.2 18 C25.8 15 25.2 12.6 24.4 10.8"
                stroke="#84cc16"
                strokeWidth={1.3}
                strokeLinecap="round"
              />
              <path
                d="M27.4 18 C27.8 15 28.6 12.8 29.6 11.2"
                stroke="#84cc16"
                strokeWidth={1.3}
                strokeLinecap="round"
              />
              <circle
                cx={24.2}
                cy={10.2}
                r={1.7}
                fill={`url(#${uid}-eye)`}
                stroke="#3f6212"
                strokeWidth={0.5}
              />
              <circle cx={24.6} cy={10.4} r={0.8} fill="#111827" />
              <circle cx={24.9} cy={10} r={0.3} fill="#ffffff" />
              <circle
                cx={29.8}
                cy={10.6}
                r={1.7}
                fill={`url(#${uid}-eye)`}
                stroke="#3f6212"
                strokeWidth={0.5}
              />
              <circle cx={30.2} cy={10.8} r={0.8} fill="#111827" />
              <circle cx={30.5} cy={10.4} r={0.3} fill="#ffffff" />
            </motion.g>
          </motion.g>
          <motion.g
            initial={{ scaleX: 1 }}
            animate={frozen ? { scaleX: 1 } : { scaleX: [1, 1.05, 1] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1.2 : 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "5px",
              originY: "26px",
            }}
          >
            <path
              d="M3.6 27 C3.6 25.6 5.4 24.8 8.4 24.8 H20.4 C22.6 24.8 23.6 22.4 24.2 19.6 C24.6 17.4 27 16.6 28.4 17.8 C29.8 19 29.8 21.6 29.2 23.8 C28.6 26.2 27 27.8 24.6 27.8 H5 C4.2 27.8 3.6 27.6 3.6 27 Z"
              fill={`url(#${uid}-body)`}
              stroke="#4d7c0f"
              strokeWidth={0.7}
              strokeLinejoin="round"
            />
            <ellipse
              cx={27.5}
              cy={22.2}
              rx={1}
              ry={0.7}
              fill="#fda4af"
              opacity={0.75}
            />
            <path
              d="M26.5 24.4 Q27.5 25.2 28.4 24.2"
              stroke="#3f6212"
              strokeWidth={0.5}
              strokeLinecap="round"
            />
            <path
              d="M7 25.9 H20"
              stroke="#ffffff"
              strokeWidth={0.8}
              strokeLinecap="round"
              opacity={0.6}
            />
          </motion.g>
          <motion.g
            initial={{ rotate: -2.5 }}
            animate={frozen ? { rotate: -2.5 } : { rotate: [-2.5, 2.5, -2.5] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1.2 : 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "14px",
              originY: "25px",
            }}
          >
            <circle
              cx={14.4}
              cy={17.4}
              r={8.6}
              fill={`url(#${uid}-shell)`}
              stroke="#78350f"
              strokeWidth={0.8}
            />
            <path
              d="M14.44 17.79 L14.41 17.63 L14.44 17.45 L14.51 17.27 L14.64 17.09 L14.82 16.95 L15.05 16.84 L15.32 16.78 L15.61 16.79 L15.91 16.88 L16.19 17.03 L16.45 17.26 L16.67 17.56 L16.82 17.91 L16.89 18.31 L16.87 18.73 L16.75 19.16 L16.54 19.57 L16.22 19.93 L15.82 20.23 L15.35 20.45 L14.82 20.56 L14.26 20.56 L13.7 20.43 L13.16 20.18 L12.67 19.8 L12.26 19.31 L11.95 18.73 L11.78 18.08 L11.74 17.38 L11.85 16.68 L12.12 15.99 L12.54 15.37 L13.1 14.83 L13.78 14.41 L14.55 14.15 L15.37 14.04 L16.22 14.12 L17.05 14.38 L17.83 14.82 L18.51 15.43 L19.05 16.18 L19.44 17.05 L19.63 18 L19.62 18.99 L19.39 19.98 L18.96 20.91 L18.32 21.74 L17.51 22.44 L16.55 22.96 L15.49 23.26 L14.36 23.34 L13.23 23.18 L12.13 22.77 L11.13 22.14 L10.28 21.29 L9.61 20.26 L9.16 19.1 L8.96 17.85 L9.04 16.57 L9.39 15.31 L10 14.13 L10.86 13.1 L11.94 12.26 L13.18 11.66"
              stroke="#92400e"
              strokeWidth={1.6}
              strokeLinecap="round"
              opacity={0.35}
            />
            <path
              d="M14.44 17.79 L14.41 17.63 L14.44 17.45 L14.51 17.27 L14.64 17.09 L14.82 16.95 L15.05 16.84 L15.32 16.78 L15.61 16.79 L15.91 16.88 L16.19 17.03 L16.45 17.26 L16.67 17.56 L16.82 17.91 L16.89 18.31 L16.87 18.73 L16.75 19.16 L16.54 19.57 L16.22 19.93 L15.82 20.23 L15.35 20.45 L14.82 20.56 L14.26 20.56 L13.7 20.43 L13.16 20.18 L12.67 19.8 L12.26 19.31 L11.95 18.73 L11.78 18.08 L11.74 17.38 L11.85 16.68 L12.12 15.99 L12.54 15.37 L13.1 14.83 L13.78 14.41 L14.55 14.15 L15.37 14.04 L16.22 14.12 L17.05 14.38 L17.83 14.82 L18.51 15.43 L19.05 16.18 L19.44 17.05 L19.63 18 L19.62 18.99 L19.39 19.98 L18.96 20.91 L18.32 21.74 L17.51 22.44 L16.55 22.96 L15.49 23.26 L14.36 23.34 L13.23 23.18 L12.13 22.77 L11.13 22.14 L10.28 21.29 L9.61 20.26 L9.16 19.1 L8.96 17.85 L9.04 16.57 L9.39 15.31 L10 14.13 L10.86 13.1 L11.94 12.26 L13.18 11.66"
              stroke="#fef3c7"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.6 13.2 A7 7 0 0 1 13 9.4"
              stroke="#ffffff"
              strokeWidth={1.4}
              strokeLinecap="round"
              opacity={0.75}
            />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  );
}
