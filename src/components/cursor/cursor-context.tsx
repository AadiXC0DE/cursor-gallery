"use client"

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react"

type CursorStyle = string

interface CursorContextType {
  cursorStyle: CursorStyle
  setCursor: (style: CursorStyle) => void
  resetCursor: () => void
  lockCursor: (style: CursorStyle) => void
  unlockCursor: () => void
  isCursorVisible: boolean
}

const CursorContext = createContext<CursorContextType | undefined>(undefined)

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorStyle, setCursorStyle] = useState<CursorStyle>("default")
  const [isLocked, setIsLocked] = useState(false)
  const [isCursorVisible] = useState(true)

  // Memoize callbacks to prevent re-renders in children
  const setCursor = useCallback((style: CursorStyle) => {
    if (isLocked) return
    setCursorStyle(style)
  }, [isLocked])

  const resetCursor = useCallback(() => {
    if (isLocked) return
    setCursorStyle("default")
  }, [isLocked])

  const lockCursor = useCallback((style: CursorStyle) => {
    setCursorStyle(style)
    setIsLocked(true)
  }, [])

  const unlockCursor = useCallback(() => {
    setIsLocked(false)
    setCursorStyle("default")
  }, [])

  useEffect(() => {
    const root = document.documentElement
    
    const enableCustomCursor = () => {
      root.classList.add("custom-cursor")
      // Force a reflow to ensure the cursor is updated
      void root.offsetHeight
    }

    enableCustomCursor()

    window.addEventListener("focus", enableCustomCursor)
    window.addEventListener("mouseenter", enableCustomCursor)
    
    return () => {
      root.classList.remove("custom-cursor")
      window.removeEventListener("focus", enableCustomCursor)
      window.removeEventListener("mouseenter", enableCustomCursor)
    }
  }, [])

  // Memoize context value to prevent re-renders when cursorStyle changes
  // Only CursorEngine needs to react to cursorStyle changes
  const contextValue = useMemo(() => ({
    cursorStyle,
    setCursor,
    resetCursor,
    lockCursor,
    unlockCursor,
    isCursorVisible
  }), [cursorStyle, setCursor, resetCursor, lockCursor, unlockCursor, isCursorVisible])

  return (
    <CursorContext.Provider value={contextValue}>
      {children}
    </CursorContext.Provider>
  )
}

export function useCursor() {
  const context = useContext(CursorContext)
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider")
  }
  return context
}

// Separate hook for components that only need to SET cursor (not read cursorStyle)
// This prevents re-renders when cursorStyle changes
export function useCursorActions() {
  const context = useContext(CursorContext)
  if (context === undefined) {
    throw new Error("useCursorActions must be used within a CursorProvider")
  }
  // Return only the stable, memoized functions
  return useMemo(() => ({
    setCursor: context.setCursor,
    resetCursor: context.resetCursor,
    lockCursor: context.lockCursor,
    unlockCursor: context.unlockCursor
  }), [context.setCursor, context.resetCursor, context.lockCursor, context.unlockCursor])
}
