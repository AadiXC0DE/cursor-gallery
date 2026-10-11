"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function BounceCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const frozen = isStatic || reducedMotion;
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      {/* The bob lives on an inner layer so pointer moves never restart it */}
      <motion.div
        className="w-5 h-5 rounded-full"
        style={{
          background: "linear-gradient(135deg, #10b981, #34d399)",
          boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)",
        }}
        initial={{ y: 0 }}
        animate={frozen ? { y: 0 } : { y: [-5, 5, -5] }}
        transition={
          frozen
            ? { duration: 0 }
            : { duration: 0.4, repeat: Infinity, ease: "easeInOut" }
        }
      />
    </motion.div>
  );
}
