/// <reference path="../../../../types/jest-globals.d.ts" />

import { render, screen } from "@testing-library/react"
import { NavItem } from "../nav-item"
import { Briefcase } from "lucide-react"
import type { NavItem as NavItemType } from "@/src/types"

const mockItem: NavItemType = {
  id: "test-section",
  label: "Test Section",
  href: "#test-section",
  icon: Briefcase,
}

describe("NavItem", () => {
  beforeEach(() => {
    window.scrollTo = jest.fn()
  })

  it("renders nav item with label", () => {
    render(<NavItem item={mockItem} isActive={false} />)
    expect(screen.getByLabelText("Test Section")).toBeInTheDocument()
  })

  it("applies active styles when active", () => {
    const { container } = render(<NavItem item={mockItem} isActive={true} />)
    const link = container.querySelector("a")
    expect(link).toHaveClass("bg-vermilion-500/25")
  })

  it("applies inactive styles when not active", () => {
    const { container } = render(<NavItem item={mockItem} isActive={false} />)
    const link = container.querySelector("a")
    expect(link).toHaveClass("bg-white/5")
  })

  it("scrolls to section when clicked", () => {
    document.getElementById = jest.fn(() => {
      const element = document.createElement("div")
      element.id = "test-section"
      return element
    })

    render(<NavItem item={mockItem} isActive={false} />)
    const link = screen.getByLabelText("Test Section")
    link.click()
    expect(window.scrollTo).toHaveBeenCalled()
  })

  it("shows active indicator when active", () => {
    const { container } = render(<NavItem item={mockItem} isActive={true} />)
    const indicator = container.querySelector(".animate-pulse")
    expect(indicator).toBeInTheDocument()
  })
})

