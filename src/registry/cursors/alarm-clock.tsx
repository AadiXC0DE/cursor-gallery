"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AlarmClockCursor({
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
        data-cursor="alarm-clock"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(239,68,68,0.4))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-body`} cx="38%" cy="30%" r="75%">
            <stop offset={0} stopColor="#fecaca" />
            <stop offset={0.4} stopColor="#ef4444" />
            <stop offset={1} stopColor="#7f1d1d" />
          </radialGradient>
          <linearGradient id={`${uid}-bell`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={0.5} stopColor="#cbd5e1" />
            <stop offset={1} stopColor="#475569" />
          </linearGradient>
          <radialGradient id={`${uid}-face`} cx="45%" cy="40%" r="70%">
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={1} stopColor="#e2e8f0" />
          </radialGradient>
        </defs>
        <motion.path
          d="M3.4 9 q-1.6 2.6 0 5.2 M1.6 7.6 q-2.4 4 0 8 M30.6 9 q1.6 2.6 0 5.2 M32.4 7.6 q2.4 4 0 8"
          stroke="#fbbf24"
          strokeWidth={0.8}
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={
            frozen
              ? { opacity: 0 }
              : isHovering
                ? { opacity: [0.2, 1, 0.2] }
                : { opacity: [0, 0, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.3 : 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.g
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, 8, -8, 6, 0] }
                : { rotate: [0, 1.2, 0, -1.2, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.2 : 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "29px" }}
        >
          <path
            d="M10.6 26.6 L8.6 30.6 M23.4 26.6 L25.4 30.6"
            stroke="#334155"
            strokeWidth={1.6}
            strokeLinecap="round"
          />
          <ellipse
            cx={9.4}
            cy={8.4}
            rx={4.2}
            ry={3.6}
            fill={`url(#${uid}-bell)`}
            stroke="#334155"
            strokeWidth={0.5}
            transform="rotate(-38 9.4 8.4)"
          />
          <ellipse
            cx={24.6}
            cy={8.4}
            rx={4.2}
            ry={3.6}
            fill={`url(#${uid}-bell)`}
            stroke="#334155"
            strokeWidth={0.5}
            transform="rotate(38 24.6 8.4)"
          />
          <path
            d="M10 6.6 C12.6 3.6 21.4 3.6 24 6.6"
            stroke="#64748b"
            strokeWidth={0.9}
            strokeLinecap="round"
          />
          <motion.g
            initial={{ rotate: 0 }}
            animate={
              frozen
                ? { rotate: 0 }
                : isHovering
                  ? { rotate: [-26, 26, -26] }
                  : { rotate: [0, 0, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.12 : 0.12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "4.6px",
            }}
          >
            <line
              x1={17}
              y1={4.6}
              x2={17}
              y2={2}
              stroke="#64748b"
              strokeWidth={0.8}
            />
            <circle
              cx={17}
              cy={1.8}
              r={0.9}
              fill={`url(#${uid}-bell)`}
              stroke="#334155"
              strokeWidth={0.3}
            />
          </motion.g>
          <circle
            cx={17}
            cy={18}
            r={10.4}
            fill={`url(#${uid}-body)`}
            stroke="#7f1d1d"
            strokeWidth={0.7}
          />
          <circle
            cx={17}
            cy={18}
            r={8}
            fill={`url(#${uid}-face)`}
            stroke="#b91c1c"
            strokeWidth={0.5}
          />
          <path
            d="M24.2 18 L23 18 M23.24 21.6 L22.63 21.25 M20.6 24.24 L20.25 23.63 M17 25.2 L17 24 M13.4 24.24 L13.75 23.63 M10.76 21.6 L11.37 21.25 M9.8 18 L11 18 M10.76 14.4 L11.37 14.75 M13.4 11.76 L13.75 12.37 M17 10.8 L17 12 M20.6 11.76 L20.25 12.37 M23.24 14.4 L22.63 14.75"
            stroke="#334155"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
          <line
            x1={17}
            y1={18}
            x2={13.71}
            y2={16.1}
            stroke="#1e293b"
            strokeWidth={1}
            strokeLinecap="round"
          />
          <motion.line
            x1={17}
            y1={18}
            x2={17}
            y2={12}
            stroke="#1e293b"
            strokeWidth={0.7}
            strokeLinecap="round"
            initial={{ rotate: 0 }}
            animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 2 : 12,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "18px",
            }}
          />
          <motion.line
            x1={17}
            y1={19.4}
            x2={17}
            y2={11.4}
            stroke="#ef4444"
            strokeWidth={0.4}
            strokeLinecap="round"
            initial={{ rotate: 0 }}
            animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.6 : 3,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "18px",
            }}
          />
          <circle
            cx={17}
            cy={18}
            r={0.8}
            fill="#ef4444"
            stroke="#7f1d1d"
            strokeWidth={0.3}
          />
          <path
            d="M9.6 13.4 C10.8 10.8 13.2 9 16 8.6"
            stroke="#ffffff"
            strokeWidth={1.1}
            strokeLinecap="round"
            opacity={0.6}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
