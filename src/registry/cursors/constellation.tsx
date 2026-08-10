"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
}

// Static mini-constellation used for gallery previews
const PREVIEW_STARS: Star[] = [
  { id: -1, x: 0, y: 0 },
  { id: -2, x: -14, y: -10 },
  { id: -3, x: 12, y: -16 },
  { id: -4, x: 16, y: 10 },
  { id: -5, x: -10, y: 14 },
];

export default function ConstellationCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  const [stars, setStars] = useState<Star[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (isStatic) return;
    setStars((prev) => [...prev.slice(-6), { id: idRef.current++, x, y }]);
  }, [x, y, isStatic]);

  const points = isStatic ? PREVIEW_STARS : stars;

  return (
    <>
      {/* Connecting lines */}
      <svg className="fixed top-0 left-0 w-full h-full pointer-events-none z-40">
        {points.slice(1).map((p, i) => {
          const prev = points[i];
          return (
            <line
              key={p.id}
              x1={prev.x}
              y1={prev.y}
              x2={p.x}
              y2={p.y}
              stroke="rgba(147,197,253,0.45)"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Trailing stars */}
      {points.slice(isStatic ? 0 : 1).map((p, i) => (
        <motion.div
          key={p.id}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-40 bg-sky-200"
          style={{
            x: p.x,
            y: p.y,
            translateX: "-50%",
            translateY: "-50%",
            width: 3,
            height: 3,
            boxShadow: "0 0 6px rgba(147,197,253,0.9)",
          }}
          initial={isStatic ? false : { opacity: 0.9, scale: 1 }}
          animate={
            isStatic ? { opacity: [0.3, 0.9, 0.3] } : { opacity: 0, scale: 0.4 }
          }
          transition={
            isStatic
              ? { duration: 1.8, repeat: Infinity, delay: i * 0.35 }
              : { duration: 0.7, ease: "easeOut" }
          }
        />
      ))}

      {/* Leading north star */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path
            d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
            fill="url(#constellationGrad)"
          />
          <defs>
            <linearGradient
              id="constellationGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </>
  );
}
