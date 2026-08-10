"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  drift: number;
  rotate: number;
}

export default function SakuraCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  const [petals, setPetals] = useState<Petal[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (isStatic) return;
    const interval = setInterval(() => {
      setPetals((prev) => [
        ...prev.slice(-6),
        {
          id: idRef.current++,
          x: x + (Math.random() - 0.5) * 36,
          y: y - 10,
          size: Math.random() * 4 + 4,
          drift: (Math.random() - 0.5) * 30,
          rotate: Math.random() * 180 - 90,
        },
      ]);
    }, 150);
    return () => clearInterval(interval);
  }, [x, y, isStatic]);

  return (
    <>
      {/* Drifting petals */}
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="fixed top-0 left-0 pointer-events-none z-40"
          style={{
            x: p.x,
            y: p.y,
            width: p.size,
            height: p.size * 0.8,
            borderRadius: "80% 20% 80% 20%",
            background: "linear-gradient(135deg, #fbcfe8, #f9a8d4)",
            boxShadow: "0 0 4px rgba(249,168,212,0.5)",
          }}
          initial={{ opacity: 0.95, rotate: p.rotate }}
          animate={{
            opacity: 0,
            y: p.y + 44,
            x: p.x + p.drift,
            rotate: p.rotate + 160,
          }}
          transition={{ duration: 1.4, ease: "easeIn" }}
        />
      ))}

      {/* Heart of the blossom */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          style={{ filter: "drop-shadow(0 0 6px rgba(244,114,182,0.6))" }}
        >
          {/* Five simple blossom petals */}
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse
              key={deg}
              cx="12"
              cy="6.6"
              rx="2.6"
              ry="4.2"
              fill="#f9a8d4"
              stroke="#f472b6"
              strokeWidth="0.5"
              transform={`rotate(${deg} 12 12)`}
            />
          ))}
          <circle cx="12" cy="12" r="2.1" fill="#fde047" />
        </svg>
      </motion.div>
    </>
  );
}
