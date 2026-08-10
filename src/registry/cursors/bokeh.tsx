"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useEffect } from "react";

const ORBS = [
  {
    size: 26,
    color: "rgba(244,114,182,0.4)",
    stiffness: 60,
    offsetX: -16,
    offsetY: -12,
  },
  {
    size: 20,
    color: "rgba(103,232,249,0.45)",
    stiffness: 90,
    offsetX: 14,
    offsetY: -16,
  },
  {
    size: 16,
    color: "rgba(253,224,71,0.4)",
    stiffness: 120,
    offsetX: 18,
    offsetY: 12,
  },
  {
    size: 22,
    color: "rgba(167,139,250,0.4)",
    stiffness: 75,
    offsetX: -14,
    offsetY: 14,
  },
];

export default function BokehCursor({ x, y }: { x: number; y: number }) {
  const mx = useMotionValue(x);
  const my = useMotionValue(y);

  useEffect(() => {
    mx.set(x);
    my.set(y);
  }, [x, y, mx, my]);

  return (
    <>
      {ORBS.map((orb, i) => (
        <BokehOrb key={i} mx={mx} my={my} config={orb} />
      ))}
      {/* Crisp center */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-foreground pointer-events-none z-50"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}

function BokehOrb({
  mx,
  my,
  config,
}: {
  mx: MotionValue<number>;
  my: MotionValue<number>;
  config: (typeof ORBS)[number];
}) {
  const ox = useSpring(mx, { stiffness: config.stiffness, damping: 16 });
  const oy = useSpring(my, { stiffness: config.stiffness, damping: 16 });

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-40"
      style={{
        x: ox,
        y: oy,
        translateX: "-50%",
        translateY: "-50%",
        width: config.size,
        height: config.size,
        marginLeft: config.offsetX,
        marginTop: config.offsetY,
        background: `radial-gradient(circle, ${config.color} 0%, transparent 70%)`,
        filter: "blur(4px)",
      }}
    />
  );
}
