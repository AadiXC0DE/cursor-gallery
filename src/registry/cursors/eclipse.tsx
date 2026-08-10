"use client";

import { motion } from "framer-motion";

export default function EclipseCursor({
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
      {/* Corona rays */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[46px] h-[46px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(253,224,71,0.5) 12deg, transparent 24deg, transparent 90deg, rgba(253,224,71,0.4) 102deg, transparent 114deg, transparent 180deg, rgba(253,224,71,0.5) 192deg, transparent 204deg, transparent 270deg, rgba(253,224,71,0.4) 282deg, transparent 294deg)",
          filter: "blur(3px)",
        }}
        animate={isStatic ? {} : { rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      />

      {/* Corona ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[30px] h-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          boxShadow:
            "0 0 14px rgba(253,224,71,0.85), 0 0 34px rgba(251,146,60,0.45), inset 0 0 6px rgba(253,224,71,0.5)",
        }}
        animate={
          isStatic ? {} : { scale: isHovering ? [1, 1.12, 1] : [1, 1.05, 1] }
        }
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Occluding disc */}
      <div className="absolute left-1/2 top-1/2 w-[24px] h-[24px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950 border border-yellow-200/60" />
    </motion.div>
  );
}
