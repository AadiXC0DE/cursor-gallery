"use client";
import { motion } from "framer-motion";

export default function AtomCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center translate-x-[-50%] translate-y-[-50%]"
      style={{ x, y }}
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Nucleus */}
        <div className="absolute w-3 h-3 bg-gradient-to-br from-violet-500 to-indigo-700 rounded-full shadow-[0_0_10px_#8b5cf6] z-10" />

        {/* Orbits & Electrons */}
        {[0, 60, 120].map((rotation, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{ rotate: `${rotation}deg` }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Elliptical Orbit Path */}
              <ellipse
                cx="50"
                cy="50"
                rx="45"
                ry="15"
                fill="none"
                stroke="currentColor"
                className="text-violet-400/30"
                strokeWidth="1.5"
              />

              {/* Moving Electron */}
              <motion.circle
                r="3"
                fill="#a78bfa"
                animate={{
                  cx: [50 + 45, 50, 50 - 45, 50, 50 + 45],
                  cy: [50, 50 + 15, 50, 50 - 15, 50],
                  scale: [1, 1.2, 1, 0.8, 1],
                  opacity: [1, 1, 1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.6,
                }}
              />
            </svg>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
