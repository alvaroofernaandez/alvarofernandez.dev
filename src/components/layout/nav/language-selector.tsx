"use client"

import { memo } from "react"
import { Languages } from "lucide-react"
import { cn } from "@/src/utils"
import type { Language } from "@/src/types"

export interface LanguageSelectorProps {
  language: Language
  showMenu: boolean
  onToggle: () => void
  onSelect: (lang: Language) => void
}

function LanguageSelectorComponent({
  language,
  showMenu,
  onToggle,
  onSelect,
}: LanguageSelectorProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className={cn(
          "relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12",
          "rounded-lg sm:rounded-xl bg-white/5 border border-white/5",
          "hover:bg-white/10 hover:border-white/25 hover:scale-105 sm:hover:scale-110",
          "hover:shadow-lg transition-all duration-500 group active:scale-95"
        )}
        aria-label="Seleccionar idioma"
        aria-expanded={showMenu}
      >
        <Languages className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 text-gray-400 group-hover:text-white transition-all duration-500" />
      </button>
      {showMenu && (
        <div className="absolute top-full mt-2 right-0 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 min-w-[120px]">
          <button
            onClick={() => onSelect("es")}
            className={cn(
              "w-full px-4 py-2 text-sm text-left hover:bg-white/10 transition-colors",
              language === "es"
                ? "text-vermilion-400 bg-vermilion-500/10"
                : "text-white"
            )}
          >
            Español
          </button>
          <button
            onClick={() => onSelect("en")}
            className={cn(
              "w-full px-4 py-2 text-sm text-left hover:bg-white/10 transition-colors",
              language === "en"
                ? "text-vermilion-400 bg-vermilion-500/10"
                : "text-white"
            )}
          >
            English
          </button>
        </div>
      )}
    </>
  )
}

export const LanguageSelector = memo(LanguageSelectorComponent)

