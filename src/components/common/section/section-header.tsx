"use client"

import { memo, type ReactNode } from "react"
import { cn } from "@/src/utils"

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  titleClassName?: string
}

function SectionHeaderComponent({
  title,
  subtitle,
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20", className)}>
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 md:mb-5",
          titleClassName
        )}
      >
        <span className="bg-gradient-to-r from-vermilion-400 via-vermilion-500 to-vermilion-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-2xl mx-auto text-sm sm:text-base md:text-base lg:text-lg px-4">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export const SectionHeader = memo(SectionHeaderComponent)

