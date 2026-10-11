"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring", stiffness: 320, damping: 20 } as const;

export default function CactusCursor({
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
        data-cursor="cactus"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(34,197,94,0.35))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-cactus`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#86efac" />
            <stop offset={0.45} stopColor="#22c55e" />
            <stop offset={1} stopColor="#166534" />
          </linearGradient>
          <linearGradient id={`${uid}-pot`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#fdba74" />
            <stop offset={0.5} stopColor="#ea580c" />
            <stop offset={1} stopColor="#9a3412" />
          </linearGradient>
          <linearGradient id={`${uid}-rim`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#fed7aa" />
            <stop offset={1} stopColor="#f97316" />
          </linearGradient>
          <radialGradient id={`${uid}-petal`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#fdf2f8" />
            <stop offset={1} stopColor="#ec4899" />
          </radialGradient>
        </defs>
        <motion.g
          initial={{ scaleY: 1, scaleX: 1 }}
          animate={
            frozen
              ? { scaleY: 1, scaleX: 1 }
              : { scaleY: [1, 1.035, 1], scaleX: [1, 0.985, 1] }
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
          style={{
            transformBox: "view-box",
            originX: "17px",
            originY: "22.4px",
          }}
        >
          <path
            d="M13.8 17.6 H10.8 C9.6 17.6 8.8 16.8 8.8 15.6 V12.4 C8.8 11.4 9.6 10.8 10.4 10.8 C11.2 10.8 12 11.4 12 12.4 V14.6 H13.8 Z"
            fill={`url(#${uid}-cactus)`}
            stroke="#14532d"
            strokeWidth={0.6}
            strokeLinejoin="round"
          />
          <path
            d="M20.2 15 H23.2 C24.4 15 25.2 14.2 25.2 13 V10.2 C25.2 9.2 24.4 8.6 23.6 8.6 C22.8 8.6 22 9.2 22 10.2 V12 H20.2 Z"
            fill={`url(#${uid}-cactus)`}
            stroke="#14532d"
            strokeWidth={0.6}
            strokeLinejoin="round"
          />
          <path
            d="M13.6 22.4 V9.8 C13.6 7.6 15.2 6.2 17 6.2 C18.8 6.2 20.4 7.6 20.4 9.8 V22.4 Z"
            fill={`url(#${uid}-cactus)`}
            stroke="#14532d"
            strokeWidth={0.6}
            strokeLinejoin="round"
          />
          <path
            d="M15.4 8.4 V21.6 M18.6 8.4 V21.6"
            stroke="#bbf7d0"
            strokeWidth={0.5}
            strokeLinecap="round"
            opacity={0.55}
          />
          <path
            d="M14.2 10 l-0.8 -0.5 M19.8 10.6 l0.8 -0.5 M14.2 19.4 l-0.8 -0.5 M19.8 18.8 l0.8 -0.5 M9.4 13 l-0.8 -0.4 M24.6 11 l0.8 -0.4 M16.9 7 l0 -0.8"
            stroke="#f0fdf4"
            strokeWidth={0.4}
            strokeLinecap="round"
          />
          <circle cx={15.6} cy={13.8} r={0.75} fill="#14532d" />
          <circle cx={18.4} cy={13.8} r={0.75} fill="#14532d" />
          <circle cx={15.85} cy={13.55} r={0.25} fill="#ffffff" />
          <circle cx={18.65} cy={13.55} r={0.25} fill="#ffffff" />
          <path
            d="M16.2 15.5 Q17 16.2 17.8 15.5"
            stroke="#14532d"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
          <ellipse
            cx={14.7}
            cy={15.3}
            rx={0.7}
            ry={0.45}
            fill="#fda4af"
            opacity={0.8}
          />
          <ellipse
            cx={19.3}
            cy={15.3}
            rx={0.7}
            ry={0.45}
            fill="#fda4af"
            opacity={0.8}
          />
          <motion.g
            initial={false}
            animate={
              !frozen && isHovering
                ? { scale: 1.6, rotate: 36 }
                : { scale: 1, rotate: 0 }
            }
            transition={spring}
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "5.8px",
            }}
          >
            <circle cx={17} cy={4.45} r={1.15} fill={`url(#${uid}-petal)`} />
            <circle cx={18.28} cy={5.38} r={1.15} fill={`url(#${uid}-petal)`} />
            <circle cx={17.79} cy={6.89} r={1.15} fill={`url(#${uid}-petal)`} />
            <circle cx={16.21} cy={6.89} r={1.15} fill={`url(#${uid}-petal)`} />
            <circle cx={15.72} cy={5.38} r={1.15} fill={`url(#${uid}-petal)`} />
            <circle
              cx={17}
              cy={5.8}
              r={0.85}
              fill="#fde047"
              stroke="#ca8a04"
              strokeWidth={0.3}
            />
          </motion.g>
        </motion.g>
        <rect
          x={9.2}
          y={21.4}
          width={15.6}
          height={2.6}
          rx={1}
          fill={`url(#${uid}-rim)`}
          stroke="#7c2d12"
          strokeWidth={0.5}
        />
        <path
          d="M10.2 24 H23.8 L22.6 31 H11.4 Z"
          fill={`url(#${uid}-pot)`}
          stroke="#7c2d12"
          strokeWidth={0.6}
          strokeLinejoin="round"
        />
        <path
          d="M12 26 C14 27 20 27 22 26"
          stroke="#fed7aa"
          strokeWidth={0.5}
          strokeLinecap="round"
          opacity={0.6}
        />
      </svg>
    </motion.div>
  );
}
