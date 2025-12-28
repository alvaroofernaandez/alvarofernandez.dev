/// <reference path="../../../types/jest-globals.d.ts" />

import { renderHook, waitFor } from "@testing-library/react"
import { useScrollSection } from "../use-scroll-section"

// Mock window and document
const mockScrollY = jest.fn()
const mockGetElementById = jest.fn()

beforeEach(() => {
  Object.defineProperty(window, "scrollY", {
    writable: true,
    value: 0,
    configurable: true,
  })

  Object.defineProperty(window, "addEventListener", {
    writable: true,
    value: jest.fn(),
    configurable: true,
  })

  Object.defineProperty(window, "removeEventListener", {
    writable: true,
    value: jest.fn(),
    configurable: true,
  })

  document.getElementById = mockGetElementById
})

afterEach(() => {
  jest.clearAllMocks()
})

describe("useScrollSection", () => {
  it("returns empty string initially", () => {
    const { result } = renderHook(() => useScrollSection())
    expect(result.current).toBe("")
  })

  it("detects active section on scroll", async () => {
    const mockElement = {
      offsetTop: 100,
      offsetHeight: 200,
    }

    mockGetElementById.mockReturnValue(mockElement)
    Object.defineProperty(window, "scrollY", {
      value: 150,
      writable: true,
      configurable: true,
    })

    const { result } = renderHook(() => useScrollSection())

    // Simulate scroll event
    const scrollHandler = (window.addEventListener as jest.Mock).mock.calls.find(
      (call) => call[0] === "scroll"
    )?.[1]

    if (scrollHandler) {
      scrollHandler()
    }

    await waitFor(() => {
      expect(result.current).toBe("experiencia")
    })
  })
})

