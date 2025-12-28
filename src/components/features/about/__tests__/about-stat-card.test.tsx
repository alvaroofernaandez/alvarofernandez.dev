/// <reference path="../../../../types/jest-globals.d.ts" />

import { render, screen } from "@testing-library/react"
import { AboutStatCard } from "../about-stat-card"
import { Calendar } from "lucide-react"
import type { Stat } from "@/src/types"

const mockStat: Stat = {
  labelKey: "years",
  descKey: "experienceDev",
  value: 2,
  colorClass: "text-vermilion-400",
  bgClass: "from-vermilion-500/20 to-vermilion-600/10",
  borderClass: "border-vermilion-500/20",
  shadowClass: "hover:shadow-vermilion-500/20",
  glowClass: "via-vermilion-500/10",
  dotClass: "bg-vermilion-400",
  Icon: Calendar,
}

// Mock useLanguage hook
jest.mock("@/contexts/LanguageContext", () => ({
  useLanguage: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "about.years": "Años",
        "about.experienceDev": "Experiencia en desarrollo",
      }
      return translations[key] || key
    },
  }),
}))

describe("AboutStatCard", () => {
  it("renders stat card with icon", () => {
    const { container } = render(<AboutStatCard stat={mockStat} />)
    const icon = container.querySelector("svg")
    expect(icon).toBeInTheDocument()
  })

  it("applies correct color classes", () => {
    const { container } = render(<AboutStatCard stat={mockStat} />)
    const card = container.firstChild
    expect(card).toHaveClass("text-vermilion-400")
  })

  it("renders animated counter", () => {
    render(<AboutStatCard stat={mockStat} />)
    // CounterAnimation will render a number
    const counter = document.querySelector("span")
    expect(counter).toBeInTheDocument()
  })

  it("has hover effects", () => {
    const { container } = render(<AboutStatCard stat={mockStat} />)
    const card = container.firstChild
    expect(card).toHaveClass("hover:-translate-y-1")
  })
})

