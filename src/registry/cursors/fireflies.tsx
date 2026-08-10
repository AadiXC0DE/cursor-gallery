"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useEffect } from "react";

const FLIES = [
  {
    stiffness: 110,
    damping: 14,
    size: 7,
    flicker: 1.6,
    offsetX: 0,
    offsetY: 0,
  },
  {
    stiffness: 70,
    damping: 12,
    size: 5,
    flicker: 2.2,
    offsetX: 10,
    offsetY: -8,
  },
  {
    stiffness: 50,
    damping: 10,
    size: 4,
    flicker: 1.3,
    offsetX: -9,
    offsetY: 9,
  },
];

export default function FirefliesCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  const mx = useMotionValue(x);
  const my = useMotionValue(y);

  useEffect(() => {
    mx.set(x);
    my.set(y);
  }, [x, y, mx, my]);

  return (
    <>
      {FLIES.map((fly, i) => (
        <Firefly key={i} mx={mx} my={my} config={fly} isStatic={isStatic} />
      ))}
    </>
  );
}

function Firefly({
  mx,
  my,
  config,
  isStatic,
}: {
  mx: MotionValue<number>;
  my: MotionValue<number>;
  config: (typeof FLIES)[number];
  isStatic?: boolean;
}) {
  const fx = useSpring(mx, {
    stiffness: config.stiffness,
    damping: config.damping,
  });
  const fy = useSpring(my, {
    stiffness: config.stiffness,
    damping: config.damping,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      style={{
        x: fx,
        y: fy,
        translateX: "-50%",
        translateY: "-50%",
        width: config.size,
        height: config.size,
        marginLeft: config.offsetX,
        marginTop: config.offsetY,
        background: "#fde68a",
        boxShadow:
          "0 0 10px rgba(253,230,138,0.9), 0 0 24px rgba(251,191,36,0.5)",
      }}
      animate={isStatic ? {} : { opacity: [0.35, 1, 0.5, 1, 0.35] }}
      transition={{
        duration: config.flicker,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
