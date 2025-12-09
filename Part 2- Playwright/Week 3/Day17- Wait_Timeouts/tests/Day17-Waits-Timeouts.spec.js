// tests/day17-waits-timeouts.spec.js
import {test, expect } from "@playwright/test";

test("Day 17 - Handling Waits & Timeouts in Mini Bank", async ({page})=> {
    console.log("Step 1: Go to Mini Bank Login Page");
    await page.setViewportSize({width: 1920, height: 1080});
    await page.goto("https://mini-bank.testamplify.com/login");
    await expect(page).toHaveURL("https://mini-bank.testamplify.com/login");

    console.log ("Step 2: Login to account");
    const emailInput = page.locator(
    "//input[@type='email' or contains(@placeholder, 'email') or contains(@name, 'email')]"
    );
    await emailInput.fill("testuser2@yopmail.com");
    const passwordInput = page.locator(
    "//input[@type='password' or contains(@placeholder, 'password') or contains(@name, 'password')]"
    );
    await passwordInput.fill("Pass2005#");
    const loginBtn = page.locator(
        "//button[normalize-space()='Login' or @type='submit']"
    );
    await loginBtn.click();
    console.log("Step 3: Wait for Dashboard to load");
    await page.waitForLoadState("networkidle");
    const overviewHeader = page.getByRole("heading", { name: /overview/i });
    await expect(overviewHeader).toBeVisible({ timeout: 15000 });


    console.log("Step 4: Wait for Transaction History section");
    await page.waitForSelector("//h2[contains(.,'Recent Transactions')]");
    const transactions = page.locator(
        "//div[contains(@class,'transactions') or contains(.,'Deposit')]"
    );
    await expect(transactions.first()).toBeVisible();

    console.log('Step 5: Click "See All" to open full Transactions page');
    const seeAllBtn = page.locator("//a[contains(.,'See All')]");
    await seeAllBtn.click();
    await page.waitForURL("**/dashboard/transactions");
    await expect(page).toHaveURL(/transactions/);

    console.log("Step 6: Wait for transaction table to load");
    await page.waitForSelector(
    "//table[contains(.,'General') or //h2[text()='Deposit']]"
    );

    const amountCells = page.locator("//td[contains(.,'$')]");

    await expect(amountCells.first()).toBeVisible();
    await expect(amountCells.first()).toContainText("$");

    console.log("Step 7: Demonstrate an intentional short timeout for debugging (not recommended)"
    );
    await page.waitForTimeout(5000);

    console.log("Step: 8 Click the dashboard tab and wait the wrong way");
    const DashboardBtn = page.locator("//span[text()='Dashboard']");
    await DashboardBtn.click();

    console.log("Step 9: Validate that \"Start a transaction\" button is enabled");
    const transactionBtn = page.getByRole("button", {
        name: /start a transaction/i,
    });
    await expect(transactionBtn).toBeEnabled({ timeout: 15000 });
    console.log(
        "TEST COMPLETE: Page loaded properly and waits handled smoothly."
    );

 });
