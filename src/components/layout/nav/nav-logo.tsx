"use client"

import { memo } from "react"
import { cn } from "@/src/utils"

function NavLogoComponent() {
  return (
    <a
      href="/"
      className={cn(
        "relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12",
        "rounded-lg sm:rounded-xl bg-gradient-to-br from-vermilion-500/25 to-vermilion-600/15",
        "border border-vermilion-500/30 hover:border-vermilion-500/50",
        "transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-vermilion-500/30",
        "group overflow-hidden active:scale-95"
      )}
      aria-label="Ir al inicio"
    >
      <span className="relative z-10 text-base sm:text-lg font-bold bg-gradient-to-r from-vermilion-400 to-vermilion-500 bg-clip-text text-transparent group-hover:from-vermilion-300 group-hover:to-vermilion-400 transition-all duration-300">
        AF
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-vermilion-500/0 via-vermilion-500/20 to-vermilion-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </a>
  )
}

export const NavLogo = memo(NavLogoComponent)

