"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translationsLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Siempre inicializar con "es" para evitar problemas de hidratación
  const [language, setLanguageState] = useState<Language>("es")
  const [translations, setTranslations] = useState<Record<string, any>>({})
  const [isMounted, setIsMounted] = useState(false)
  const [translationsLoaded, setTranslationsLoaded] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Cargar idioma desde localStorage solo en el cliente después del mount
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguageState(savedLanguage)
    } else {
      const browserLanguage = navigator.language.split("-")[0] as Language
      if (browserLanguage === "en" || browserLanguage === "es") {
        setLanguageState(browserLanguage)
      }
    }
  }, [])

  useEffect(() => {
    // Cargar traducciones
    setTranslationsLoaded(false)
    import(`@/messages/${language}.json`)
      .then((mod) => {
        setTranslations(mod.default)
        setTranslationsLoaded(true)
      })
      .catch(() => {
        setTranslations({})
        setTranslationsLoaded(true)
      })
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) return key
    }
    
    return typeof value === "string" ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translationsLoaded }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

