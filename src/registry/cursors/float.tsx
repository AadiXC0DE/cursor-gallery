"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function FloatCursor({
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
      {/* The drift lives on an inner layer so pointer moves never restart it */}
      <motion.div
        className="w-5 h-5 rounded-full"
        style={{
          background: "linear-gradient(135deg, #06b6d4, #0891b2)",
          boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
        }}
        initial={{ x: 0, y: 0 }}
        animate={frozen ? { x: 0, y: 0 } : { x: [-3, 3, -3], y: [-3, 3, -3] }}
        transition={
          frozen
            ? { duration: 0 }
            : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }
      />
    </motion.div>
  );
}
