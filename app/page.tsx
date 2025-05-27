"use client"

import { ParticleBackground } from "@/components/particle-background"
import { Nav } from "@/components/sections/Nav"
import { HeroSection } from "@/components/sections/HeroSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { TechStackSection } from "@/components/sections/TechStackSection"
import { AboutMeSection } from "@/components/sections/AboutMeSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/sections/Footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-gray-100 relative">
      <ParticleBackground />
      <Nav />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <AboutMeSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
