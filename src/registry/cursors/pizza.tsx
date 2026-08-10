"use client";

import { motion } from "framer-motion";

export default function PizzaCursor({
  x,
  y,
  isHovering,
  isStatic,
}: {
  x: number;
  y: number;
  isHovering?: boolean;
  isStatic?: boolean;
}) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      {/* Steam */}
      {!isStatic &&
        [0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[9px] bg-white/35 blur-[1.5px] rounded-full"
            style={{ left: 12 + i * 6, top: -10 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [-3, -16],
              x: [0, (i - 1) * 4],
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}

      <motion.div
        animate={{
          rotate: isHovering ? -22 : -15,
          scale: isHovering ? 1.08 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        style={{ filter: "drop-shadow(0 0 8px rgba(245,158,11,0.35))" }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <defs>
            <linearGradient
              id="pizzaCheese"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <radialGradient id="pizzaPep" cx="35%" cy="35%" r="80%">
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="100%" stopColor="#b91c1c" />
            </radialGradient>
          </defs>

          {/* Cheese base */}
          <path
            d="M5 5 L35 15 L15 35 Z"
            fill="url(#pizzaCheese)"
            stroke="#92400e"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {/* Thick crust */}
          <path
            d="M5 5 L35 15"
            stroke="#b45309"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M5 5 L35 15"
            stroke="#d97706"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Cheese drip at the tip */}
          <path
            d="M15 35 C15.8 33 16.4 33 16.8 34.2 C16.5 35.6 15.4 35.8 15 35 Z"
            fill="#f59e0b"
          />

          {/* Pepperoni */}
          <circle cx="15" cy="15" r="3" fill="url(#pizzaPep)" />
          <circle cx="23" cy="20" r="2.5" fill="url(#pizzaPep)" />
          <circle cx="17.5" cy="26" r="2" fill="url(#pizzaPep)" />

          {/* Basil */}
          <ellipse
            cx="20"
            cy="12"
            rx="2.2"
            ry="1.2"
            fill="#16a34a"
            transform="rotate(-24 20 12)"
          />
          <ellipse
            cx="12.5"
            cy="21"
            rx="1.8"
            ry="1"
            fill="#15803d"
            transform="rotate(30 12.5 21)"
          />

          {/* Melted sheen */}
          <path
            d="M12 19 Q15 21 18 17"
            stroke="#fef3c7"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.7"
            fill="none"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
