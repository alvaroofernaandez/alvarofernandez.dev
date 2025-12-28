/// <reference path="../../../../types/jest-globals.d.ts" />

import { render, screen } from "@testing-library/react"
import { ExperienceCard } from "../experience-card"
import type { Experience } from "@/src/types"

const mockExperience: Experience = {
  company: "Test Company",
  position: "Test Position",
  period: "2024 - Present",
  location: "Test Location",
  description: "Test description",
  technologies: ["React", "TypeScript"],
}

describe("ExperienceCard", () => {
  it("renders company name", () => {
    render(<ExperienceCard experience={mockExperience} index={0} />)
    expect(screen.getByText("Test Company")).toBeInTheDocument()
  })

  it("renders position", () => {
    render(<ExperienceCard experience={mockExperience} index={0} />)
    expect(screen.getByText("Test Position")).toBeInTheDocument()
  })

  it("renders period", () => {
    render(<ExperienceCard experience={mockExperience} index={0} />)
    expect(screen.getByText("2024 - Present")).toBeInTheDocument()
  })

  it("renders location", () => {
    render(<ExperienceCard experience={mockExperience} index={0} />)
    expect(screen.getByText("Test Location")).toBeInTheDocument()
  })

  it("renders description", () => {
    render(<ExperienceCard experience={mockExperience} index={0} />)
    expect(screen.getByText("Test description")).toBeInTheDocument()
  })

  it("renders all technologies", () => {
    render(<ExperienceCard experience={mockExperience} index={0} />)
    expect(screen.getByText("React")).toBeInTheDocument()
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
  })

  it("has timeline indicator on desktop", () => {
    const { container } = render(
      <ExperienceCard experience={mockExperience} index={0} />
    )
    const timelineDot = container.querySelector(".hidden.md\\:block")
    expect(timelineDot).toBeInTheDocument()
  })
})

