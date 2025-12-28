"use client"

import { memo, useState } from "react"
import { Briefcase, User, Mail, Languages, BookOpen } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useScrollSection } from "@/src/hooks/use-scroll-section"
import { useClickOutside } from "@/src/hooks/use-click-outside"
import { scrollToSection } from "@/src/utils"
import { NavLogo } from "./nav-logo"
import { NavItem } from "./nav-item"
import { LanguageSelector } from "./language-selector"
import { cn } from "@/src/utils"
import type { NavItem as NavItemType } from "@/src/types"

export const Nav = memo(function Nav() {
  const { t, language, setLanguage } = useLanguage()
  const activeSection = useScrollSection()
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const languageMenuRef = useClickOutside<HTMLDivElement>(() =>
    setShowLanguageMenu(false)
  )

  const navItems: NavItemType[] = [
    {
      id: "experiencia",
      label: t("nav.experiencia"),
      href: "/#experiencia",
      icon: Briefcase,
    },
    {
      id: "sobre-mi",
      label: t("nav.sobreMi"),
      href: "/#sobre-mi",
      icon: User,
    },
    {
      id: "blog",
      label: t("nav.blog"),
      href: "/blog",
      icon: BookOpen,
    },
    {
      id: "contacto",
      label: t("nav.contacto"),
      href: "/#contacto",
      icon: Mail,
    },
  ]

  return (
    <nav className="fixed top-3 left-0 right-0 z-50 animate-fade-in sm:top-4 md:top-6 flex justify-center items-start" suppressHydrationWarning>
      <div className="relative">
        <div
          className={cn(
            "flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5",
            "bg-white/[0.08] backdrop-blur-2xl border border-white/10 rounded-xl sm:rounded-2xl",
            "shadow-2xl shadow-black/60 hover:shadow-black/80 transition-all duration-500 hover:border-white/20"
          )}
        >
          <NavLogo />

          <div className="w-px h-6 sm:h-7 md:h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-1 sm:mx-2" />

          <div className="flex items-center gap-1 sm:gap-1.5">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                isActive={activeSection === item.id}
              />
            ))}
          </div>

          <div className="w-px h-6 sm:h-7 md:h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-1 sm:mx-2" />

          <div ref={languageMenuRef} className="relative language-selector">
            <LanguageSelector
              language={language}
              showMenu={showLanguageMenu}
              onToggle={() => setShowLanguageMenu(!showLanguageMenu)}
              onSelect={(lang) => {
                setLanguage(lang)
                setShowLanguageMenu(false)
              }}
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-vermilion-500/15 via-transparent to-vermilion-700/15 rounded-xl sm:rounded-2xl blur-2xl -z-10 opacity-40 sm:opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </nav>
  )
})

