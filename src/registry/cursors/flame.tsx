"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface FlameParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export default function FlameCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  const [particles, setParticles] = useState<FlameParticle[]>([]);
  const idCounter = useRef(0);

  useEffect(() => {
    if (isStatic) return;
    const interval = setInterval(() => {
      const newParticle = {
        id: idCounter.current++,
        x: x + (Math.random() - 0.5) * 12,
        y: y,
        size: Math.random() * 8 + 4,
        color: Math.random() > 0.3 ? "#f97316" : "#fbbf24", // orange or yellow
      };
      setParticles((prev) => [...prev.slice(-8), newParticle]); // Reduced from 12 to 8
    }, 70); // Increased from 50ms to 70ms
    return () => clearInterval(interval);
  }, [x, y, isStatic]);

  return (
    <>
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
            style={{
              width: p.size,
              height: p.size * 1.4,
              x: p.x,
              y: p.y,
              translateX: "-50%",
              translateY: "-50%",
              background: `radial-gradient(circle, ${p.color}, transparent)`,
              filter: "blur(2px)",
            }}
            initial={{ opacity: 1, scale: 1, y: p.y }}
            animate={{ opacity: 0, scale: 0.2, y: p.y - 40 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <svg
          width="24"
          height="32"
          viewBox="0 0 24 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 32C18.6274 32 24 26.6274 24 20C24 13.3726 12 0 12 0C12 0 0 13.3726 0 20C0 26.6274 5.37258 32 12 32Z"
            fill="url(#flame-grad)"
          />
          <defs>
            <radialGradient
              id="flame-grad"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(12 20) rotate(90) scale(12 12)"
            >
              <stop offset="0" stopColor="#fbbf24" />
              <stop offset="0.6" stopColor="#f97316" />
              <stop offset="1" stopColor="#dc2626" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
    </>
  );
}
