"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function TypewriterCursor({
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
        data-cursor="typewriter"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 17 H26 L30 29 H4 Z" fill="#f59e0b" fillOpacity={0.12} />
        <motion.g
          initial={{ x: 0 }}
          animate={
            frozen
              ? { x: 0 }
              : isHovering
                ? { x: [0, 2, 0] }
                : { x: [0, 0.5, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.2 : 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <rect
            x={10}
            y={3}
            width={14}
            height={10}
            rx={1}
            fill="#e4e4e7"
            fillOpacity={0.22}
            stroke="#e4e4e7"
          />
          <rect
            x={4}
            y={12}
            width={26}
            height={5}
            rx={2.5}
            fill="#f59e0b"
            fillOpacity={0.25}
          />
        </motion.g>
        <rect
          x={6}
          y={24}
          width={22}
          height={3}
          rx={1.5}
          fill="#f59e0b"
          fillOpacity={0.25}
        />
        <motion.rect
          x={8}
          y={21}
          width={4}
          height={3}
          rx={0.8}
          fill="#f59e0b"
          fillOpacity={0.8}
          initial={{ y: 0 }}
          animate={
            frozen
              ? { y: 0 }
              : isHovering
                ? { y: [0, 1.5, 0] }
                : { y: [0, 0.5, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.65 : 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.0,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.rect
          x={15}
          y={21}
          width={4}
          height={3}
          rx={0.8}
          fill="#f59e0b"
          fillOpacity={0.8}
          initial={{ y: 0 }}
          animate={
            frozen
              ? { y: 0 }
              : isHovering
                ? { y: [0, 1.5, 0] }
                : { y: [0, 0.5, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.65 : 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.rect
          x={22}
          y={21}
          width={4}
          height={3}
          rx={0.8}
          fill="#f59e0b"
          fillOpacity={0.8}
          initial={{ y: 0 }}
          animate={
            frozen
              ? { y: 0 }
              : isHovering
                ? { y: [0, 1.5, 0] }
                : { y: [0, 0.5, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.65 : 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
      </svg>
    </motion.div>
  );
}
