//tests/day17-Fail.spec.js
import {test, expect} from '@playwright/test';

test('Timeout Demo: Fails without Wait', async ({ page }) => {
    console.log('Step 1: Go to The Internet Demo site');
    await page.setViewportSize({width: 1920, height: 1080});
    await page.goto('https://the-internet.herokuapp.com/');

    console.log('Step 2: Click Dynamic Loading link');
    await page.click("text=Dynamic Loading");

    console.log('Step 3: Click Example 1');
    await page.getByRole("link", { name: /Example 1.*hidden/i }).click();

    console.log('Step 4: Click Start');
    await page.click("button");

    console.log('Step 5: Wait for "Hello World" to appear');
    await page.waitForSelector("#finish h4", {
        state: "visible",
        timeout: 1000,
    });
    await expect(page.locator("#finish h4")).toHaveText(/hello world/i);

    console.log('Test Completed');

});