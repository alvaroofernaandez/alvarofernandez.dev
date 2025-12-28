/// <reference path="../../../../types/jest-globals.d.ts" />

import { render, screen, waitFor, act } from "@testing-library/react"
import { TypewriterText } from "../typewriter-text"

// Mock timers
jest.useFakeTimers()

describe("TypewriterText", () => {
  beforeEach(() => {
    jest.clearAllTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
    jest.useFakeTimers()
  })

  it("renders initially with empty text and cursor", () => {
    const { container } = render(<TypewriterText text="Hello" />)
    expect(container.textContent).toContain("|")
  })

  it("types text character by character", async () => {
    const { container } = render(<TypewriterText text="Hi" speed={100} />)

    // Initially empty
    expect(container.textContent).toContain("|")

    // After first character
    act(() => {
      jest.advanceTimersByTime(100)
    })
    await waitFor(() => {
      expect(container.textContent).toMatch(/H/)
    })

    // After second character
    act(() => {
      jest.advanceTimersByTime(100)
    })
    await waitFor(() => {
      expect(container.textContent).toMatch(/Hi/)
    })
  })

  it("applies custom className", () => {
    const { container } = render(
      <TypewriterText text="Test" className="custom-class" />
    )
    expect(container.firstChild).toHaveClass("custom-class")
  })

  it("respects custom speed", () => {
    const { container } = render(<TypewriterText text="Test" speed={200} />)

    act(() => {
      jest.advanceTimersByTime(200)
    })

    // Should have typed one character after 200ms
    expect(container.textContent).toMatch(/T/)
  })

  it("stops typing when text is complete", () => {
    const { container } = render(<TypewriterText text="Hi" speed={100} />)

    // Type all characters
    act(() => {
      jest.advanceTimersByTime(300)
    })

    // Should have complete text
    expect(container.textContent).toMatch(/Hi/)
  })
})

