"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring", stiffness: 320, damping: 20 } as const;

export default function ArcadeCoinCursor({
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
        data-cursor="arcade-coin"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(250,204,21,0.5))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-coin`} cx="38%" cy="32%" r="75%">
            <stop offset={0} stopColor="#fef9c3" />
            <stop offset={0.45} stopColor="#facc15" />
            <stop offset={0.85} stopColor="#ca8a04" />
            <stop offset={1} stopColor="#a16207" />
          </radialGradient>
          <linearGradient id={`${uid}-edge`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#a16207" />
            <stop offset={1} stopColor="#713f12" />
          </linearGradient>
          <linearGradient id={`${uid}-plate`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#475569" />
            <stop offset={1} stopColor="#0f172a" />
          </linearGradient>
        </defs>
        <motion.path
          d="M5.5 6.2 Q5.5 8 7.3 8 Q5.5 8 5.5 9.8 Q5.5 8 3.7 8 Q5.5 8 5.5 6.2 Z"
          fill="#fef08a"
          initial={{ opacity: 1, scale: 1 }}
          animate={
            frozen
              ? { opacity: 1, scale: 1 }
              : { opacity: [0, 1, 0], scale: [0.4, 1, 0.4] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
          }
          style={{ transformBox: "view-box", originX: "5.5px", originY: "8px" }}
        />
        <motion.path
          d="M28.6 13.7 Q28.6 15 29.9 15 Q28.6 15 28.6 16.3 Q28.6 15 27.3 15 Q28.6 15 28.6 13.7 Z"
          fill="#fef08a"
          initial={{ opacity: 1, scale: 1 }}
          animate={
            frozen
              ? { opacity: 1, scale: 1 }
              : { opacity: [0, 1, 0], scale: [0.4, 1, 0.4] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }
          }
          style={{
            transformBox: "view-box",
            originX: "28.6px",
            originY: "15px",
          }}
        />
        <motion.path
          d="M27.4 3.4 Q27.4 4.4 28.4 4.4 Q27.4 4.4 27.4 5.4 Q27.4 4.4 26.4 4.4 Q27.4 4.4 27.4 3.4 Z"
          fill="#fef08a"
          initial={{ opacity: 1, scale: 1 }}
          animate={
            frozen
              ? { opacity: 1, scale: 1 }
              : { opacity: [0, 1, 0], scale: [0.4, 1, 0.4] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.4,
                }
          }
          style={{
            transformBox: "view-box",
            originX: "27.4px",
            originY: "4.4px",
          }}
        />
        <motion.g
          initial={false}
          animate={
            !frozen && isHovering ? { y: 9, scale: 0.9 } : { y: 0, scale: 1 }
          }
          transition={spring}
          style={{ transformBox: "view-box", originX: "17px", originY: "12px" }}
        >
          <motion.g
            initial={{ y: 0 }}
            animate={frozen ? { y: 0 } : { y: [0, -1.4, 0] }}
            transition={
              frozen
                ? { duration: 0 }
                : { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <motion.g
              initial={{ scaleX: 1 }}
              animate={frozen ? { scaleX: 1 } : { scaleX: [1, 0.12, 1] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 0.6 : 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "12px",
              }}
            >
              <circle cx={17.7} cy={12.6} r={8} fill={`url(#${uid}-edge)`} />
              <circle
                cx={17}
                cy={12}
                r={8}
                fill={`url(#${uid}-coin)`}
                stroke="#a16207"
                strokeWidth={0.6}
              />
              <circle
                cx={17}
                cy={12}
                r={6.2}
                stroke="#a16207"
                strokeWidth={0.6}
                opacity={0.7}
              />
              <path
                d="M17 8.1 L17.97 10.67 L20.71 10.79 L18.57 12.51 L19.29 15.16 L17 13.65 L14.71 15.16 L15.43 12.51 L13.29 10.79 L16.03 10.67 Z"
                fill="#fde047"
                stroke="#a16207"
                strokeWidth={0.6}
                strokeLinejoin="round"
              />
              <path
                d="M11.6 8.6 A6.4 6.4 0 0 1 15.4 6"
                stroke="#ffffff"
                strokeWidth={1.2}
                strokeLinecap="round"
                opacity={0.8}
              />
            </motion.g>
          </motion.g>
        </motion.g>
        <rect
          x={7}
          y={24}
          width={20}
          height={7.4}
          rx={2}
          fill={`url(#${uid}-plate)`}
          stroke="#020617"
          strokeWidth={0.6}
        />
        <path
          d="M8.6 25.2 H25.4"
          stroke="#ffffff"
          strokeWidth={0.6}
          strokeLinecap="round"
          opacity={0.25}
        />
        <rect
          x={11.5}
          y={26.5}
          width={11}
          height={2.2}
          rx={1.1}
          fill="#1f0505"
        />
        <motion.rect
          x={11.5}
          y={26.5}
          width={11}
          height={2.2}
          rx={1.1}
          fill="#ef4444"
          initial={{ opacity: 0.45 }}
          animate={frozen ? { opacity: 0.45 } : { opacity: [0.45, 1, 0.45] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.4 : 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.circle
          cx={9.4}
          cy={29.6}
          r={0.6}
          fill="#22c55e"
          initial={{ opacity: 1 }}
          animate={frozen ? { opacity: 1 } : { opacity: [1, 0.3, 1] }}
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 0.9, repeat: Infinity, ease: "easeInOut" }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.circle
          cx={24.6}
          cy={29.6}
          r={0.6}
          fill="#f59e0b"
          initial={{ opacity: 0.3 }}
          animate={frozen ? { opacity: 0.3 } : { opacity: [0.3, 1, 0.3] }}
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 0.9, repeat: Infinity, ease: "easeInOut" }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
      </svg>
    </motion.div>
  );
}
