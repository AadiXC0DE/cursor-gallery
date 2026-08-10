"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function SpotlightCursor({
  x,
  y,
  isHovering,
}: {
  x: number;
  y: number;
  isHovering?: boolean;
}) {
  const mx = useMotionValue(x);
  const my = useMotionValue(y);

  useEffect(() => {
    mx.set(x);
    my.set(y);
  }, [x, y, mx, my]);

  // The light pool drifts after the cursor like a real flashlight
  const glowX = useSpring(mx, { stiffness: 110, damping: 18, mass: 0.9 });
  const glowY = useSpring(my, { stiffness: 110, damping: 18, mass: 0.9 });

  return (
    <>
      {/* Light pool */}
      <motion.div
        className="fixed top-0 left-0 w-[340px] h-[340px] rounded-full pointer-events-none z-40 bg-[radial-gradient(circle,rgba(0,0,0,0.07)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.04)_40%,transparent_70%)]"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Focus ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-zinc-400/80 dark:border-white/80 pointer-events-none z-50"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: isHovering ? 1.45 : 1,
          opacity: isHovering ? 1 : 0.75,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
      />
      {/* Center pip */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-zinc-600 dark:bg-white pointer-events-none z-50"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
