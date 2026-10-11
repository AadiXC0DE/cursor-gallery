"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function LighthouseCursor({
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
        data-cursor="lighthouse"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(250,204,21,0.4))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-tower`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#f8fafc" />
            <stop offset={0.6} stopColor="#e2e8f0" />
            <stop offset={1} stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id={`${uid}-stripe`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#f87171" />
            <stop offset={0.6} stopColor="#dc2626" />
            <stop offset={1} stopColor="#991b1b" />
          </linearGradient>
          <linearGradient
            id={`${uid}-beam`}
            x1={17}
            y1={0}
            x2={34}
            y2={0}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fef9c3" stopOpacity={0.9} />
            <stop offset={1} stopColor="#fde047" stopOpacity={0} />
          </linearGradient>
          <radialGradient id={`${uid}-lamp`} cx="50%" cy="50%" r="50%">
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={0.5} stopColor="#fef08a" />
            <stop offset={1} stopColor="#facc15" />
          </radialGradient>
          <radialGradient id={`${uid}-halo`} cx="50%" cy="50%" r="50%">
            <stop offset={0} stopColor="#fef08a" stopOpacity={0.7} />
            <stop offset={1} stopColor="#fef08a" stopOpacity={0} />
          </radialGradient>
          <linearGradient id={`${uid}-sea`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#38bdf8" />
            <stop offset={1} stopColor="#1d4ed8" />
          </linearGradient>
          <clipPath id={`${uid}-towerClip`}>
            <path d="M13.4 28 L14.6 11.8 H19.4 L20.6 28 Z" />
          </clipPath>
          <clipPath id={`${uid}-bay`}>
            <ellipse cx={17} cy={30.2} rx={14.6} ry={3.6} />
          </clipPath>
        </defs>
        <motion.path
          d="M17 7.6 L34 3.4 L34 12.6 L17 9.6 Z"
          fill={`url(#${uid}-beam)`}
          initial={{ scaleX: 1 }}
          animate={frozen ? { scaleX: 1 } : { scaleX: [1, -1, 1] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.6 : 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "17px",
            originY: "8.6px",
          }}
        />
        <motion.circle
          cx={17}
          cy={8.6}
          r={5}
          fill={`url(#${uid}-halo)`}
          initial={{ scale: 0.9, opacity: 0.7 }}
          animate={
            frozen
              ? { scale: 0.9, opacity: 0.7 }
              : { scale: [0.9, 1.15, 0.9], opacity: [0.7, 1, 0.7] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.8 : 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "17px",
            originY: "8.6px",
          }}
        />
        <path
          d="M13.4 28 L14.6 11.8 H19.4 L20.6 28 Z"
          fill={`url(#${uid}-tower)`}
          stroke="#334155"
          strokeWidth={0.6}
          strokeLinejoin="round"
        />
        <g clipPath={`url(#${uid}-towerClip)`}>
          <rect
            x={10}
            y={14.4}
            width={14}
            height={3}
            fill={`url(#${uid}-stripe)`}
          />
          <rect
            x={10}
            y={20.2}
            width={14}
            height={3}
            fill={`url(#${uid}-stripe)`}
          />
        </g>
        <path d="M16 28 V25.6 C16 24.6 18 24.6 18 25.6 V28 Z" fill="#1e293b" />
        <rect
          x={16.4}
          y={18}
          width={1.2}
          height={1.6}
          rx={0.3}
          fill="#fde68a"
          stroke="#1e293b"
          strokeWidth={0.3}
        />
        <rect x={13} y={10.8} width={8} height={1.4} rx={0.5} fill="#334155" />
        <path
          d="M13.4 10.8 V9.6 M15 10.8 V9.6 M19 10.8 V9.6 M20.6 10.8 V9.6"
          stroke="#334155"
          strokeWidth={0.4}
        />
        <rect
          x={14.6}
          y={6.6}
          width={4.8}
          height={4.2}
          rx={0.6}
          fill={`url(#${uid}-lamp)`}
          stroke="#334155"
          strokeWidth={0.5}
        />
        <path
          d="M16.2 6.6 V10.8 M17.8 6.6 V10.8"
          stroke="#334155"
          strokeWidth={0.35}
        />
        <path
          d="M14 6.9 L17 3.6 L20 6.9 Z"
          fill={`url(#${uid}-stripe)`}
          stroke="#7f1d1d"
          strokeWidth={0.5}
          strokeLinejoin="round"
        />
        <circle cx={17} cy={3.2} r={0.7} fill="#334155" />
        <ellipse
          cx={17}
          cy={29}
          rx={8.6}
          ry={2}
          fill="#475569"
          stroke="#1e293b"
          strokeWidth={0.4}
        />
        <g clipPath={`url(#${uid}-bay)`}>
          <motion.path
            d="M-8 29.6 q2 -1.4 4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 V34 H-8 Z"
            fill={`url(#${uid}-sea)`}
            opacity={0.92}
            initial={{ x: 0 }}
            animate={frozen ? { x: 0 } : { x: [0, -8] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1.2 : 2.4,
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
