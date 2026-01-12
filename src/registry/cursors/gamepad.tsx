"use client"
import { motion } from "framer-motion"

export default function GamepadCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 13C2 13 4 7 12 7C20 7 22 13 22 13C22 13 22.5 16 20 18C18 19.6 15 18 15 18L13.5 16.5H10.5L9 18C9 18 6 19.6 4 18C1.5 16 2 13 2 13Z"
            fill="#334155"
            stroke="#475569"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* D-Pad */}
          <path d="M7 11V14M5.5 12.5H8.5" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          
          {/* Action Buttons */}
          <circle cx="16.5" cy="11.5" r="1" fill="#f87171">
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="0.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="18" cy="13" r="1" fill="#fbbf24">
            <animate attributeName="fill-opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="16.5" cy="14.5" r="1" fill="#60a5fa">
            <animate attributeName="fill-opacity" values="1;0.5;1" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="15" cy="13" r="1" fill="#4ade80">
            <animate attributeName="fill-opacity" values="0.5;1;0.5" dur="1.4s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </motion.div>
  )
}
