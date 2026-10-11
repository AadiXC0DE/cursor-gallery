"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function BeeCursor({
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
        data-cursor="bee"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(250,204,21,0.45))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-fuzz`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#fef9c3" />
            <stop offset={0.5} stopColor="#facc15" />
            <stop offset={1} stopColor="#ca8a04" />
          </radialGradient>
          <linearGradient id={`${uid}-head`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#57534e" />
            <stop offset={1} stopColor="#0c0a09" />
          </linearGradient>
          <clipPath id={`${uid}-beeBody`}>
            <path d="M8.6 18.4 C8.6 14.6 11.8 12.2 16 12.2 C20.2 12.2 23.2 14.6 23.2 18.4 C23.2 22.2 20.2 24.6 16 24.6 C11.8 24.6 8.6 22.2 8.6 18.4 Z" />
          </clipPath>
        </defs>
        <motion.path
          d="M2 20 q1.4 -1 2.8 0 t2.8 0"
          stroke="#fde68a"
          strokeWidth={0.6}
          strokeLinecap="round"
          strokeDasharray="0.6 1.2"
          initial={{ opacity: 0.2 }}
          animate={frozen ? { opacity: 0.2 } : { opacity: [0.2, 0.9, 0.2] }}
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.g
          initial={{ x: 0, y: 0, rotate: 0 }}
          animate={
            frozen
              ? { x: 0, y: 0, rotate: 0 }
              : isHovering
                ? {
                    x: [0, 2.2, 0, -2.2, 0],
                    y: [0, -2.4, 0, -1.6, 0],
                    rotate: [0, -8, 0, 6, 0],
                  }
                : {
                    x: [0, 1.2, 0, -1.2, 0],
                    y: [0, -1.4, 0, -0.8, 0],
                    rotate: [0, -4, 0, 3, 0],
                  }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1 : 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <motion.path
            d="M15.6 13 C12.6 11.6 11.2 7.4 13 5.8 C14.8 4.2 17.6 7.6 17 12.2 Z"
            fill="#f0f9ff"
            fillOpacity={0.7}
            stroke="#7dd3fc"
            strokeWidth={0.45}
            strokeLinejoin="round"
            initial={{ scaleY: 1 }}
            animate={frozen ? { scaleY: 1 } : { scaleY: [1, 0.35, 1] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.08 : 0.14,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "16.6px",
              originY: "12.8px",
            }}
          />
          <path
            d="M8.8 18.2 L5.2 19 L8.8 19.8 Z"
            fill="#1c1917"
            stroke="#1c1917"
            strokeWidth={0.3}
            strokeLinejoin="round"
          />
          <path
            d="M8.6 18.4 C8.6 14.6 11.8 12.2 16 12.2 C20.2 12.2 23.2 14.6 23.2 18.4 C23.2 22.2 20.2 24.6 16 24.6 C11.8 24.6 8.6 22.2 8.6 18.4 Z"
            fill={`url(#${uid}-fuzz)`}
            stroke="#713f12"
            strokeWidth={0.6}
          />
          <g clipPath={`url(#${uid}-beeBody)`}>
            <path
              d="M11.6 11 C10.6 14 10.6 22 11.6 25 H14 C13 22 13 14 14 11 Z"
              fill="#1c1917"
            />
            <path
              d="M16.4 11 C15.4 14 15.4 22 16.4 25 H18.8 C17.8 22 17.8 14 18.8 11 Z"
              fill="#1c1917"
            />
          </g>
          <path
            d="M10.6 15.6 C11.6 13.8 13.6 13 15.6 13"
            stroke="#ffffff"
            strokeWidth={0.9}
            strokeLinecap="round"
            opacity={0.6}
          />
          <circle
            cx={23.6}
            cy={16.8}
            r={3.6}
            fill={`url(#${uid}-head)`}
            stroke="#0c0a09"
            strokeWidth={0.4}
          />
          <circle cx={24.8} cy={16} r={1.25} fill="#ffffff" />
          <circle cx={25.1} cy={16.1} r={0.65} fill="#0c0a09" />
          <circle cx={25.35} cy={15.8} r={0.25} fill="#ffffff" />
          <ellipse
            cx={25.2}
            cy={18.4}
            rx={0.8}
            ry={0.5}
            fill="#fb7185"
            opacity={0.8}
          />
          <path
            d="M23.4 13.4 C23.4 11.2 24.4 9.8 25.8 9.4 M22.2 13.6 C21.6 11.6 21.8 10 22.6 9"
            stroke="#1c1917"
            strokeWidth={0.6}
            strokeLinecap="round"
          />
          <circle
            cx={26}
            cy={9.3}
            r={0.7}
            fill="#facc15"
            stroke="#1c1917"
            strokeWidth={0.3}
          />
          <circle
            cx={22.6}
            cy={8.9}
            r={0.6}
            fill="#facc15"
            stroke="#1c1917"
            strokeWidth={0.3}
          />
          <motion.path
            d="M17.4 12.6 C17.2 9 19.4 5.2 21.4 6 C23.2 6.8 21.6 11 18.6 13 Z"
            fill="#f0f9ff"
            fillOpacity={0.7}
            stroke="#7dd3fc"
            strokeWidth={0.45}
            strokeLinejoin="round"
            initial={{ scaleY: 1 }}
            animate={frozen ? { scaleY: 1 } : { scaleY: [1, 0.35, 1] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.08 : 0.14,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.07,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "16.6px",
              originY: "12.8px",
            }}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
