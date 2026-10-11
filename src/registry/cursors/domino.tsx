"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function DominoCursor({
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
        data-cursor="domino"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.4)) drop-shadow(0 0 6px rgba(250,204,21,0.25))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-tile`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={1} stopColor="#e7e5e4" />
          </linearGradient>
          <linearGradient id={`${uid}-side`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#a8a29e" />
            <stop offset={1} stopColor="#57534e" />
          </linearGradient>
          <radialGradient id={`${uid}-pin`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#fef3c7" />
            <stop offset={1} stopColor="#b45309" />
          </radialGradient>
        </defs>
        <ellipse
          cx={17}
          cy={28.6}
          rx={13}
          ry={1.6}
          fill="#0f172a"
          opacity={0.25}
        />
        <motion.g
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, 0, 9, 9, 0] }
                : { rotate: [0, 0, 3, 0, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.8 : 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.32, 0.42, 0.6, 1],
                }
          }
          style={{
            transformBox: "view-box",
            originX: "28.2px",
            originY: "28.2px",
          }}
        >
          <rect
            x={19.2}
            y={10.2}
            width={9}
            height={18}
            rx={2}
            fill={`url(#${uid}-side)`}
          />
          <rect
            x={18}
            y={9}
            width={9}
            height={18}
            rx={2}
            fill={`url(#${uid}-tile)`}
            stroke="#44403c"
            strokeWidth={0.7}
          />
          <path
            d="M19.4 10.6 V25.4"
            stroke="#ffffff"
            strokeWidth={0.8}
            strokeLinecap="round"
            opacity={0.8}
          />
          <line
            x1={19.6}
            y1={18}
            x2={25.4}
            y2={18}
            stroke="#57534e"
            strokeWidth={0.8}
            strokeLinecap="round"
          />
          <circle cx={22.5} cy={18} r={0.75} fill={`url(#${uid}-pin)`} />
          <circle cx={20.4} cy={11.8} r={1.05} fill="#1c1917" />
          <circle cx={24.6} cy={15.2} r={1.05} fill="#1c1917" />
          <circle cx={20.4} cy={20.6} r={1.05} fill="#1c1917" />
          <circle cx={22.5} cy={22.6} r={1.05} fill="#1c1917" />
          <circle cx={24.6} cy={24.6} r={1.05} fill="#1c1917" />
        </motion.g>
        <motion.g
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, 6.2, 15.5, 15.5, 0] }
                : { rotate: [0, 6.2, 9.2, 6.2, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.8 : 2.6,
                  repeat: Infinity,
                  ease: ["easeIn", "easeOut", "easeInOut", "easeInOut"],
                  times: [0, 0.32, 0.42, 0.6, 1],
                }
          }
          style={{
            transformBox: "view-box",
            originX: "17.2px",
            originY: "28.2px",
          }}
        >
          <rect
            x={8.2}
            y={10.2}
            width={9}
            height={18}
            rx={2}
            fill={`url(#${uid}-side)`}
          />
          <rect
            x={7}
            y={9}
            width={9}
            height={18}
            rx={2}
            fill={`url(#${uid}-tile)`}
            stroke="#44403c"
            strokeWidth={0.7}
          />
          <path
            d="M8.4 10.6 V25.4"
            stroke="#ffffff"
            strokeWidth={0.8}
            strokeLinecap="round"
            opacity={0.8}
          />
          <line
            x1={8.6}
            y1={18}
            x2={14.4}
            y2={18}
            stroke="#57534e"
            strokeWidth={0.8}
            strokeLinecap="round"
          />
          <circle cx={11.5} cy={18} r={0.75} fill={`url(#${uid}-pin)`} />
          <circle cx={11.5} cy={13.5} r={1.2} fill="#1c1917" />
          <circle cx={9.4} cy={20.6} r={1.05} fill="#1c1917" />
          <circle cx={13.6} cy={24.4} r={1.05} fill="#1c1917" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
