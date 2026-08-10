"use client";

import { motion } from "framer-motion";

export default function LaserCursor({
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
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y }}
    >
      {/* Crosshair lines */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[26px] h-px bg-red-500/70" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[26px] w-px bg-red-500/70" />

      {/* Expanding ping ring */}
      {!isStatic && (
        <motion.div
          className="absolute left-1/2 top-1/2 w-8 h-8 rounded-full border border-red-500/60"
          style={{ translateX: "-50%", translateY: "-50%" }}
          animate={{ scale: [0.4, 1.4], opacity: [0.9, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      {/* Laser dot */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-red-500"
        style={{
          translateX: "-50%",
          translateY: "-50%",
          boxShadow:
            "0 0 10px rgba(239,68,68,0.9), 0 0 26px rgba(239,68,68,0.55), 0 0 48px rgba(239,68,68,0.3)",
        }}
        animate={{ scale: isHovering ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 22 }}
      />
    </motion.div>
  );
}
