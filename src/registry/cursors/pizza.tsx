"use client"
import { motion } from "framer-motion"

export default function PizzaCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 pointer-events-none"
      style={{ x, y, translateX: "-50%", translateY: "-50%", rotate: -15 }}
    >
      <div className="relative">
        {/* Steam */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            className="absolute -top-4 left-4 w-1 h-3 bg-white/30 blur-[1.5px] rounded-full"
            animate={{ 
              opacity: [0, 0.4, 0], 
              y: [-5, -20], 
              x: [0, (i - 1) * 5],
              scale: [0.5, 1.5] 
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pizza Crust (Triangle Base) */}
          <path
            d="M5 5 L35 15 L15 35 Z"
            fill="#fbbf24" // Cheese color
            stroke="#92400e" // Crust outline
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          
          {/* Thick Crust Edge */}
          <path
            d="M5 5 L35 15"
            stroke="#78350f"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Pepperonis */}
          <circle cx="15" cy="15" r="3" fill="#dc2626" />
          <circle cx="22" cy="20" r="2.5" fill="#ef4444" />
          <circle cx="18" cy="27" r="2" fill="#b91c1c" />
          
          {/* Melted patches */}
          <path d="M12 20 Q15 22 18 18" stroke="#fef3c7" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        </svg>
      </div>
    </motion.div>
  )
}
