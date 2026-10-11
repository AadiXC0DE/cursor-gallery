"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function SnowGlobeCursor({
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
        data-cursor="snow-globe"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(147,197,253,0.45))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-sky`} cx="50%" cy="35%" r="70%">
            <stop offset={0} stopColor="#60a5fa" />
            <stop offset={0.7} stopColor="#1e3a8a" />
            <stop offset={1} stopColor="#172554" />
          </radialGradient>
          <linearGradient id={`${uid}-base`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#f87171" />
            <stop offset={1} stopColor="#991b1b" />
          </linearGradient>
          <linearGradient id={`${uid}-gold`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#fde68a" />
            <stop offset={0.5} stopColor="#f59e0b" />
            <stop offset={1} stopColor="#b45309" />
          </linearGradient>
          <linearGradient id={`${uid}-tree`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#4ade80" />
            <stop offset={1} stopColor="#166534" />
          </linearGradient>
          <linearGradient id={`${uid}-snow`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={1} stopColor="#cbd5e1" />
          </linearGradient>
          <clipPath id={`${uid}-globe`}>
            <circle cx={17} cy={14} r={10.6} />
          </clipPath>
        </defs>
        <motion.g
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, -9, 8, -6, 0] }
                : { rotate: [0, 0, 0, 0, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.45 : 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "30px" }}
        >
          <path
            d="M8.6 24 H25.4 L27 30 C27.1 30.6 26.7 31 26.1 31 H7.9 C7.3 31 6.9 30.6 7 30 Z"
            fill={`url(#${uid}-base)`}
            stroke="#7f1d1d"
            strokeWidth={0.6}
            strokeLinejoin="round"
          />
          <rect
            x={8.2}
            y={25.4}
            width={17.6}
            height={1.6}
            rx={0.4}
            fill={`url(#${uid}-gold)`}
          />
          <circle cx={17} cy={14} r={10.6} fill={`url(#${uid}-sky)`} />
          <g clipPath={`url(#${uid}-globe)`}>
            <ellipse
              cx={17}
              cy={23.6}
              rx={12}
              ry={4.4}
              fill={`url(#${uid}-snow)`}
            />
            <path
              d="M17 8.4 L20.6 14 H18.8 L21.6 18.4 H19.4 L22 22 H12 L14.6 18.4 H12.4 L15.2 14 H13.4 Z"
              fill={`url(#${uid}-tree)`}
              stroke="#14532d"
              strokeWidth={0.4}
              strokeLinejoin="round"
            />
            <path
              d="M15.2 14 H18.8 M14.6 18.4 H19.4"
              stroke="#ffffff"
              strokeWidth={0.6}
              strokeLinecap="round"
              opacity={0.85}
            />
            <rect x={16.3} y={22} width={1.4} height={1.6} fill="#78350f" />
            <path
              d="M17 6.7 L17.38 7.67 L18.43 7.74 L17.62 8.4 L17.88 9.41 L17 8.85 L16.12 9.41 L16.38 8.4 L15.57 7.74 L16.62 7.67 Z"
              fill="#fde047"
            />
            <circle cx={15.6} cy={16.2} r={0.45} fill="#f87171" />
            <circle cx={18.6} cy={20.4} r={0.45} fill="#fde047" />
            <circle cx={18.2} cy={12.4} r={0.4} fill="#60a5fa" />
            <motion.circle
              cx={11}
              cy={4}
              r={0.6}
              fill="#ffffff"
              initial={{ x: 0.4, y: 15, opacity: 1 }}
              animate={
                frozen
                  ? { x: 0.4, y: 15, opacity: 1 }
                  : { x: [0, 1.2, -0.8], y: [0, 9, 18], opacity: [0, 1, 0] }
              }
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 1.1923076923076923 : 3.1,
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
            <motion.circle
              cx={15}
              cy={4}
              r={0.5}
              fill="#ffffff"
              initial={{ x: 0.4, y: 4, opacity: 1 }}
              animate={
                frozen
                  ? { x: 0.4, y: 4, opacity: 1 }
                  : { x: [0, 1.2, -0.8], y: [0, 9, 18], opacity: [0, 1, 0] }
              }
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 1.346153846153846 : 3.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1.1,
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "17px",
              }}
            />
            <motion.circle
              cx={19.5}
              cy={4}
              r={0.65}
              fill="#ffffff"
              initial={{ x: 0.4, y: 9.5, opacity: 1 }}
              animate={
                frozen
                  ? { x: 0.4, y: 9.5, opacity: 1 }
                  : { x: [0, 1.2, -0.8], y: [0, 9, 18], opacity: [0, 1, 0] }
              }
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 1.1153846153846154 : 2.9,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.4,
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "17px",
              }}
            />
            <motion.circle
              cx={23}
              cy={4}
              r={0.5}
              fill="#ffffff"
              initial={{ x: 0.4, y: 8, opacity: 1 }}
              animate={
                frozen
                  ? { x: 0.4, y: 8, opacity: 1 }
                  : { x: [0, 1.2, -0.8], y: [0, 9, 18], opacity: [0, 1, 0] }
              }
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 1.2692307692307692 : 3.3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1.8,
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "17px",
              }}
            />
            <motion.circle
              cx={13.4}
              cy={4}
              r={0.55}
              fill="#ffffff"
              initial={{ x: 0.4, y: 5.799999999999997, opacity: 1 }}
              animate={
                frozen
                  ? { x: 0.4, y: 5.799999999999997, opacity: 1 }
                  : { x: [0, 1.2, -0.8], y: [0, 9, 18], opacity: [0, 1, 0] }
              }
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 1.4230769230769231 : 3.7,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 2.4,
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "17px",
              }}
            />
            <motion.circle
              cx={21}
              cy={4}
              r={0.6}
              fill="#ffffff"
              initial={{ x: 0.4, y: 7, opacity: 1 }}
              animate={
                frozen
                  ? { x: 0.4, y: 7, opacity: 1 }
                  : { x: [0, 1.2, -0.8], y: [0, 9, 18], opacity: [0, 1, 0] }
              }
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 1.2307692307692308 : 3.2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 2.9,
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "17px",
              }}
            />
            <motion.circle
              cx={17}
              cy={4}
              r={0.45}
              fill="#ffffff"
              initial={{ x: 0.4, y: 5, opacity: 1 }}
              animate={
                frozen
                  ? { x: 0.4, y: 5, opacity: 1 }
                  : { x: [0, 1.2, -0.8], y: [0, 9, 18], opacity: [0, 1, 0] }
              }
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 1.5384615384615383 : 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.8,
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "17px",
              }}
            />
          </g>
          <circle
            cx={17}
            cy={14}
            r={10.6}
            stroke="#bfdbfe"
            strokeWidth={0.7}
            opacity={0.8}
          />
          <path
            d="M9.4 10 C10.4 7 12.8 5 15.6 4.4"
            stroke="#ffffff"
            strokeWidth={1.3}
            strokeLinecap="round"
            opacity={0.75}
          />
          <circle cx={24} cy={19.4} r={0.8} fill="#ffffff" opacity={0.5} />
        </motion.g>
      </svg>
    </motion.div>
  );
}
