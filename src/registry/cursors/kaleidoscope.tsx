"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

export default function KaleidoscopeCursor({
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
  const svgId = useId().replace(/:/g, "");
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
        data-cursor="kaleidoscope"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient
            id={`${svgId}-kaleidoscope-bands`}
            gradientUnits="userSpaceOnUse"
            x1={17}
            y1={17}
            x2={22.63}
            y2={7.25}
          >
            <stop offset={0} stopColor="#e4e4e7" />
            <stop offset={0.2} stopColor="#e4e4e7" />
            <stop offset={0.2} stopColor="#f59e0b" />
            <stop offset={0.39} stopColor="#f59e0b" />
            <stop offset={0.39} stopColor="#fb7185" />
            <stop offset={0.6} stopColor="#fb7185" />
            <stop offset={0.6} stopColor="#38bdf8" />
            <stop offset={0.8} stopColor="#38bdf8" />
            <stop offset={0.8} stopColor="#a78bfa" />
            <stop offset={1} stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <motion.g
          initial={{ rotate: 0 }}
          animate={frozen ? { rotate: 0 } : { rotate: [0, 360] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 4 : 15,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <path
            d="M17 17 L17 4 L28.26 10.5 Z"
            transform="rotate(0 17 17)"
            fill={`url(#${svgId}-kaleidoscope-bands)`}
            stroke="#09090b"
            strokeWidth={1.75}
            strokeLinejoin="miter"
          />
          <path
            d="M17 17 L17 4 L28.26 10.5 Z"
            transform="rotate(120 17 17) translate(34 0) scale(-1 1)"
            fill={`url(#${svgId}-kaleidoscope-bands)`}
            stroke="#09090b"
            strokeWidth={1.75}
            strokeLinejoin="miter"
          />
          <path
            d="M17 17 L17 4 L28.26 10.5 Z"
            transform="rotate(120 17 17)"
            fill={`url(#${svgId}-kaleidoscope-bands)`}
            stroke="#09090b"
            strokeWidth={1.75}
            strokeLinejoin="miter"
          />
          <path
            d="M17 17 L17 4 L28.26 10.5 Z"
            transform="rotate(240 17 17) translate(34 0) scale(-1 1)"
            fill={`url(#${svgId}-kaleidoscope-bands)`}
            stroke="#09090b"
            strokeWidth={1.75}
            strokeLinejoin="miter"
          />
          <path
            d="M17 17 L17 4 L28.26 10.5 Z"
            transform="rotate(240 17 17)"
            fill={`url(#${svgId}-kaleidoscope-bands)`}
            stroke="#09090b"
            strokeWidth={1.75}
            strokeLinejoin="miter"
          />
          <path
            d="M17 17 L17 4 L28.26 10.5 Z"
            transform="rotate(360 17 17) translate(34 0) scale(-1 1)"
            fill={`url(#${svgId}-kaleidoscope-bands)`}
            stroke="#09090b"
            strokeWidth={1.75}
            strokeLinejoin="miter"
          />
          <path
            d="M17 7.5 L21.9 12 L17 16.5 L12.1 12 Z"
            transform="rotate(0 17 17)"
            stroke="#09090b"
            strokeWidth={1.75}
            strokeLinejoin="miter"
          />
          <path
            d="M17 7.5 L21.9 12 L17 16.5 L12.1 12 Z"
            transform="rotate(120 17 17)"
            stroke="#09090b"
            strokeWidth={1.75}
            strokeLinejoin="miter"
          />
          <path
            d="M17 7.5 L21.9 12 L17 16.5 L12.1 12 Z"
            transform="rotate(240 17 17)"
            stroke="#09090b"
            strokeWidth={1.75}
            strokeLinejoin="miter"
          />
          <path
            d="M17 4 L28.26 10.5 V23.5 L17 30 L5.74 23.5 V10.5 Z"
            strokeWidth={2}
            strokeLinejoin="miter"
          />
          <path
            d="M17 13.5 L20.5 17 L17 20.5 L13.5 17 Z"
            fill="#e4e4e7"
            stroke="none"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
