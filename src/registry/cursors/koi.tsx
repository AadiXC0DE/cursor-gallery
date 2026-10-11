"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function KoiCursor({
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
        data-cursor="koi"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(249,115,22,0.4))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-body`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={0.6} stopColor="#fff7ed" />
            <stop offset={1} stopColor="#fed7aa" />
          </linearGradient>
          <linearGradient id={`${uid}-patch`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#fb923c" />
            <stop offset={1} stopColor="#dc2626" />
          </linearGradient>
          <linearGradient id={`${uid}-fin`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#fb923c" stopOpacity={0.85} />
            <stop offset={1} stopColor="#ffedd5" stopOpacity={0.95} />
          </linearGradient>
          <clipPath id={`${uid}-koiBody`}>
            <path d="M7.6 17 C10 12.6 15.6 11.4 21 12 C25.4 12.6 28.8 14.6 29.4 17 C28.8 19.4 25.4 21.4 21 22 C15.6 22.6 10 21.4 7.6 17 Z" />
          </clipPath>
        </defs>
        <motion.circle
          cx={17}
          cy={17}
          r={13}
          stroke="#7dd3fc"
          strokeWidth={0.6}
          initial={{ scale: 0.85, opacity: 0.22 }}
          animate={
            frozen
              ? { scale: 0.85, opacity: 0.22 }
              : { scale: [0.55, 1.05], opacity: [0.6, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 2.6, repeat: Infinity, ease: "easeOut" }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.circle
          cx={17}
          cy={17}
          r={13}
          stroke="#7dd3fc"
          strokeWidth={0.6}
          initial={{ scale: 0.55, opacity: 0 }}
          animate={
            frozen
              ? { scale: 0.55, opacity: 0 }
              : { scale: [0.55, 1.05], opacity: [0.6, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 2.6, repeat: Infinity, ease: "easeOut", delay: 1.3 }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.g
          initial={{ rotate: -6 }}
          animate={frozen ? { rotate: -6 } : { rotate: [-6, 6, -6] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.1 : 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <motion.path
            d="M21.4 13 C20.4 9.6 17.6 8.4 15.8 9 C17.4 10.4 18.4 12 18.8 13.4 Z"
            fill={`url(#${uid}-fin)`}
            stroke="#ea580c"
            strokeWidth={0.5}
            strokeLinejoin="round"
            initial={{ rotate: 0 }}
            animate={frozen ? { rotate: 0 } : { rotate: [0, -14, 0] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.5 : 1.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "20.5px",
              originY: "13.2px",
            }}
          />
          <motion.path
            d="M21.4 21 C20.4 24.4 17.6 25.6 15.8 25 C17.4 23.6 18.4 22 18.8 20.6 Z"
            fill={`url(#${uid}-fin)`}
            stroke="#ea580c"
            strokeWidth={0.5}
            strokeLinejoin="round"
            initial={{ rotate: 0 }}
            animate={frozen ? { rotate: 0 } : { rotate: [0, 14, 0] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.5 : 1.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "20.5px",
              originY: "20.8px",
            }}
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
                    duration: isHovering ? 0.45 : 1.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "8px",
              originY: "17px",
            }}
          >
            <path
              d="M8.6 17 C6.6 14.2 4.2 11.8 1.8 11.4 C3 14 3.2 15.6 3 17 C3.2 18.4 3 20 1.8 22.6 C4.2 22.2 6.6 19.8 8.6 17 Z"
              fill={`url(#${uid}-fin)`}
              stroke="#ea580c"
              strokeWidth={0.6}
              strokeLinejoin="round"
            />
            <path
              d="M7 16.4 L3.2 13.4 M7 17.6 L3.2 20.6 M7 17 L2.8 17"
              stroke="#f97316"
              strokeWidth={0.45}
              strokeLinecap="round"
              opacity={0.6}
            />
          </motion.g>
          <path
            d="M7.6 17 C10 12.6 15.6 11.4 21 12 C25.4 12.6 28.8 14.6 29.4 17 C28.8 19.4 25.4 21.4 21 22 C15.6 22.6 10 21.4 7.6 17 Z"
            fill={`url(#${uid}-body)`}
            stroke="#ea580c"
            strokeWidth={0.7}
          />
          <g clipPath={`url(#${uid}-koiBody)`}>
            <ellipse
              cx={25.4}
              cy={16.4}
              rx={3.4}
              ry={2.7}
              fill={`url(#${uid}-patch)`}
            />
            <path
              d="M12.8 13.4 C15 12.2 18.6 12.6 19.6 14.6 C20.4 16.4 18.4 17.6 16.4 17.2 C14.6 16.8 13.6 18.8 11.8 18.2 C10.4 17.6 11 14.4 12.8 13.4 Z"
              fill={`url(#${uid}-patch)`}
            />
            <ellipse
              cx={14.8}
              cy={20.8}
              rx={2.4}
              ry={1.4}
              fill={`url(#${uid}-patch)`}
            />
            <circle cx={19} cy={19.4} r={0.9} fill="#1f2937" opacity={0.85} />
          </g>
          <path
            d="M11 15.2 C15 13.4 21 13.2 25.6 14.6"
            stroke="#ffffff"
            strokeWidth={1}
            strokeLinecap="round"
            opacity={0.75}
          />
          <circle cx={27} cy={15.4} r={0.8} fill="#1f2937" />
          <circle cx={27} cy={18.6} r={0.8} fill="#1f2937" />
          <circle cx={27.25} cy={15.15} r={0.28} fill="#ffffff" />
          <circle cx={27.25} cy={18.35} r={0.28} fill="#ffffff" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
