"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function HaloCursor({
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

  // The ring trails behind with a buttery spring
  const ringX = useSpring(mx, { stiffness: 260, damping: 22, mass: 0.7 });
  const ringY = useSpring(my, { stiffness: 260, damping: 22, mass: 0.7 });

  return (
    <>
      {/* Lagging halo ring — adapts to light/dark via theme tokens */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-40 border-[1.5px] border-foreground/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 34,
          height: 34,
        }}
        animate={{
          scale: isHovering ? 1.55 : 1,
          opacity: isHovering ? 1 : 0.65,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 20 }}
      />
      {/* Precise center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-foreground pointer-events-none z-50"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
