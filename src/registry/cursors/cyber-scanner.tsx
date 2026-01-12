"use client";
import { motion } from "framer-motion";

export default function CyberScannerCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative w-12 h-12">
        {/* Outer Ring */}
        <motion.div
          className="absolute inset-0 border-2 border-cyan-500/50 rounded-lg"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Scanning Line */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
          animate={{
            top: ["0%", "100%", "0%"],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Center Target */}
        <div className="absolute inset-[30%] border border-cyan-400/80 rounded-sm" />

        {/* Data Bits */}
        <motion.div
          className="absolute -right-8 top-0 text-[10px] font-mono text-cyan-400 overflow-hidden"
          animate={{ height: [0, 40, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          0101
          <br />
          1100
          <br />
          SYST
        </motion.div>
      </div>
    </motion.div>
  );
}
