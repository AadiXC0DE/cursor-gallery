"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function JellyfishCursor({
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
        data-cursor="jellyfish"
        fill="none"
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1.5px rgba(15,23,42,0.35)) drop-shadow(0 0 6px rgba(232,121,249,0.55))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-bell`} cx="40%" cy="30%" r="75%">
            <stop offset={0} stopColor="#fdf4ff" />
            <stop offset={0.4} stopColor="#f5d0fe" />
            <stop offset={0.75} stopColor="#e879f9" />
            <stop offset={1} stopColor="#c026d3" />
          </radialGradient>
          <linearGradient
            id={`${uid}-tentacle`}
            x1={0}
            y1={17}
            x2={0}
            y2={31}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#f0abfc" />
            <stop offset={0.55} stopColor="#c084fc" />
            <stop offset={1} stopColor="#67e8f9" stopOpacity={0.25} />
          </linearGradient>
          <linearGradient
            id={`${uid}-arm`}
            x1={0}
            y1={17}
            x2={0}
            y2={28}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fbcfe8" />
            <stop offset={1} stopColor="#f472b6" stopOpacity={0.35} />
          </linearGradient>
        </defs>
        <motion.circle
          cx={27.5}
          cy={9}
          r={0.9}
          stroke="#a5f3fc"
          strokeWidth={0.6}
          initial={{ y: -3.5, opacity: 0.9 }}
          animate={
            frozen
              ? { y: -3.5, opacity: 0.9 }
              : { y: [0, -3.5, -7], opacity: [0, 0.9, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 2.8, repeat: Infinity, ease: "linear", delay: 0.4 }
          }
          style={{
            transformBox: "view-box",
            originX: "27.5px",
            originY: "9px",
          }}
        />
        <motion.circle
          cx={6}
          cy={12}
          r={0.7}
          stroke="#a5f3fc"
          strokeWidth={0.6}
          initial={{ y: -3.5, opacity: 0.9 }}
          animate={
            frozen
              ? { y: -3.5, opacity: 0.9 }
              : { y: [0, -3.5, -7], opacity: [0, 0.9, 0] }
          }
          transition={
            frozen
              ? { duration: 0 }
              : { duration: 2.8, repeat: Infinity, ease: "linear", delay: 1.8 }
          }
          style={{ transformBox: "view-box", originX: "6px", originY: "12px" }}
        />
        <motion.g
          initial={{ y: 0 }}
          animate={frozen ? { y: 0 } : { y: [0, -1.6, 0] }}
          transition={
            frozen
              ? { duration: 0 }
              : {
                  duration: isHovering ? 1.6 : 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformBox: "view-box", originX: "17px", originY: "17px" }}
        >
          <motion.path
            d="M10.5 17.6 C9 20.5 12 23 10.3 26 C9.4 27.7 10.2 29.2 9.6 30.4"
            stroke={`url(#${uid}-tentacle)`}
            strokeWidth={1.3}
            strokeLinecap="round"
            initial={{ rotate: -7 }}
            animate={frozen ? { rotate: -7 } : { rotate: [-7, 7, -7] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1.1 : 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "10.5px",
              originY: "17.6px",
            }}
          />
          <motion.path
            d="M14 18.2 C12.8 21.3 15.4 23.8 14 27 C13.3 28.6 14 30 13.6 31.2"
            stroke={`url(#${uid}-tentacle)`}
            strokeWidth={1.3}
            strokeLinecap="round"
            initial={{ rotate: -7 }}
            animate={frozen ? { rotate: -7 } : { rotate: [-7, 7, -7] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1.1 : 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "14px",
              originY: "18.2px",
            }}
          />
          <motion.path
            d="M20 18.2 C21.2 21.3 18.6 23.8 20 27 C20.7 28.6 20 30 20.4 31.2"
            stroke={`url(#${uid}-tentacle)`}
            strokeWidth={1.3}
            strokeLinecap="round"
            initial={{ rotate: -7 }}
            animate={frozen ? { rotate: -7 } : { rotate: [-7, 7, -7] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1.1 : 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "20px",
              originY: "18.2px",
            }}
          />
          <motion.path
            d="M23.5 17.6 C25 20.5 22 23 23.7 26 C24.6 27.7 23.8 29.2 24.4 30.4"
            stroke={`url(#${uid}-tentacle)`}
            strokeWidth={1.3}
            strokeLinecap="round"
            initial={{ rotate: -7 }}
            animate={frozen ? { rotate: -7 } : { rotate: [-7, 7, -7] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1.1 : 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.9,
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "23.5px",
              originY: "17.6px",
            }}
          />
          <motion.g
            initial={{ rotate: -4 }}
            animate={frozen ? { rotate: -4 } : { rotate: [-4, 4, -4] }}
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 1.1 : 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "18px",
            }}
          >
            <path
              d="M15.6 18 C14.6 20.6 17.6 22 16.2 24.6 C15.6 25.8 16.4 26.8 16 27.6"
              stroke={`url(#${uid}-arm)`}
              strokeWidth={2.2}
              strokeLinecap="round"
            />
            <path
              d="M18.4 18 C19.4 20.6 16.4 22 17.8 24.6 C18.4 25.8 17.6 26.8 18 27.6"
              stroke={`url(#${uid}-arm)`}
              strokeWidth={2.2}
              strokeLinecap="round"
            />
          </motion.g>
          <motion.g
            initial={{ scaleX: 1, scaleY: 1 }}
            animate={
              frozen
                ? { scaleX: 1, scaleY: 1 }
                : isHovering
                  ? { scaleX: [1, 1.13, 1], scaleY: [1, 0.85, 1] }
                  : { scaleX: [1, 1.07, 1], scaleY: [1, 0.92, 1] }
            }
            transition={
              frozen
                ? { duration: 0 }
                : {
                    duration: isHovering ? 0.8 : 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformBox: "view-box",
              originX: "17px",
              originY: "17px",
            }}
          >
            <path
              d="M6.5 16.8 C6.2 9.6 11 4.6 17 4.6 C23 4.6 27.8 9.6 27.5 16.8 Q25.2 19.2 22.6 17.4 Q19.8 19.6 17 17.6 Q14.2 19.6 11.4 17.4 Q8.8 19.2 6.5 16.8 Z"
              fill={`url(#${uid}-bell)`}
              stroke="#c026d3"
              strokeWidth={0.8}
              strokeLinejoin="round"
            />
            <path
              d="M10.5 15.2 C10.6 10.4 13.5 7.8 17 7.8 C20.5 7.8 23.4 10.4 23.5 15.2 C20.5 16.2 13.5 16.2 10.5 15.2 Z"
              fill="#fdf4ff"
              fillOpacity={0.35}
            />
            <path
              d="M13.2 13.4 A1.6 1.6 0 1 1 16.2 13.4 M17.8 13.4 A1.6 1.6 0 1 1 20.8 13.4"
              stroke="#db2777"
              strokeWidth={0.9}
              strokeLinecap="round"
              opacity={0.55}
            />
            <path
              d="M9.6 11.6 C10.4 8.6 12.6 6.6 15.4 6.1"
              stroke="#ffffff"
              strokeWidth={1.5}
              strokeLinecap="round"
              opacity={0.85}
            />
            <circle cx={21.8} cy={8.4} r={0.9} fill="#ffffff" opacity={0.7} />
            <motion.circle
              cx={9.8}
              cy={15.6}
              r={0.8}
              fill="#a5f3fc"
              initial={{ opacity: 0.35 }}
              animate={
                frozen ? { opacity: 0.35 } : { opacity: [0.35, 1, 0.35] }
              }
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 0.8 : 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "17px",
              }}
            />
            <motion.circle
              cx={13.6}
              cy={16.8}
              r={0.8}
              fill="#a5f3fc"
              initial={{ opacity: 0.35 }}
              animate={
                frozen ? { opacity: 0.35 } : { opacity: [0.35, 1, 0.35] }
              }
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 0.8 : 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.45,
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "17px",
              }}
            />
            <motion.circle
              cx={20.4}
              cy={16.8}
              r={0.8}
              fill="#a5f3fc"
              initial={{ opacity: 0.35 }}
              animate={
                frozen ? { opacity: 0.35 } : { opacity: [0.35, 1, 0.35] }
              }
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 0.8 : 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.9,
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "17px",
              }}
            />
            <motion.circle
              cx={24.2}
              cy={15.6}
              r={0.8}
              fill="#a5f3fc"
              initial={{ opacity: 0.35 }}
              animate={
                frozen ? { opacity: 0.35 } : { opacity: [0.35, 1, 0.35] }
              }
              transition={
                frozen
                  ? { duration: 0 }
                  : {
                      duration: isHovering ? 0.8 : 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.35,
                    }
              }
              style={{
                transformBox: "view-box",
                originX: "17px",
                originY: "17px",
              }}
            />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  );
}
