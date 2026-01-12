"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function MusicCursor({ x, y, isStatic }: { x: number; y: number; isStatic?: boolean }) {
  const [notes, setNotes] = useState<{ id: number; x: number; y: number; rotate: number }[]>([])
  const idCounter = useRef(0)

  useEffect(() => {
    if (isStatic) return;
    const interval = setInterval(() => {
      const newNote = {
        id: idCounter.current++,
        x: (Math.random() - 0.5) * 30,
        y: (Math.random() - 0.5) * 10,
        rotate: (Math.random() - 0.5) * 45,
      }
      setNotes(prev => [...prev.slice(-3), newNote])
    }, 600)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      {/* Floating small notes */}
      <AnimatePresence>
        {notes.map(note => (
          <motion.div
            key={note.id}
            className="absolute text-pink-500 font-bold text-xs"
            initial={{ opacity: 1, y: -20, x: note.x }}
            animate={{ opacity: 0, y: -50, rotate: note.rotate }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            ♪
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main Note */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [-5, 5, -5] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 18V5L21 3V16"
            stroke="#ec4899"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6" cy="18" r="3" fill="#ec4899" />
          <circle cx="18" cy="16" r="3" fill="#ec4899" />
          <path d="M9 5L21 3" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>
    </motion.div>
  )
}
