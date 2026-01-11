"use client"

import React, { useEffect, useState, useMemo } from "react"
import { useCursor } from "@/components/cursor/cursor-context"
import { CURSORS } from "@/registry/cursors"

export function CursorEngine() {
  const { cursorStyle, isCursorVisible } = useCursor()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hasMoved, setHasMoved] = useState(false)

  // Build cursor map from registry
  const CURSOR_MAP = useMemo(() => {
    return Object.fromEntries(CURSORS.map(c => [c.id, c.component]))
  }, [])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!hasMoved) setHasMoved(true)
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [hasMoved])

  if (!isCursorVisible || !hasMoved) return null

  const CursorComponent = CURSOR_MAP[cursorStyle] || CURSOR_MAP["default"] || CURSORS[0]?.component

  if (!CursorComponent) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
        <CursorComponent x={mousePosition.x} y={mousePosition.y} />
    </div>
  )
}
