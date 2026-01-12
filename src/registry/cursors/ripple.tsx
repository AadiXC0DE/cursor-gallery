"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function RippleCursor({ x, y }: { x: number; y: number }) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const idCounter = useRef(0);

  useEffect(() => {
    const dist = Math.sqrt((x - lastPos.x) ** 2 + (y - lastPos.y) ** 2);
    if (dist > 30) {
      setRipples((prev) => [
        ...prev.slice(-5),
        { id: idCounter.current++, x, y },
      ]);
      setLastPos({ x, y });
    }
  }, [x, y, lastPos]);

  return (
    <>
      {ripples.map((r) => (
        <motion.div
          key={r.id}
          className="fixed top-0 left-0 rounded-full border-2 border-cyan-400 pointer-events-none"
          style={{ x: r.x, y: r.y, translateX: "-50%", translateY: "-50%" }}
          initial={{ width: 10, height: 10, opacity: 0.8 }}
          animate={{ width: 80, height: 80, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      ))}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
          boxShadow: "0 0 15px rgba(6, 182, 212, 0.5)",
        }}
      />
    </>
  );
}
