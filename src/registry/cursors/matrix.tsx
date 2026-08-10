"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const GLYPHS = "アカサタナハマヤラワガザダバパ0123456789$#+*<>";

interface Drop {
  id: number;
  char: string;
  x: number;
  y: number;
}

export default function MatrixCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  const [drops, setDrops] = useState<Drop[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (isStatic) return;
    const interval = setInterval(() => {
      setDrops((prev) => [
        ...prev.slice(-9),
        {
          id: idRef.current++,
          char: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          x: x + (Math.random() - 0.5) * 28,
          y: y - 6,
        },
      ]);
    }, 90);
    return () => clearInterval(interval);
  }, [x, y, isStatic]);

  return (
    <>
      {/* Falling glyphs */}
      {drops.map((d) => (
        <motion.span
          key={d.id}
          className="fixed top-0 left-0 pointer-events-none z-40 font-mono text-[11px] font-bold text-emerald-400"
          style={{
            x: d.x,
            y: d.y,
            translateX: "-50%",
            translateY: "-50%",
            textShadow: "0 0 6px rgba(52,211,153,0.8)",
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, y: d.y + 54 }}
          transition={{ duration: 0.75, ease: "easeIn" }}
        />
      ))}

      {/* Lead glyph core */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 font-mono text-sm font-black text-emerald-300"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          textShadow:
            "0 0 8px rgba(52,211,153,0.9), 0 0 20px rgba(52,211,153,0.5)",
        }}
      >
        {isStatic ? "ア" : "0"}
      </motion.div>
    </>
  );
}
