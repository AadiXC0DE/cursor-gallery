"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function SeismographCursor({
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
        data-cursor="seismograph"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(239,68,68,0.3))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-drum`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#cbd5e1" />
            <stop offset={0.3} stopColor="#ffffff" />
            <stop offset={0.7} stopColor="#f8fafc" />
            <stop offset={1} stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id={`${uid}-cap`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#334155" />
            <stop offset={1} stopColor="#64748b" />
          </linearGradient>
          <linearGradient id={`${uid}-base`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#92400e" />
            <stop offset={1} stopColor="#451a03" />
          </linearGradient>
          <linearGradient id={`${uid}-arm`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#f1f5f9" />
            <stop offset={1} stopColor="#64748b" />
          </linearGradient>
          <clipPath id={`${uid}-paper`}>
            <rect x={5} y={11} width={20} height={13} />
          </clipPath>
        </defs>
        <motion.g
          initial={{ x: 0 }}
          animate={
            frozen
              ? { x: 0 }
              : isHovering
                ? { x: [0, -0.9, 0.9, -0.7, 0] }
                : { x: [0, 0.15, -0.15, 0.1, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.3 : 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <rect
            x={2}
            y={25.2}
            width={30}
            height={4.6}
            rx={1.6}
            fill={`url(#${uid}-base)`}
            stroke="#292524"
            strokeWidth={0.6}
          />
          <path
            d="M3.6 26.3 H30.4"
            stroke="#fde68a"
            strokeWidth={0.5}
            strokeLinecap="round"
            opacity={0.4}
          />
          <rect
            x={3.6}
            y={15}
            width={1.6}
            height={10.4}
            rx={0.6}
            fill="#475569"
          />
          <rect
            x={24.8}
            y={15}
            width={1.6}
            height={10.4}
            rx={0.6}
            fill="#475569"
          />
          <rect
            x={5}
            y={11}
            width={20}
            height={13}
            rx={2}
            fill={`url(#${uid}-drum)`}
            stroke="#64748b"
            strokeWidth={0.6}
          />
          <g clipPath={`url(#${uid}-paper)`}>
            <path
              d="M5 13.6 H25 M5 16 H25 M5 19.2 H25 M5 21.6 H25"
              stroke="#93c5fd"
              strokeWidth={0.3}
              opacity={0.5}
            />
            <motion.path
              d="M5 17.6 L8 17.6 L8.6 16.9 L9.2 18.2 L9.8 17.6 L12 17.6 L12.6 14.2 L13.3 21.4 L14 13 L14.7 20.8 L15.4 15.6 L16.1 18.8 L16.8 17 L17.5 17.6 L25 17.6 L25 17.6 L28 17.6 L28.6 16.9 L29.2 18.2 L29.8 17.6 L32 17.6 L32.6 14.2 L33.3 21.4 L34 13 L34.7 20.8 L35.4 15.6 L36.1 18.8 L36.8 17 L37.5 17.6 L45 17.6"
              stroke="#ef4444"
              strokeWidth={0.8}
              strokeLinejoin="round"
              strokeLinecap="round"
              initial={{ x: 0 }}
              animate={frozen ? { x: 0 } : { x: [0, -20] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 1.2 : 3,
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
          <ellipse
            cx={5}
            cy={17.5}
            rx={1.5}
            ry={6.5}
            fill={`url(#${uid}-cap)`}
          />
          <ellipse
            cx={25}
            cy={17.5}
            rx={1.5}
            ry={6.5}
            fill={`url(#${uid}-cap)`}
          />
          <rect
            x={28.6}
            y={4.6}
            width={1.8}
            height={21}
            rx={0.8}
            fill={`url(#${uid}-cap)`}
          />
          <motion.g
            initial={{ rotate: 0 }}
            animate={
              frozen
                ? { rotate: 0 }
                : isHovering
                  ? { rotate: [0, 5, -5, 4, 0] }
                  : { rotate: [0, 1.6, -1.6, 1.1, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.25 : 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "29.5px",
              originY: "6.4px",
            }}
          >
            <line
              x1={29.5}
              y1={6.4}
              x2={18.2}
              y2={16.6}
              stroke={`url(#${uid}-arm)`}
              strokeWidth={1.1}
              strokeLinecap="round"
            />
            <circle
              cx={23.4}
              cy={11.7}
              r={1.5}
              fill="#475569"
              stroke="#1e293b"
              strokeWidth={0.4}
            />
            <path
              d="M18.9 15.5 L17.2 17.7 L19.6 16.6 Z"
              fill="#ef4444"
              stroke="#7f1d1d"
              strokeWidth={0.4}
              strokeLinejoin="round"
            />
          </motion.g>
          <circle
            cx={29.5}
            cy={6.4}
            r={1.2}
            fill="#e2e8f0"
            stroke="#334155"
            strokeWidth={0.4}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
