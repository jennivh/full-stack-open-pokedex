const { test, describe, expect, beforeEach } = require('@playwright/test')

beforeEach(async ({ page }) => {
  await page.goto('/')
})
describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('ivysaur can be navigated to', async ({ page }) => {
    await page.click('text="ivysaur"')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})