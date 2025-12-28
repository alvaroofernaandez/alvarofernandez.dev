"use client"

import { memo } from "react"
import React from "react"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/LanguageContext"
import { SITE_CONFIG } from "@/src/constants"
import type { SocialLink } from "@/src/types"

const socialLinks: SocialLink[] = [
  {
    Icon: Github,
    href: SITE_CONFIG.social.github,
    label: "GitHub",
    color: "hover:text-vermilion-400",
  },
  {
    Icon: Linkedin,
    href: SITE_CONFIG.social.linkedin,
    label: "LinkedIn",
    color: "hover:text-vermilion-300",
  },
  {
    Icon: Mail,
    href: SITE_CONFIG.social.email,
    label: "Email",
    color: "hover:text-vermilion-300",
  },
]

function HeroActionsComponent() {
  const { t } = useLanguage()

  return (
    <>
      <Button
        asChild
        variant="outline"
        className="group relative w-full sm:w-auto rounded-full border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/40 transition-all duration-500 font-light px-6 sm:px-7 md:px-8 lg:px-9 py-4 sm:py-5 md:py-6 lg:py-6 text-xs sm:text-sm tracking-wider uppercase overflow-hidden active:scale-95"
      >
        <a
          href={SITE_CONFIG.cv}
          download
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("hero.downloadCV")}
        >
          <span className="relative z-10 flex items-center justify-center">
            <Download className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-y-[-2px]" />
            <span className="hidden sm:inline">{t("hero.downloadCV")}</span>
            <span className="sm:hidden">{t("hero.cv")}</span>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-vermilion-500/20 to-vermilion-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </a>
      </Button>

      <Separator
        orientation="vertical"
        className="bg-white/10 h-6 sm:h-8 hidden sm:block"
      />

      <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
        {socialLinks.map(({ Icon, href, label, color }, index) => (
          <React.Fragment key={label}>
            <a
              href={href}
              aria-label={label}
              className={`relative text-white/50 ${color} transition-all duration-500 hover:scale-110 sm:hover:scale-125 group active:scale-95`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 sm:group-hover:rotate-12" />
              <span className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-150 transition-transform duration-500" />
            </a>
            {index < socialLinks.length - 1 && (
              <Separator
                orientation="vertical"
                className="bg-white/10 h-4 sm:h-5"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export const HeroActions = memo(HeroActionsComponent)

