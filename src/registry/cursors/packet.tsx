"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function PacketCursor({
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
        data-cursor="packet"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(34,211,238,0.45))",
        }}
      >
        <defs>
          <linearGradient
            id={`${uid}-fiber`}
            x1={5}
            y1={26.5}
            x2={29}
            y2={7.5}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#22d3ee" />
            <stop offset={1} stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id={`${uid}-top`} x1={0} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor="#ecfeff" />
            <stop offset={1} stopColor="#67e8f9" />
          </linearGradient>
          <linearGradient id={`${uid}-left`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#38bdf8" />
            <stop offset={1} stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id={`${uid}-right`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#6366f1" />
            <stop offset={1} stopColor="#3730a3" />
          </linearGradient>
          <radialGradient id={`${uid}-nodeA`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#ecfeff" />
            <stop offset={0.5} stopColor="#22d3ee" />
            <stop offset={1} stopColor="#0e7490" />
          </radialGradient>
          <radialGradient id={`${uid}-nodeB`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#f5f3ff" />
            <stop offset={0.5} stopColor="#a78bfa" />
            <stop offset={1} stopColor="#6d28d9" />
          </radialGradient>
        </defs>
        <line
          x1={5}
          y1={26.5}
          x2={29}
          y2={7.5}
          stroke={`url(#${uid}-fiber)`}
          strokeWidth={2.6}
          strokeLinecap="round"
          opacity={0.25}
        />
        <motion.line
          x1={5}
          y1={26.5}
          x2={29}
          y2={7.5}
          stroke={`url(#${uid}-fiber)`}
          strokeWidth={1}
          strokeLinecap="round"
          strokeDasharray="1.2 2"
          initial={{ strokeDashoffset: 0 }}
          animate={
            frozen ? { strokeDashoffset: 0 } : { strokeDashoffset: [0, -6.4] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.4 : 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.circle
          cx={5}
          cy={26.5}
          r={3.6}
          stroke="#22d3ee"
          strokeWidth={1}
          initial={{ scale: 1, opacity: 0 }}
          animate={
            frozen
              ? { scale: 1, opacity: 0 }
              : { scale: [1, 2.1, 2.1], opacity: [0.9, 0, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.9 : 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.28, 1],
                }
          }
          style={{
            transformBox: "view-box",
            originX: "5px",
            originY: "26.5px",
          }}
        />
        <motion.circle
          cx={29}
          cy={7.5}
          r={3.6}
          stroke="#a78bfa"
          strokeWidth={1}
          initial={{ scale: 1, opacity: 0 }}
          animate={
            frozen
              ? { scale: 1, opacity: 0 }
              : { scale: [1, 1, 2.1], opacity: [0, 0.9, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.9 : 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.72, 1],
                }
          }
          style={{
            transformBox: "view-box",
            originX: "29px",
            originY: "7.5px",
          }}
        />
        <circle
          cx={5}
          cy={26.5}
          r={3.6}
          fill={`url(#${uid}-nodeA)`}
          stroke="#0e7490"
          strokeWidth={0.6}
        />
        <circle cx={5} cy={26.5} r={1.3} fill="#083344" />
        <circle
          cx={29}
          cy={7.5}
          r={3.6}
          fill={`url(#${uid}-nodeB)`}
          stroke="#5b21b6"
          strokeWidth={0.6}
        />
        <circle cx={29} cy={7.5} r={1.3} fill="#2e1065" />
        <motion.path
          d="M17 15.6 L18.4 17 L17 18.4 L15.6 17 Z"
          fill="#67e8f9"
          opacity={0.3}
          initial={{ x: -4.6, y: 3.6, opacity: 0.3 }}
          animate={
            frozen
              ? { x: -4.6, y: 3.6, opacity: 0.3 }
              : {
                  x: [-12, -12, 12, 12, -12],
                  y: [9.5, 9.5, -9.5, -9.5, 9.5],
                  opacity: [0, 1, 1, 0, 0],
                }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.9 : 1.8,
                  repeat: Infinity,
                  ease: ["easeOut", "easeInOut", "easeIn", "linear"],
                  times: [0, 0.1, 0.72, 0.8, 1],
                  delay: 0.16,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.path
          d="M17 15 L19 17 L17 19 L15 17 Z"
          fill="#67e8f9"
          opacity={0.55}
          initial={{ x: -2.4, y: 1.9, opacity: 0.55 }}
          animate={
            frozen
              ? { x: -2.4, y: 1.9, opacity: 0.55 }
              : {
                  x: [-12, -12, 12, 12, -12],
                  y: [9.5, 9.5, -9.5, -9.5, 9.5],
                  opacity: [0, 1, 1, 0, 0],
                }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.9 : 1.8,
                  repeat: Infinity,
                  ease: ["easeOut", "easeInOut", "easeIn", "linear"],
                  times: [0, 0.1, 0.72, 0.8, 1],
                  delay: 0.08,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.g
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={
            frozen
              ? { x: 0, y: 0, opacity: 1 }
              : {
                  x: [-12, -12, 12, 12, -12],
                  y: [9.5, 9.5, -9.5, -9.5, 9.5],
                  opacity: [0, 1, 1, 0, 0],
                }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.9 : 1.8,
                  repeat: Infinity,
                  ease: ["easeOut", "easeInOut", "easeIn", "linear"],
                  times: [0, 0.1, 0.72, 0.8, 1],
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <path
            d="M17 13.4 L20.6 15.2 L17 17 L13.4 15.2 Z"
            fill={`url(#${uid}-top)`}
            stroke="#1e1b4b"
            strokeWidth={0.4}
            strokeLinejoin="round"
          />
          <path
            d="M13.4 15.2 L17 17 V21 L13.4 19.2 Z"
            fill={`url(#${uid}-left)`}
            stroke="#1e1b4b"
            strokeWidth={0.4}
            strokeLinejoin="round"
          />
          <path
            d="M20.6 15.2 V19.2 L17 21 V17 Z"
            fill={`url(#${uid}-right)`}
            stroke="#1e1b4b"
            strokeWidth={0.4}
            strokeLinejoin="round"
          />
          <path
            d="M14.4 17.2 L16 18 M14.4 18.6 L15.3 19.05"
            stroke="#ffffff"
            strokeWidth={0.5}
            strokeLinecap="round"
            opacity={0.8}
          />
          <path
            d="M18 18.6 L19.6 17.8"
            stroke="#a5b4fc"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
          <path
            d="M14.6 15.2 L17 14"
            stroke="#ffffff"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
