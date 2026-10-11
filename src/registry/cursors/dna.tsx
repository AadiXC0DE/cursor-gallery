"use client";
import { useId, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";

const CENTER = 18;
const AMPLITUDE = 6;
const TOP = 3;
const BOTTOM = 33;
const TWIST = (2 * Math.PI) / 22; // one full turn every 22px
const RESTING_PHASE = 0.6;
const RUNGS = Array.from({ length: 8 }, (_, i) => 4.6 + i * 3.8);
const PAIRS = [
  ["#facc15", "#34d399"],
  ["#a78bfa", "#fb7185"],
  ["#34d399", "#facc15"],
  ["#fb7185", "#a78bfa"],
];

const offset = (along: number, phase: number) =>
  Math.sin(along * TWIST + phase) * AMPLITUDE;

const strand = (phase: number, side: 1 | -1) => {
  let d = "";
  for (let along = TOP; along <= BOTTOM; along += 1) {
    const x = CENTER + side * offset(along, phase);
    d += `${d ? "L" : "M"}${x.toFixed(2)} ${along}`;
  }
  return d;
};

function Rung({
  along,
  colors,
  phase,
  uid,
}: {
  along: number;
  colors: string[];
  phase: MotionValue<number>;
  uid: string;
}) {
  const left = useTransform(phase, (p) => CENTER + offset(along, p));
  const right = useTransform(phase, (p) => CENTER - offset(along, p));
  // Depth: the node turning toward the viewer grows and brightens.
  const depth = useTransform(phase, (p) => Math.cos(along * TWIST + p));
  const leftRadius = useTransform(depth, (z) => 1.15 + 0.65 * ((z + 1) / 2));
  const rightRadius = useTransform(depth, (z) => 1.15 + 0.65 * ((1 - z) / 2));
  const leftOpacity = useTransform(depth, (z) => 0.55 + 0.45 * ((z + 1) / 2));
  const rightOpacity = useTransform(depth, (z) => 0.55 + 0.45 * ((1 - z) / 2));

  return (
    <g>
      <motion.line
        x1={left}
        x2={CENTER}
        y1={along}
        y2={along}
        stroke={colors[0]}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <motion.line
        x1={CENTER}
        x2={right}
        y1={along}
        y2={along}
        stroke={colors[1]}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <motion.circle
        cx={left}
        cy={along}
        r={leftRadius}
        opacity={leftOpacity}
        fill={`url(#${uid}-cyan)`}
      />
      <motion.circle
        cx={right}
        cy={along}
        r={rightRadius}
        opacity={rightOpacity}
        fill={`url(#${uid}-pink)`}
      />
    </g>
  );
}

export default function DNACursor({
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
  const hovering = !!isHovering && !frozen;
  const uid = useId().replace(/[^a-zA-Z0-9-]/g, "");

  // One phase value drives the whole helix, so speeding up on hover is seamless.
  const phase = useMotionValue(RESTING_PHASE);
  const speed = useRef(1.6);
  useAnimationFrame((_, delta) => {
    if (frozen) return;
    const target = hovering ? 6 : 1.6;
    speed.current += (target - speed.current) * Math.min(1, delta / 250);
    phase.set(phase.get() + (speed.current * delta) / 1000);
  });
  const front = useTransform(phase, (p) => strand(p, 1));
  const back = useTransform(phase, (p) => strand(p, -1));

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        aria-hidden="true"
        initial={{ scale: 1 }}
        animate={{ scale: hovering ? 1.12 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        style={{
          overflow: "visible",
          filter:
            "drop-shadow(0 1px 1px rgba(15,23,42,0.4)) drop-shadow(0 0 6px rgba(168,85,247,0.45))",
        }}
      >
        <defs>
          <radialGradient id={`${uid}-cyan`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ecfeff" />
            <stop offset="45%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0e7490" />
          </radialGradient>
          <radialGradient id={`${uid}-pink`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fdf2f8" />
            <stop offset="45%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#9d174d" />
          </radialGradient>
        </defs>

        <g transform={`rotate(-28 ${CENTER} ${CENTER})`}>
          <motion.path
            d={back}
            fill="none"
            stroke="#ec4899"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          <motion.path
            d={front}
            fill="none"
            stroke="#06b6d4"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          {RUNGS.map((along, i) => (
            <Rung
              key={along}
              along={along}
              colors={PAIRS[i % PAIRS.length]}
              phase={phase}
              uid={uid}
            />
          ))}
        </g>
      </motion.svg>
    </motion.div>
  );
}
