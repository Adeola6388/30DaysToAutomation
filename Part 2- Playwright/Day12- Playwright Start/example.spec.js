// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('verify that the Docs link opens the Documentation page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the Docs link.
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page).toHaveURL(/docs/);

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
