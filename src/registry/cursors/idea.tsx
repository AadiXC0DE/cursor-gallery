"use client"
import { motion } from "framer-motion"

export default function IdeaCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="relative"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-yellow-400/30 blur-xl rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Glass Bulb */}
          <path d="M9 21H15M12 21V22M12 2C7.58172 2 4 5.58172 4 10C4 12.2091 4.89543 14.2091 6.34315 15.6569L7 16.3137V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V16.3137L17.6569 15.6569C19.1046 14.2091 20 12.2091 20 10C20 5.58172 16.4183 2 12 2Z" 
            stroke="#eab308" strokeWidth="1.5" fill="rgba(253, 224, 71, 0.1)"/>
          
          {/* Filament */}
          <motion.path 
            d="M9 14C9 14 10 11 12 11C14 11 15 14 15 14" 
            stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"
            animate={{ strokeOpacity: [0.5, 1, 0.5], pathLength: [0.8, 1, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Base */}
          <path d="M8 20H16" stroke="#fbbf24" strokeWidth="1.5"/>
          <path d="M8.5 22H15.5" stroke="#fbbf24" strokeWidth="1.5"/>
        </svg>
      </motion.div>
    </motion.div>
  )
}
