"use client"

import { memo } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Section } from "@/src/components/common/section/section"
import { SectionHeader } from "@/src/components/common/section/section-header"
import { ExperienceCard } from "./experience-card"
import { AnimatedTimeline, AnimatedCurve } from "@/src/components/common/animation/svg"
import { experience } from "@/data/experience"

function ExperienceSectionComponent() {
  const { t } = useLanguage()

  return (
    <Section
      id="experiencia"
      className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] relative overflow-hidden"
    >
      {/* Background SVG animations */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatedCurve
          className="absolute top-20 right-10 w-64 h-64 opacity-50"
          width={256}
          height={256}
        />
        <AnimatedCurve
          className="absolute bottom-20 left-10 w-48 h-48 opacity-50"
          width={192}
          height={192}
        />
        
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
        />

        <div className="space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export const ExperienceSection = memo(ExperienceSectionComponent)

