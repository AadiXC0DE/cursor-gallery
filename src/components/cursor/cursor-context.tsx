"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";

type CursorStyle = string;

interface CursorStateContextType {
  cursorStyle: CursorStyle;
  isCursorVisible: boolean;
}

interface CursorActionsContextType {
  setCursor: (style: CursorStyle) => void;
  resetCursor: () => void;
  lockCursor: (style: CursorStyle) => void;
  unlockCursor: () => void;
}

// Split into two contexts so components that only *dispatch* cursor changes
// (e.g. every gallery card) never re-render when the active cursor changes.
const CursorStateContext = createContext<CursorStateContextType | undefined>(
  undefined
);
const CursorActionsContext = createContext<
  CursorActionsContextType | undefined
>(undefined);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorStyle, setCursorStyle] = useState<CursorStyle>("default");
  const [isCursorVisible] = useState(true);
  // Ref-based lock keeps all action callbacks referentially stable forever,
  // so the actions context value never changes identity.
  const isLockedRef = useRef(false);

  const setCursor = useCallback((style: CursorStyle) => {
    if (isLockedRef.current) return;
    setCursorStyle(style);
  }, []);

  const resetCursor = useCallback(() => {
    if (isLockedRef.current) return;
    setCursorStyle("default");
  }, []);

  const lockCursor = useCallback((style: CursorStyle) => {
    isLockedRef.current = true;
    setCursorStyle(style);
  }, []);

  const unlockCursor = useCallback(() => {
    isLockedRef.current = false;
    setCursorStyle("default");
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    const enableCustomCursor = () => {
      // Don't enable custom cursor on mobile/touch
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isMobileWidth = window.innerWidth <= 768;

      if (isTouch || isMobileWidth) {
        root.classList.remove("custom-cursor");
        return;
      }

      root.classList.add("custom-cursor");
      // Force a reflow to ensure the cursor is updated
      void root.offsetHeight;
    };

    enableCustomCursor();

    window.addEventListener("focus", enableCustomCursor);
    window.addEventListener("mouseenter", enableCustomCursor);
    window.addEventListener("resize", enableCustomCursor);

    return () => {
      root.classList.remove("custom-cursor");
      window.removeEventListener("focus", enableCustomCursor);
      window.removeEventListener("mouseenter", enableCustomCursor);
      window.removeEventListener("resize", enableCustomCursor);
    };
  }, []);

  const stateValue = useMemo(
    () => ({ cursorStyle, isCursorVisible }),
    [cursorStyle, isCursorVisible]
  );

  const actionsValue = useMemo(
    () => ({ setCursor, resetCursor, lockCursor, unlockCursor }),
    [setCursor, resetCursor, lockCursor, unlockCursor]
  );

  return (
    <CursorActionsContext.Provider value={actionsValue}>
      <CursorStateContext.Provider value={stateValue}>
        {children}
      </CursorStateContext.Provider>
    </CursorActionsContext.Provider>
  );
}

// For components that need to READ the active cursor (e.g. CursorEngine)
export function useCursor() {
  const state = useContext(CursorStateContext);
  const actions = useContext(CursorActionsContext);
  if (state === undefined || actions === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return { ...state, ...actions };
}

// For components that only SET the cursor. Subscribing to the actions
// context alone means zero re-renders when the active cursor style changes.
export function useCursorActions() {
  const context = useContext(CursorActionsContext);
  if (context === undefined) {
    throw new Error("useCursorActions must be used within a CursorProvider");
  }
  return context;
}
