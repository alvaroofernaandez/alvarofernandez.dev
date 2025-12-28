"use client"

import { memo } from "react"

export interface ScrollIndicatorProps {
  className?: string
}

function ScrollIndicatorComponent({ className = "" }: ScrollIndicatorProps) {
  return (
    <div
      className={`absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:block ${className}`}
    >
      <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5 sm:p-2">
        <div className="w-1 h-2 sm:h-3 bg-white/40 rounded-full animate-pulse" />
      </div>
    </div>
  )
}

export const ScrollIndicator = memo(ScrollIndicatorComponent)

