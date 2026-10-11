"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function HotAirBalloonCursor({
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
        data-cursor="hot-air-balloon"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(239,68,68,0.35))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-envelope`} cx="35%" cy="30%" r="75%">
            <stop offset={0} stopColor="#fecaca" />
            <stop offset={0.4} stopColor="#f87171" />
            <stop offset={1} stopColor="#b91c1c" />
          </radialGradient>
          <linearGradient id={`${uid}-gore`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#fde68a" />
            <stop offset={0.5} stopColor="#fffbeb" />
            <stop offset={1} stopColor="#fbbf24" />
          </linearGradient>
          <linearGradient id={`${uid}-basket`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#d97706" />
            <stop offset={1} stopColor="#78350f" />
          </linearGradient>
          <radialGradient id={`${uid}-flame`} cx="50%" cy="70%" r="60%">
            <stop offset={0} stopColor="#fef9c3" />
            <stop offset={0.5} stopColor="#fbbf24" />
            <stop offset={1} stopColor="#f97316" />
          </radialGradient>
          <clipPath id={`${uid}-env`}>
            <path d="M17 2.2 C23.6 2.2 27.6 6.8 27.6 12 C27.6 16.4 23.6 19.4 20.2 22.4 L13.8 22.4 C10.4 19.4 6.4 16.4 6.4 12 C6.4 6.8 10.4 2.2 17 2.2 Z" />
          </clipPath>
        </defs>
        <motion.path
          d="M2 26.4 C2 25 3.4 24.2 4.6 24.6 C5.2 23.4 7.4 23.4 8 24.8 C9.2 24.6 10 25.4 9.8 26.4 Z"
          fill="#f1f5f9"
          stroke="#cbd5e1"
          strokeWidth={0.4}
          initial={{ x: 4, opacity: 0.9 }}
          animate={
            frozen
              ? { x: 4, opacity: 0.9 }
              : { x: [4, -2, 4], opacity: [0.9, 1, 0.9] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 3.5 : 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.g
          initial={{ y: 0 }}
          animate={
            frozen
              ? { y: 0 }
              : isHovering
                ? { y: [0, -3.6, 0] }
                : { y: [0, -1.8, 0] }
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
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <motion.g
            initial={{ rotate: -2.5 }}
            animate={frozen ? { rotate: -2.5 } : { rotate: [-2.5, 2.5, -2.5] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 2 : 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "2px",
            }}
          >
            <line
              x1={13.8}
              y1={22.4}
              x2={14.6}
              y2={25.8}
              stroke="#78350f"
              strokeWidth={0.5}
            />
            <line
              x1={20.2}
              y1={22.4}
              x2={19.4}
              y2={25.8}
              stroke="#78350f"
              strokeWidth={0.5}
            />
            <line
              x1={16.2}
              y1={22.4}
              x2={16.4}
              y2={25.8}
              stroke="#78350f"
              strokeWidth={0.4}
            />
            <line
              x1={17.8}
              y1={22.4}
              x2={17.6}
              y2={25.8}
              stroke="#78350f"
              strokeWidth={0.4}
            />
            <motion.path
              d="M17 21.6 C18.4 23 18.2 24.6 17 25.4 C15.8 24.6 15.6 23 17 21.6 Z"
              fill={`url(#${uid}-flame)`}
              initial={{ scale: 0.8 }}
              animate={
                frozen
                  ? { scale: 0.8 }
                  : isHovering
                    ? { scale: [1.2, 1.7, 1.3, 1.6, 1.2] }
                    : { scale: [0.8, 1.1, 0.85, 1, 0.8] }
              }
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 0.4 : 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "25px",
              }}
            />
            <path
              d="M17 2.2 C23.6 2.2 27.6 6.8 27.6 12 C27.6 16.4 23.6 19.4 20.2 22.4 L13.8 22.4 C10.4 19.4 6.4 16.4 6.4 12 C6.4 6.8 10.4 2.2 17 2.2 Z"
              fill={`url(#${uid}-envelope)`}
              stroke="#7f1d1d"
              strokeWidth={0.7}
            />
            <g clipPath={`url(#${uid}-env)`}>
              <path
                d="M17 2.2 C20.2 2.6 21.6 7 21.6 12 C21.6 16.2 20 19.8 18.8 22.4 L15.2 22.4 C14 19.8 12.4 16.2 12.4 12 C12.4 7 13.8 2.6 17 2.2 Z"
                fill={`url(#${uid}-gore)`}
              />
              <path
                d="M4 13 L5.2 11 L6.4 13 L7.6 11 L8.8 13 L10 11 L11.2 13 L12.4 11 L13.6 13 L14.8 11 L16 13 L17.2 11 L18.4 13 L19.6 11 L20.8 13 L22 11 L23.2 13 L24.4 11 L25.6 13 L26.8 11 L28 13 L29.2 11 L30.4 13 L30 15.4 L4 15.4 Z"
                fill="#2563eb"
                opacity={0.9}
              />
              <path
                d="M9 3 C7 6 6.6 18 12 23 M25 3 C27 6 27.4 18 22 23"
                stroke="#7f1d1d"
                strokeWidth={0.4}
                opacity={0.5}
              />
            </g>
            <path
              d="M9.4 8.4 C10.4 5.8 12.6 4.2 15 3.8"
              stroke="#ffffff"
              strokeWidth={1.3}
              strokeLinecap="round"
              opacity={0.7}
            />
            <rect
              x={14.2}
              y={25.6}
              width={5.6}
              height={4.2}
              rx={1}
              fill={`url(#${uid}-basket)`}
              stroke="#451a03"
              strokeWidth={0.5}
            />
            <path
              d="M14.4 27 H19.6 M14.4 28.4 H19.6 M16 25.8 V29.6 M18 25.8 V29.6"
              stroke="#fbbf24"
              strokeWidth={0.3}
              opacity={0.6}
            />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  );
}
