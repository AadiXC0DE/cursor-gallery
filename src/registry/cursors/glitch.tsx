"use client";
import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Keyframe timing: calm for most of the cycle, then a short burst of noise.
const TIMES = [0, 0.74, 0.77, 0.8, 0.84, 0.88, 1];

// Horizontal slices of the block, each knocked sideways during a burst.
const SLICES = [
  { y: 6, height: 7, shift: [0, 0, 0, -2, 0, 1, 0], still: 0 },
  { y: 13, height: 5, shift: [0, 0, 4, -3, 2, 0, 0], still: 3 },
  { y: 18, height: 5, shift: [0, 0, -1, 0, -3, 0, 0], still: 0 },
  { y: 23, height: 7, shift: [0, 0, -3, 0, 3, -1, 0], still: -2 },
];

const DEBRIS = [
  { x: 5.5, y: 11, size: 2, fill: "#22d3ee", drift: [0, 0, -2, 1, -3, 0, 0] },
  { x: 29, y: 21, size: 2, fill: "#ff2bd6", drift: [0, 0, 2, 0, 3, -1, 0] },
  {
    x: 28.5,
    y: 8.5,
    size: 1.4,
    fill: "#ffffff",
    drift: [0, 0, 1, -2, 0, 1, 0],
  },
];

export default function GlitchCursor({
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
  const corrupt = !!isHovering && !frozen;
  const uid = useId().replace(/[^a-zA-Z0-9-]/g, "");
  // Hover turns the occasional burst into constant, louder corruption.
  const gain = corrupt ? 1.7 : 1;
  const amplify = (values: number[]) => values.map((value) => value * gain);
  const transition = frozen
    ? { duration: 0 }
    : {
        duration: corrupt ? 0.55 : 2.6,
        times: TIMES,
        repeat: Infinity,
        ease: "linear" as const,
      };

  const block = (
    <rect
      x="12"
      y="6"
      width="12"
      height="24"
      rx="1.6"
      fill={`url(#${uid}-block)`}
      stroke="#09090b"
      strokeOpacity="0.7"
      strokeWidth="0.8"
    />
  );

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        aria-hidden="true"
        style={{
          overflow: "visible",
          filter: "drop-shadow(0 0 6px rgba(34,211,238,0.35))",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-block`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d4d4d8" />
          </linearGradient>
          <pattern
            id={`${uid}-scan`}
            width="3"
            height="3.5"
            patternUnits="userSpaceOnUse"
          >
            <rect width="3" height="0.6" fill="#09090b" opacity="0.08" />
          </pattern>
          {SLICES.map((slice, i) => (
            <clipPath key={i} id={`${uid}-slice-${i}`}>
              <rect x="0" y={slice.y} width="36" height={slice.height} />
            </clipPath>
          ))}
        </defs>

        {/* Red / blue channels split away from the signal */}
        <motion.g
          initial={{ x: frozen ? -2 : -1.5 }}
          animate={
            frozen
              ? { x: -2 }
              : { x: amplify([-1.5, -1.5, -4, -1, -3.5, -1.5, -1.5]) }
          }
          transition={transition}
          opacity="0.95"
        >
          <rect x="12" y="6" width="12" height="24" rx="1.6" fill="#ff2bd6" />
        </motion.g>
        <motion.g
          initial={{ x: frozen ? 2 : 1.5 }}
          animate={
            frozen ? { x: 2 } : { x: amplify([1.5, 1.5, 3.5, 1, 4, 1.5, 1.5]) }
          }
          transition={transition}
          opacity="0.95"
        >
          <rect x="12" y="6" width="12" height="24" rx="1.6" fill="#00e5ff" />
        </motion.g>

        {/* The block itself, sliced and shoved sideways */}
        <motion.g
          initial={{ opacity: 1 }}
          animate={
            frozen ? { opacity: 1 } : { opacity: [1, 1, 0.65, 1, 0.8, 1, 1] }
          }
          transition={transition}
        >
          {SLICES.map((slice, i) => (
            <motion.g
              key={i}
              initial={{ x: frozen ? slice.still : 0 }}
              animate={
                frozen ? { x: slice.still } : { x: amplify(slice.shift) }
              }
              transition={transition}
            >
              <g clipPath={`url(#${uid}-slice-${i})`}>
                {block}
                <rect
                  x="12"
                  y="6"
                  width="12"
                  height="24"
                  rx="1.6"
                  fill={`url(#${uid}-scan)`}
                />
              </g>
            </motion.g>
          ))}
        </motion.g>

        {/* Stray pixels thrown off by the burst */}
        {DEBRIS.map((bit) => (
          <motion.rect
            key={`${bit.x}-${bit.y}`}
            x={bit.x}
            y={bit.y}
            width={bit.size}
            height={bit.size}
            fill={bit.fill}
            stroke="#09090b"
            strokeOpacity="0.35"
            strokeWidth="0.3"
            initial={{ x: 0, opacity: 0.9 }}
            animate={
              frozen
                ? { x: 0, opacity: 0.9 }
                : { x: amplify(bit.drift), opacity: [0, 0, 1, 0.3, 1, 0, 0] }
            }
            transition={transition}
          />
        ))}
      </svg>
    </motion.div>
  );
}
