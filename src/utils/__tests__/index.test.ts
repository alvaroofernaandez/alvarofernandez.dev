/// <reference path="../../../types/jest-globals.d.ts" />

import { cn, scrollToSection, getActiveSection } from "../index"

describe("cn", () => {
  it("merges class names correctly", () => {
    expect(cn("class1", "class2")).toBe("class1 class2")
  })

  it("handles undefined and null values", () => {
    expect(cn("class1", undefined, null, "class2")).toBe("class1 class2")
  })

  it("handles conditional classes", () => {
    expect(cn("class1", false && "class2", true && "class3")).toBe("class1 class3")
  })

  it("merges Tailwind classes correctly", () => {
    expect(cn("px-2 py-1", "px-4")).toContain("px-4")
  })
})

describe("scrollToSection", () => {
  beforeEach(() => {
    // Mock window.scrollTo
    window.scrollTo = jest.fn()
    // Mock getBoundingClientRect
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      top: 100,
      left: 0,
      bottom: 200,
      right: 100,
      width: 100,
      height: 100,
      x: 0,
      y: 0,
      toJSON: jest.fn(),
    }))
    // Mock pageYOffset
    Object.defineProperty(window, "pageYOffset", {
      writable: true,
      value: 0,
    })
  })

  it("scrolls to section when element exists", () => {
    document.body.innerHTML = '<div id="test-section">Test</div>'
    scrollToSection("test-section")
    expect(window.scrollTo).toHaveBeenCalled()
  })

  it("does not scroll when element does not exist", () => {
    scrollToSection("non-existent")
    expect(window.scrollTo).not.toHaveBeenCalled()
  })
})

describe("getActiveSection", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="section1" style="position: absolute; top: 0; height: 100px;"></div>
      <div id="section2" style="position: absolute; top: 100px; height: 100px;"></div>
    `
  })

  it("returns active section when scroll position matches", () => {
    // Mock offsetTop and offsetHeight
    const section1 = document.getElementById("section1")
    if (section1) {
      Object.defineProperty(section1, "offsetTop", { value: 0, writable: true })
      Object.defineProperty(section1, "offsetHeight", { value: 100, writable: true })
    }

    const result = getActiveSection(["section1", "section2"], 50)
    expect(result).toBe("section1")
  })

  it("returns empty string when no section matches", () => {
    const result = getActiveSection(["section1", "section2"], 1000)
    expect(result).toBe("")
  })
})

