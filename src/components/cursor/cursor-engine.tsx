"use client"

import React, { useEffect, useState, useMemo, memo } from "react"
import { useCursor } from "@/components/cursor/cursor-context"
import { CURSORS } from "@/registry/cursors"

// Memoized cursor renderer to prevent unnecessary re-renders
const CursorRenderer = memo(({ 
  Component, 
  x, 
  y 
}: { 
  Component: React.ComponentType<{ x: number; y: number }>
  x: number
  y: number
}) => {
  return <Component x={x} y={y} />
}, (prev, next) => {
  // Only re-render if position changed significantly (> 1px) or component changed
  return (
    prev.Component === next.Component &&
    Math.abs(prev.x - next.x) < 1 &&
    Math.abs(prev.y - next.y) < 1
  )
})

CursorRenderer.displayName = 'CursorRenderer'

export function CursorEngine() {
  const { cursorStyle, isCursorVisible } = useCursor()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hasMoved, setHasMoved] = useState(false)

  // Build cursor map from registry - memoized
  const CURSOR_MAP = useMemo(() => {
    return Object.fromEntries(CURSORS.map(c => [c.id, c.component]))
  }, [])

  // Get the cursor component - memoized based on cursorStyle
  const CursorComponent = useMemo(() => {
    return CURSOR_MAP[cursorStyle] || CURSOR_MAP["default"] || CURSORS[0]?.component
  }, [cursorStyle, CURSOR_MAP])

  useEffect(() => {
    let rafId: number | null = null
    let lastUpdate = 0
    
    const updateMousePosition = (e: MouseEvent) => {
      if (!hasMoved) setHasMoved(true)
      
      // Throttle to ~60fps max
      const now = performance.now()
      if (now - lastUpdate < 16) return
      
      if (rafId) cancelAnimationFrame(rafId)
      
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
        lastUpdate = now
        rafId = null
      })
    }

    window.addEventListener("mousemove", updateMousePosition, { passive: true })
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [hasMoved])

  if (!isCursorVisible || !hasMoved || !CursorComponent) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <CursorRenderer 
        Component={CursorComponent} 
        x={mousePosition.x} 
        y={mousePosition.y} 
      />
    </div>
  )
}
