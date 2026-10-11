"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring", stiffness: 320, damping: 20 } as const;

export default function PufferfishCursor({
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
        data-cursor="pufferfish"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(34,211,238,0.4))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-puffer`} cx="40%" cy="30%" r="75%">
            <stop offset={0} stopColor="#ecfeff" />
            <stop offset={0.45} stopColor="#67e8f9" />
            <stop offset={1} stopColor="#0e7490" />
          </radialGradient>
          <linearGradient id={`${uid}-belly`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#ffffff" stopOpacity={0} />
            <stop offset={1} stopColor="#ffffff" stopOpacity={0.9} />
          </linearGradient>
          <linearGradient id={`${uid}-fin`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#fde68a" />
            <stop offset={1} stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <motion.g
          initial={{ y: 0, rotate: -3 }}
          animate={
            frozen
              ? { y: 0, rotate: -3 }
              : { y: [0, -1.2, 0], rotate: [-3, 3, -3] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.2 : 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <motion.g
            initial={false}
            animate={!frozen && isHovering ? { scale: 1.3 } : { scale: 1 }}
            transition={spring}
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <motion.g
              initial={false}
              animate={!frozen && isHovering ? { scale: 1.14 } : { scale: 1 }}
              transition={spring}
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "17px",
              }}
            >
              <path
                d="M25.14 16 L28 17 L25.14 18 Z M24.99 18.84 L27.34 20.76 L24.31 20.72 Z M23.88 21.47 L25.43 24.07 L22.59 23 Z M21.93 23.55 L22.5 26.53 L20.2 24.55 Z M19.4 24.84 L18.91 27.83 L17.43 25.19 Z M16.57 25.19 L15.09 27.83 L14.6 24.84 Z M13.8 24.55 L11.5 26.53 L12.07 23.55 Z M11.41 23 L8.57 24.07 L10.12 21.47 Z M9.69 20.72 L6.66 20.76 L9.01 18.84 Z M8.86 18 L6 17 L8.86 16 Z M9.01 15.16 L6.66 13.24 L9.69 13.28 Z M10.12 12.53 L8.57 9.93 L11.41 11 Z M12.07 10.45 L11.5 7.47 L13.8 9.45 Z M14.6 9.16 L15.09 6.17 L16.57 8.81 Z M17.43 8.81 L18.91 6.17 L19.4 9.16 Z M20.2 9.45 L22.5 7.47 L21.93 10.45 Z M22.59 11 L25.43 9.93 L23.88 12.53 Z M24.31 13.28 L27.34 13.24 L24.99 15.16 Z"
                fill="#cffafe"
                stroke="#0e7490"
                strokeWidth={0.4}
                strokeLinejoin="round"
              />
            </motion.g>
            <motion.path
              d="M8.6 17 C6.4 14.6 4.4 14.4 3.2 15 C3.8 16.4 3.8 17.6 3.2 19 C4.4 19.6 6.4 19.4 8.6 17 Z"
              fill={`url(#${uid}-fin)`}
              stroke="#b45309"
              strokeWidth={0.4}
              initial={{ rotate: -10 }}
              animate={frozen ? { rotate: -10 } : { rotate: [-10, 10, -10] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 0.3 : 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "8.6px",
                originY: "17px",
              }}
            />
            <circle
              cx={17}
              cy={17}
              r={8.6}
              fill={`url(#${uid}-puffer)`}
              stroke="#155e75"
              strokeWidth={0.6}
            />
            <path
              d="M9 18.4 C10.4 23.6 23.6 23.6 25 18.4 C24 24.8 10 24.8 9 18.4 Z"
              fill="#ffffff"
              opacity={0.55}
            />
            <circle cx={13} cy={11.6} r={0.7} fill="#155e75" opacity={0.6} />
            <circle cx={16.4} cy={10} r={0.55} fill="#155e75" opacity={0.6} />
            <circle cx={20.2} cy={10.8} r={0.65} fill="#155e75" opacity={0.6} />
            <circle cx={22.6} cy={13.4} r={0.5} fill="#155e75" opacity={0.6} />
            <circle
              cx={14.2}
              cy={15.2}
              r={2.3}
              fill="#ffffff"
              stroke="#155e75"
              strokeWidth={0.4}
            />
            <circle
              cx={20.2}
              cy={15.2}
              r={2.3}
              fill="#ffffff"
              stroke="#155e75"
              strokeWidth={0.4}
            />
            <circle cx={14.6} cy={15.5} r={1.2} fill="#0f172a" />
            <circle cx={20.6} cy={15.5} r={1.2} fill="#0f172a" />
            <circle cx={15} cy={15} r={0.4} fill="#ffffff" />
            <circle cx={21} cy={15} r={0.4} fill="#ffffff" />
            <ellipse
              cx={17.2}
              cy={19.6}
              rx={1}
              ry={0.85}
              fill="#fb7185"
              stroke="#be123c"
              strokeWidth={0.4}
            />
            <ellipse
              cx={12}
              cy={18.4}
              rx={0.9}
              ry={0.55}
              fill="#fda4af"
              opacity={0.8}
            />
            <ellipse
              cx={22.4}
              cy={18.4}
              rx={0.9}
              ry={0.55}
              fill="#fda4af"
              opacity={0.8}
            />
            <path
              d="M11 11.4 C12 9.6 13.8 8.6 15.6 8.4"
              stroke="#ffffff"
              strokeWidth={1.1}
              strokeLinecap="round"
              opacity={0.75}
            />
            <motion.path
              d="M23.6 21 C25.6 21.6 27 23 27.2 24.6 C25.6 24.6 24.2 23.6 23.2 22 Z"
              fill={`url(#${uid}-fin)`}
              stroke="#b45309"
              strokeWidth={0.35}
              initial={{ rotate: -14 }}
              animate={frozen ? { rotate: -14 } : { rotate: [-14, 14, -14] }}
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 0.25 : 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "23.6px",
                originY: "21.4px",
              }}
            />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  );
}
