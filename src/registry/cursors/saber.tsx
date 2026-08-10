"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SaberCursor({
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
  const [angle, setAngle] = useState(-45);
  const prevRef = useRef({ x, y });

  useEffect(() => {
    const dx = x - prevRef.current.x;
    const dy = y - prevRef.current.y;
    prevRef.current = { x, y };
    if (Math.hypot(dx, dy) > 0.5) {
      setAngle((Math.atan2(dy, dx) * 180) / Math.PI);
    }
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y }}
    >
      {/* Blade assembly — hilt sits on the cursor point, blade extends out */}
      <motion.div
        className="absolute left-0 top-0 flex items-center"
        animate={{ rotate: angle }}
        transition={{ type: "spring", stiffness: 230, damping: 21 }}
        style={{ transformOrigin: "4px 0px", translateY: "-50%" }}
      >
        {/* Hilt */}
        <div className="relative w-[10px] h-[7px] rounded-[2px] bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 shadow-md">
          <div className="absolute left-[2px] top-0 w-[1px] h-full bg-zinc-800/60" />
          <div className="absolute left-[5px] top-0 w-[1px] h-full bg-zinc-800/60" />
          <div className="absolute right-[1.5px] top-[2px] w-[2px] h-[3px] rounded-[1px] bg-red-500/80" />
        </div>

        {/* Blade */}
        <motion.div
          className="relative h-[6px] w-[46px] rounded-full"
          animate={
            isStatic ? {} : { opacity: [0.92, 1, 0.9, 1], scaleY: [1, 1.12, 1] }
          }
          transition={{ duration: 1.4, repeat: Infinity }}
          style={{
            background:
              "linear-gradient(to right, rgba(103,232,249,0.9), rgba(103,232,249,0.55) 70%, transparent)",
            boxShadow: isHovering
              ? "0 0 14px rgba(34,211,238,1), 0 0 34px rgba(34,211,238,0.6)"
              : "0 0 10px rgba(34,211,238,0.85), 0 0 24px rgba(34,211,238,0.45)",
          }}
        >
          {/* White-hot core */}
          <div className="absolute inset-y-[1.5px] left-0 right-[6px] rounded-full bg-white/95" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
