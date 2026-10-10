"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

export default function GyroscopeCursor({
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
        data-cursor="gyroscope"
        fill="none"
        stroke="#2dd4bf"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <mask
            id={`${svgId}-gyroscope-outer-clearance`}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={34}
            height={34}
          >
            <rect
              x={0}
              y={0}
              width={34}
              height={34}
              fill="white"
              stroke="none"
            />
            <path d="M13 6 L21 25" stroke="black" strokeWidth={5} />
          </mask>
          <mask
            id={`${svgId}-gyroscope-inner-clearance`}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={34}
            height={34}
          >
            <rect
              x={0}
              y={0}
              width={34}
              height={34}
              fill="white"
              stroke="none"
            />
            <path d="M13 6 L21 25" stroke="black" strokeWidth={5} />
          </mask>
        </defs>
        <path
          d="M3 9 V23 Q3 28 9 28 H25 Q31 28 31 23 V9 M17 28 V31 M12 31 H22"
          stroke="#e4e4e7"
        />
        <motion.g
          initial={{ rotate: 0 }}
          animate={
            frozen
              ? { rotate: 0 }
              : isHovering
                ? { rotate: [0, 16, 0, -16, 0] }
                : { rotate: [0, 5, 0, -5, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 3 : 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{
            transformBox: "view-box",
            originX: "17px",
            originY: "15.5px",
          }}
        >
          <circle
            cx={17}
            cy={15.5}
            r={10.5}
            strokeWidth={2.25}
            mask={`url(#${svgId}-gyroscope-outer-clearance)`}
          />
          <ellipse
            cx={17}
            cy={15.5}
            rx={8.5}
            ry={4.5}
            transform="rotate(-30 17 15.5)"
            strokeWidth={2.25}
            mask={`url(#${svgId}-gyroscope-inner-clearance)`}
          />
          <path d="M13 6 L21 25" stroke="#e4e4e7" strokeWidth={2.25} />
        </motion.g>
      </svg>
    </motion.div>
  );
}
