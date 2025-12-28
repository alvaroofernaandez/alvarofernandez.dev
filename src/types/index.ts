// Tipos centralizados del proyecto
import type React from "react"

export type Language = "es" | "en"

export interface NavItem {
  id: string
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export interface Experience {
  company: string
  positionKey: string
  periodKey: string
  locationKey: string
  descriptionKey: string
  technologies: string[]
}

export interface Stat {
  labelKey: string
  descKey: string
  value: number
  colorClass: string
  bgClass: string
  borderClass: string
  shadowClass: string
  glowClass: string
  dotClass: string
  Icon: React.ComponentType<{ className?: string }>
}

export interface SocialLink {
  Icon: React.ComponentType<{ className?: string }>
  href: string
  label: string
  color: string
}

export interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
}

