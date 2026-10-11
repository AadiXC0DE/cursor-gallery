"use client";

import { useId } from "react";
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
        data-cursor="dragonfly"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(34,211,238,0.45))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-wing`} x1={0} y1={0} x2={1} y2={0}>
            <stop offset={0} stopColor="#c4b5fd" stopOpacity={0.55} />
            <stop offset={0.5} stopColor="#a5f3fc" stopOpacity={0.6} />
            <stop offset={1} stopColor="#e0f2fe" stopOpacity={0.9} />
          </linearGradient>
          <linearGradient id={`${uid}-body`} x1={0} y1={0} x2={0} y2={1}>
            <stop offset={0} stopColor="#5eead4" />
            <stop offset={0.5} stopColor="#0d9488" />
            <stop offset={1} stopColor="#1e3a8a" />
          </linearGradient>
          <radialGradient id={`${uid}-eye`} cx="35%" cy="30%" r="75%">
            <stop offset={0} stopColor="#a5f3fc" />
            <stop offset={0.6} stopColor="#0891b2" />
            <stop offset={1} stopColor="#164e63" />
          </radialGradient>
        </defs>
        <motion.g
          initial={{ y: 0 }}
          animate={
            frozen
              ? { y: 0 }
              : isHovering
                ? { y: [0, -2.4, 0] }
                : { y: [0, -1.2, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 0.9 : 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <motion.g
            initial={{ rotate: 6 }}
            animate={frozen ? { rotate: 6 } : { rotate: [6, -8, 6] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.16 : 0.26,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.08,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "16.4px",
              originY: "13.4px",
            }}
          >
            <path
              d="M16.2 13.2 C11.6 12.8 6 14 3.6 16.4 C3.4 17.8 6.6 18 9.6 16.8 C12 15.8 14.6 14.6 16.2 13.8 Z"
              fill={`url(#${uid}-wing)`}
              stroke="#0284c7"
              strokeWidth={0.45}
              strokeLinejoin="round"
            />
            <path
              d="M16 13.6 C11.6 14.2 7.4 15.4 4.6 16.6"
              stroke="#0369a1"
              strokeWidth={0.4}
              strokeLinecap="round"
              opacity={0.5}
            />
          </motion.g>
          <motion.g
            initial={{ rotate: -6 }}
            animate={frozen ? { rotate: -6 } : { rotate: [-6, 8, -6] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.16 : 0.26,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.08,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17.6px",
              originY: "13.4px",
            }}
          >
            <path
              d="M17.8 13.2C22.4 12.8 28 14 30.4 16.4C30.6 17.8 27.4 18 24.4 16.8C22 15.8 19.4 14.6 17.8 13.8Z"
              fill={`url(#${uid}-wing)`}
              stroke="#0284c7"
              strokeWidth={0.45}
              strokeLinejoin="round"
            />
            <path
              d="M18 13.6C22.4 14.2 26.6 15.4 29.4 16.6"
              stroke="#0369a1"
              strokeWidth={0.4}
              strokeLinecap="round"
              opacity={0.5}
            />
          </motion.g>
          <motion.g
            initial={{ rotate: -6 }}
            animate={frozen ? { rotate: -6 } : { rotate: [-6, 8, -6] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.16 : 0.26,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "16.2px",
              originY: "11.4px",
            }}
          >
            <path
              d="M16 11 C11.4 8.6 5 7.6 2.6 9 C1.8 10.6 5.2 12 9 12.2 C11.8 12.4 14.4 12 16 11.8 Z"
              fill={`url(#${uid}-wing)`}
              stroke="#0284c7"
              strokeWidth={0.45}
              strokeLinejoin="round"
            />
            <path
              d="M16 11.4 C11.6 10.6 6.8 9.8 3.4 9.6"
              stroke="#0369a1"
              strokeWidth={0.4}
              strokeLinecap="round"
              opacity={0.5}
            />
          </motion.g>
          <motion.g
            initial={{ rotate: 6 }}
            animate={frozen ? { rotate: 6 } : { rotate: [6, -8, 6] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.16 : 0.26,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17.8px",
              originY: "11.4px",
            }}
          >
            <path
              d="M18 11C22.6 8.6 29 7.6 31.4 9C32.2 10.6 28.8 12 25 12.2C22.2 12.4 19.6 12 18 11.8Z"
              fill={`url(#${uid}-wing)`}
              stroke="#0284c7"
              strokeWidth={0.45}
              strokeLinejoin="round"
            />
            <path
              d="M18 11.4C22.4 10.6 27.2 9.8 30.6 9.6"
              stroke="#0369a1"
              strokeWidth={0.4}
              strokeLinecap="round"
              opacity={0.5}
            />
          </motion.g>
          <motion.g
            initial={{ rotate: -3 }}
            animate={frozen ? { rotate: -3 } : { rotate: [-3, 3, -3] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.9 : 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "13.6px",
            }}
          >
            <path
              d="M16 13.6 C16 13.2 18 13.2 18 13.6 L17.7 29.6 C17.6 30.6 16.4 30.6 16.3 29.6 Z"
              fill={`url(#${uid}-body)`}
              stroke="#134e4a"
              strokeWidth={0.5}
            />
            <path
              d="M16.1 17 H17.9 M16.15 19.6 H17.85 M16.2 22.2 H17.8 M16.25 24.8 H17.75 M16.3 27.4 H17.7"
              stroke="#042f2e"
              strokeWidth={0.45}
              opacity={0.55}
            />
            <path
              d="M16.7 14.6 L16.6 28"
              stroke="#ccfbf1"
              strokeWidth={0.4}
              strokeLinecap="round"
              opacity={0.6}
            />
          </motion.g>
          <ellipse
            cx={17}
            cy={11.4}
            rx={2.3}
            ry={2.9}
            fill={`url(#${uid}-body)`}
            stroke="#134e4a"
            strokeWidth={0.5}
          />
          <ellipse
            cx={16.3}
            cy={10.4}
            rx={0.7}
            ry={1.1}
            fill="#ffffff"
            opacity={0.5}
          />
          <circle
            cx={15.7}
            cy={7.3}
            r={1.75}
            fill={`url(#${uid}-eye)`}
            stroke="#164e63"
            strokeWidth={0.4}
          />
          <circle
            cx={18.3}
            cy={7.3}
            r={1.75}
            fill={`url(#${uid}-eye)`}
            stroke="#164e63"
            strokeWidth={0.4}
          />
          <circle cx={15.2} cy={6.7} r={0.45} fill="#ffffff" opacity={0.9} />
          <circle cx={17.8} cy={6.7} r={0.45} fill="#ffffff" opacity={0.9} />
        </motion.g>
      </svg>
    </motion.div>
  );
}
