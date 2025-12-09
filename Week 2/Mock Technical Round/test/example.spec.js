import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('https://join.roadtoqa.com');
  await expect(page).toHaveTitle(/Road To QA/i);
});
