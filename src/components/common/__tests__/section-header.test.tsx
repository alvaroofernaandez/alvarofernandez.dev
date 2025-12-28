/// <reference path="../../../../types/jest-globals.d.ts" />

import { render, screen } from "@testing-library/react"
import { SectionHeader } from "../section/section-header"

describe("SectionHeader", () => {
  it("renders title correctly", () => {
    render(<SectionHeader title="Test Title" />)
    expect(screen.getByText("Test Title")).toBeInTheDocument()
  })

  it("renders subtitle when provided", () => {
    render(<SectionHeader title="Test Title" subtitle="Test Subtitle" />)
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument()
  })

  it("does not render subtitle when not provided", () => {
    const { container } = render(<SectionHeader title="Test Title" />)
    expect(container.querySelector("p")).not.toBeInTheDocument()
  })

  it("applies custom className", () => {
    const { container } = render(
      <SectionHeader title="Test" className="custom-class" />
    )
    expect(container.firstChild).toHaveClass("custom-class")
  })
})

