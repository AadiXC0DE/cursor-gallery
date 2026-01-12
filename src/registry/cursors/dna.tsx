"use client";
import { motion } from "framer-motion";

export default function DNACursor({ x, y }: { x: number; y: number }) {
  const strandPoints = 6;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center p-4 h-24"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative w-8 h-20 flex flex-col justify-between">
        {[...Array(strandPoints)].map((_, i) => (
          <div key={i} className="relative w-full h-4">
            {/* Connecting Bridge */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-400/30"
              animate={{
                scaleX: [1, 0, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />

            {/* Left Strand Node */}
            <motion.div
              className="absolute top-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] z-10"
              animate={{
                x: ["0%", "100%", "0%"],
                scale: [1, 0.7, 1],
                z: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              style={{ left: "-5%" }}
            />

            {/* Right Strand Node */}
            <motion.div
              className="absolute top-1/2 w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_8px_#ec4899] z-10"
              animate={{
                x: ["100%", "0%", "100%"],
                scale: [0.7, 1, 0.7],
                z: [-10, 0, -10],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              style={{ right: "-5%" }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
