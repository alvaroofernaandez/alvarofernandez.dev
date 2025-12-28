"use client"

import { memo } from "react"
import { Building, Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/src/utils"
import type { Experience } from "@/src/types"

export interface ExperienceCardProps {
  experience: Experience
  index: number
}

function ExperienceCardComponent({ experience, index }: ExperienceCardProps) {
  const { t } = useLanguage()
  return (
    <Card
      className={cn(
        "group relative bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-xl",
        "border border-vermilion-500/10 rounded-xl sm:rounded-2xl",
        "hover:border-vermilion-500/40 transition-all duration-500",
        "hover:shadow-xl hover:shadow-vermilion-500/20 hover:-translate-y-1",
        "overflow-hidden active:scale-[0.98]",
        "max-w-4xl mx-auto"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-vermilion-500/0 via-vermilion-500/5 to-vermilion-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-vermilion-500/50 via-vermilion-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="p-4 sm:p-5 md:p-6 lg:p-7 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 md:mb-5 gap-3 sm:gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
              <div className="mt-0.5 p-1.5 sm:p-2 rounded-lg bg-vermilion-500/10 border border-vermilion-500/20 group-hover:bg-vermilion-500/20 group-hover:border-vermilion-500/40 transition-all duration-300 flex-shrink-0">
                <Building className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-vermilion-400" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1 sm:mb-1.5 group-hover:text-vermilion-400 transition-colors duration-300 font-heading leading-tight">
                  {t(experience.positionKey)}
                </h3>
                <div className="flex items-center text-vermilion-300 mb-1.5">
                  <span className="font-semibold text-sm sm:text-base">
                    {experience.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col sm:items-end gap-2 sm:gap-2.5 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-vermilion-500/10 border border-vermilion-500/20">
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-vermilion-400 flex-shrink-0" />
              <span className="text-gray-300 font-medium text-xs sm:text-sm whitespace-nowrap">
                {t(experience.periodKey)}
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-vermilion-700/10 border border-vermilion-700/20">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-vermilion-300 flex-shrink-0" />
              <span className="text-gray-300 font-medium text-xs sm:text-sm whitespace-nowrap">
                {t(experience.locationKey)}
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-300 mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base leading-relaxed font-body">
          {t(experience.descriptionKey)}
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="secondary"
              className="bg-vermilion-700/10 text-vermilion-300 border-vermilion-700/30 hover:bg-vermilion-700/20 hover:border-vermilion-700/50 hover:scale-105 transition-all duration-300 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export const ExperienceCard = memo(ExperienceCardComponent)

