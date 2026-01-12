"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function ParticleSwarmCursor({
  x,
  y,
  isStatic,
}: {
  x: number;
  y: number;
  isStatic?: boolean;
}) {
  const [particles] = useState<
    {
      id: number;
      offset: { x: number; y: number };
      scale: number;
      speed: number;
    }[]
  >(() =>
    Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      offset: {
        x: (Math.random() - 0.5) * 40,
        y: (Math.random() - 0.5) * 40,
      },
      scale: Math.random() * 0.5 + 0.5,
      speed: Math.random() * 2 + 1,
    }))
  );
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isStatic) return;
    const interval = setInterval(() => {
      setTime(Date.now() / 1000);
    }, 100);
    return () => clearInterval(interval);
  }, [isStatic]);

  // Memoize static particle positions to prevent re-renders
  const staticPositions = useMemo(() => {
    return particles.map((p, i) => ({
      x: Math.cos((i * Math.PI * 2) / 6) * 20,
      y: Math.sin((i * Math.PI * 2) / 6) * 20,
    }));
  }, [particles]);

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-50">
      {/* Main Core */}
      <motion.div
        className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />

      {/* Swarming Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={p.id}
          className="absolute w-2 h-2 bg-blue-300 rounded-full blur-[1px]"
          animate={
            isStatic
              ? {
                  x: x + staticPositions[i]?.x,
                  y: y + staticPositions[i]?.y,
                  scale: p.scale,
                  opacity: 0.5,
                }
              : {
                  x: x + Math.cos(time * p.speed + p.id) * 30,
                  y: y + Math.sin(time * p.speed + p.id) * 30,
                  scale: [p.scale, p.scale * 1.5, p.scale],
                  opacity: [0.3, 0.7, 0.3],
                }
          }
          transition={{
            duration: isStatic ? 0 : 0.1,
            ease: "linear",
          }}
          style={{ translateX: "-50%", translateY: "-50%" }}
        />
      ))}
    </div>
  );
}
