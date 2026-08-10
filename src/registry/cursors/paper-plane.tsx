"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function PaperPlaneCursor({ x, y }: { x: number; y: number }) {
  const [angle, setAngle] = useState(-45);
  const prevRef = useRef({ x, y });

  useEffect(() => {
    const dx = x - prevRef.current.x;
    const dy = y - prevRef.current.y;
    prevRef.current = { x, y };
    if (Math.hypot(dx, dy) > 0.5) {
      // Plane artwork points right at 0deg
      setAngle((Math.atan2(dy, dx) * 180) / Math.PI);
    }
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{ rotate: angle }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        style={{
          filter: "drop-shadow(0 0 10px rgba(56,189,248,0.45))",
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24">
          <path
            d="M22.5 1.5L1.8 9.7c-.9.35-.8 1.6.15 1.85l7.4 2.1 2.1 7.4c.25.95 1.5 1.05 1.85.15l8.2-20.7c.35-.9-.5-1.75-1-1Z"
            fill="url(#paperPlaneGrad)"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="0.6"
            strokeLinejoin="round"
          />
          <path
            d="M22.5 1.5L9.35 13.65"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="0.7"
            fill="none"
          />
          <defs>
            <linearGradient
              id="paperPlaneGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
}
