"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring", stiffness: 320, damping: 20 } as const;

export default function OscilloscopeCursor({
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
        data-cursor="oscilloscope"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(74,222,128,0.4))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-case`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#6b7280" />
            <stop offset={0.15} stopColor="#4b5563" />
            <stop offset={1} stopColor="#1f2937" />
          </linearGradient>
          <radialGradient id={`${uid}-screen`} cx="50%" cy="45%" r="70%">
            <stop offset={0} stopColor="#14532d" />
            <stop offset={0.7} stopColor="#052e16" />
            <stop offset={1} stopColor="#022c22" />
          </radialGradient>
          <radialGradient id={`${uid}-knob`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#f8fafc" />
            <stop offset={1} stopColor="#64748b" />
          </radialGradient>
          <clipPath id={`${uid}-crt`}>
            <rect x={4.6} y={7.6} width={18.8} height={15.8} rx={2.4} />
          </clipPath>
        </defs>
        <rect x={5} y={28.4} width={4} height={1.8} rx={0.6} fill="#111827" />
        <rect x={25} y={28.4} width={4} height={1.8} rx={0.6} fill="#111827" />
        <rect
          x={2}
          y={5}
          width={30}
          height={24}
          rx={3.4}
          fill={`url(#${uid}-case)`}
          stroke="#111827"
          strokeWidth={0.8}
        />
        <path
          d="M4.6 6.3 H29.4"
          stroke="#ffffff"
          strokeWidth={0.7}
          strokeLinecap="round"
          opacity={0.3}
        />
        <rect x={4} y={7} width={20} height={17} rx={3} fill="#0b0f19" />
        <rect
          x={4.6}
          y={7.6}
          width={18.8}
          height={15.8}
          rx={2.4}
          fill={`url(#${uid}-screen)`}
        />
        <g clipPath={`url(#${uid}-crt)`}>
          <path
            d="M9.3 7.6 V23.4 M14 7.6 V23.4 M18.7 7.6 V23.4 M4.6 11.6 H23.4 M4.6 15.5 H23.4 M4.6 19.4 H23.4"
            stroke="#4ade80"
            strokeWidth={0.4}
            opacity={0.2}
          />
          <motion.g
            initial={false}
            animate={!frozen && isHovering ? { scaleY: 1.5 } : { scaleY: 1 }}
            transition={spring}
            style={{
              transformBox: "view-box",
              originX: "14px",
              originY: "15.5px",
            }}
          >
            <motion.g
              initial={{ x: 0 }}
              animate={frozen ? { x: 0 } : { x: [0, -8] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 0.6 : 1.2,
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
                d="M4 15.5 q2 -6.8 4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0"
                stroke="#22c55e"
                strokeWidth={3}
                strokeLinecap="round"
                opacity={0.3}
              />
              <path
                d="M4 15.5 q2 -6.8 4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0 t4 0"
                stroke="#bbf7d0"
                strokeWidth={1.1}
                strokeLinecap="round"
              />
            </motion.g>
          </motion.g>
          <motion.rect
            x={4.6}
            y={7.6}
            width={1.6}
            height={15.8}
            fill="#4ade80"
            opacity={0.14}
            initial={{ x: 0 }}
            animate={frozen ? { x: 0 } : { x: [0, 17.2] }}
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
        <path
          d="M6.2 9.6 C9 8.8 12 8.6 15 8.8"
          stroke="#ffffff"
          strokeWidth={1.2}
          strokeLinecap="round"
          opacity={0.15}
        />
        <circle
          cx={27.6}
          cy={11.4}
          r={2}
          fill={`url(#${uid}-knob)`}
          stroke="#0f172a"
          strokeWidth={0.5}
        />
        <line
          x1={27.6}
          y1={11.4}
          x2={27.6}
          y2={9.9}
          stroke="#0f172a"
          strokeWidth={0.6}
          strokeLinecap="round"
        />
        <circle
          cx={27.6}
          cy={17.2}
          r={2}
          fill={`url(#${uid}-knob)`}
          stroke="#0f172a"
          strokeWidth={0.5}
        />
        <line
          x1={27.6}
          y1={17.2}
          x2={28.7}
          y2={16.1}
          stroke="#0f172a"
          strokeWidth={0.6}
          strokeLinecap="round"
        />
        <circle cx={27.6} cy={22.4} r={1.8} fill="#ef4444" opacity={0.25} />
        <motion.circle
          cx={27.6}
          cy={22.4}
          r={0.9}
          fill="#f87171"
          initial={{ opacity: 1 }}
          animate={frozen ? { opacity: 1 } : { opacity: [1, 0.3, 1] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.5 : 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
      </svg>
    </motion.div>
  );
}
