"use client";

import { motion } from "framer-motion";

export default function AuroraCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  return (
    <>
      {/* Flowing aurora wash */}
      <motion.div
        className="fixed top-0 left-0 w-[160px] h-[160px] rounded-full pointer-events-none z-40"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "conic-gradient(from 0deg, rgba(52,211,153,0.35), rgba(34,211,238,0.35), rgba(167,139,250,0.4), rgba(52,211,153,0.35))",
          filter: "blur(30px)",
        }}
        animate={isStatic ? {} : { rotate: 360, scale: [1, 1.15, 1] }}
        transition={{
          rotate: { duration: 7, repeat: Infinity, ease: "linear" },
          scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      {/* Core dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background: "linear-gradient(135deg, #34d399 0%, #22d3ee 100%)",
          boxShadow:
            "0 0 20px rgba(52,211,153,0.7), 0 0 44px rgba(34,211,238,0.4)",
        }}
      />
    </>
  );
}
