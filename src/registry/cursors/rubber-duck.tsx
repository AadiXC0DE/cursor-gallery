"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring", stiffness: 320, damping: 20 } as const;

export default function RubberDuckCursor({
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
        data-cursor="rubber-duck"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(250,204,21,0.4))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-duck`} cx="38%" cy="30%" r="75%">
            <stop offset={0} stopColor="#fef9c3" />
            <stop offset={0.45} stopColor="#fde047" />
            <stop offset={1} stopColor="#ca8a04" />
          </radialGradient>
          <linearGradient id={`${uid}-beak`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#fdba74" />
            <stop offset={1} stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id={`${uid}-wing`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#fde047" />
            <stop offset={1} stopColor="#eab308" />
          </linearGradient>
          <linearGradient id={`${uid}-water`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#7dd3fc" />
            <stop offset={1} stopColor="#2563eb" />
          </linearGradient>
          <clipPath id={`${uid}-pond`}>
            <ellipse cx={17} cy={29} rx={15} ry={4.6} />
          </clipPath>
        </defs>
        <motion.path
          d="M29.6 8.6 q1 1 0 2 M31 7.6 q1.8 2 0 4"
          stroke="#fbbf24"
          strokeWidth={0.7}
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={
            frozen
              ? { opacity: 0 }
              : isHovering
                ? { opacity: [0, 1, 0] }
                : { opacity: [0, 0, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.5 : 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.g
          initial={{ rotate: -4, y: 0 }}
          animate={
            frozen
              ? { rotate: -4, y: 0 }
              : { rotate: [-4, 4, -4], y: [0, 0.8, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1 : 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "26px" }}
        >
          <motion.g
            initial={false}
            animate={
              !frozen && isHovering
                ? { scaleY: 0.9, scaleX: 1.06 }
                : { scaleY: 1, scaleX: 1 }
            }
            transition={spring}
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "28px",
            }}
          >
            <path
              d="M5 18.4 C6.6 19.6 8 19.8 9.4 19.2 C11.2 18.4 13 18.2 15.6 18.6 L24.4 18.6 C27.4 18.6 29 20.6 28.6 23.4 C28.2 26.6 24.6 28.4 17.4 28.4 C10 28.4 5.6 26.2 5 21.4 Z"
              fill={`url(#${uid}-duck)`}
              stroke="#a16207"
              strokeWidth={0.6}
              strokeLinejoin="round"
            />
            <circle
              cx={22.4}
              cy={12.6}
              r={5.4}
              fill={`url(#${uid}-duck)`}
              stroke="#a16207"
              strokeWidth={0.6}
            />
            <path
              d="M26.8 12.8 C29 12.2 31.4 12.6 31.8 13.8 C31.2 15.2 29 15.6 26.8 15 Z"
              fill={`url(#${uid}-beak)`}
              stroke="#9a3412"
              strokeWidth={0.4}
              strokeLinejoin="round"
            />
            <path
              d="M27 14 H31.4"
              stroke="#9a3412"
              strokeWidth={0.35}
              opacity={0.7}
            />
            <circle cx={23.8} cy={11} r={0.95} fill="#1c1917" />
            <circle cx={24.1} cy={10.7} r={0.32} fill="#ffffff" />
            <ellipse
              cx={24.8}
              cy={14.2}
              rx={1}
              ry={0.6}
              fill="#fb923c"
              opacity={0.55}
            />
            <path
              d="M11.6 21.4 C14.4 19.8 18.8 20.2 20.6 22.4 C18.6 24.8 14 24.8 11.6 21.4 Z"
              fill={`url(#${uid}-wing)`}
              stroke="#a16207"
              strokeWidth={0.4}
            />
            <path
              d="M18.6 9.4 C19.4 8 21 7.2 22.6 7.2 M7.6 21 C8.4 20.2 9.6 19.8 10.8 19.8"
              stroke="#ffffff"
              strokeWidth={0.9}
              strokeLinecap="round"
              opacity={0.75}
            />
          </motion.g>
        </motion.g>
        <g clipPath={`url(#${uid}-pond)`}>
          <motion.path
            d="M-8 27 q2 -1.4 4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 V34 H-8 Z"
            fill={`url(#${uid}-water)`}
            opacity={0.88}
            initial={{ x: 0 }}
            animate={frozen ? { x: 0 } : { x: [0, -8] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1 : 2,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          />
          <motion.path
            d="M-8 27.1 q2 -1.4 4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0"
            stroke="#e0f2fe"
            strokeWidth={0.5}
            opacity={0.8}
            initial={{ x: 0 }}
            animate={frozen ? { x: 0 } : { x: [0, -8] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1 : 2,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          />
        </g>
      </svg>
    </motion.div>
  );
}
