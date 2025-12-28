"use client"

import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/LanguageContext"
import { MAIN_TECHNOLOGIES } from "@/src/constants"

function AboutStoryComponent() {
  const { t } = useLanguage()

  return (
    <div className="space-y-5 sm:space-y-6 md:space-y-7">
      <div>
        <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-black text-white mb-3 sm:mb-4 md:mb-5 font-heading">
          {t("about.myStory")}
        </h3>
        <div className="w-16 sm:w-18 md:w-20 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-vermilion-500 to-vermilion-700 rounded-full mb-5 sm:mb-6 md:mb-7" />
      </div>
      <div className="space-y-4 sm:space-y-5 md:space-y-6">
        <p className="text-gray-300 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed font-body">
          {t("about.paragraph1")}
        </p>
        <p className="text-gray-300 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed font-body">
          {t("about.paragraph2")}
        </p>
        <p className="text-gray-300 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed font-body">
          {t("about.paragraph3")}
        </p>
      </div>
      <div className="pt-2 sm:pt-4">
        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-3 sm:mb-4 font-medium">
          {t("about.mainTechnologies")}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {MAIN_TECHNOLOGIES.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-vermilion-500/10 text-vermilion-400 border-vermilion-500/30 hover:scale-105 hover:bg-vermilion-500/20 hover:border-vermilion-500/50 transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium group active:scale-95"
            >
              <span className="relative z-10">{tech}</span>
              <span className="absolute inset-0 bg-vermilion-500/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300" />
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export const AboutStory = memo(AboutStoryComponent)

