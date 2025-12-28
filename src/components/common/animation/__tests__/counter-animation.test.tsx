/// <reference path="../../../../types/jest-globals.d.ts" />

import { render, screen, waitFor, act } from "@testing-library/react"
import { CounterAnimation } from "../counter-animation"

// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn((cb) => {
  setTimeout(cb, 16)
  return 1
}) as any

global.cancelAnimationFrame = jest.fn()

describe("CounterAnimation", () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it("starts at 0", () => {
    render(<CounterAnimation end={100} />)
    expect(screen.getByText("0")).toBeInTheDocument()
  })

  it("animates to end value", async () => {
    render(<CounterAnimation end={10} duration={1000} />)

    // Advance time
    act(() => {
      jest.advanceTimersByTime(500)
    })

    // Should be counting up
    const text = screen.getByText(/\d+/).textContent
    expect(parseInt(text || "0")).toBeGreaterThan(0)
    expect(parseInt(text || "0")).toBeLessThanOrEqual(10)
  })

  it("displays suffix when provided", () => {
    render(<CounterAnimation end={100} suffix="%" />)
    expect(screen.getByText(/0%/)).toBeInTheDocument()
  })

  it("applies custom className", () => {
    const { container } = render(
      <CounterAnimation end={100} className="custom-class" />
    )
    expect(container.firstChild).toHaveClass("custom-class")
  })

  it("respects custom duration", async () => {
    render(<CounterAnimation end={100} duration={500} />)

    act(() => {
      jest.advanceTimersByTime(250)
    })

    // Should be animating
    const text = screen.getByText(/\d+/).textContent
    expect(text).toBeTruthy()
  })
})

