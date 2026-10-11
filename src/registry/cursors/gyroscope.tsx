"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function GyroscopeCursor({
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
        data-cursor="gyroscope"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(56,189,248,0.4))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-gold`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#fef3c7" />
            <stop offset={0.5} stopColor="#f59e0b" />
            <stop offset={1} stopColor="#92400e" />
          </linearGradient>
          <linearGradient id={`${uid}-silver`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={0.5} stopColor="#94a3b8" />
            <stop offset={1} stopColor="#334155" />
          </linearGradient>
          <radialGradient id={`${uid}-rotor`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#e0f2fe" />
            <stop offset={0.5} stopColor="#38bdf8" />
            <stop offset={1} stopColor="#1e40af" />
          </radialGradient>
          <clipPath id={`${uid}-disc`}>
            <ellipse cx={17} cy={15.5} rx={7.2} ry={2.6} />
          </clipPath>
        </defs>
        <ellipse cx={17} cy={31} rx={6.4} ry={1.6} fill="#1e293b" />
        <path
          d="M15.6 27.6 H18.4 L19.8 30.8 H14.2 Z"
          fill={`url(#${uid}-silver)`}
          stroke="#1e293b"
          strokeWidth={0.4}
          strokeLinejoin="round"
        />
        <circle
          cx={17}
          cy={15.5}
          r={12}
          stroke={`url(#${uid}-gold)`}
          strokeWidth={2}
        />
        <circle
          cx={17}
          cy={15.5}
          r={12}
          stroke="#ffffff"
          strokeWidth={0.4}
          opacity={0.35}
        />
        <circle
          cx={17}
          cy={3.5}
          r={1}
          fill={`url(#${uid}-gold)`}
          stroke="#78350f"
          strokeWidth={0.3}
        />
        <circle
          cx={17}
          cy={27.5}
          r={1}
          fill={`url(#${uid}-gold)`}
          stroke="#78350f"
          strokeWidth={0.3}
        />
        <motion.g
          initial={{ rotate: -16 }}
          animate={
            frozen
              ? { rotate: -16 }
              : isHovering
                ? { rotate: [-28, 28, -28] }
                : { rotate: [-16, 16, -16] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.6 : 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "17px",
            originY: "15.5px",
          }}
        >
          <line
            x1={17}
            y1={4.6}
            x2={17}
            y2={26.4}
            stroke={`url(#${uid}-silver)`}
            strokeWidth={1.1}
            strokeLinecap="round"
          />
          <ellipse
            cx={17}
            cy={15.5}
            rx={4.2}
            ry={10.6}
            stroke={`url(#${uid}-silver)`}
            strokeWidth={1.4}
          />
          <ellipse
            cx={17}
            cy={15.5}
            rx={7.2}
            ry={2.6}
            fill={`url(#${uid}-rotor)`}
            stroke="#1e3a8a"
            strokeWidth={0.5}
          />
          <g clipPath={`url(#${uid}-disc)`}>
            <motion.rect
              x={9.4}
              y={12.5}
              width={1.6}
              height={6}
              fill="#ffffff"
              opacity={0.55}
              initial={{ x: 4 }}
              animate={frozen ? { x: 4 } : { x: [0, 14] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 0.18 : 0.35,
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
            <motion.rect
              x={9.4}
              y={12.5}
              width={1.6}
              height={6}
              fill="#ffffff"
              opacity={0.55}
              initial={{ x: 7.4 }}
              animate={frozen ? { x: 7.4 } : { x: [0, 14] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 0.18 : 0.35,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.17,
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
            d="M10.6 15 C12 13.6 15 13 17 13"
            stroke="#ffffff"
            strokeWidth={0.6}
            strokeLinecap="round"
            opacity={0.6}
          />
          <circle
            cx={17}
            cy={15.5}
            r={1.1}
            fill={`url(#${uid}-silver)`}
            stroke="#334155"
            strokeWidth={0.3}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
