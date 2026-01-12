"use client";
import { motion } from "framer-motion";

export default function BreatheCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, #8b5cf6 0%, #6366f1 50%, #4f46e5 100%)",
        boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
      }}
      animate={{
        width: [16, 24, 16],
        height: [16, 24, 16],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
