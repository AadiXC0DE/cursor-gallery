"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function CassetteCursor({
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
        data-cursor="cassette"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(139,92,246,0.45))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-shell`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#a78bfa" />
            <stop offset={0.55} stopColor="#7c3aed" />
            <stop offset={1} stopColor="#4c1d95" />
          </linearGradient>
          <linearGradient id={`${uid}-label`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#fffbeb" />
            <stop offset={1} stopColor="#fde68a" />
          </linearGradient>
          <linearGradient id={`${uid}-window`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#1e1b4b" />
            <stop offset={1} stopColor="#0f172a" />
          </linearGradient>
          <radialGradient id={`${uid}-tape`} cx="50%" cy="50%" r="50%">
            <stop offset={0} stopColor="#92400e" />
            <stop offset={1} stopColor="#451a03" />
          </radialGradient>
        </defs>
        <rect
          x={2.5}
          y={7.5}
          width={29}
          height={20}
          rx={2.6}
          fill={`url(#${uid}-shell)`}
          stroke="#3b0764"
          strokeWidth={0.8}
        />
        <path
          d="M4.6 8.8 H29.4"
          stroke="#ffffff"
          strokeWidth={0.9}
          strokeLinecap="round"
          opacity={0.35}
        />
        <circle cx={4.6} cy={9.7} r={0.6} fill="#ddd6fe" />
        <circle cx={29.4} cy={9.7} r={0.6} fill="#ddd6fe" />
        <circle cx={4.6} cy={25.3} r={0.6} fill="#ddd6fe" />
        <circle cx={29.4} cy={25.3} r={0.6} fill="#ddd6fe" />
        <rect
          x={5.5}
          y={10}
          width={23}
          height={11.6}
          rx={1.4}
          fill={`url(#${uid}-label)`}
          stroke="#4c1d95"
          strokeWidth={0.4}
        />
        <rect x={5.5} y={11.6} width={23} height={1.1} fill="#fb923c" />
        <rect x={5.5} y={12.9} width={23} height={1.1} fill="#f472b6" />
        <rect
          x={10}
          y={14.6}
          width={14}
          height={5.6}
          rx={2.8}
          fill={`url(#${uid}-window)`}
          stroke="#4c1d95"
          strokeWidth={0.4}
        />
        <circle cx={13.4} cy={17.4} r={2.6} fill={`url(#${uid}-tape)`} />
        <circle cx={20.6} cy={17.4} r={2} fill={`url(#${uid}-tape)`} />
        <motion.g
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.7 : 2.4,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "13.4px",
            originY: "17.4px",
          }}
        >
          <circle
            cx={13.4}
            cy={17.4}
            r={1.5}
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth={0.3}
          />
          <path
            d="M14 17.4 L14.75 17.4 M13.7 17.92 L14.08 18.57 M13.1 17.92 L12.73 18.57 M12.8 17.4 L12.05 17.4 M13.1 16.88 L12.73 16.23 M13.7 16.88 L14.08 16.23"
            stroke="#64748b"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
          <circle cx={13.4} cy={17.4} r={0.45} fill="#334155" />
        </motion.g>
        <motion.g
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.7 : 2.4,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "20.6px",
            originY: "17.4px",
          }}
        >
          <circle
            cx={20.6}
            cy={17.4}
            r={1.5}
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth={0.3}
          />
          <path
            d="M21.2 17.4 L21.95 17.4 M20.9 17.92 L21.28 18.57 M20.3 17.92 L19.93 18.57 M20 17.4 L19.25 17.4 M20.3 16.88 L19.93 16.23 M20.9 16.88 L21.28 16.23"
            stroke="#64748b"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
          <circle cx={20.6} cy={17.4} r={0.45} fill="#334155" />
        </motion.g>
        <path
          d="M11.6 15.5 H15"
          stroke="#ffffff"
          strokeWidth={0.5}
          strokeLinecap="round"
          opacity={0.35}
        />
        <path
          d="M7.4 20.6 Q8.4 19.6 9.4 20.6 T11.4 20.6 T13.4 20.6"
          stroke="#6d28d9"
          strokeWidth={0.6}
          strokeLinecap="round"
        />
        <path
          d="M8.5 27.5 L10.3 23.6 H23.7 L25.5 27.5"
          fill="#5b21b6"
          stroke="#3b0764"
          strokeWidth={0.6}
          strokeLinejoin="round"
        />
        <circle cx={12.6} cy={25.7} r={0.7} fill="#1e1b4b" />
        <circle cx={21.4} cy={25.7} r={0.7} fill="#1e1b4b" />
        <motion.g
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={
            frozen
              ? { x: 0, y: 0, opacity: 1 }
              : { x: [0, 1, 2], y: [0, -3.5, -7], opacity: [0, 1, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.2 : 2.6,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "28.4px",
            originY: "5px",
          }}
        >
          <circle
            cx={27.4}
            cy={6.6}
            r={1.2}
            fill="#f472b6"
            stroke="#be185d"
            strokeWidth={0.3}
          />
          <path
            d="M28.5 6.4 V2 Q30.2 2.8 31 4.2"
            stroke="#f472b6"
            strokeWidth={0.9}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
