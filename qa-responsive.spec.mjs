import { test, expect } from '@playwright/test'

const widths = [390, 768, 1280]

test.describe('portfolio responsive smoke test', () => {
  for (const width of widths) {
    test(`renders without console errors or horizontal overflow at ${width}px`, async ({ page }) => {
      const errors = []
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text())
      })
      page.on('pageerror', (error) => errors.push(error.message))

      await page.setViewportSize({ width, height: 844 })
      await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' })
      await expect(page).toHaveTitle(/Arjun Ramesh/)
      await expect(page.getByRole('heading', { name: 'Arjun Ramesh' })).toBeVisible()

      const hasNoOverflow = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 2)
      expect(hasNoOverflow).toBeTruthy()

      await page.getByRole('link', { name: /View Work/i }).click()
      await expect(page.getByRole('heading', { name: /Project cards shaped/i })).toBeVisible()

      await page.locator('#contact').scrollIntoViewIfNeeded()
      await expect(page.getByRole('heading', { name: /Let’s build something useful/i })).toBeVisible()

      expect(errors).toEqual([])
    })
  }
})
