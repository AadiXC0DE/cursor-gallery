"use client";

import { motion } from "framer-motion";

export default function RadarCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      {/* Radar dish */}
      <div className="relative w-10 h-10 rounded-full border border-emerald-400/70 overflow-hidden shadow-[0_0_16px_rgba(52,211,153,0.35)]">
        {/* Grid ticks */}
        <div className="absolute inset-0 rounded-full border border-emerald-400/20 scale-[0.66]" />
        <div className="absolute inset-0 rounded-full border border-emerald-400/20 scale-[0.33]" />
        {/* Sweeping beam */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(52,211,153,0.55), transparent 70deg)",
          }}
          animate={isStatic ? {} : { rotate: 360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Ping ring */}
      {!isStatic && (
        <motion.div
          className="absolute inset-0 rounded-full border border-emerald-400/60"
          animate={{ scale: [1, 2.1], opacity: [0.8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      {/* Blip */}
      <div className="absolute left-1/2 top-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
    </motion.div>
  );
}
