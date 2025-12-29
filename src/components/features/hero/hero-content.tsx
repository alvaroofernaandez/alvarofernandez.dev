"use client"

import { memo } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { TypewriterText } from "@/src/components/common/animation/typewriter-text"
import { SeparatorLine } from "@/src/components/common/separator/separator-line"
import { HeroActions } from "./hero-actions"
import { SITE_CONFIG, ANIMATION_DELAYS } from "@/src/constants"

function HeroContentComponent() {
  const { t } = useLanguage()

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-20 sm:py-24 md:py-28 lg:py-32 text-center">
      <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-9">
        <div className="animate-fade-in">
          <div className="relative inline-block">
            <h1
              itemProp="name"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl text-white tracking-tighter mb-2 sm:mb-3 md:mb-4 font-heading relative z-10 drop-shadow-2xl leading-tight hero-name-extra-bold"
            >
              <TypewriterText text={SITE_CONFIG.name} />
            </h1>
            <div className="absolute inset-0 blur-2xl sm:blur-3xl opacity-15 sm:opacity-20 bg-gradient-to-r from-vermilion-500 via-vermilion-700 to-vermilion-500 animate-pulse" />
          </div>
        </div>

        <div
          className="animate-fade-in"
          style={{ animationDelay: `${ANIMATION_DELAYS.hero.subtitle}ms` }}
        >
          <p
            itemProp="jobTitle"
            className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-300 font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase font-body px-2"
          >
            {t("hero.jobTitle")}
          </p>
        </div>

        <div
          className="animate-fade-in"
          style={{ animationDelay: `${ANIMATION_DELAYS.hero.description}ms` }}
        >
          <p
            itemProp="description"
            className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-300 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-2xl mx-auto font-light leading-relaxed font-body px-4"
          >
            {t("hero.description")}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white font-medium">
                {t("hero.highlight")}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1.5 sm:h-2 bg-vermilion-500/30 -z-0" />
            </span>
          </p>
        </div>

        <div
          className="animate-fade-in"
          style={{ animationDelay: `${ANIMATION_DELAYS.hero.separator}ms` }}
        >
          <SeparatorLine />
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 md:pt-10 animate-fade-in px-4"
          style={{ animationDelay: `${ANIMATION_DELAYS.hero.cta}ms` }}
        >
          <HeroActions />
        </div>
      </div>
    </div>
  )
}

export const HeroContent = memo(HeroContentComponent)

