"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
  id: number;
}

const TRAIL = 14;

export default function InkCursor({
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

  return (
    <>
      {/* Calligraphy stroke — tapered segments between recent points */}
      <svg className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 overflow-visible">
        {points.slice(1).map((p, i) => {
          const prev = points[i];
          const t = (i + 1) / points.length; // 0 (old) → 1 (new)
          return (
            <line
              key={p.id}
              x1={prev.x}
              y1={prev.y}
              x2={p.x}
              y2={p.y}
              stroke="currentColor"
              strokeWidth={0.8 + t * 4.2}
              strokeLinecap="round"
              opacity={0.12 + t * 0.55}
            />
          );
        })}
      </svg>

      {/* Brush tip */}
      <motion.div
        className="fixed top-0 left-0 w-[7px] h-[7px] rounded-full pointer-events-none z-50 bg-foreground"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
