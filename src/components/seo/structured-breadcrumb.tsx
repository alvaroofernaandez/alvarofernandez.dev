"use client"

import { useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { SITE_CONFIG } from "@/src/constants"

export function StructuredBreadcrumb() {
  const { t } = useLanguage()

  useEffect(() => {
    const scriptId = "structured-breadcrumb"
    let script = document.getElementById(scriptId) as HTMLScriptElement

    if (!script) {
      script = document.createElement("script")
      script.id = scriptId
      script.type = "application/ld+json"
      document.head.appendChild(script)
    }

    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: t("breadcrumb.inicio"),
          item: SITE_CONFIG.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: t("breadcrumb.experiencia"),
          item: `${SITE_CONFIG.url}#experiencia`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: t("breadcrumb.sobreMi"),
          item: `${SITE_CONFIG.url}#sobre-mi`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: t("breadcrumb.contacto"),
          item: `${SITE_CONFIG.url}#contacto`,
        },
      ],
    })
  }, [t])

  return null
}

