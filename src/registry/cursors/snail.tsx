"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SnailCursor({
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
        data-cursor="snail"
        fill="none"
        stroke="#fb7185"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.g
          initial={{ x: 0 }}
          animate={frozen ? { x: 0 } : { x: [0, 0.6, 0] }}
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <path d="M4 26 Q8 23 13 25 H24 Q29 25 29 21" />
          <circle
            cx={12}
            cy={15}
            r={7.5}
            fill="#fb7185"
            fillOpacity={0.18}
            strokeWidth={2.25}
          />
          <path
            d="M12 19 C6 19 6 10 12 10 C17 10 18 16 13 16 Q11 16 12 13"
            strokeWidth={2}
          />
          <motion.g
            initial={false}
            animate={!frozen && isHovering ? { scaleY: 1.45 } : { scaleY: 1 }}
            transition={
              frozen ? { duration: 0 } : { duration: 0.25, ease: "easeInOut" }
            }
            style={{
              transformBox: "view-box",
              originX: "25px",
              originY: "24px",
            }}
          >
            <line x1={25} y1={24} x2={25} y2={17} />
            <circle cx={25} cy={17} r={1.3} fill="#fb7185" stroke="none" />
          </motion.g>
          <motion.g
            initial={false}
            animate={!frozen && isHovering ? { scaleY: 1.45 } : { scaleY: 1 }}
            transition={
              frozen ? { duration: 0 } : { duration: 0.25, ease: "easeInOut" }
            }
            style={{
              transformBox: "view-box",
              originX: "29px",
              originY: "22px",
            }}
          >
            <line x1={29} y1={22} x2={29} y2={15} />
            <circle cx={29} cy={15} r={1.3} fill="#fb7185" stroke="none" />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  );
}
