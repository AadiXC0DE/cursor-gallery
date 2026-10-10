"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function DragonflyCursor({
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
  const reducedMotion = useReducedMotion();
  const frozen = isStatic || reducedMotion;
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        aria-hidden="true"
        data-cursor="dragonfly"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g transform="rotate(-15 10 12)">
          <motion.ellipse
            cx={10}
            cy={12}
            rx={6}
            ry={2.8}
            fill="#38bdf8"
            fillOpacity={0.3}
            initial={{ scaleY: 1 }}
            animate={frozen ? { scaleY: 1 } : { scaleY: [1, 0.8, 1] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.2 : 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "16px",
            }}
          />
        </g>
        <g transform="rotate(15 24 12)">
          <motion.ellipse
            cx={24}
            cy={12}
            rx={6}
            ry={2.8}
            fill="#38bdf8"
            fillOpacity={0.3}
            initial={{ scaleY: 1 }}
            animate={frozen ? { scaleY: 1 } : { scaleY: [1, 0.8, 1] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.2 : 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "16px",
            }}
          />
        </g>
        <g transform="rotate(15 10 20)">
          <motion.ellipse
            cx={10}
            cy={20}
            rx={6}
            ry={2.8}
            fill="#38bdf8"
            fillOpacity={0.3}
            initial={{ scaleY: 1 }}
            animate={frozen ? { scaleY: 1 } : { scaleY: [1, 0.8, 1] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.2 : 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "16px",
            }}
          />
        </g>
        <g transform="rotate(-15 24 20)">
          <motion.ellipse
            cx={24}
            cy={20}
            rx={6}
            ry={2.8}
            fill="#38bdf8"
            fillOpacity={0.3}
            initial={{ scaleY: 1 }}
            animate={frozen ? { scaleY: 1 } : { scaleY: [1, 0.8, 1] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.2 : 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "16px",
            }}
          />
        </g>
        <line x1={17} y1={8} x2={17} y2={29} strokeWidth={2.5} />
        <circle cx={17} cy={5.5} r={2} fill="#38bdf8" stroke="none" />
      </svg>
    </motion.div>
  );
}
