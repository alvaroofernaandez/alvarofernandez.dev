/// <reference path="../../../types/jest-globals.d.ts" />

import { SITE_CONFIG, NAV_SECTIONS, MAIN_TECHNOLOGIES, SCROLL_OFFSET, ANIMATION_DELAYS } from "../index"

describe("Constants", () => {
  describe("SITE_CONFIG", () => {
    it("has all required properties", () => {
      expect(SITE_CONFIG).toHaveProperty("url")
      expect(SITE_CONFIG).toHaveProperty("name")
      expect(SITE_CONFIG).toHaveProperty("jobTitle")
      expect(SITE_CONFIG).toHaveProperty("email")
      expect(SITE_CONFIG).toHaveProperty("social")
      expect(SITE_CONFIG).toHaveProperty("cv")
      expect(SITE_CONFIG).toHaveProperty("image")
    })

    it("has correct URL format", () => {
      expect(SITE_CONFIG.url).toMatch(/^https?:\/\//)
    })

    it("has social links", () => {
      expect(SITE_CONFIG.social).toHaveProperty("github")
      expect(SITE_CONFIG.social).toHaveProperty("linkedin")
      expect(SITE_CONFIG.social).toHaveProperty("email")
    })
  })

  describe("NAV_SECTIONS", () => {
    it("is a readonly array", () => {
      expect(Array.isArray(NAV_SECTIONS)).toBe(true)
      expect(NAV_SECTIONS.length).toBeGreaterThan(0)
    })

    it("contains expected sections", () => {
      expect(NAV_SECTIONS).toContain("experiencia")
      expect(NAV_SECTIONS).toContain("sobre-mi")
      expect(NAV_SECTIONS).toContain("contacto")
    })
  })

  describe("MAIN_TECHNOLOGIES", () => {
    it("is a readonly array", () => {
      expect(Array.isArray(MAIN_TECHNOLOGIES)).toBe(true)
    })

    it("contains expected technologies", () => {
      expect(MAIN_TECHNOLOGIES).toContain("JavaScript")
      expect(MAIN_TECHNOLOGIES).toContain("TypeScript")
      expect(MAIN_TECHNOLOGIES).toContain("React")
      expect(MAIN_TECHNOLOGIES).toContain("Next.js")
    })
  })

  describe("SCROLL_OFFSET", () => {
    it("is a number", () => {
      expect(typeof SCROLL_OFFSET).toBe("number")
      expect(SCROLL_OFFSET).toBeGreaterThan(0)
    })
  })

  describe("ANIMATION_DELAYS", () => {
    it("has hero delays", () => {
      expect(ANIMATION_DELAYS.hero).toHaveProperty("subtitle")
      expect(ANIMATION_DELAYS.hero).toHaveProperty("description")
      expect(ANIMATION_DELAYS.hero).toHaveProperty("separator")
      expect(ANIMATION_DELAYS.hero).toHaveProperty("cta")
    })

    it("has section delays", () => {
      expect(ANIMATION_DELAYS.section).toHaveProperty("header")
      expect(ANIMATION_DELAYS.section).toHaveProperty("content")
      expect(ANIMATION_DELAYS.section).toHaveProperty("stats")
    })
  })
})

