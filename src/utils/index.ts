// Utilidades centralizadas
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs))
}

export const scrollToSection = (id: string, offset: number = 80): void => {
  const element = document.getElementById(id)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

export const getActiveSection = (sections: readonly string[], scrollPosition: number): string => {
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        return section
      }
    }
  }
  return ""
}

