/// <reference path="../../../../types/jest-globals.d.ts" />

import { render, screen } from "@testing-library/react"
import { ScrollIndicator } from "../scroll-indicator/scroll-indicator"

describe("ScrollIndicator", () => {
  it("renders scroll indicator", () => {
    const { container } = render(<ScrollIndicator />)
    expect(container.querySelector(".animate-bounce")).toBeInTheDocument()
  })

  it("applies custom className", () => {
    const { container } = render(
      <ScrollIndicator className="custom-class" />
    )
    expect(container.firstChild).toHaveClass("custom-class")
  })

  it("is hidden on small screens", () => {
    const { container } = render(<ScrollIndicator />)
    expect(container.firstChild).toHaveClass("hidden")
    expect(container.firstChild).toHaveClass("sm:block")
  })

  it("has pulse animation on inner element", () => {
    const { container } = render(<ScrollIndicator />)
    const pulseElement = container.querySelector(".animate-pulse")
    expect(pulseElement).toBeInTheDocument()
  })
})

