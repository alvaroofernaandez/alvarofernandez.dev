"use client"

import { useEffect } from "react"
import { SITE_CONFIG } from "@/src/constants"

export function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: SITE_CONFIG.name,
      givenName: "Álvaro",
      familyName: "Fernández",
      jobTitle: SITE_CONFIG.jobTitle,
      url: SITE_CONFIG.url,
      image: `${SITE_CONFIG.url}${SITE_CONFIG.image}`,
      sameAs: [SITE_CONFIG.social.github, SITE_CONFIG.social.linkedin],
      email: SITE_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_CONFIG.location.city,
        addressRegion: SITE_CONFIG.location.region,
        addressCountry: SITE_CONFIG.location.country,
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "JavaScript",
        "UI/UX Design",
        "Product Design",
        "Software Engineering",
        "Web Development",
        "Frontend Development",
        "Backend Development",
        "Django",
        "Python",
        "PostgreSQL",
        "NestJS",
        "Docker",
        "Kubernetes",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Aula de Software Libre de la FP de Córdoba",
      },
      worksFor: {
        "@type": "Organization",
        name: "Hagalink",
      },
      description: `${SITE_CONFIG.jobTitle}. Especializado en diseño de productos digitales, desarrollo de software y liderazgo técnico. Más de 2 años de experiencia creando experiencias digitales excepcionales.`,
      hasOccupation: {
        "@type": "Occupation",
        name: SITE_CONFIG.jobTitle,
        occupationLocation: {
          "@type": "City",
          name: SITE_CONFIG.location.city,
        },
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "JavaScript",
          "Django",
          "Python",
        ],
      },
    }

    const professionalService = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: `${SITE_CONFIG.name} - Desarrollo Web`,
      description:
        "Servicios de desarrollo web full stack, aplicaciones React, Next.js y soluciones tecnológicas personalizadas.",
      provider: {
        "@type": "Person",
        name: SITE_CONFIG.name,
      },
      areaServed: "Worldwide",
      serviceType: [
        "Desarrollo Web Full Stack",
        "Desarrollo Frontend",
        "Desarrollo Backend",
        "Consultoría Tecnológica",
      ],
    }

    const website = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${SITE_CONFIG.name} - Portfolio`,
      url: SITE_CONFIG.url,
      description: `Portfolio profesional de ${SITE_CONFIG.name}, ${SITE_CONFIG.jobTitle}. Especializado en diseño de productos digitales y desarrollo de software.`,
      author: {
        "@type": "Person",
        name: SITE_CONFIG.name,
      },
    }

    const scripts = [
      { id: "structured-data-person", data: structuredData },
      { id: "structured-data-service", data: professionalService },
      { id: "structured-data-website", data: website },
    ]

    scripts.forEach(({ id, data }) => {
      let script = document.getElementById(id) as HTMLScriptElement
      if (!script) {
        script = document.createElement("script")
        script.id = id
        script.type = "application/ld+json"
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(data)
    })

    return () => {
      scripts.forEach(({ id }) => {
        const script = document.getElementById(id)
        if (script) script.remove()
      })
    }
  }, [])

  return null
}

