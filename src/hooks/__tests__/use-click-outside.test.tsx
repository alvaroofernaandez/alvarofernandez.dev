/// <reference path="../../../types/jest-globals.d.ts" />

import { renderHook } from "@testing-library/react"
import { useClickOutside } from "../use-click-outside"

describe("useClickOutside", () => {
  let handler: jest.Mock

  beforeEach(() => {
    handler = jest.fn()
    document.addEventListener = jest.fn()
    document.removeEventListener = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("returns a ref object", () => {
    const { result } = renderHook(() => useClickOutside(handler))
    expect(result.current).toHaveProperty("current")
    expect(result.current.current).toBeNull()
  })

  it("adds event listeners on mount", () => {
    renderHook(() => useClickOutside(handler))
    expect(document.addEventListener).toHaveBeenCalledWith(
      "mousedown",
      expect.any(Function)
    )
    expect(document.addEventListener).toHaveBeenCalledWith(
      "touchstart",
      expect.any(Function)
    )
  })

  it("removes event listeners on unmount", () => {
    const { unmount } = renderHook(() => useClickOutside(handler))
    unmount()
    expect(document.removeEventListener).toHaveBeenCalledWith(
      "mousedown",
      expect.any(Function)
    )
    expect(document.removeEventListener).toHaveBeenCalledWith(
      "touchstart",
      expect.any(Function)
    )
  })

  it("calls handler when clicking outside element", () => {
    const { result } = renderHook(() => useClickOutside(handler))

    // Get the listener function
    const listener = (document.addEventListener as jest.Mock).mock.calls.find(
      (call) => call[0] === "mousedown"
    )?.[1]

    // Create a mock element
    const element = document.createElement("div")
    result.current.current = element

    // Create a click event outside the element
    const outsideElement = document.createElement("div")
    const event = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperty(event, "target", {
      value: outsideElement,
      writable: false,
    })

    if (listener) {
      listener(event)
    }

    expect(handler).toHaveBeenCalledWith(event)
  })

  it("does not call handler when clicking inside element", () => {
    const { result } = renderHook(() => useClickOutside(handler))

    const listener = (document.addEventListener as jest.Mock).mock.calls.find(
      (call) => call[0] === "mousedown"
    )?.[1]

    const element = document.createElement("div")
    const childElement = document.createElement("span")
    element.appendChild(childElement)
    result.current.current = element

    const event = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperty(event, "target", {
      value: childElement,
      writable: false,
    })

    if (listener) {
      listener(event)
    }

    expect(handler).not.toHaveBeenCalled()
  })
})

