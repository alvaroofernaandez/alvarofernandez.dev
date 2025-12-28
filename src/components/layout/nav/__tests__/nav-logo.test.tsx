/// <reference path="../../../../types/jest-globals.d.ts" />

import { render, screen } from "@testing-library/react"
import { NavLogo } from "../nav-logo"

describe("NavLogo", () => {
  it("renders logo with AF text", () => {
    render(<NavLogo />)
    expect(screen.getByText("AF")).toBeInTheDocument()
  })

  it("has correct aria label", () => {
    render(<NavLogo />)
    const link = screen.getByLabelText("Ir al inicio")
    expect(link).toBeInTheDocument()
  })

  it("scrolls to top when clicked", () => {
    window.scrollTo = jest.fn()
    render(<NavLogo />)
    const link = screen.getByLabelText("Ir al inicio")
    link.click()
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    })
  })

  it("has href attribute", () => {
    render(<NavLogo />)
    const link = screen.getByLabelText("Ir al inicio")
    expect(link).toHaveAttribute("href", "#")
  })
})

