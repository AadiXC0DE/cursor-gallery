"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function GooCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  const [angle, setAngle] = useState(0);
  const [stretch, setStretch] = useState(0);
  const prevRef = useRef({ x, y });

  useEffect(() => {
    const dx = x - prevRef.current.x;
    const dy = y - prevRef.current.y;
    prevRef.current = { x, y };
    const s = Math.hypot(dx, dy);
    if (s > 0.5) setAngle((Math.atan2(dy, dx) * 180) / Math.PI);
    setStretch(s);
  }, [x, y]);

  const pull = Math.min(stretch * 0.035, 1.3);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      {/* Elastic blob — stretches along the direction of travel */}
      <motion.div
        className="w-6 h-6 rounded-full"
        style={{
          background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
          boxShadow:
            "0 0 20px rgba(168,85,247,0.55), 0 0 44px rgba(236,72,153,0.3)",
          filter: "blur(0.5px)",
        }}
        animate={{
          rotate: angle,
          scaleX: isStatic ? 1 : 1 + pull,
          scaleY: isStatic ? 1 : 1 - pull * 0.35,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 16 }}
      />
      {/* Dense core */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-white/90"
        style={{ translateX: "-50%", translateY: "-50%" }}
      />
    </motion.div>
  );
}
