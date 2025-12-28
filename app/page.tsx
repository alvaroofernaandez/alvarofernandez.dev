"use client"

import { Nav } from "@/src/components/layout/nav/nav"
import { StructuredBreadcrumb } from "@/src/components/seo/structured-breadcrumb"
import { HeroSection } from "@/src/components/features/hero/hero-section"
import { ExperienceSection } from "@/src/components/features/experience/experience-section"
import { AboutSection } from "@/src/components/features/about/about-section"
import { ContactSection } from "@/src/components/features/contact/contact-section"

export default function Portfolio() {
  return (
    <>
      <StructuredBreadcrumb />
      <div className="min-h-screen bg-[#0F0F0F] text-gray-100 relative" suppressHydrationWarning>
        <Nav />
        <article itemScope itemType="https://schema.org/Person" suppressHydrationWarning>
          <HeroSection />
          <ExperienceSection />
          <AboutSection />
          <ContactSection />
        </article>
      </div>
    </>
  )
}
