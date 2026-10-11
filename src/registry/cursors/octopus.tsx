"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function OctopusCursor({
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
        data-cursor="octopus"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(192,132,252,0.45))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-head`} cx="38%" cy="30%" r="75%">
            <stop offset={0} stopColor="#fae8ff" />
            <stop offset={0.45} stopColor="#d8b4fe" />
            <stop offset={1} stopColor="#7e22ce" />
          </radialGradient>
          <linearGradient
            id={`${uid}-arm`}
            x1={0}
            y1={18}
            x2={0}
            y2={31}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#c084fc" />
            <stop offset={1} stopColor="#9333ea" />
          </linearGradient>
          <radialGradient id={`${uid}-eye`} cx="45%" cy="40%" r="60%">
            <stop offset={0} stopColor="#ffffff" />
            <stop offset={1} stopColor="#e2e8f0" />
          </radialGradient>
        </defs>
        <motion.circle
          cx={28}
          cy={8}
          r={0.9}
          stroke="#a5f3fc"
          strokeWidth={0.5}
          initial={{ y: -3, opacity: 0.9 }}
          animate={
            frozen
              ? { y: -3, opacity: 0.9 }
              : { y: [0, -4, -8], opacity: [0, 0.9, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 2.6, repeat: Infinity, ease: "linear" }
          }
          style={{ transformBox: "view-box", originX: "28px", originY: "8px" }}
        />
        <motion.circle
          cx={5.6}
          cy={10}
          r={0.7}
          stroke="#a5f3fc"
          strokeWidth={0.5}
          initial={{ y: -3, opacity: 0.9 }}
          animate={
            frozen
              ? { y: -3, opacity: 0.9 }
              : { y: [0, -4, -8], opacity: [0, 0.9, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 2.6, repeat: Infinity, ease: "linear", delay: 1.3 }
          }
          style={{
            transformBox: "view-box",
            originX: "5.6px",
            originY: "10px",
          }}
        />
        <motion.g
          initial={{ y: 0 }}
          animate={frozen ? { y: 0 } : { y: [0, -1.4, 0] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1 : 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <motion.g
            initial={{ rotate: -8 }}
            animate={
              frozen
                ? { rotate: -8 }
                : isHovering
                  ? { rotate: [-18, 18, -18] }
                  : { rotate: [-8, 8, -8] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.7 : 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "10px",
              originY: "18.6px",
            }}
          >
            <path
              d="M10 18.6 C8.6 21.6 9.8 24.4 8 26.6 C7 27.8 7.6 29.4 9 29"
              stroke="#581c87"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <path
              d="M10 18.6 C8.6 21.6 9.8 24.4 8 26.6 C7 27.8 7.6 29.4 9 29"
              stroke={`url(#${uid}-arm)`}
              strokeWidth={2.2}
              strokeLinecap="round"
            />
            <path
              d="M10 18.6 C8.6 21.6 9.8 24.4 8 26.6 C7 27.8 7.6 29.4 9 29"
              stroke="#f5d0fe"
              strokeWidth={0.6}
              strokeLinecap="round"
              strokeDasharray="0.1 1.6"
              opacity={0.9}
            />
          </motion.g>
          <motion.g
            initial={{ rotate: 8 }}
            animate={
              frozen
                ? { rotate: 8 }
                : isHovering
                  ? { rotate: [18, -18, 18] }
                  : { rotate: [8, -8, 8] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.7 : 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.12,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "12.8px",
              originY: "19.4px",
            }}
          >
            <path
              d="M12.8 19.4 C12 22.6 13.4 25.4 12 28 C11.4 29.4 12.6 30.6 13.6 29.6"
              stroke="#581c87"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <path
              d="M12.8 19.4 C12 22.6 13.4 25.4 12 28 C11.4 29.4 12.6 30.6 13.6 29.6"
              stroke={`url(#${uid}-arm)`}
              strokeWidth={2.2}
              strokeLinecap="round"
            />
            <path
              d="M12.8 19.4 C12 22.6 13.4 25.4 12 28 C11.4 29.4 12.6 30.6 13.6 29.6"
              stroke="#f5d0fe"
              strokeWidth={0.6}
              strokeLinecap="round"
              strokeDasharray="0.1 1.6"
              opacity={0.9}
            />
          </motion.g>
          <motion.g
            initial={{ rotate: -8 }}
            animate={
              frozen
                ? { rotate: -8 }
                : isHovering
                  ? { rotate: [-18, 18, -18] }
                  : { rotate: [-8, 8, -8] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.7 : 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.24,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "15.8px",
              originY: "19.8px",
            }}
          >
            <path
              d="M15.8 19.8 C15.6 23 16.6 26 15.8 29.2 C15.6 30.4 16.8 31 17.4 30"
              stroke="#581c87"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <path
              d="M15.8 19.8 C15.6 23 16.6 26 15.8 29.2 C15.6 30.4 16.8 31 17.4 30"
              stroke={`url(#${uid}-arm)`}
              strokeWidth={2.2}
              strokeLinecap="round"
            />
            <path
              d="M15.8 19.8 C15.6 23 16.6 26 15.8 29.2 C15.6 30.4 16.8 31 17.4 30"
              stroke="#f5d0fe"
              strokeWidth={0.6}
              strokeLinecap="round"
              strokeDasharray="0.1 1.6"
              opacity={0.9}
            />
          </motion.g>
          <motion.g
            initial={{ rotate: 8 }}
            animate={
              frozen
                ? { rotate: 8 }
                : isHovering
                  ? { rotate: [18, -18, 18] }
                  : { rotate: [8, -8, 8] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.7 : 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.36,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "18.2px",
              originY: "19.8px",
            }}
          >
            <path
              d="M18.2 19.8 C18.4 23 17.4 26 18.2 29.2 C18.4 30.4 17.2 31 16.6 30"
              stroke="#581c87"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <path
              d="M18.2 19.8 C18.4 23 17.4 26 18.2 29.2 C18.4 30.4 17.2 31 16.6 30"
              stroke={`url(#${uid}-arm)`}
              strokeWidth={2.2}
              strokeLinecap="round"
            />
            <path
              d="M18.2 19.8 C18.4 23 17.4 26 18.2 29.2 C18.4 30.4 17.2 31 16.6 30"
              stroke="#f5d0fe"
              strokeWidth={0.6}
              strokeLinecap="round"
              strokeDasharray="0.1 1.6"
              opacity={0.9}
            />
          </motion.g>
          <motion.g
            initial={{ rotate: -8 }}
            animate={
              frozen
                ? { rotate: -8 }
                : isHovering
                  ? { rotate: [-18, 18, -18] }
                  : { rotate: [-8, 8, -8] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.7 : 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.48,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "21.2px",
              originY: "19.4px",
            }}
          >
            <path
              d="M21.2 19.4 C22 22.6 20.6 25.4 22 28 C22.6 29.4 21.4 30.6 20.4 29.6"
              stroke="#581c87"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <path
              d="M21.2 19.4 C22 22.6 20.6 25.4 22 28 C22.6 29.4 21.4 30.6 20.4 29.6"
              stroke={`url(#${uid}-arm)`}
              strokeWidth={2.2}
              strokeLinecap="round"
            />
            <path
              d="M21.2 19.4 C22 22.6 20.6 25.4 22 28 C22.6 29.4 21.4 30.6 20.4 29.6"
              stroke="#f5d0fe"
              strokeWidth={0.6}
              strokeLinecap="round"
              strokeDasharray="0.1 1.6"
              opacity={0.9}
            />
          </motion.g>
          <motion.g
            initial={{ rotate: 8 }}
            animate={
              frozen
                ? { rotate: 8 }
                : isHovering
                  ? { rotate: [18, -18, 18] }
                  : { rotate: [8, -8, 8] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.7 : 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "24px",
              originY: "18.6px",
            }}
          >
            <path
              d="M24 18.6 C25.4 21.6 24.2 24.4 26 26.6 C27 27.8 26.4 29.4 25 29"
              stroke="#581c87"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <path
              d="M24 18.6 C25.4 21.6 24.2 24.4 26 26.6 C27 27.8 26.4 29.4 25 29"
              stroke={`url(#${uid}-arm)`}
              strokeWidth={2.2}
              strokeLinecap="round"
            />
            <path
              d="M24 18.6 C25.4 21.6 24.2 24.4 26 26.6 C27 27.8 26.4 29.4 25 29"
              stroke="#f5d0fe"
              strokeWidth={0.6}
              strokeLinecap="round"
              strokeDasharray="0.1 1.6"
              opacity={0.9}
            />
          </motion.g>
          <path
            d="M8 16 C8 9.6 12 5 17 5 C22 5 26 9.6 26 16 C26 18.6 24.6 20.2 22.6 20.4 C19 20.8 15 20.8 11.4 20.4 C9.4 20.2 8 18.6 8 16 Z"
            fill={`url(#${uid}-head)`}
            stroke="#581c87"
            strokeWidth={0.7}
          />
          <circle cx={14.2} cy={8.4} r={0.8} fill="#f5d0fe" opacity={0.8} />
          <circle cx={19.8} cy={7.6} r={0.6} fill="#f5d0fe" opacity={0.8} />
          <circle cx={21.8} cy={10.2} r={0.5} fill="#f5d0fe" opacity={0.7} />
          <path
            d="M10.4 11.8 C11 8.8 13 6.8 15.4 6.2"
            stroke="#ffffff"
            strokeWidth={1.2}
            strokeLinecap="round"
            opacity={0.7}
          />
          <motion.g
            initial={{ scaleY: 1 }}
            animate={frozen ? { scaleY: 1 } : { scaleY: [1, 1, 0.1, 1, 1] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.9, 0.93, 0.96, 1],
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "14.2px",
            }}
          >
            <ellipse
              cx={13.6}
              cy={14.2}
              rx={1.9}
              ry={2.2}
              fill={`url(#${uid}-eye)`}
              stroke="#581c87"
              strokeWidth={0.4}
            />
            <ellipse
              cx={20.4}
              cy={14.2}
              rx={1.9}
              ry={2.2}
              fill={`url(#${uid}-eye)`}
              stroke="#581c87"
              strokeWidth={0.4}
            />
            <circle cx={14} cy={14.6} r={1.05} fill="#1e1b4b" />
            <circle cx={20.8} cy={14.6} r={1.05} fill="#1e1b4b" />
            <circle cx={14.4} cy={14.1} r={0.38} fill="#ffffff" />
            <circle cx={21.2} cy={14.1} r={0.38} fill="#ffffff" />
          </motion.g>
          <ellipse
            cx={11.6}
            cy={17}
            rx={1}
            ry={0.6}
            fill="#f472b6"
            opacity={0.6}
          />
          <ellipse
            cx={22.4}
            cy={17}
            rx={1}
            ry={0.6}
            fill="#f472b6"
            opacity={0.6}
          />
          <path
            d="M16 17.4 Q17 18.4 18 17.4"
            stroke="#581c87"
            strokeWidth={0.6}
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
