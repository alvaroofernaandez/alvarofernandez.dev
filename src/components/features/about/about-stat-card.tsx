"use client"

import { memo } from "react"
import { CounterAnimation } from "@/src/components/common/animation/counter-animation"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/src/utils"
import type { Stat } from "@/src/types"

export interface AboutStatCardProps {
  stat: Stat
}

function AboutStatCardComponent({ stat }: AboutStatCardProps) {
  const { t } = useLanguage()
  const IconComponent = stat.Icon

  return (
    <div
      className={cn(
        "group relative bg-gradient-to-br",
        stat.bgClass,
        "backdrop-blur-xl p-4 sm:p-5 md:p-6 lg:p-7 rounded-2xl sm:rounded-3xl",
        "border",
        stat.borderClass,
        "hover:border-opacity-50 transition-all duration-500",
        "hover:shadow-2xl",
        stat.shadowClass,
        "hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden active:scale-[0.98]"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-transparent",
          stat.glowClass,
          "to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        )}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2.5 sm:mb-3 md:mb-3.5">
          <div className="text-vermilion-400 opacity-60">
            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </div>
          <div
            className={cn(
              "w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12",
              "rounded-lg sm:rounded-xl bg-gradient-to-br",
              stat.bgClass,
              "border",
              stat.borderClass,
              "flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            )}
          >
            <div
              className={cn(
                "w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full",
                stat.dotClass,
                "animate-pulse"
              )}
            />
          </div>
        </div>
        <h4
          className={cn(
            "text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold",
            stat.colorClass,
            "mb-2 sm:mb-2.5 md:mb-3 font-heading"
          )}
        >
          <CounterAnimation end={stat.value} />
          {stat.value === 100 ? "% " : stat.value === 2 ? "+ " : "+ "}
          {t(`about.${stat.labelKey}`)}
        </h4>
        <p className="text-gray-400 text-sm sm:text-base font-body">
          {t(`about.${stat.descKey}`)}
        </p>
      </div>
    </div>
  )
}

export const AboutStatCard = memo(AboutStatCardComponent)

