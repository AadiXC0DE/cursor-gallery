"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

export default function MoonPhaseCursor({
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
        data-cursor="moon-phase"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <mask
            id={`${svgId}-moon-phase-mask`}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={34}
            height={34}
          >
            <path
              d="M17 5.5 A11.5 11.5 0 0 1 17 28.5 Z"
              fill="white"
              stroke="none"
            />
            <motion.path
              d="M17 5.5 A11.5 11.5 0 0 1 17 28.5 Z"
              fill="black"
              stroke="none"
              initial={{ scaleX: 0.65 }}
              animate={
                frozen ? { scaleX: 0.65 } : { scaleX: [0.65, 0, 0, 0, 0.65] }
              }
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 2.5 : 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "17px",
              }}
            />
            <motion.path
              d="M17 5.5 A11.5 11.5 0 0 0 17 28.5 Z"
              fill="white"
              stroke="none"
              initial={{ scaleX: 0 }}
              animate={frozen ? { scaleX: 0 } : { scaleX: [0, 0, 1, 0, 0] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 2.5 : 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "17px",
              }}
            />
          </mask>
        </defs>
        <circle cx={17} cy={17} r={11.5} stroke="#e4e4e7" opacity={0.5} />
        <circle
          cx={17}
          cy={17}
          r={11.5}
          fill="#e4e4e7"
          stroke="none"
          mask={`url(#${svgId}-moon-phase-mask)`}
        />
      </svg>
    </motion.div>
  );
}
