/// <reference path="../../../../types/jest-globals.d.ts" />

import { render, screen } from "@testing-library/react"
import { Section } from "../section/section"

describe("Section", () => {
  it("renders children correctly", () => {
    render(
      <Section>
        <div>Test Content</div>
      </Section>
    )
    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("applies custom className", () => {
    const { container } = render(
      <Section className="custom-class">
        <div>Test</div>
      </Section>
    )
    expect(container.querySelector("section")).toHaveClass("custom-class")
  })

  it("applies id attribute", () => {
    const { container } = render(
      <Section id="test-section">
        <div>Test</div>
      </Section>
    )
    expect(container.querySelector("section")).toHaveAttribute("id", "test-section")
  })
})

