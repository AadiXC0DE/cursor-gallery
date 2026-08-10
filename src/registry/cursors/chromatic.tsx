"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function ChromaticCursor({ x, y }: { x: number; y: number }) {
  const mx = useMotionValue(x);
  const my = useMotionValue(y);

  useEffect(() => {
    mx.set(x);
    my.set(y);
  }, [x, y, mx, my]);

  // Two color ghosts trail at different speeds — chromatic aberration
  const cyanX = useSpring(mx, { stiffness: 320, damping: 24, mass: 0.5 });
  const cyanY = useSpring(my, { stiffness: 320, damping: 24, mass: 0.5 });
  const pinkX = useSpring(mx, { stiffness: 130, damping: 16, mass: 0.8 });
  const pinkY = useSpring(my, { stiffness: 130, damping: 16, mass: 0.8 });

  return (
    <>
      {/* Pink ghost (slowest) */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-40 bg-pink-400/70 blur-[1px]"
        style={{ x: pinkX, y: pinkY, translateX: "-50%", translateY: "-50%" }}
      />
      {/* Cyan ghost */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-40 bg-cyan-400/70 blur-[1px]"
        style={{ x: cyanX, y: cyanY, translateX: "-50%", translateY: "-50%" }}
      />
      {/* Primary dot */}
      <motion.div
        className="fixed top-0 left-0 w-3.5 h-3.5 rounded-full pointer-events-none z-50 bg-foreground"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
