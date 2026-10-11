"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function PinballCursor({
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
        data-cursor="pinball"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(244,63,94,0.45))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-ball`} cx="35%" cy="30%" r="70%">
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={0.35} stopColor="#e2e8f0" />
            <stop offset={0.75} stopColor="#64748b" />
            <stop offset={1} stopColor="#1e293b" />
          </radialGradient>
          <radialGradient id={`${uid}-bumper`} cx="45%" cy="40%" r="60%">
            <stop offset={0} stopColor="#fda4af" />
            <stop offset={0.6} stopColor="#f43f5e" />
            <stop offset={1} stopColor="#9f1239" />
          </radialGradient>
          <radialGradient id={`${uid}-cap`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#fef9c3" />
            <stop offset={1} stopColor="#f59e0b" />
          </radialGradient>
          <linearGradient id={`${uid}-flipper`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={1} stopColor="#cbd5e1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M2.2 13 L3.8 11.4 L5.4 13 M2.2 16 L3.8 14.4 L5.4 16"
          stroke="#22d3ee"
          strokeWidth={0.9}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 1 }}
          animate={frozen ? { opacity: 1 } : { opacity: [0.3, 1, 0.3] }}
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 0.7, repeat: Infinity, ease: "easeInOut" }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.path
          d="M28.6 13 L30.2 11.4 L31.8 13 M28.6 16 L30.2 14.4 L31.8 16"
          stroke="#22d3ee"
          strokeWidth={0.9}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 1 }}
          animate={frozen ? { opacity: 1 } : { opacity: [0.3, 1, 0.3] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.35,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.g
          initial={{ scale: 1 }}
          animate={frozen ? { scale: 1 } : { scale: [1, 1, 1.18, 1, 1] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.8 : 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.44, 0.5, 0.62, 1],
                }
          }
          style={{
            transformBox: "view-box",
            originX: "17px",
            originY: "8.5px",
          }}
        >
          <circle cx={17} cy={8.5} r={6.6} fill="#f43f5e" fillOpacity={0.18} />
          <circle
            cx={17}
            cy={8.5}
            r={5.4}
            fill={`url(#${uid}-bumper)`}
            stroke="#881337"
            strokeWidth={0.6}
          />
          <circle cx={17} cy={8.5} r={3.8} stroke="#fff1f2" strokeWidth={1} />
          <circle
            cx={17}
            cy={8.5}
            r={2.8}
            fill={`url(#${uid}-cap)`}
            stroke="#b45309"
            strokeWidth={0.4}
          />
          <path
            d="M17 6.8 L17.44 7.89 L18.62 7.97 L17.71 8.73 L18 9.88 L17 9.25 L16 9.88 L16.29 8.73 L15.38 7.97 L16.56 7.89 Z"
            fill="#ffffff"
            opacity={0.95}
          />
        </motion.g>
        <motion.path
          d="M18.48 15.21 L19.77 15.75 M17.61 16.08 L18.15 17.37 M16.39 16.08 L15.85 17.37 M15.52 15.21 L14.23 15.75 M15.52 13.99 L14.23 13.45 M16.39 13.12 L15.85 11.83 M17.61 13.12 L18.15 11.83 M18.48 13.99 L19.77 13.45"
          stroke="#fde047"
          strokeWidth={0.8}
          strokeLinecap="round"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={
            frozen
              ? { opacity: 0, scale: 0.6 }
              : { opacity: [0, 0, 1, 0, 0], scale: [0.6, 0.6, 1.1, 1.4, 1.4] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.8 : 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.46, 0.5, 0.6, 1],
                }
          }
          style={{
            transformBox: "view-box",
            originX: "17px",
            originY: "14.6px",
          }}
        />
        <motion.g
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, -24, 0, 0] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.8 : 1.4,
                  repeat: Infinity,
                  ease: ["easeOut", "easeIn", "linear"],
                  times: [0, 0.06, 0.22, 1],
                }
          }
          style={{
            transformBox: "view-box",
            originX: "5.4px",
            originY: "24.6px",
          }}
        >
          <path
            d="M5.2 22.6 C4 22.6 3.4 23.6 3.4 24.6 C3.4 25.8 4.4 26.6 5.6 26.6 L14.2 28.3 C15 28.4 15.5 27.6 14.9 27 L6.6 23 C6.2 22.8 5.7 22.6 5.2 22.6 Z"
            fill={`url(#${uid}-flipper)`}
            stroke="#dc2626"
            strokeWidth={0.9}
            strokeLinejoin="round"
          />
          <circle cx={5.4} cy={24.6} r={0.7} fill="#dc2626" />
        </motion.g>
        <motion.g
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, 24, 0, 0] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.8 : 1.4,
                  repeat: Infinity,
                  ease: ["easeOut", "easeIn", "linear"],
                  times: [0, 0.06, 0.22, 1],
                }
          }
          style={{
            transformBox: "view-box",
            originX: "28.6px",
            originY: "24.6px",
          }}
        >
          <path
            d="M28.8 22.6C30 22.6 30.6 23.6 30.6 24.6C30.6 25.8 29.6 26.6 28.4 26.6L19.8 28.3C19 28.4 18.5 27.6 19.1 27L27.4 23C27.8 22.8 28.3 22.6 28.8 22.6Z"
            fill={`url(#${uid}-flipper)`}
            stroke="#dc2626"
            strokeWidth={0.9}
            strokeLinejoin="round"
          />
          <circle cx={28.6} cy={24.6} r={0.7} fill="#dc2626" />
        </motion.g>
        <motion.g
          initial={{ y: 0 }}
          animate={frozen ? { y: 0 } : { y: [0, -6.4, 0] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.8 : 1.4,
                  repeat: Infinity,
                  ease: ["easeOut", "easeIn"],
                  times: [0, 0.5, 1],
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <circle
            cx={17}
            cy={23.2}
            r={2.9}
            fill={`url(#${uid}-ball)`}
            stroke="#1e293b"
            strokeWidth={0.4}
          />
          <circle cx={16.1} cy={22.2} r={0.75} fill="#ffffff" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
