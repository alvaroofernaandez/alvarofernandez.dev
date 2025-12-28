"use client"

import { memo } from "react"
import { cn } from "@/src/utils"
import { scrollToSection } from "@/src/utils"
import type { NavItem as NavItemType } from "@/src/types"

export interface NavItemProps {
  item: NavItemType
  isActive: boolean
}

function NavItemComponent({ item, isActive }: NavItemProps) {
  const Icon = item.icon
  const isExternalLink = item.href.startsWith("/")

  return (
    <a
      href={item.href}
      className={cn(
        "relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12",
        "rounded-lg sm:rounded-xl transition-all duration-500 ease-out group active:scale-95",
        isActive
          ? "bg-vermilion-500/25 border border-vermilion-500/50 scale-105 sm:scale-110 shadow-xl shadow-vermilion-500/30"
          : "bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/25 hover:scale-105 sm:hover:scale-110 hover:shadow-lg"
      )}
      onClick={(e) => {
        if (!isExternalLink) {
          e.preventDefault()
          scrollToSection(item.id)
        }
      }}
      aria-label={item.label}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          isActive ? "bg-vermilion-500/20" : "bg-white/5"
        )}
      />

      <Icon
        className={cn(
          "relative z-10 w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 transition-all duration-500",
          isActive
            ? "text-vermilion-400 scale-105 sm:scale-110"
            : "text-gray-400 group-hover:text-white group-hover:scale-105 sm:group-hover:scale-110 sm:group-hover:rotate-12"
        )}
      />

      <span
        className={cn(
          "hidden sm:block absolute -bottom-14 left-1/2 -translate-x-1/2",
          "px-3 sm:px-4 py-1.5 sm:py-2",
          "bg-black/95 backdrop-blur-xl text-white text-xs font-semibold",
          "rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100",
          "transition-all duration-500 pointer-events-none whitespace-nowrap",
          "shadow-2xl border border-white/10 scale-95 group-hover:scale-100"
        )}
      >
        {item.label}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/95 border-l border-t border-white/10 rotate-45" />
      </span>

      {isActive && (
        <div className="absolute -bottom-1 sm:-bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-vermilion-400 shadow-lg shadow-vermilion-400/50 animate-pulse" />
      )}
    </a>
  )
}

export const NavItem = memo(NavItemComponent)

