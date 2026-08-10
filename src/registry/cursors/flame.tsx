"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Ember {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  drift: number;
}

export default function FlameCursor({
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
  const [embers, setEmbers] = useState<Ember[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (isStatic) return;
    const interval = setInterval(() => {
      setEmbers((prev) => [
        ...prev.slice(-5),
        {
          id: idRef.current++,
          x: x + (Math.random() - 0.5) * 10,
          y: y - 8,
          size: Math.random() * 3 + 1.5,
          color: Math.random() > 0.4 ? "#fb923c" : "#fbbf24",
          drift: (Math.random() - 0.5) * 14,
        },
      ]);
    }, 120);
    return () => clearInterval(interval);
  }, [x, y, isStatic]);

  return (
    <>
      {/* Rising embers */}
      {embers.map((e) => (
        <motion.div
          key={e.id}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-40"
          style={{
            x: e.x,
            y: e.y,
            translateX: "-50%",
            translateY: "-50%",
            width: e.size,
            height: e.size,
            background: e.color,
            boxShadow: `0 0 6px ${e.color}`,
          }}
          initial={{ opacity: 0.9 }}
          animate={{
            opacity: 0,
            y: e.y - 38,
            x: e.x + e.drift,
          }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        />
      ))}

      {/* Warm ground glow */}
      <motion.div
        className="fixed top-0 left-0 w-[70px] h-[70px] rounded-full pointer-events-none z-40"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.28) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
        animate={isStatic ? {} : { opacity: [0.7, 1, 0.75, 1, 0.7] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          style={{ transformOrigin: "50% 90%" }}
          animate={{
            scale: isHovering ? 1.15 : 1,
            ...(isStatic
              ? {}
              : {
                  scaleY: [1, 1.05, 0.96, 1.03, 1],
                  skewX: [0, 1.6, -1.4, 0.8, 0],
                }),
          }}
          transition={{
            scale: { type: "spring", stiffness: 350, damping: 18 },
            scaleY: { duration: 1.15, repeat: Infinity, ease: "easeInOut" },
            skewX: { duration: 1.15, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg
            width="26"
            height="34"
            viewBox="0 0 24 32"
            style={{
              filter: "drop-shadow(0 0 10px rgba(249,115,22,0.5))",
            }}
          >
            <defs>
              <linearGradient id="flameOuter" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="55%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
              <linearGradient id="flameMid" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>

            {/* Outer flame */}
            <path
              d="M12 31 C6.5 31 2.5 26.5 2.5 20 C2.5 14.5 6 11.5 8 6.5 C9.2 9.5 10.5 10.8 11.8 11.5 C11 7.5 12.5 3.5 15.5 1 C15 5 17 7.5 18.8 10 C21 13 21.5 16.5 21.5 20 C21.5 26.5 17.5 31 12 31 Z"
              fill="url(#flameOuter)"
            />
            {/* Mid flame */}
            <path
              d="M12 28.5 C8.7 28.5 6.2 25.6 6.2 21.5 C6.2 18 8.4 15.6 10.2 12.2 C11 14.4 12 15.3 13.1 15.8 C12.6 13.2 14 10.6 15.9 9 C15.7 11.6 16.9 13.6 17.8 15.6 C18.9 18.2 17.9 21.5 17.9 21.5 C17.7 25.6 15.3 28.5 12 28.5 Z"
              fill="url(#flameMid)"
              opacity="0.95"
            />
            {/* White-hot core */}
            <path
              d="M12 26 C10.1 26 8.7 24.2 8.7 21.6 C8.7 19 10.2 17.3 12 14.6 C13.8 17.3 15.3 19 15.3 21.6 C15.3 24.2 13.9 26 12 26 Z"
              fill="#fef3c7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
}
