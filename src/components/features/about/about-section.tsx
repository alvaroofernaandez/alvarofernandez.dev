"use client"

import { memo } from "react"
import { Calendar, Rocket, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Section } from "@/src/components/common/section/section"
import { SectionHeader } from "@/src/components/common/section/section-header"
import { AboutStory } from "./about-story"
import { AboutStatCard } from "./about-stat-card"
import { AnimatedCircle, AnimatedWave } from "@/src/components/common/animation/svg"
import type { Stat } from "@/src/types"

function AboutSectionComponent() {
  const { t } = useLanguage()

  const stats: Stat[] = [
    {
      labelKey: "years",
      descKey: "experienceDev",
      value: 2,
      colorClass: "text-vermilion-400",
      bgClass: "from-vermilion-500/20 to-vermilion-600/10",
      borderClass: "border-vermilion-500/20",
      shadowClass: "hover:shadow-vermilion-500/20",
      glowClass: "via-vermilion-500/10",
      dotClass: "bg-vermilion-400",
      Icon: Calendar,
    },
    {
      labelKey: "projects",
      descKey: "completed",
      value: 8,
      colorClass: "text-vermilion-300",
      bgClass: "from-vermilion-700/20 to-vermilion-800/10",
      borderClass: "border-vermilion-700/20",
      shadowClass: "hover:shadow-vermilion-700/20",
      glowClass: "via-vermilion-700/10",
      dotClass: "bg-vermilion-300",
      Icon: Rocket,
    },
    {
      labelKey: "remote",
      descKey: "flexibleWork",
      value: 100,
      colorClass: "text-vermilion-400",
      bgClass: "from-vermilion-600/20 to-vermilion-700/10",
      borderClass: "border-vermilion-600/20",
      shadowClass: "hover:shadow-vermilion-600/20",
      glowClass: "via-vermilion-600/10",
      dotClass: "bg-vermilion-400",
      Icon: Globe,
    },
  ]

  return (
    <Section
      id="sobre-mi"
      className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] relative overflow-hidden"
    >
      {/* Background SVG animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatedCircle
          className="absolute top-10 right-20 w-32 h-32 opacity-40"
          radius={60}
        />
        <AnimatedCircle
          className="absolute bottom-20 left-10 w-24 h-24 opacity-40"
          radius={45}
        />
        <AnimatedWave
          className="absolute bottom-0 left-0 w-full h-32 opacity-50"
          width={1200}
          height={128}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-14 items-start">
          <AboutStory />
          <div className="space-y-4 sm:space-y-6">
            {stats.map((stat, index) => (
              <AboutStatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export const AboutSection = memo(AboutSectionComponent)

