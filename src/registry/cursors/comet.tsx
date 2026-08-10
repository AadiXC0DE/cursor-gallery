"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CometCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  const [angle, setAngle] = useState(-135);
  const [speed, setSpeed] = useState(0);
  const prevRef = useRef({ x, y });

  useEffect(() => {
    const dx = x - prevRef.current.x;
    const dy = y - prevRef.current.y;
    prevRef.current = { x, y };
    const s = Math.hypot(dx, dy);
    if (s > 0.5) {
      // Tail points opposite to the direction of travel
      setAngle((Math.atan2(dy, dx) * 180) / Math.PI + 180);
    }
    setSpeed(s);
  }, [x, y]);

  const energy = Math.min(speed * 0.05, 1.5);

  return (
    <>
      {/* Tail — rotates around its right tip which sits on the cursor point */}
      <motion.div
        className="fixed top-0 left-0 h-[7px] w-14 rounded-full pointer-events-none z-40"
        style={{
          x,
          y,
          translateX: "-100%",
          translateY: "-50%",
          transformOrigin: "right center",
          background:
            "linear-gradient(to left, rgba(251,146,60,0.95), rgba(251,146,60,0.35) 55%, transparent)",
          filter: "blur(1.5px)",
        }}
        animate={{
          rotate: angle,
          scaleX: isStatic ? 0.7 : 0.35 + energy,
          opacity: isStatic ? 0.8 : 0.35 + Math.min(speed * 0.04, 0.65),
        }}
        transition={{ type: "spring", stiffness: 240, damping: 24 }}
      />
      {/* White-hot head */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, #fff7ed 0%, #fdba74 45%, #ea580c 100%)",
          boxShadow:
            "0 0 18px rgba(251,146,60,0.85), 0 0 44px rgba(251,146,60,0.4)",
        }}
      />
    </>
  );
}
