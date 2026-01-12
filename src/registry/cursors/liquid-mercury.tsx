"use client";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function LiquidMercuryCursor({
  x,
  y,
}: {
  x: number;
  y: number;
}) {
  const mouseX = useMotionValue(x);
  const mouseY = useMotionValue(y);

  // Calibrated springs for high performance and fluid feel
  const springConfig = { damping: 20, stiffness: 250, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    mouseX.set(x);
    mouseY.set(y);
  }, [x, y, mouseX, mouseY]);

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-50">
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-100 via-slate-400 to-slate-500 shadow-[0_0_15px_rgba(148,163,184,0.5)] border border-white/30 relative overflow-hidden"
          animate={{
            scale: [1, 1.05, 0.95, 1],
            borderRadius: [
              "50% 50% 50% 50%",
              "40% 60% 40% 60%",
              "60% 40% 60% 40%",
              "50% 50% 50% 50%",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Internal Reflections */}
          <div className="absolute top-1 left-2 w-4 h-2 bg-white/40 rounded-full blur-[1px] rotate-[-20deg]" />
          <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-white/20 rounded-full blur-[1.5px]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
