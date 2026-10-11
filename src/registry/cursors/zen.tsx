"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function ZenCursor({
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
        data-cursor="zen"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(56,189,248,0.25))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-s1`} cx="35%" cy="30%" r="75%">
            <stop offset={0} stopColor="#94a3b8" />
            <stop offset={0.6} stopColor="#475569" />
            <stop offset={1} stopColor="#1e293b" />
          </radialGradient>
          <radialGradient id={`${uid}-s2`} cx="35%" cy="30%" r="75%">
            <stop offset={0} stopColor="#e7e5e4" />
            <stop offset={0.6} stopColor="#a8a29e" />
            <stop offset={1} stopColor="#57534e" />
          </radialGradient>
          <radialGradient id={`${uid}-s3`} cx="35%" cy="30%" r="75%">
            <stop offset={0} stopColor="#cbd5e1" />
            <stop offset={0.6} stopColor="#64748b" />
            <stop offset={1} stopColor="#334155" />
          </radialGradient>
          <radialGradient id={`${uid}-s4`} cx="35%" cy="30%" r="75%">
            <stop offset={0} stopColor="#fafaf9" />
            <stop offset={0.6} stopColor="#d6d3d1" />
            <stop offset={1} stopColor="#78716c" />
          </radialGradient>
          <linearGradient id={`${uid}-leaf`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#86efac" />
            <stop offset={1} stopColor="#16a34a" />
          </linearGradient>
          <linearGradient id={`${uid}-petal`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#fce7f3" />
            <stop offset={1} stopColor="#f472b6" />
          </linearGradient>
        </defs>
        <ellipse
          cx={17}
          cy={29.6}
          rx={9}
          ry={1.2}
          fill="#38bdf8"
          opacity={0.2}
        />
        <motion.ellipse
          cx={17}
          cy={29.6}
          rx={12}
          ry={2}
          stroke="#38bdf8"
          strokeWidth={0.7}
          initial={{ scale: 0.8, opacity: 0.45 }}
          animate={
            frozen
              ? { scale: 0.8, opacity: 0.45 }
              : { scale: [0.5, 1.1], opacity: [0.8, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.6 : 3.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "17px",
            originY: "29.6px",
          }}
        />
        <motion.ellipse
          cx={17}
          cy={29.6}
          rx={12}
          ry={2}
          stroke="#38bdf8"
          strokeWidth={0.7}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            frozen
              ? { scale: 0.5, opacity: 0 }
              : { scale: [0.5, 1.1], opacity: [0.8, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.6 : 3.2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1.6,
                }
          }
          style={{
            transformBox: "view-box",
            originX: "17px",
            originY: "29.6px",
          }}
        />
        <ellipse
          cx={17}
          cy={25.6}
          rx={10}
          ry={4}
          fill={`url(#${uid}-s1)`}
          stroke="#0f172a"
          strokeWidth={0.5}
        />
        <ellipse
          cx={13.5}
          cy={24}
          rx={3.2}
          ry={1.12}
          fill="#ffffff"
          opacity={0.3}
        />
        <motion.g
          initial={{ rotate: -1.5 }}
          animate={
            frozen
              ? { rotate: -1.5 }
              : isHovering
                ? { rotate: [-3, 3, -3] }
                : { rotate: [-1.5, 1.5, -1.5] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 2 : 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "22px" }}
        >
          <ellipse
            cx={17.4}
            cy={19.8}
            rx={7.6}
            ry={3.2}
            fill={`url(#${uid}-s2)`}
            stroke="#292524"
            strokeWidth={0.5}
          />
          <ellipse
            cx={14.74}
            cy={18.52}
            rx={2.43}
            ry={0.9}
            fill="#ffffff"
            opacity={0.3}
          />
          <motion.g
            initial={{ rotate: -2 }}
            animate={
              frozen
                ? { rotate: -2 }
                : isHovering
                  ? { rotate: [-4.5, 4.5, -4.5] }
                  : { rotate: [-2, 2, -2] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 2 : 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17.4px",
              originY: "16.8px",
            }}
          >
            <ellipse
              cx={16.8}
              cy={14.8}
              rx={5.4}
              ry={2.6}
              fill={`url(#${uid}-s3)`}
              stroke="#1e293b"
              strokeWidth={0.5}
            />
            <ellipse
              cx={14.91}
              cy={13.76}
              rx={1.73}
              ry={0.73}
              fill="#ffffff"
              opacity={0.3}
            />
            <motion.g
              initial={{ rotate: -3 }}
              animate={
                frozen
                  ? { rotate: -3 }
                  : isHovering
                    ? { rotate: [-7, 7, -7] }
                    : { rotate: [-3, 3, -3] }
              }
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 2 : 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "16.8px",
                originY: "12.4px",
              }}
            >
              <ellipse
                cx={17.2}
                cy={10.6}
                rx={3.6}
                ry={2}
                fill={`url(#${uid}-s4)`}
                stroke="#44403c"
                strokeWidth={0.5}
              />
              <ellipse
                cx={15.94}
                cy={9.8}
                rx={1.15}
                ry={0.56}
                fill="#ffffff"
                opacity={0.3}
              />
              <path
                d="M17.2 8.8 C17.2 7.6 17.4 6.6 17.8 5.8"
                stroke="#16a34a"
                strokeWidth={0.7}
                strokeLinecap="round"
              />
              <path
                d="M17.6 6.4 C18.6 4.6 20.6 4.2 21.6 4.8 C20.8 6.2 19 6.8 17.6 6.4 Z"
                fill={`url(#${uid}-leaf)`}
                stroke="#15803d"
                strokeWidth={0.3}
              />
              <path
                d="M17.4 7.2 C16.4 5.8 14.6 5.6 13.8 6.2 C14.6 7.4 16.2 7.8 17.4 7.2 Z"
                fill={`url(#${uid}-leaf)`}
                stroke="#15803d"
                strokeWidth={0.3}
              />
            </motion.g>
          </motion.g>
        </motion.g>
        <motion.path
          d="M27 6 C28.4 5.2 30 5.6 30.4 6.8 C29.2 7.8 27.6 7.6 27 6 Z"
          fill={`url(#${uid}-petal)`}
          stroke="#db2777"
          strokeWidth={0.25}
          initial={{ x: -1, y: 2, rotate: 20, opacity: 1 }}
          animate={
            frozen
              ? { x: -1, y: 2, rotate: 20, opacity: 1 }
              : {
                  x: [0, -3, -6],
                  y: [0, 5, 11],
                  rotate: [0, 60, 140],
                  opacity: [0, 1, 0],
                }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 2.5 : 5,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "28.6px",
            originY: "6.4px",
          }}
        />
      </svg>
    </motion.div>
  );
}
