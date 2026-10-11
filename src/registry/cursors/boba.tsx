"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function BobaCursor({
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
        data-cursor="boba"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(244,114,182,0.35))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-tea`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#fde7c8" />
            <stop offset={0.5} stopColor="#e7b98a" />
            <stop offset={1} stopColor="#c08552" />
          </linearGradient>
          <radialGradient id={`${uid}-pearl`} cx="40%" cy="35%" r="70%">
            <stop offset={0} stopColor="#78716c" />
            <stop offset={1} stopColor="#1c1917" />
          </radialGradient>
          <linearGradient id={`${uid}-lid`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={1} stopColor="#cbd5e1" />
          </linearGradient>
          <clipPath id={`${uid}-cup`}>
            <path d="M8.6 9.8 H25.4 L23.4 30 C23.3 30.8 22.7 31.4 21.9 31.4 H12.1 C11.3 31.4 10.7 30.8 10.6 30 Z" />
          </clipPath>
        </defs>
        <line
          x1={22.6}
          y1={1.6}
          x2={18.4}
          y2={27}
          stroke="#be185d"
          strokeWidth={3}
          strokeLinecap="round"
        />
        <line
          x1={22.6}
          y1={1.6}
          x2={18.4}
          y2={27}
          stroke="#f472b6"
          strokeWidth={2.2}
          strokeLinecap="round"
        />
        <path
          d="M8.6 9.8 H25.4 L23.4 30 C23.3 30.8 22.7 31.4 21.9 31.4 H12.1 C11.3 31.4 10.7 30.8 10.6 30 Z"
          fill={`url(#${uid}-tea)`}
          opacity={0.94}
        />
        <g clipPath={`url(#${uid}-cup)`}>
          <motion.g
            initial={{ y: 0 }}
            animate={
              frozen
                ? { y: 0 }
                : isHovering
                  ? { y: [0, -2.4, 0] }
                  : { y: [0, -0.7, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.6 : 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <circle cx={13.4} cy={29.4} r={1.25} fill={`url(#${uid}-pearl)`} />
            <circle cx={13} cy={28.95} r={0.32} fill="#ffffff" opacity={0.8} />
          </motion.g>
          <motion.g
            initial={{ y: 0 }}
            animate={
              frozen
                ? { y: 0 }
                : isHovering
                  ? { y: [0, -2.4, 0] }
                  : { y: [0, -0.7, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.6 : 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.1,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <circle cx={16} cy={29.4} r={1.25} fill={`url(#${uid}-pearl)`} />
            <circle
              cx={15.6}
              cy={28.95}
              r={0.32}
              fill="#ffffff"
              opacity={0.8}
            />
          </motion.g>
          <motion.g
            initial={{ y: 0 }}
            animate={
              frozen
                ? { y: 0 }
                : isHovering
                  ? { y: [0, -2.4, 0] }
                  : { y: [0, -0.7, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.6 : 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <circle cx={18.6} cy={29.4} r={1.25} fill={`url(#${uid}-pearl)`} />
            <circle
              cx={18.2}
              cy={28.95}
              r={0.32}
              fill="#ffffff"
              opacity={0.8}
            />
          </motion.g>
          <motion.g
            initial={{ y: 0 }}
            animate={
              frozen
                ? { y: 0 }
                : isHovering
                  ? { y: [0, -2.4, 0] }
                  : { y: [0, -0.7, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.6 : 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <circle cx={21.2} cy={29.4} r={1.25} fill={`url(#${uid}-pearl)`} />
            <circle
              cx={20.8}
              cy={28.95}
              r={0.32}
              fill="#ffffff"
              opacity={0.8}
            />
          </motion.g>
          <motion.g
            initial={{ y: 0 }}
            animate={
              frozen
                ? { y: 0 }
                : isHovering
                  ? { y: [0, -2.4, 0] }
                  : { y: [0, -0.7, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.6 : 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <circle cx={12.8} cy={27} r={1.25} fill={`url(#${uid}-pearl)`} />
            <circle
              cx={12.4}
              cy={26.55}
              r={0.32}
              fill="#ffffff"
              opacity={0.8}
            />
          </motion.g>
          <motion.g
            initial={{ y: 0 }}
            animate={
              frozen
                ? { y: 0 }
                : isHovering
                  ? { y: [0, -2.4, 0] }
                  : { y: [0, -0.7, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.6 : 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <circle cx={15.4} cy={27} r={1.25} fill={`url(#${uid}-pearl)`} />
            <circle cx={15} cy={26.55} r={0.32} fill="#ffffff" opacity={0.8} />
          </motion.g>
          <motion.g
            initial={{ y: 0 }}
            animate={
              frozen
                ? { y: 0 }
                : isHovering
                  ? { y: [0, -2.4, 0] }
                  : { y: [0, -0.7, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.6 : 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <circle cx={18} cy={27} r={1.25} fill={`url(#${uid}-pearl)`} />
            <circle
              cx={17.6}
              cy={26.55}
              r={0.32}
              fill="#ffffff"
              opacity={0.8}
            />
          </motion.g>
          <motion.g
            initial={{ y: 0 }}
            animate={
              frozen
                ? { y: 0 }
                : isHovering
                  ? { y: [0, -2.4, 0] }
                  : { y: [0, -0.7, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.6 : 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <circle cx={20.6} cy={27} r={1.25} fill={`url(#${uid}-pearl)`} />
            <circle
              cx={20.2}
              cy={26.55}
              r={0.32}
              fill="#ffffff"
              opacity={0.8}
            />
          </motion.g>
          <motion.g
            initial={{ y: 0 }}
            animate={
              frozen
                ? { y: 0 }
                : isHovering
                  ? { y: [0, -2.4, 0] }
                  : { y: [0, -0.7, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.6 : 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <circle cx={14.2} cy={24.8} r={1.25} fill={`url(#${uid}-pearl)`} />
            <circle
              cx={13.8}
              cy={24.35}
              r={0.32}
              fill="#ffffff"
              opacity={0.8}
            />
          </motion.g>
          <motion.g
            initial={{ y: 0 }}
            animate={
              frozen
                ? { y: 0 }
                : isHovering
                  ? { y: [0, -2.4, 0] }
                  : { y: [0, -0.7, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.6 : 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <circle cx={16.8} cy={24.8} r={1.25} fill={`url(#${uid}-pearl)`} />
            <circle
              cx={16.4}
              cy={24.35}
              r={0.32}
              fill="#ffffff"
              opacity={0.8}
            />
          </motion.g>
          <motion.g
            initial={{ y: 0 }}
            animate={
              frozen
                ? { y: 0 }
                : isHovering
                  ? { y: [0, -2.4, 0] }
                  : { y: [0, -0.7, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.6 : 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <circle cx={19.4} cy={24.8} r={1.25} fill={`url(#${uid}-pearl)`} />
            <circle cx={19} cy={24.35} r={0.32} fill="#ffffff" opacity={0.8} />
          </motion.g>
          <motion.circle
            cx={18.6}
            cy={25.4}
            r={1.2}
            fill={`url(#${uid}-pearl)`}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={
              frozen
                ? { x: 0, y: 0, opacity: 0 }
                : isHovering
                  ? { x: [0, 2.6, 3.4], y: [0, -15, -20], opacity: [1, 1, 0] }
                  : { x: [0, 0, 0], y: [0, 0, 0], opacity: [0, 0, 0] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.9 : 0.9,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          />
        </g>
        <path
          d="M8.6 9.8 H25.4 L23.4 30 C23.3 30.8 22.7 31.4 21.9 31.4 H12.1 C11.3 31.4 10.7 30.8 10.6 30 Z"
          stroke="#94a3b8"
          strokeWidth={0.6}
          strokeLinejoin="round"
        />
        <path
          d="M10.6 12 L12.1 28.6"
          stroke="#ffffff"
          strokeWidth={0.8}
          strokeLinecap="round"
          opacity={0.55}
        />
        <circle cx={14.6} cy={17.4} r={0.75} fill="#451a03" />
        <circle cx={19.4} cy={17.4} r={0.75} fill="#451a03" />
        <circle cx={14.85} cy={17.15} r={0.25} fill="#ffffff" />
        <circle cx={19.65} cy={17.15} r={0.25} fill="#ffffff" />
        <path
          d="M16.2 18.6 Q17 19.4 17.8 18.6"
          stroke="#451a03"
          strokeWidth={0.5}
          strokeLinecap="round"
        />
        <ellipse
          cx={13.4}
          cy={18.8}
          rx={0.9}
          ry={0.5}
          fill="#fb7185"
          opacity={0.7}
        />
        <ellipse
          cx={20.6}
          cy={18.8}
          rx={0.9}
          ry={0.5}
          fill="#fb7185"
          opacity={0.7}
        />
        <rect
          x={7.8}
          y={8.4}
          width={18.4}
          height={2.2}
          rx={1.1}
          fill={`url(#${uid}-lid)`}
          stroke="#64748b"
          strokeWidth={0.5}
        />
        <line
          x1={22.6}
          y1={1.6}
          x2={21.3}
          y2={9.4}
          stroke="#be185d"
          strokeWidth={3}
          strokeLinecap="round"
        />
        <line
          x1={22.6}
          y1={1.6}
          x2={21.3}
          y2={9.4}
          stroke="#f472b6"
          strokeWidth={2.2}
          strokeLinecap="round"
        />
        <line
          x1={22.3}
          y1={2.4}
          x2={21.4}
          y2={7.8}
          stroke="#fbcfe8"
          strokeWidth={0.6}
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
