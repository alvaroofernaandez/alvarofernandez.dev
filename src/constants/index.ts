// Constantes centralizadas del proyecto

export const SITE_CONFIG = {
  url: "https://alvarofernandez.hagalink.es",
  name: "Álvaro Fernández",
  jobTitle: "UI/UX Product Designer, Software Engineer",
  email: "cdo@hagalink.es",
  location: {
    city: "Córdoba",
    region: "Andalucía",
    country: "ES",
  },
  social: {
    github: "https://github.com/alvaroofernaandez",
    linkedin: "https://www.linkedin.com/in/alvaroofernaandez/",
    email: "mailto:cdo@hagalink.es",
  },
  cv: "/cv.pdf",
  image: "/img.jpg",
} as const

export const NAV_SECTIONS = ["experiencia", "sobre-mi", "contacto"] as const

export const SCROLL_OFFSET = 80

export const MAIN_TECHNOLOGIES = ["JavaScript", "TypeScript", "React", "Next.js"] as const

export const ANIMATION_DELAYS = {
  hero: {
    subtitle: 200,
    description: 400,
    separator: 500,
    cta: 600,
  },
  section: {
    header: 0.1,
    content: 0.2,
    stats: 0.3,
  },
} as const

