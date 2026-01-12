"use client";
import { motion } from "framer-motion";

export default function SquareCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 border-2 border-violet-500 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      whileHover={{ borderRadius: "4px" }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}
