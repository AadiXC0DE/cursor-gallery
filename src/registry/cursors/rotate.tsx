"use client";
import { motion } from "framer-motion";

export default function RotateCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    >
      <div className="relative w-6 h-6">
        <div className="absolute inset-0 border-2 border-t-violet-500 border-r-fuchsia-500 border-b-pink-500 border-l-purple-500 rounded" />
        <div className="absolute inset-1 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-sm" />
      </div>
    </motion.div>
  );
}
