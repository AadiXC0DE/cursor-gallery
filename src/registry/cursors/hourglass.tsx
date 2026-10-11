"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function HourglassCursor({
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
        data-cursor="hourglass"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(245,158,11,0.4))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-wood`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#d97706" />
            <stop offset={0.5} stopColor="#92400e" />
            <stop offset={1} stopColor="#451a03" />
          </linearGradient>
          <linearGradient id={`${uid}-glass`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#e0f2fe" stopOpacity={0.55} />
            <stop offset={0.5} stopColor="#bae6fd" stopOpacity={0.2} />
            <stop offset={1} stopColor="#7dd3fc" stopOpacity={0.4} />
          </linearGradient>
          <linearGradient id={`${uid}-sand`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#fde68a" />
            <stop offset={1} stopColor="#f59e0b" />
          </linearGradient>
          <clipPath id={`${uid}-glassClip`}>
            <path d="M10.4 6.2 C10.4 11 15.4 13.6 16.2 17 C15.4 20.4 10.4 23 10.4 27.8 H23.6 C23.6 23 18.6 20.4 17.8 17 C18.6 13.6 23.6 11 23.6 6.2 Z" />
          </clipPath>
        </defs>
        <motion.g
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, 0, 180] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 2 : 4,
                  repeat: Infinity,
                  ease: ["linear", "easeInOut"],
                  times: [0, 0.8, 1],
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <path
            d="M10.4 6.2 C10.4 11 15.4 13.6 16.2 17 C15.4 20.4 10.4 23 10.4 27.8 H23.6 C23.6 23 18.6 20.4 17.8 17 C18.6 13.6 23.6 11 23.6 6.2 Z"
            fill={`url(#${uid}-glass)`}
          />
          <g clipPath={`url(#${uid}-glassClip)`}>
            <motion.rect
              x={9}
              y={9.4}
              width={16}
              height={7.8}
              fill={`url(#${uid}-sand)`}
              initial={{ scaleY: 0.55 }}
              animate={frozen ? { scaleY: 0.55 } : { scaleY: [1, 0, 0] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 2 : 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.8, 1],
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "17.2px",
              }}
            />
            <motion.path
              d="M8 28 C11 22.6 14.6 20.6 17 20.6 C19.4 20.6 23 22.6 26 28 Z"
              fill={`url(#${uid}-sand)`}
              initial={{ scaleY: 0.5 }}
              animate={frozen ? { scaleY: 0.5 } : { scaleY: [0, 1, 1] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 2 : 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.8, 1],
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "28px",
              }}
            />
            <motion.line
              x1={17}
              y1={16.6}
              x2={17}
              y2={28}
              stroke="#fbbf24"
              strokeWidth={0.7}
              initial={{ opacity: 1 }}
              animate={frozen ? { opacity: 1 } : { opacity: [1, 1, 0, 0] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 2 : 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.78, 0.8, 1],
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
            d="M10.4 6.2 C10.4 11 15.4 13.6 16.2 17 C15.4 20.4 10.4 23 10.4 27.8 H23.6 C23.6 23 18.6 20.4 17.8 17 C18.6 13.6 23.6 11 23.6 6.2 Z"
            stroke="#7dd3fc"
            strokeWidth={0.6}
          />
          <path
            d="M12 8 C12.2 10.6 14 12.6 15 13.8"
            stroke="#ffffff"
            strokeWidth={0.8}
            strokeLinecap="round"
            opacity={0.8}
          />
          <rect
            x={8.4}
            y={5.8}
            width={1.4}
            height={22.4}
            rx={0.6}
            fill={`url(#${uid}-wood)`}
          />
          <rect
            x={24.2}
            y={5.8}
            width={1.4}
            height={22.4}
            rx={0.6}
            fill={`url(#${uid}-wood)`}
          />
          <rect
            x={7.2}
            y={3.4}
            width={19.6}
            height={2.8}
            rx={1.2}
            fill={`url(#${uid}-wood)`}
            stroke="#292524"
            strokeWidth={0.5}
          />
          <rect
            x={7.2}
            y={27.8}
            width={19.6}
            height={2.8}
            rx={1.2}
            fill={`url(#${uid}-wood)`}
            stroke="#292524"
            strokeWidth={0.5}
          />
          <path
            d="M8.6 4.3 H25.4 M8.6 28.7 H25.4"
            stroke="#fde68a"
            strokeWidth={0.4}
            strokeLinecap="round"
            opacity={0.5}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
