"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring", stiffness: 320, damping: 20 } as const;

export default function CrystalBallCursor({
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
        data-cursor="crystal-ball"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(168,85,247,0.55))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-orb`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#ede9fe" />
            <stop offset={0.45} stopColor="#7c3aed" />
            <stop offset={1} stopColor="#1e1b4b" />
          </radialGradient>
          <radialGradient id={`${uid}-aura`} cx="50%" cy="50%" r="50%">
            <stop offset={0.6} stopColor="#c084fc" stopOpacity={0.45} />
            <stop offset={1} stopColor="#c084fc" stopOpacity={0} />
          </radialGradient>
          <linearGradient id={`${uid}-gold`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#fef3c7" />
            <stop offset={0.45} stopColor="#f59e0b" />
            <stop offset={1} stopColor="#78350f" />
          </linearGradient>
          <clipPath id={`${uid}-orbClip`}>
            <circle cx={17} cy={14} r={10} />
          </clipPath>
        </defs>
        <motion.circle
          cx={17}
          cy={14}
          r={13}
          fill={`url(#${uid}-aura)`}
          initial={{ scale: 0.92, opacity: 0.6 }}
          animate={
            frozen
              ? { scale: 0.92, opacity: 0.6 }
              : { scale: [0.92, 1.06, 0.92], opacity: [0.6, 1, 0.6] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1 : 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "14px" }}
        />
        <circle cx={17} cy={14} r={10} fill={`url(#${uid}-orb)`} />
        <g clipPath={`url(#${uid}-orbClip)`}>
          <motion.g
            initial={{ rotate: 0 }}
            animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 2.4 : 8,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "14px",
            }}
          >
            <ellipse
              cx={13}
              cy={11.6}
              rx={6}
              ry={3.2}
              fill="#c084fc"
              opacity={0.55}
            />
            <ellipse
              cx={21.4}
              cy={17}
              rx={5}
              ry={2.6}
              fill="#22d3ee"
              opacity={0.4}
            />
            <ellipse
              cx={15.4}
              cy={19}
              rx={4}
              ry={2}
              fill="#f0abfc"
              opacity={0.45}
            />
          </motion.g>
          <motion.path
            d="M17.5 14 L17.59 14.09 L17.67 14.22 L17.72 14.37 L17.73 14.53 L17.71 14.71 L17.65 14.9 L17.55 15.08 L17.41 15.25 L17.22 15.4 L17 15.52 L16.75 15.6 L16.47 15.63 L16.17 15.62 L15.87 15.55 L15.57 15.43 L15.28 15.25 L15.02 15.01 L14.79 14.72 L14.6 14.38 L14.47 14 L14.4 13.59 L14.4 13.16 L14.47 12.71 L14.62 12.27 L14.85 11.85 L15.15 11.46 L15.53 11.11 L15.97 10.82 L16.46 10.6 L17 10.45 L17.57 10.4 L18.16 10.43 L18.75 10.57 L19.32 10.8 L19.87 11.13 L20.36 11.56 L20.79 12.07 L21.15 12.65 L21.41 13.3 L21.56 14 L21.61 14.73 L21.53 15.47 L21.34 16.21 L21.02 16.92 L20.59 17.59 L20.04 18.18 L19.39 18.7 L18.66 19.11 L17.86 19.41 L17 19.58 L16.11 19.61 L15.21 19.5 L14.33 19.24 L13.48 18.84 L12.7 18.3 L11.99 17.64 L11.4 16.86 L10.92 15.97 L10.59 15.02 L10.41 14 L10.39 12.95 L10.54 11.9 L10.85 10.87 L11.34 9.89"
            stroke="#ffffff"
            strokeWidth={0.6}
            strokeLinecap="round"
            opacity={0.35}
            initial={{ rotate: 0 }}
            animate={frozen ? { rotate: 0 } : { rotate: [0, -360] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1.5 : 5,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "14px",
            }}
          />
          <motion.path
            d="M13.4 14.4 Q13.4 15.6 14.6 15.6 Q13.4 15.6 13.4 16.8 Q13.4 15.6 12.2 15.6 Q13.4 15.6 13.4 14.4 Z"
            fill="#ffffff"
            initial={{ opacity: 1, scale: 1 }}
            animate={
              frozen
                ? { opacity: 1, scale: 1 }
                : { opacity: [0.15, 1, 0.15], scale: [0.6, 1, 0.6] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
            }
            style={{
              transformBox: "view-box",
              originX: "13.4px",
              originY: "15.6px",
            }}
          />
          <motion.path
            d="M20.4 9.4 Q20.4 10.4 21.4 10.4 Q20.4 10.4 20.4 11.4 Q20.4 10.4 19.4 10.4 Q20.4 10.4 20.4 9.4 Z"
            fill="#ffffff"
            initial={{ opacity: 1, scale: 1 }}
            animate={
              frozen
                ? { opacity: 1, scale: 1 }
                : { opacity: [0.15, 1, 0.15], scale: [0.6, 1, 0.6] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.7,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "20.4px",
              originY: "10.4px",
            }}
          />
          <motion.path
            d="M17 9.6 Q17 14 21.4 14 Q17 14 17 18.4 Q17 14 12.6 14 Q17 14 17 9.6 Z"
            fill="#ffffff"
            initial={false}
            animate={
              !frozen && isHovering
                ? { opacity: 1, scale: 1.1 }
                : { opacity: 0, scale: 1 }
            }
            transition={spring}
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "14px",
            }}
          />
        </g>
        <circle
          cx={17}
          cy={14}
          r={10}
          stroke="#ddd6fe"
          strokeWidth={0.6}
          opacity={0.8}
        />
        <path
          d="M9.6 10.4 C10.6 7.6 13 5.6 15.8 5.2"
          stroke="#ffffff"
          strokeWidth={1.4}
          strokeLinecap="round"
          opacity={0.8}
        />
        <ellipse cx={17} cy={23.8} rx={6.4} ry={1.6} fill="#92400e" />
        <path
          d="M10.4 23.6 C12.6 25.4 21.4 25.4 23.6 23.6 L25.2 28.8 C25.4 29.8 24.8 30.6 23.8 30.6 H10.2 C9.2 30.6 8.6 29.8 8.8 28.8 Z"
          fill={`url(#${uid}-gold)`}
          stroke="#78350f"
          strokeWidth={0.6}
          strokeLinejoin="round"
        />
        <path
          d="M10 28.2 H24"
          stroke="#fef3c7"
          strokeWidth={0.5}
          opacity={0.6}
        />
        <circle
          cx={17}
          cy={27.2}
          r={0.9}
          fill="#a855f7"
          stroke="#581c87"
          strokeWidth={0.3}
        />
      </svg>
    </motion.div>
  );
}
