"use client";
import { motion } from "framer-motion";

export default function CameraCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative drop-shadow-lg">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Camera Body */}
          <path
            d="M20 7H16.83L15.17 5H8.83L7.17 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z"
            fill="#1e293b"
            stroke="#334155"
            strokeWidth="1.5"
          />

          {/* Lens */}
          <circle
            cx="12"
            cy="14"
            r="5"
            fill="#0f172a"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />
          <motion.circle
            cx="12"
            cy="14"
            r="2"
            fill="#38bdf8"
            opacity="0.5"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Flash/Rec Dot - Positioned properly */}
          <circle cx="19" cy="10" r="1.5" fill="#ef4444">
            <animate
              attributeName="opacity"
              values="1;0.2;1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Flash Unit */}
          <rect x="16" y="8" width="3" height="2" rx="0.5" fill="#94a3b8" />
        </svg>
      </div>
    </motion.div>
  );
}
