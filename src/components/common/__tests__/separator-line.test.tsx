/// <reference path="../../../../types/jest-globals.d.ts" />

import { render } from "@testing-library/react"
import { SeparatorLine } from "../separator/separator-line"

describe("SeparatorLine", () => {
  it("renders horizontal separator by default", () => {
    const { container } = render(<SeparatorLine />)
    expect(container.querySelector(".h-px")).toBeInTheDocument()
  })

  it("renders vertical separator when orientation is vertical", () => {
    const { container } = render(<SeparatorLine orientation="vertical" />)
    expect(container.querySelector(".w-px")).toBeInTheDocument()
  })

  it("applies custom className", () => {
    const { container } = render(
      <SeparatorLine className="custom-class" />
    )
    expect(container.firstChild).toHaveClass("custom-class")
  })

  it("has gradient effect on horizontal separator", () => {
    const { container } = render(<SeparatorLine orientation="horizontal" />)
    const gradient = container.querySelector(".bg-gradient-to-r")
    expect(gradient).toBeInTheDocument()
  })
})

