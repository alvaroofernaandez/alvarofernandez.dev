"use client"

import { memo } from "react"
import { cn } from "@/src/utils"

export interface SeparatorLineProps {
  className?: string
  orientation?: "horizontal" | "vertical"
}

function SeparatorLineComponent({
  className = "",
  orientation = "horizontal",
}: SeparatorLineProps) {
  if (orientation === "vertical") {
    return (
      <div
        className={cn(
          "w-px h-6 sm:h-7 md:h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-1 sm:mx-2",
          className
        )}
      />
    )
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 max-w-xs sm:max-w-md mx-auto px-4">
      <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-white/20 to-white/40" />
      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-vermilion-500/60 animate-pulse" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/20 to-white/40" />
    </div>
  )
}

export const SeparatorLine = memo(SeparatorLineComponent)

