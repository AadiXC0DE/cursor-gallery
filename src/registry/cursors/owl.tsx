"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring", stiffness: 320, damping: 20 } as const;

export default function OwlCursor({
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
        data-cursor="owl"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(245,158,11,0.35))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-feathers`} cx="40%" cy="30%" r="75%">
            <stop offset={0} stopColor="#d6a77a" />
            <stop offset={0.5} stopColor="#a16207" />
            <stop offset={1} stopColor="#713f12" />
          </radialGradient>
          <linearGradient id={`${uid}-belly`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#fef3c7" />
            <stop offset={1} stopColor="#fcd34d" />
          </linearGradient>
          <radialGradient id={`${uid}-iris`} cx="40%" cy="35%" r="65%">
            <stop offset={0} stopColor="#fef08a" />
            <stop offset={1} stopColor="#f59e0b" />
          </radialGradient>
          <linearGradient id={`${uid}-branch`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#a16207" />
            <stop offset={1} stopColor="#57340d" />
          </linearGradient>
        </defs>
        <path
          d="M1.6 29.6 C10 28.6 24 28.6 32.4 29.8"
          stroke={`url(#${uid}-branch)`}
          strokeWidth={2.2}
          strokeLinecap="round"
        />
        <path
          d="M27 29.2 C28.4 27 30.6 26.4 32 27 C31 28.6 29 29.4 27 29.2 Z"
          fill="#4ade80"
          stroke="#15803d"
          strokeWidth={0.35}
        />
        <motion.g
          initial={{ rotate: -4 }}
          animate={frozen ? { rotate: -4 } : { rotate: [-4, 4, -4] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.4 : 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "28px" }}
        >
          <path
            d="M9.8 9.2 L8.4 3.8 L12.8 7 Z"
            fill={`url(#${uid}-feathers)`}
            stroke="#451a03"
            strokeWidth={0.5}
            strokeLinejoin="round"
          />
          <path
            d="M24.2 9.2 L25.6 3.8 L21.2 7 Z"
            fill={`url(#${uid}-feathers)`}
            stroke="#451a03"
            strokeWidth={0.5}
            strokeLinejoin="round"
          />
          <path
            d="M17 5.6 C23.6 5.6 26.6 10.6 26.6 17 C26.6 23.6 23 28.4 17 28.4 C11 28.4 7.4 23.6 7.4 17 C7.4 10.6 10.4 5.6 17 5.6 Z"
            fill={`url(#${uid}-feathers)`}
            stroke="#451a03"
            strokeWidth={0.6}
          />
          <path
            d="M8 15 C6.6 19 7.6 24 10.6 26.6 C10 22 10 18 11 15.4 Z"
            fill="#78350f"
            opacity={0.8}
          />
          <path
            d="M26 15C27.4 19 26.4 24 23.4 26.6C24 22 24 18 23 15.4Z"
            fill="#78350f"
            opacity={0.8}
          />
          <ellipse
            cx={17}
            cy={21.6}
            rx={5.6}
            ry={6}
            fill={`url(#${uid}-belly)`}
          />
          <path
            d="M14.2 19.6 l0.9 0.8 l0.9 -0.8 M18 19.6 l0.9 0.8 l0.9 -0.8 M16.1 22.4 l0.9 0.8 l0.9 -0.8 M14.2 25 l0.9 0.8 l0.9 -0.8 M18 25 l0.9 0.8 l0.9 -0.8"
            stroke="#b45309"
            strokeWidth={0.45}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx={13.4}
            cy={12.6}
            r={3.9}
            fill="#fef3c7"
            stroke="#92400e"
            strokeWidth={0.4}
          />
          <circle
            cx={20.6}
            cy={12.6}
            r={3.9}
            fill="#fef3c7"
            stroke="#92400e"
            strokeWidth={0.4}
          />
          <motion.g
            initial={false}
            animate={!frozen && isHovering ? { scale: 1.15 } : { scale: 1 }}
            transition={spring}
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "12.6px",
            }}
          >
            <motion.g
              initial={{ scaleY: 1 }}
              animate={frozen ? { scaleY: 1 } : { scaleY: [1, 1, 0.1, 1, 1] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.9, 0.93, 0.96, 1],
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "12.6px",
              }}
            >
              <circle cx={13.4} cy={12.6} r={2.5} fill={`url(#${uid}-iris)`} />
              <circle cx={20.6} cy={12.6} r={2.5} fill={`url(#${uid}-iris)`} />
              <circle cx={13.6} cy={12.8} r={1.35} fill="#1c1917" />
              <circle cx={20.8} cy={12.8} r={1.35} fill="#1c1917" />
              <circle cx={14.1} cy={12.2} r={0.45} fill="#ffffff" />
              <circle cx={21.3} cy={12.2} r={0.45} fill="#ffffff" />
            </motion.g>
          </motion.g>
          <path
            d="M16 14.6 H18 L17 17 Z"
            fill="#f97316"
            stroke="#9a3412"
            strokeWidth={0.3}
            strokeLinejoin="round"
          />
          <path
            d="M14.4 28.6 v1.4 M15.6 28.6 v1.4 M18.4 28.6 v1.4 M19.6 28.6 v1.4"
            stroke="#f97316"
            strokeWidth={0.7}
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
