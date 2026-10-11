"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function SlinkyCursor({
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
        data-cursor="slinky"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(236,72,153,0.3))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-c0`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#991b1b" />
            <stop offset={0.3} stopColor="#ef4444" />
            <stop offset={0.5} stopColor="#fca5a5" />
            <stop offset={0.7} stopColor="#ef4444" />
            <stop offset={1} stopColor="#991b1b" />
          </linearGradient>
          <linearGradient id={`${uid}-c1`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#9a3412" />
            <stop offset={0.3} stopColor="#f97316" />
            <stop offset={0.5} stopColor="#fdba74" />
            <stop offset={0.7} stopColor="#f97316" />
            <stop offset={1} stopColor="#9a3412" />
          </linearGradient>
          <linearGradient id={`${uid}-c2`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#92400e" />
            <stop offset={0.3} stopColor="#f59e0b" />
            <stop offset={0.5} stopColor="#fde68a" />
            <stop offset={0.7} stopColor="#f59e0b" />
            <stop offset={1} stopColor="#92400e" />
          </linearGradient>
          <linearGradient id={`${uid}-c3`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#854d0e" />
            <stop offset={0.3} stopColor="#eab308" />
            <stop offset={0.5} stopColor="#fef08a" />
            <stop offset={0.7} stopColor="#eab308" />
            <stop offset={1} stopColor="#854d0e" />
          </linearGradient>
          <linearGradient id={`${uid}-c4`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#3f6212" />
            <stop offset={0.3} stopColor="#84cc16" />
            <stop offset={0.5} stopColor="#bef264" />
            <stop offset={0.7} stopColor="#84cc16" />
            <stop offset={1} stopColor="#3f6212" />
          </linearGradient>
          <linearGradient id={`${uid}-c5`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#166534" />
            <stop offset={0.3} stopColor="#22c55e" />
            <stop offset={0.5} stopColor="#86efac" />
            <stop offset={0.7} stopColor="#22c55e" />
            <stop offset={1} stopColor="#166534" />
          </linearGradient>
          <linearGradient id={`${uid}-c6`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#155e75" />
            <stop offset={0.3} stopColor="#06b6d4" />
            <stop offset={0.5} stopColor="#67e8f9" />
            <stop offset={0.7} stopColor="#06b6d4" />
            <stop offset={1} stopColor="#155e75" />
          </linearGradient>
          <linearGradient id={`${uid}-c7`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#1e3a8a" />
            <stop offset={0.3} stopColor="#3b82f6" />
            <stop offset={0.5} stopColor="#93c5fd" />
            <stop offset={0.7} stopColor="#3b82f6" />
            <stop offset={1} stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id={`${uid}-c8`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#4c1d95" />
            <stop offset={0.3} stopColor="#8b5cf6" />
            <stop offset={0.5} stopColor="#c4b5fd" />
            <stop offset={0.7} stopColor="#8b5cf6" />
            <stop offset={1} stopColor="#4c1d95" />
          </linearGradient>
        </defs>
        <ellipse
          cx={17}
          cy={6.5}
          rx={9}
          ry={2.6}
          stroke={`url(#${uid}-c0)`}
          strokeWidth={1.5}
        />
        <motion.ellipse
          cx={17}
          cy={8.2}
          rx={9}
          ry={2.6}
          stroke={`url(#${uid}-c1)`}
          strokeWidth={1.5}
          initial={{ y: 0 }}
          animate={
            frozen
              ? { y: 0 }
              : isHovering
                ? { y: [0, 1.45, 0] }
                : { y: [0, 1.05, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1 : 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.03,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.ellipse
          cx={17}
          cy={9.9}
          rx={9}
          ry={2.6}
          stroke={`url(#${uid}-c2)`}
          strokeWidth={1.5}
          initial={{ y: 0 }}
          animate={
            frozen
              ? { y: 0 }
              : isHovering
                ? { y: [0, 2.9, 0] }
                : { y: [0, 2.1, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1 : 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.06,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.ellipse
          cx={17}
          cy={11.6}
          rx={9}
          ry={2.6}
          stroke={`url(#${uid}-c3)`}
          strokeWidth={1.5}
          initial={{ y: 0 }}
          animate={
            frozen
              ? { y: 0 }
              : isHovering
                ? { y: [0, 4.35, 0] }
                : { y: [0, 3.15, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1 : 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.09,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.ellipse
          cx={17}
          cy={13.3}
          rx={9}
          ry={2.6}
          stroke={`url(#${uid}-c4)`}
          strokeWidth={1.5}
          initial={{ y: 0 }}
          animate={
            frozen
              ? { y: 0 }
              : isHovering
                ? { y: [0, 5.8, 0] }
                : { y: [0, 4.2, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1 : 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.12,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.ellipse
          cx={17}
          cy={15}
          rx={9}
          ry={2.6}
          stroke={`url(#${uid}-c5)`}
          strokeWidth={1.5}
          initial={{ y: 0 }}
          animate={
            frozen
              ? { y: 0 }
              : isHovering
                ? { y: [0, 7.25, 0] }
                : { y: [0, 5.25, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1 : 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.15,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.ellipse
          cx={17}
          cy={16.7}
          rx={9}
          ry={2.6}
          stroke={`url(#${uid}-c6)`}
          strokeWidth={1.5}
          initial={{ y: 0 }}
          animate={
            frozen
              ? { y: 0 }
              : isHovering
                ? { y: [0, 8.7, 0] }
                : { y: [0, 6.3, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1 : 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.18,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.ellipse
          cx={17}
          cy={18.4}
          rx={9}
          ry={2.6}
          stroke={`url(#${uid}-c7)`}
          strokeWidth={1.5}
          initial={{ y: 0 }}
          animate={
            frozen
              ? { y: 0 }
              : isHovering
                ? { y: [0, 10.15, 0] }
                : { y: [0, 7.35, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1 : 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.21,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
        <motion.ellipse
          cx={17}
          cy={20.1}
          rx={9}
          ry={2.6}
          stroke={`url(#${uid}-c8)`}
          strokeWidth={1.5}
          initial={{ y: 0 }}
          animate={
            frozen
              ? { y: 0 }
              : isHovering
                ? { y: [0, 11.6, 0] }
                : { y: [0, 8.4, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1 : 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.24,
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        />
      </svg>
    </motion.div>
  );
}
