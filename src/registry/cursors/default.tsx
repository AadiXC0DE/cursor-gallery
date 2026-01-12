"use client";

import { motion } from "framer-motion";

export default function DefaultCursor({
  x,
  y,
  isHovering,
}: {
  x: number;
  y: number;
  isHovering?: boolean;
}) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-50"
      animate={{
        scale: isHovering ? 1.5 : 1,
      }}
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #d946ef 100%)",
        boxShadow: isHovering
          ? "0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.5)"
          : "0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)",
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
}
