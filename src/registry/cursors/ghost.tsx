"use client";
import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function GhostCursor({
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
  const boo = !!isHovering && !frozen;
  const uid = useId().replace(/[^a-zA-Z0-9-]/g, "");
  const loop = (duration: number) =>
    frozen
      ? { duration: 0 }
      : { duration, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        aria-hidden="true"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(30,27,75,0.35)) drop-shadow(0 0 8px rgba(167,139,250,0.45))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-body`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f1f0ff" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
          <radialGradient id={`${uid}-sheen`} cx="35%" cy="25%" r="45%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Shadow on the floor, shrinking as the ghost rises */}
        <motion.ellipse
          cx="18"
          cy="33.5"
          rx="6"
          ry="1.1"
          fill="#4c1d95"
          initial={{ scale: 1, opacity: 0.22 }}
          animate={
            frozen
              ? { scale: 1, opacity: 0.22 }
              : { scale: [1, 0.75, 1], opacity: [0.22, 0.12, 0.22] }
          }
          transition={loop(2.4)}
          style={{ transformBox: "fill-box", originX: "50%", originY: "50%" }}
        />

        {/* Floating body */}
        <motion.g
          initial={{ y: 0, rotate: 0 }}
          animate={
            frozen
              ? { y: 0, rotate: 0 }
              : { y: [0, -2.2, 0], rotate: boo ? [-6, 6, -6] : [-3, 3, -3] }
          }
          transition={loop(boo ? 1.2 : 2.4)}
          style={{ transformBox: "view-box", originX: "18px", originY: "18px" }}
        >
          <motion.g
            initial={{ scale: 1 }}
            animate={{ scale: boo ? 1.12 : 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 16 }}
            style={{
              transformBox: "view-box",
              originX: "18px",
              originY: "30px",
            }}
          >
            {/* Little arms, thrown up for a "boo!" on hover */}
            <motion.path
              d="M8.4 18.5 C6.2 18.4 4.6 19.6 4.4 21.4 C6 21.8 7.6 21.2 8.6 20.6 Z"
              fill={`url(#${uid}-body)`}
              stroke="#a78bfa"
              strokeWidth="0.6"
              strokeLinejoin="round"
              initial={{ rotate: 0 }}
              animate={{ rotate: boo ? 48 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 14 }}
              style={{
                transformBox: "view-box",
                originX: "8.5px",
                originY: "19.5px",
              }}
            />
            <motion.path
              d="M27.6 18.5 C29.8 18.4 31.4 19.6 31.6 21.4 C30 21.8 28.4 21.2 27.4 20.6 Z"
              fill={`url(#${uid}-body)`}
              stroke="#a78bfa"
              strokeWidth="0.6"
              strokeLinejoin="round"
              initial={{ rotate: 0 }}
              animate={{ rotate: boo ? -48 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 14 }}
              style={{
                transformBox: "view-box",
                originX: "27.5px",
                originY: "19.5px",
              }}
            />

            {/* Body with a scalloped hem */}
            <path
              d="M8 16.5 C8 10.4 12.5 6 18 6 C23.5 6 28 10.4 28 16.5 V27.4 C28 29 26.4 29.6 25.3 28.5 L24 27.2 C23.2 26.4 22 26.4 21.2 27.2 L19.9 28.5 C18.85 29.55 17.15 29.55 16.1 28.5 L14.8 27.2 C14 26.4 12.8 26.4 12 27.2 L10.7 28.5 C9.6 29.6 8 29 8 27.4 Z"
              fill={`url(#${uid}-body)`}
              stroke="#8b5cf6"
              strokeOpacity="0.55"
              strokeWidth="0.75"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 16 C9.5 11.4 13 7.6 17.5 7.6 C14.5 9.4 12.5 12.6 12.5 17 V25 C11.2 24.4 9.5 24.6 9.5 24.6 Z"
              fill={`url(#${uid}-sheen)`}
            />

            {/* Cheeks */}
            <ellipse
              cx="12.4"
              cy="19.6"
              rx="1.8"
              ry="1"
              fill="#f9a8d4"
              opacity="0.75"
            />
            <ellipse
              cx="23.6"
              cy="19.6"
              rx="1.8"
              ry="1"
              fill="#f9a8d4"
              opacity="0.75"
            />

            {/* Eyes, blinking now and then */}
            <motion.g
              initial={{ scaleY: 1 }}
              animate={frozen ? { scaleY: 1 } : { scaleY: [1, 1, 0.12, 1, 1] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: 3.6,
                      times: [0, 0.9, 0.94, 0.98, 1],
                      repeat: Infinity,
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "18px",
                originY: "16px",
              }}
            >
              <ellipse cx="14.4" cy="16" rx="1.75" ry="2.35" fill="#1e1b4b" />
              <ellipse cx="21.6" cy="16" rx="1.75" ry="2.35" fill="#1e1b4b" />
              <circle cx="14.9" cy="15.1" r="0.65" fill="#ffffff" />
              <circle cx="22.1" cy="15.1" r="0.65" fill="#ffffff" />
            </motion.g>

            {/* Mouth opens wide on hover */}
            <motion.ellipse
              cx="18"
              cy="20.6"
              rx="1.25"
              ry="1.05"
              fill="#1e1b4b"
              initial={{ scaleX: 1, scaleY: 1 }}
              animate={
                boo ? { scaleX: 1.35, scaleY: 2.1 } : { scaleX: 1, scaleY: 1 }
              }
              transition={{ type: "spring", stiffness: 320, damping: 15 }}
              style={{
                transformBox: "fill-box",
                originX: "50%",
                originY: "30%",
              }}
            />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  );
}
