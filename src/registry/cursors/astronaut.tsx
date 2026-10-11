"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AstronautCursor({
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
        data-cursor="astronaut"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(129,140,248,0.45))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-suit`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={0.6} stopColor="#e2e8f0" />
            <stop offset={1} stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id={`${uid}-visor`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#4338ca" />
            <stop offset={0.5} stopColor="#1e1b4b" />
            <stop offset={1} stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <motion.path
          d="M4.4 4.4 Q4.4 6 6 6 Q4.4 6 4.4 7.6 Q4.4 6 2.8 6 Q4.4 6 4.4 4.4 Z"
          fill="#fde68a"
          initial={{ opacity: 1, scale: 1 }}
          animate={
            frozen
              ? { opacity: 1, scale: 1 }
              : { opacity: [0.15, 1, 0.15], scale: [0.6, 1, 0.6] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
          style={{ transformBox: "view-box", originX: "4.4px", originY: "6px" }}
        />
        <motion.path
          d="M29.6 23.7 Q29.6 25 30.9 25 Q29.6 25 29.6 26.3 Q29.6 25 28.3 25 Q29.6 25 29.6 23.7 Z"
          fill="#fde68a"
          initial={{ opacity: 1, scale: 1 }}
          animate={
            frozen
              ? { opacity: 1, scale: 1 }
              : { opacity: [0.15, 1, 0.15], scale: [0.6, 1, 0.6] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }
          }
          style={{
            transformBox: "view-box",
            originX: "29.6px",
            originY: "25px",
          }}
        />
        <motion.path
          d="M28.8 4.2 Q28.8 5.2 29.8 5.2 Q28.8 5.2 28.8 6.2 Q28.8 5.2 27.8 5.2 Q28.8 5.2 28.8 4.2 Z"
          fill="#c7d2fe"
          initial={{ opacity: 1, scale: 1 }}
          animate={
            frozen
              ? { opacity: 1, scale: 1 }
              : { opacity: [0.15, 1, 0.15], scale: [0.6, 1, 0.6] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
          }
          style={{
            transformBox: "view-box",
            originX: "28.8px",
            originY: "5.2px",
          }}
        />
        <motion.g
          initial={{ rotate: -8, y: 0 }}
          animate={
            frozen
              ? { rotate: -8, y: 0 }
              : { rotate: [-8, 8, -8], y: [0, -1.4, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 2 : 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <rect
            x={10.4}
            y={16.4}
            width={13.2}
            height={9.6}
            rx={2.4}
            fill="#cbd5e1"
            stroke="#475569"
            strokeWidth={0.5}
          />
          <rect
            x={12.6}
            y={24.4}
            width={3.6}
            height={5.4}
            rx={1.6}
            fill={`url(#${uid}-suit)`}
            stroke="#475569"
            strokeWidth={0.5}
          />
          <rect
            x={17.8}
            y={24.4}
            width={3.6}
            height={5.4}
            rx={1.6}
            fill={`url(#${uid}-suit)`}
            stroke="#475569"
            strokeWidth={0.5}
          />
          <path
            d="M12.6 28.4 H16.2 M17.8 28.4 H21.4"
            stroke="#818cf8"
            strokeWidth={0.9}
          />
          <rect
            x={11.4}
            y={17.4}
            width={11.2}
            height={8.4}
            rx={3.6}
            fill={`url(#${uid}-suit)`}
            stroke="#475569"
            strokeWidth={0.5}
          />
          <rect
            x={14.6}
            y={19.8}
            width={4.8}
            height={3}
            rx={0.6}
            fill="#e2e8f0"
            stroke="#64748b"
            strokeWidth={0.35}
          />
          <circle cx={15.6} cy={21.3} r={0.5} fill="#ef4444" />
          <circle cx={17} cy={21.3} r={0.5} fill="#22c55e" />
          <circle cx={18.4} cy={21.3} r={0.5} fill="#3b82f6" />
          <path
            d="M11.6 19 C9.4 19.6 8 21.4 8.2 23.4"
            stroke="#475569"
            strokeWidth={3.2}
            strokeLinecap="round"
          />
          <path
            d="M11.6 19 C9.4 19.6 8 21.4 8.2 23.4"
            stroke={`url(#${uid}-suit)`}
            strokeWidth={2.4}
            strokeLinecap="round"
          />
          <motion.g
            initial={{ rotate: 0 }}
            animate={
              frozen
                ? { rotate: 0 }
                : isHovering
                  ? { rotate: [0, -24, 0] }
                  : { rotate: [0, 0, 0] }
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
            style={{
              transformBox: "view-box",
              originX: "22.4px",
              originY: "19px",
            }}
          >
            <path
              d="M22.4 19 C24.6 18.4 25.8 16.6 25.8 14.4"
              stroke="#475569"
              strokeWidth={3.2}
              strokeLinecap="round"
            />
            <path
              d="M22.4 19 C24.6 18.4 25.8 16.6 25.8 14.4"
              stroke={`url(#${uid}-suit)`}
              strokeWidth={2.4}
              strokeLinecap="round"
            />
            <circle
              cx={25.8}
              cy={13.8}
              r={1.3}
              fill="#818cf8"
              stroke="#3730a3"
              strokeWidth={0.4}
            />
          </motion.g>
          <circle
            cx={17}
            cy={11.8}
            r={7.6}
            fill={`url(#${uid}-suit)`}
            stroke="#475569"
            strokeWidth={0.6}
          />
          <path
            d="M11.8 12.2 C11.8 9 14 7.2 17 7.2 C20 7.2 22.2 9 22.2 12.2 C22.2 15 20.2 16.4 17 16.4 C13.8 16.4 11.8 15 11.8 12.2 Z"
            fill={`url(#${uid}-visor)`}
            stroke="#1e1b4b"
            strokeWidth={0.5}
          />
          <path
            d="M13.6 10.6 C14.2 9 15.6 8.4 17 8.4"
            stroke="#ffffff"
            strokeWidth={1}
            strokeLinecap="round"
            opacity={0.75}
          />
          <circle cx={19.6} cy={13.8} r={0.4} fill="#ffffff" opacity={0.8} />
          <circle cx={20.8} cy={12.4} r={0.25} fill="#ffffff" opacity={0.7} />
          <line
            x1={21.8}
            y1={6.4}
            x2={23.6}
            y2={3.4}
            stroke="#64748b"
            strokeWidth={0.6}
            strokeLinecap="round"
          />
          <motion.circle
            cx={23.8}
            cy={3}
            r={0.9}
            fill="#f43f5e"
            initial={{ opacity: 1 }}
            animate={frozen ? { opacity: 1 } : { opacity: [1, 0.25, 1] }}
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
              originX: "17px",
              originY: "17px",
            }}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
