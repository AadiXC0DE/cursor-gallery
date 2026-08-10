"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  rotate: number;
  drift: number;
}

export default function StardustCursor({
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
    setStars((prev) => [
      ...prev.slice(-7),
      {
        id: idRef.current++,
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        size: Math.random() * 5 + 4,
        rotate: Math.random() * 90,
        drift: (Math.random() - 0.5) * 16,
      },
    ]);
  }, [x, y, isStatic]);

  return (
    <>
      {/* Golden stars that tumble and fade */}
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="fixed top-0 left-0 pointer-events-none z-40"
          style={{ x: s.x, y: s.y, translateX: "-50%", translateY: "-50%" }}
          initial={{ opacity: 1, rotate: s.rotate, scale: 1 }}
          animate={{
            opacity: 0,
            y: s.y + 20,
            x: s.x + s.drift,
            rotate: s.rotate + 120,
            scale: 0.3,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 24 24">
            <path
              d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z"
              fill="#fde68a"
            />
          </svg>
        </motion.div>
      ))}

      {/* Radiant core */}
      <motion.div
        className="fixed top-0 left-0 w-3.5 h-3.5 rounded-full pointer-events-none z-50"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, #fffbeb 0%, #fbbf24 100%)",
          boxShadow:
            "0 0 14px rgba(251,191,36,0.9), 0 0 32px rgba(251,191,36,0.45)",
        }}
      />
    </>
  );
}
