"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type CursorStyle = string

interface CursorContextType {
  cursorStyle: CursorStyle
  setCursor: (style: CursorStyle) => void
  resetCursor: () => void
  isCursorVisible: boolean
}

const CursorContext = createContext<CursorContextType | undefined>(undefined)

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorStyle, setCursorStyle] = useState<CursorStyle>("default")
  const [isCursorVisible] = useState(true)

  const setCursor = (style: CursorStyle) => {
    setCursorStyle(style)
  }

  const resetCursor = () => {
    setCursorStyle("default")
  }

  useEffect(() => {
    // Hide default cursor when custom cursor is active?
    // Usually we want to hide it globally via CSS, but maybe toggle here if needed.
    // For now, we'll handle it in CSS body { cursor: none } or similar on specific elements.
    document.documentElement.classList.add("custom-cursor")
    
    return () => {
        document.documentElement.classList.remove("custom-cursor")
    }
  }, [])

  return (
    <CursorContext.Provider value={{ cursorStyle, setCursor, resetCursor, isCursorVisible }}>
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
