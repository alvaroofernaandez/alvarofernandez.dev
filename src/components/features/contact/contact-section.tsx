"use client"

import { memo } from "react"
import { Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"
import { Section } from "@/src/components/common/section/section"
import { SectionHeader } from "@/src/components/common/section/section-header"
import { AnimatedPath, AnimatedGrid } from "@/src/components/common/animation/svg"
import { ContactForm } from "./contact-form"
import { SITE_CONFIG } from "@/src/constants"

function ContactSectionComponent() {
  const { t } = useLanguage()

  return (
    <Section
      id="contacto"
      className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] relative overflow-hidden"
    >
      {/* Background SVG animations */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <AnimatedGrid
          className="absolute top-0 left-0 w-full h-full"
          size={800}
          rows={8}
          cols={8}
        />
        <AnimatedPath
          className="absolute top-1/4 right-1/4 w-48 h-48 opacity-50"
          path="M50,200 Q100,50 200,200 T350,200"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />
        <div className="max-w-3xl mx-auto">
          <Card className="group relative bg-gradient-to-br from-neutral-900/95 to-neutral-800/90 backdrop-blur-xl border-2 border-vermilion-500/50 shadow-2xl shadow-vermilion-500/30 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-vermilion-500/0 via-vermilion-700/5 to-vermilion-500/0 opacity-100 transition-opacity duration-500 pointer-events-none" />

            <CardContent className="p-5 sm:p-6 md:p-7 lg:p-8 relative z-10">
              <div className="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-vermilion-500/20 to-vermilion-700/20 border border-vermilion-500/30 mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-vermilion-400" />
                  </div>
                  <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-black text-white mb-2.5 sm:mb-3 md:mb-3.5 font-heading">
                    {t("contact.workTogether")}
                  </h3>
                  <p className="text-gray-400 mb-5 sm:mb-6 md:mb-7 lg:mb-8 leading-relaxed text-sm sm:text-base md:text-base lg:text-lg max-w-xs sm:max-w-xl md:max-w-2xl mx-auto font-body px-2">
                    {t("contact.description")}
                  </p>
                </div>

                <ContactForm />

                <div className="pt-4 sm:pt-5 border-t border-vermilion-500/10">
                  <p className="text-center text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                    {t("contact.form.or")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 md:gap-4">
                    <Button
                      asChild
                      variant="outline"
                      className="group/btn relative flex-1 rounded-full border-2 border-vermilion-700/50 bg-vermilion-700/5 text-vermilion-300 hover:bg-vermilion-700/10 hover:border-vermilion-300 transition-all duration-500 hover:scale-105 active:scale-95 py-4 sm:py-5 md:py-6 lg:py-6 text-sm sm:text-base md:text-base lg:text-lg font-semibold backdrop-blur-sm"
                    >
                      <a
                        href={SITE_CONFIG.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 flex items-center justify-center"
                      >
                        <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover/btn:scale-110" />
                        <span>LinkedIn</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}

export const ContactSection = memo(ContactSectionComponent)

