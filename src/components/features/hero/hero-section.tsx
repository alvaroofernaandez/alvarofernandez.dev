"use client"

import { memo } from "react"
import { Section } from "@/src/components/common/section/section"
import { HeroBackground } from "./hero-background"
import { HeroContent } from "./hero-content"
import { ScrollIndicator } from "@/src/components/common/scroll-indicator/scroll-indicator"

function HeroSectionComponent() {
  return (
    <Section className="relative min-h-screen flex items-center justify-center overflow-hidden" suppressHydrationWarning>
      <HeroBackground />
      <HeroContent />
      <ScrollIndicator />
    </Section>
  )
}

export const HeroSection = memo(HeroSectionComponent)

