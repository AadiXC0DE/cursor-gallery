"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
  id: number;
}

const TRAIL = 12;

export default function RibbonCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  const [points, setPoints] = useState<Point[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (isStatic) return;
    setPoints((prev) => [
      ...prev.slice(-(TRAIL - 1)),
      { x, y, id: idRef.current++ },
    ]);
  }, [x, y, isStatic]);

  const path =
    points.length > 1
      ? points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ")
      : "";

  return (
    <>
      {/* Flowing silk ribbon */}
      {path && (
        <svg className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 overflow-visible">
          <defs>
            <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="55%" stopColor="#818cf8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
          <path
            d={path}
            fill="none"
            stroke="url(#ribbonGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {/* Leading jewel */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background: "linear-gradient(135deg, #c084fc, #818cf8)",
          boxShadow: "0 0 12px rgba(168,85,247,0.7)",
        }}
      />
    </>
  );
}
