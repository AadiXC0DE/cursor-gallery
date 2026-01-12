"use client";

import { motion } from "framer-motion";

export default function GradientBlobCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-12 h-12 bg-gradient-to-tr from-purple-500 to-orange-500 rounded-full pointer-events-none z-50 opacity-80 blur-[20px]"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
