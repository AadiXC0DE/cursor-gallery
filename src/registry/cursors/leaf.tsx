"use client";
import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function LeafCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const frozen = isStatic || reducedMotion;
  const uid = useId().replace(/[^a-zA-Z0-9-]/g, "");
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      {/* The sway lives on an inner layer so pointer moves never restart it */}
      <motion.div
        initial={{ rotate: 0, y: 0 }}
        animate={
          frozen
            ? { rotate: 0, y: 0 }
            : { rotate: [-10, 10, -10], y: [-3, 3, -3] }
        }
        transition={
          frozen
            ? { duration: 0 }
            : { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"
            fill={`url(#${uid}-leaf)`}
          />
          <defs>
            <linearGradient
              id={`${uid}-leaf`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
}
