/// <reference path="../../../../types/jest-globals.d.ts" />

import { render, screen } from "@testing-library/react"
import { LanguageSelector } from "../language-selector"
import type { Language } from "@/src/types"

describe("LanguageSelector", () => {
  const mockOnToggle = jest.fn()
  const mockOnSelect = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders language button", () => {
    render(
      <LanguageSelector
        language="es"
        showMenu={false}
        onToggle={mockOnToggle}
        onSelect={mockOnSelect}
      />
    )
    expect(screen.getByLabelText("Seleccionar idioma")).toBeInTheDocument()
  })

  it("toggles menu when button is clicked", () => {
    render(
      <LanguageSelector
        language="es"
        showMenu={false}
        onToggle={mockOnToggle}
        onSelect={mockOnSelect}
      />
    )
    const button = screen.getByLabelText("Seleccionar idioma")
    button.click()
    expect(mockOnToggle).toHaveBeenCalledTimes(1)
  })

  it("shows menu when showMenu is true", () => {
    render(
      <LanguageSelector
        language="es"
        showMenu={true}
        onToggle={mockOnToggle}
        onSelect={mockOnSelect}
      />
    )
    expect(screen.getByText("Español")).toBeInTheDocument()
    expect(screen.getByText("English")).toBeInTheDocument()
  })

  it("does not show menu when showMenu is false", () => {
    render(
      <LanguageSelector
        language="es"
        showMenu={false}
        onToggle={mockOnToggle}
        onSelect={mockOnSelect}
      />
    )
    expect(screen.queryByText("Español")).not.toBeInTheDocument()
  })

  it("calls onSelect when language option is clicked", () => {
    render(
      <LanguageSelector
        language="es"
        showMenu={true}
        onToggle={mockOnToggle}
        onSelect={mockOnSelect}
      />
    )
    const englishButton = screen.getByText("English")
    englishButton.click()
    expect(mockOnSelect).toHaveBeenCalledWith("en")
  })

  it("highlights current language", () => {
    render(
      <LanguageSelector
        language="es"
        showMenu={true}
        onToggle={mockOnToggle}
        onSelect={mockOnSelect}
      />
    )
    const spanishButton = screen.getByText("Español").closest("button")
    expect(spanishButton).toHaveClass("text-vermilion-400")
  })
})

