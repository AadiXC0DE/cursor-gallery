"use client";
import { motion } from "framer-motion";

export default function DogCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ears (Floppy) */}
          <path
            d="M5 8C5 8 2 10 3 14"
            stroke="#78350f"
            strokeWidth="2"
            strokeLinecap="round"
            fill="#b45309"
          />
          <path
            d="M19 8C19 8 22 10 21 14"
            stroke="#78350f"
            strokeWidth="2"
            strokeLinecap="round"
            fill="#b45309"
          />

          {/* Face */}
          <rect
            x="5"
            y="7"
            width="14"
            height="12"
            rx="6"
            fill="#fbbf24"
            stroke="#78350f"
            strokeWidth="2"
          />

          {/* Eyes */}
          <circle cx="9" cy="12" r="1.5" fill="#1e293b" />
          <circle cx="15" cy="12" r="1.5" fill="#1e293b" />

          {/* Snout */}
          <ellipse cx="12" cy="15" rx="3.5" ry="2.5" fill="#fff" />
          <circle cx="12" cy="14.5" r="1.5" fill="#1e293b" />

          {/* Tongue */}
          <motion.path
            d="M11 17H13V18C13 19.5 12 20 12 20C12 20 11 19.5 11 18V17Z"
            fill="#ef4444"
            animate={{ height: [3, 5, 3] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
}
