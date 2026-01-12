"use client";
import { motion } from "framer-motion";

export default function MagnetCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative w-8 h-8">
        <motion.div
          className="absolute inset-0 border-2 border-red-500 rounded-t-full"
          style={{ borderBottom: "none", height: "50%" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 border-2 border-blue-500 rounded-b-full"
          style={{ borderTop: "none", height: "50%" }}
        />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
      </div>
    </motion.div>
  );
}
