"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring", stiffness: 320, damping: 20 } as const;

export default function MoonPhaseCursor({
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
        data-cursor="moon-phase"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 7px rgba(186,230,253,0.55))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-moon`} cx="38%" cy="35%" r="70%">
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={0.5} stopColor="#e2e8f0" />
            <stop offset={1} stopColor="#94a3b8" />
          </radialGradient>
          <radialGradient id={`${uid}-crater`} cx="40%" cy="35%" r="60%">
            <stop offset={0} stopColor="#94a3b8" stopOpacity={0.65} />
            <stop offset={1} stopColor="#cbd5e1" stopOpacity={0.2} />
          </radialGradient>
          <radialGradient id={`${uid}-aura`} cx="50%" cy="50%" r="50%">
            <stop offset={0} stopColor="#e0f2fe" stopOpacity={0.45} />
            <stop offset={0.72} stopColor="#bae6fd" stopOpacity={0.22} />
            <stop offset={1} stopColor="#bae6fd" stopOpacity={0} />
          </radialGradient>
          <radialGradient id={`${uid}-shade`} cx="50%" cy="50%" r="50%">
            <stop offset={0} stopColor="#0f172a" stopOpacity={0.92} />
            <stop offset={0.86} stopColor="#0f172a" stopOpacity={0.88} />
            <stop offset={1} stopColor="#0f172a" stopOpacity={0.3} />
          </radialGradient>
          <clipPath id={`${uid}-moonClip`}>
            <circle cx={17} cy={17} r={11} />
          </clipPath>
        </defs>
        <motion.path
          d="M4.5 4.3 Q4.5 6.5 6.7 6.5 Q4.5 6.5 4.5 8.7 Q4.5 6.5 2.3 6.5 Q4.5 6.5 4.5 4.3 Z"
          fill="#fde68a"
          initial={{ opacity: 1, scale: 1 }}
          animate={
            frozen
              ? { opacity: 1, scale: 1 }
              : { opacity: [0.2, 1, 0.2], scale: [0.7, 1, 0.7] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
          }
          style={{
            transformBox: "view-box",
            originX: "4.5px",
            originY: "6.5px",
          }}
        />
        <motion.path
          d="M29.5 25.4 Q29.5 27 31.1 27 Q29.5 27 29.5 28.6 Q29.5 27 27.9 27 Q29.5 27 29.5 25.4 Z"
          fill="#fde68a"
          initial={{ opacity: 1, scale: 1 }}
          animate={
            frozen
              ? { opacity: 1, scale: 1 }
              : { opacity: [0.2, 1, 0.2], scale: [0.7, 1, 0.7] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.1,
                }
          }
          style={{
            transformBox: "view-box",
            originX: "29.5px",
            originY: "27px",
          }}
        />
        <motion.path
          d="M30 4.8 Q30 6 31.2 6 Q30 6 30 7.2 Q30 6 28.8 6 Q30 6 30 4.8 Z"
          fill="#fde68a"
          initial={{ opacity: 1, scale: 1 }}
          animate={
            frozen
              ? { opacity: 1, scale: 1 }
              : { opacity: [0.2, 1, 0.2], scale: [0.7, 1, 0.7] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }
          style={{ transformBox: "view-box", originX: "30px", originY: "6px" }}
        />
        <motion.g
          initial={false}
          animate={!frozen && isHovering ? { scale: 1.08 } : { scale: 1 }}
          transition={spring}
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <circle cx={17} cy={17} r={15} fill={`url(#${uid}-aura)`} />
          <circle cx={17} cy={17} r={11} fill={`url(#${uid}-moon)`} />
          <g clipPath={`url(#${uid}-moonClip)`}>
            <ellipse
              cx={15.5}
              cy={18}
              rx={3.6}
              ry={2.3}
              fill="#94a3b8"
              opacity={0.25}
            />
            <circle cx={12.5} cy={13.5} r={2.4} fill={`url(#${uid}-crater)`} />
            <circle cx={20.5} cy={21.5} r={3} fill={`url(#${uid}-crater)`} />
            <circle cx={21.5} cy={11} r={1.4} fill={`url(#${uid}-crater)`} />
            <circle cx={13} cy={22} r={1.2} fill={`url(#${uid}-crater)`} />
            <circle cx={24.6} cy={16.6} r={1} fill={`url(#${uid}-crater)`} />
            <motion.circle
              cx={17}
              cy={17}
              r={11.4}
              fill={`url(#${uid}-shade)`}
              initial={{ x: 9 }}
              animate={frozen ? { x: 9 } : { x: [-23, 23] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 3.5 : 9,
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
          <circle
            cx={17}
            cy={17}
            r={11}
            stroke="#f8fafc"
            strokeWidth={0.6}
            opacity={0.5}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
