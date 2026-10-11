"use client";
import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const RAYS = [-150, -115, -90, -65, -30, 180, 0];

export default function IdeaCursor({
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
  const eureka = !!isHovering && !frozen;
  const uid = useId().replace(/[^a-zA-Z0-9-]/g, "");

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        aria-hidden="true"
        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: eureka ? -10 : 0, scale: eureka ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1px rgba(120,53,15,0.35)) drop-shadow(0 0 7px rgba(251,191,36,0.55))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-glass`} cx="50%" cy="58%" r="60%">
            <stop offset="0%" stopColor="#fffbeb" />
            <stop offset="35%" stopColor="#fef08a" />
            <stop offset="75%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
          <radialGradient id={`${uid}-halo`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fde047" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${uid}-metal`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="35%" stopColor="#e2e8f0" />
            <stop offset="70%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>

        {/* Warm halo that breathes like a living filament */}
        <motion.circle
          cx="18"
          cy="14.5"
          r="13"
          fill={`url(#${uid}-halo)`}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={
            frozen
              ? { scale: 1, opacity: 0.8 }
              : eureka
                ? { scale: [1.15, 1.3, 1.15], opacity: [1, 0.85, 1] }
                : { scale: [0.95, 1.05, 0.95], opacity: [0.6, 0.9, 0.6] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: eureka ? 0.8 : 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "18px",
            originY: "14.5px",
          }}
        />

        {/* Light rays burst outward on hover */}
        <motion.g
          initial={{ scale: 1, opacity: 0.7 }}
          animate={
            frozen
              ? { scale: 1, opacity: 0.7 }
              : eureka
                ? { scale: [1.15, 1.3, 1.15], opacity: 1 }
                : { scale: [0.94, 1.04, 0.94], opacity: [0.45, 0.85, 0.45] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: eureka ? 0.6 : 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "18px",
            originY: "14.5px",
          }}
        >
          {RAYS.map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={angle}
                x1={18 + Math.cos(rad) * 12.4}
                y1={14.5 + Math.sin(rad) * 12.4}
                x2={18 + Math.cos(rad) * 15}
                y2={14.5 + Math.sin(rad) * 15}
                stroke="#f59e0b"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            );
          })}
        </motion.g>

        {/* Glass bulb */}
        <path
          d="M18 5.5 C13.1 5.5 9.2 9.3 9.2 14.1 C9.2 17 10.6 19.1 12.3 20.7 C13.3 21.6 13.9 22.7 13.9 24 V24.6 H22.1 V24 C22.1 22.7 22.7 21.6 23.7 20.7 C25.4 19.1 26.8 17 26.8 14.1 C26.8 9.3 22.9 5.5 18 5.5 Z"
          fill={`url(#${uid}-glass)`}
          stroke="#d97706"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />

        {/* Filament */}
        <path
          d="M16.2 24.6 L16.5 18.8 M19.8 24.6 L19.5 18.8"
          stroke="#a16207"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
        <path
          d="M16.5 18.8 C16.5 16.6 17.1 16.6 17.1 18.3 C17.1 16.4 17.7 16.4 17.7 18.3 C17.7 16.4 18.3 16.4 18.3 18.3 C18.3 16.4 18.9 16.4 18.9 18.3 C18.9 16.6 19.5 16.6 19.5 18.8"
          fill="none"
          stroke="#f97316"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.75"
        />
        <motion.path
          d="M16.5 18.8 C16.5 16.6 17.1 16.6 17.1 18.3 C17.1 16.4 17.7 16.4 17.7 18.3 C17.7 16.4 18.3 16.4 18.3 18.3 C18.3 16.4 18.9 16.4 18.9 18.3 C18.9 16.6 19.5 16.6 19.5 18.8"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 1 }}
          animate={frozen ? { opacity: 1 } : { opacity: [1, 0.7, 1, 0.85, 1] }}
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
          }
          style={{ filter: "drop-shadow(0 0 1.5px #fb923c)" }}
        />

        {/* Glass highlight */}
        <path
          d="M12.2 12.2 C12.6 9.8 14.4 8 16.6 7.5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="11.9" cy="14.4" r="0.75" fill="#ffffff" opacity="0.8" />

        {/* Screw base */}
        <rect
          x="13.6"
          y="24.4"
          width="8.8"
          height="5.2"
          rx="1.3"
          fill={`url(#${uid}-metal)`}
          stroke="#334155"
          strokeWidth="0.6"
        />
        <path
          d="M13.9 26.1 L22.1 25.5 M13.9 28 L22.1 27.4"
          stroke="#475569"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
        <path d="M15.6 29.6 H20.4 L19.4 31.3 H16.6 Z" fill="#1e293b" />
      </motion.svg>
    </motion.div>
  );
}
