"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Ember {
  id: number;
  x: number;
  y: number;
  size: number;
  drift: number;
}

export default function SkullCursor({
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
        ...prev.slice(-4),
        {
          id: idRef.current++,
          x: x + (Math.random() - 0.5) * 14,
          y: y - 6,
          size: Math.random() * 2.5 + 1.5,
          drift: (Math.random() - 0.5) * 10,
        },
      ]);
    }, 160);
    return () => clearInterval(interval);
  }, [x, y, isStatic]);

  return (
    <>
      {/* Rising embers */}
      {embers.map((e) => (
        <motion.div
          key={e.id}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-40 bg-orange-400"
          style={{
            x: e.x,
            y: e.y,
            translateX: "-50%",
            translateY: "-50%",
            width: e.size,
            height: e.size,
            boxShadow: "0 0 6px rgba(251,146,60,0.9)",
          }}
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 0, y: e.y - 34, x: e.x + e.drift }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      ))}

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ scale: isHovering ? 1.08 : 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 18 }}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 32 32"
            style={{
              filter: "drop-shadow(0 0 10px rgba(15,23,42,0.55))",
            }}
          >
            <defs>
              <linearGradient id="skullBone" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f1f5f9" />
                <stop offset="60%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>

            {/* Cranium + jaw */}
            <path
              d="M16 3.5 C10.2 3.5 5.8 7.9 5.8 13.4 C5.8 16.4 6.9 18.9 8.7 20.5 L9.2 24.8 C9.3 26 10.3 27 11.5 27 L20.5 27 C21.7 27 22.7 26 22.8 24.8 L23.3 20.5 C25.1 18.9 26.2 16.4 26.2 13.4 C26.2 7.9 21.8 3.5 16 3.5 Z"
              fill="url(#skullBone)"
              stroke="#64748b"
              strokeWidth="0.75"
              strokeLinejoin="round"
            />

            {/* Cracks */}
            <path
              d="M13 5.5 L14.2 8.2 L13.4 9.8"
              stroke="#94a3b8"
              strokeWidth="0.6"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M20.5 6 L19.8 8.4"
              stroke="#94a3b8"
              strokeWidth="0.6"
              strokeLinecap="round"
              fill="none"
            />

            {/* Eye sockets */}
            <ellipse cx="11.8" cy="14.2" rx="2.9" ry="3.2" fill="#0f172a" />
            <ellipse cx="20.2" cy="14.2" rx="2.9" ry="3.2" fill="#0f172a" />

            {/* Ember gaze */}
            <motion.circle
              cx="11.8"
              cy="14.6"
              r="1.25"
              fill="#fb923c"
              style={{ filter: "drop-shadow(0 0 3px #f97316)" }}
              animate={
                isStatic
                  ? {}
                  : {
                      opacity: [1, 0.35, 1],
                      r: isHovering ? [1.25, 1.7, 1.25] : [1.25, 1, 1.25],
                    }
              }
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx="20.2"
              cy="14.6"
              r="1.25"
              fill="#fb923c"
              style={{ filter: "drop-shadow(0 0 3px #f97316)" }}
              animate={
                isStatic
                  ? {}
                  : {
                      opacity: [1, 0.35, 1],
                      r: isHovering ? [1.25, 1.7, 1.25] : [1.25, 1, 1.25],
                    }
              }
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.15,
              }}
            />

            {/* Nose cavity */}
            <path d="M16 17.8 L14.8 20.4 L17.2 20.4 Z" fill="#0f172a" />

            {/* Jaw line + teeth */}
            <path
              d="M9.6 21.6 L22.4 21.6"
              stroke="#64748b"
              strokeWidth="0.6"
              opacity="0.6"
            />
            <path
              d="M12.4 21.6 L12.4 26.3 M16 21.6 L16 26.7 M19.6 21.6 L19.6 26.3"
              stroke="#64748b"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
}
