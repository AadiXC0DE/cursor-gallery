"use client";
import { motion } from "framer-motion";

export default function NeonCursor({ x, y }: { x: number; y: number }) {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background: "#0ff",
          boxShadow:
            "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff, 0 0 80px #0ff",
        }}
        animate={{
          boxShadow: [
            "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff, 0 0 80px #0ff",
            "0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 120px #0ff",
            "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff, 0 0 80px #0ff",
          ],
        }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </>
  );
}
