"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring", stiffness: 320, damping: 20 } as const;

export default function LadybugCursor({
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
  // Gradient and clip ids must be unique per instance; the gallery mounts several.
  const uid = useId().replace(/[^\w-]/g, "");
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
        data-cursor="ladybug"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(239,68,68,0.4))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-shell`} cx="35%" cy="30%" r="75%">
            <stop offset={0} stopColor="#fecaca" />
            <stop offset={0.35} stopColor="#ef4444" />
            <stop offset={1} stopColor="#7f1d1d" />
          </radialGradient>
          <linearGradient id={`${uid}-wing`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#f0f9ff" stopOpacity={0.85} />
            <stop offset={1} stopColor="#bae6fd" stopOpacity={0.5} />
          </linearGradient>
        </defs>
        <motion.g
          initial={{ rotate: -4 }}
          animate={frozen ? { rotate: -4 } : { rotate: [-4, 4, -4] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.5 : 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "19px" }}
        >
          <motion.path
            d="M9 14 L5.6 12.6 M25 14 L28.4 12.6 M9 19 L5.6 17.6 M25 19 L28.4 17.6 M9 24 L5.6 22.6 M25 24 L28.4 22.6"
            stroke="#1c1917"
            strokeWidth={0.8}
            strokeLinecap="round"
            initial={{ scaleY: 1 }}
            animate={frozen ? { scaleY: 1 } : { scaleY: [1, 0.9, 1] }}
            transition={
              frozen
                ? { duration: 0 }
                : { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "19px",
            }}
          />
          <path
            d="M16 11 C11 12 6 18 6.6 26 C9 26.6 13 22 16 13 Z"
            fill={`url(#${uid}-wing)`}
            stroke="#7dd3fc"
            strokeWidth={0.4}
          />
          <path
            d="M18 11C23 12 28 18 27.4 26C25 26.6 21 22 18 13Z"
            fill={`url(#${uid}-wing)`}
            stroke="#7dd3fc"
            strokeWidth={0.4}
          />
          <path
            d="M12.6 9.8 C12.6 6.8 14.6 4.8 17 4.8 C19.4 4.8 21.4 6.8 21.4 9.8 Z"
            fill="#1c1917"
          />
          <circle cx={15} cy={7.4} r={0.8} fill="#ffffff" />
          <circle cx={19} cy={7.4} r={0.8} fill="#ffffff" />
          <path
            d="M15.4 5.2 C14.6 3.4 13 2.6 11.6 2.8 M18.6 5.2 C19.4 3.4 21 2.6 22.4 2.8"
            stroke="#1c1917"
            strokeWidth={0.6}
            strokeLinecap="round"
          />
          <motion.g
            initial={false}
            animate={!frozen && isHovering ? { rotate: -24 } : { rotate: 0 }}
            transition={spring}
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "10.4px",
            }}
          >
            <path
              d="M17 9.4 C12 9.4 8.4 13.6 8.4 19.4 C8.4 25.4 12.4 29.4 17 29.4 Z"
              fill={`url(#${uid}-shell)`}
              stroke="#450a0a"
              strokeWidth={0.6}
            />
            <circle cx={13.2} cy={14.4} r={1.5} fill="#1c1917" />
            <circle cx={11.4} cy={20.4} r={1.4} fill="#1c1917" />
            <circle cx={14.4} cy={24.8} r={1.3} fill="#1c1917" />
            <circle cx={15.4} cy={19.2} r={0.9} fill="#1c1917" />
            <path
              d="M10.4 15 C10.8 12.6 12.4 10.8 14.4 10.2"
              stroke="#ffffff"
              strokeWidth={0.9}
              strokeLinecap="round"
              opacity={0.7}
            />
          </motion.g>
          <motion.g
            initial={false}
            animate={!frozen && isHovering ? { rotate: 24 } : { rotate: 0 }}
            transition={spring}
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "10.4px",
            }}
          >
            <path
              d="M17 9.4C22 9.4 25.6 13.6 25.6 19.4C25.6 25.4 21.6 29.4 17 29.4Z"
              fill={`url(#${uid}-shell)`}
              stroke="#450a0a"
              strokeWidth={0.6}
            />
            <circle cx={20.8} cy={14.4} r={1.5} fill="#1c1917" />
            <circle cx={22.6} cy={20.4} r={1.4} fill="#1c1917" />
            <circle cx={19.6} cy={24.8} r={1.3} fill="#1c1917" />
            <circle cx={18.6} cy={19.2} r={0.9} fill="#1c1917" />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  );
}
