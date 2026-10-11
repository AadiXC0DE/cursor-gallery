"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function LavaLampCursor({
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
        data-cursor="lava-lamp"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(219,39,119,0.5))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-chrome`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#f8fafc" />
            <stop offset={0.35} stopColor="#cbd5e1" />
            <stop offset={0.7} stopColor="#64748b" />
            <stop offset={1} stopColor="#334155" />
          </linearGradient>
          <linearGradient id={`${uid}-liquid`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#7c3aed" />
            <stop offset={1} stopColor="#db2777" />
          </linearGradient>
          <radialGradient id={`${uid}-wax`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#fef9c3" />
            <stop offset={0.45} stopColor="#fb923c" />
            <stop offset={1} stopColor="#ea580c" />
          </radialGradient>
          <clipPath id={`${uid}-vessel`}>
            <path d="M12.8 8 H21.2 L23.4 24 H10.6 Z" />
          </clipPath>
        </defs>
        <path
          d="M12.8 8 H21.2 L23.4 24 H10.6 Z"
          fill={`url(#${uid}-liquid)`}
          stroke="#4c1d95"
          strokeWidth={0.5}
        />
        <g clipPath={`url(#${uid}-vessel)`}>
          <ellipse
            cx={17}
            cy={24}
            rx={6.6}
            ry={1.8}
            fill={`url(#${uid}-wax)`}
          />
          <motion.ellipse
            cx={15.6}
            cy={20.4}
            rx={3}
            ry={2.4}
            fill={`url(#${uid}-wax)`}
            initial={{ y: -3, scaleX: 0.95, scaleY: 1.1 }}
            animate={
              frozen
                ? { y: -3, scaleX: 0.95, scaleY: 1.1 }
                : { y: [0, -10, 0], scaleX: [1, 0.8, 1], scaleY: [1, 1.25, 1] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 2.2727272727272725 : 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "15.6px",
              originY: "20.4px",
            }}
          />
          <motion.ellipse
            cx={19}
            cy={12.4}
            rx={2.2}
            ry={1.9}
            fill={`url(#${uid}-wax)`}
            initial={{ y: 0, scaleX: 1, scaleY: 1 }}
            animate={
              frozen
                ? { y: 0, scaleX: 1, scaleY: 1 }
                : { y: [0, 8, 0], scaleX: [1, 1.2, 1], scaleY: [1, 0.85, 1] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 2.727272727272727 : 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "19px",
              originY: "12.4px",
            }}
          />
          <motion.ellipse
            cx={15}
            cy={15.6}
            rx={1.4}
            ry={1.2}
            fill={`url(#${uid}-wax)`}
            initial={{ y: 0, scale: 1 }}
            animate={
              frozen
                ? { y: 0, scale: 1 }
                : { y: [3, -5, 3], scale: [1, 1.2, 1] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1.8181818181818181 : 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "15px",
              originY: "15.6px",
            }}
          />
        </g>
        <path
          d="M13.6 9.2 L11.9 22.6"
          stroke="#ffffff"
          strokeWidth={0.8}
          strokeLinecap="round"
          opacity={0.35}
        />
        <path
          d="M14 3 H20 L21.2 8 H12.8 Z"
          fill={`url(#${uid}-chrome)`}
          stroke="#1e293b"
          strokeWidth={0.5}
          strokeLinejoin="round"
        />
        <path
          d="M12.2 24 H21.8 L24.4 31 H9.6 Z"
          fill={`url(#${uid}-chrome)`}
          stroke="#1e293b"
          strokeWidth={0.5}
          strokeLinejoin="round"
        />
        <path
          d="M11.6 27 H22.4"
          stroke="#1e293b"
          strokeWidth={0.4}
          opacity={0.5}
        />
        <path
          d="M10.6 30 H23.4"
          stroke="#ffffff"
          strokeWidth={0.4}
          opacity={0.4}
        />
      </svg>
    </motion.div>
  );
}
