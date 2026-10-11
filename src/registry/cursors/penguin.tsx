"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function PenguinCursor({
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
        data-cursor="penguin"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(56,189,248,0.35))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-body`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#475569" />
            <stop offset={0.5} stopColor="#1e293b" />
            <stop offset={1} stopColor="#020617" />
          </linearGradient>
          <linearGradient id={`${uid}-belly`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={1} stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id={`${uid}-beak`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#fdba74" />
            <stop offset={1} stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id={`${uid}-scarf`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#f87171" />
            <stop offset={1} stopColor="#b91c1c" />
          </linearGradient>
        </defs>
        <ellipse
          cx={17}
          cy={30.4}
          rx={7.4}
          ry={1.2}
          fill="#0f172a"
          opacity={0.25}
        />
        <motion.g
          initial={{ rotate: -6 }}
          animate={frozen ? { rotate: -6 } : { rotate: [-6, 6, -6] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.6 : 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "17px",
            originY: "29.4px",
          }}
        >
          <ellipse
            cx={14}
            cy={28.8}
            rx={2.3}
            ry={0.95}
            fill={`url(#${uid}-beak)`}
            stroke="#9a3412"
            strokeWidth={0.35}
          />
          <ellipse
            cx={20}
            cy={28.8}
            rx={2.3}
            ry={0.95}
            fill={`url(#${uid}-beak)`}
            stroke="#9a3412"
            strokeWidth={0.35}
          />
          <motion.path
            d="M9.2 15 C6.8 16.8 5.6 20.2 5.8 23 C7.8 22.2 9.2 20.2 9.8 18 Z"
            fill={`url(#${uid}-body)`}
            stroke="#020617"
            strokeWidth={0.5}
            initial={{ rotate: 0 }}
            animate={
              frozen
                ? { rotate: 0 }
                : isHovering
                  ? { rotate: [0, 34, 0] }
                  : { rotate: [0, 8, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.35 : 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "9.4px",
              originY: "15.4px",
            }}
          />
          <motion.path
            d="M24.8 15C27.2 16.8 28.4 20.2 28.2 23C26.2 22.2 24.8 20.2 24.2 18Z"
            fill={`url(#${uid}-body)`}
            stroke="#020617"
            strokeWidth={0.5}
            initial={{ rotate: 0 }}
            animate={
              frozen
                ? { rotate: 0 }
                : isHovering
                  ? { rotate: [0, -34, 0] }
                  : { rotate: [0, -8, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.35 : 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "24.6px",
              originY: "15.4px",
            }}
          />
          <path
            d="M17 3.6 C22.4 3.6 25.4 9 25.4 16.4 C25.4 24 22 28.6 17 28.6 C12 28.6 8.6 24 8.6 16.4 C8.6 9 11.6 3.6 17 3.6 Z"
            fill={`url(#${uid}-body)`}
            stroke="#020617"
            strokeWidth={0.6}
          />
          <path
            d="M17 10 C20.6 10 22.6 14 22.6 19 C22.6 24 20.4 27.4 17 27.4 C13.6 27.4 11.4 24 11.4 19 C11.4 14 13.4 10 17 10 Z"
            fill={`url(#${uid}-belly)`}
          />
          <path
            d="M17 7.6 C18.8 6.2 21.6 7 21.8 9.6 C22 12 19.6 13.6 17 14.6 C14.4 13.6 12 12 12.2 9.6 C12.4 7 15.2 6.2 17 7.6 Z"
            fill={`url(#${uid}-belly)`}
          />
          <path
            d="M12.6 6.6 C13.6 5.2 15 4.6 16.2 4.5"
            stroke="#94a3b8"
            strokeWidth={0.8}
            strokeLinecap="round"
            opacity={0.7}
          />
          <circle cx={15} cy={9.8} r={0.95} fill="#0f172a" />
          <circle cx={19} cy={9.8} r={0.95} fill="#0f172a" />
          <circle cx={15.3} cy={9.5} r={0.32} fill="#ffffff" />
          <circle cx={19.3} cy={9.5} r={0.32} fill="#ffffff" />
          <ellipse
            cx={13.6}
            cy={11.9}
            rx={0.8}
            ry={0.5}
            fill="#fda4af"
            opacity={0.85}
          />
          <ellipse
            cx={20.4}
            cy={11.9}
            rx={0.8}
            ry={0.5}
            fill="#fda4af"
            opacity={0.85}
          />
          <path
            d="M15.6 11.2 H18.4 L17 13.2 Z"
            fill={`url(#${uid}-beak)`}
            stroke="#9a3412"
            strokeWidth={0.3}
            strokeLinejoin="round"
          />
          <path
            d="M10.8 15.2 C13 16.4 21 16.4 23.2 15.2 L23.4 17.2 C21 18.4 13 18.4 10.6 17.2 Z"
            fill={`url(#${uid}-scarf)`}
            stroke="#7f1d1d"
            strokeWidth={0.35}
          />
          <path
            d="M20.4 17.4 L22.2 22 L20 21.6 L19.2 17.6 Z"
            fill={`url(#${uid}-scarf)`}
            stroke="#7f1d1d"
            strokeWidth={0.35}
            strokeLinejoin="round"
          />
          <path
            d="M13 16.2 V17.6 M15.4 16.6 V18 M18 16.6 V18 M20.6 16.3 V17.7"
            stroke="#fecaca"
            strokeWidth={0.5}
            opacity={0.8}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
