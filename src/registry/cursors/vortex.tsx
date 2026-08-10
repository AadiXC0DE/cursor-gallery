"use client";

import { motion } from "framer-motion";

export default function VortexCursor({
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
      {/* Spinning swirl */}
      <motion.div
        className="w-9 h-9 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(168,85,247,0.85) 90deg, transparent 180deg, rgba(59,130,246,0.85) 270deg, transparent 360deg)",
          filter: "blur(1px)",
          maskImage:
            "radial-gradient(circle, transparent 28%, black 45%, black 78%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 28%, black 45%, black 78%, transparent 100%)",
        }}
        animate={isStatic ? {} : { rotate: -360 }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
      />
      {/* Event horizon */}
      <div className="absolute left-1/2 top-1/2 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_rgba(168,85,247,0.9),0_0_30px_rgba(59,130,246,0.5)]" />
    </motion.div>
  );
}
