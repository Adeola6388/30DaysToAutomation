// tag [@attribute='value]
// Day16-HW-OrangeHRM.spec.js

import { test, expect } from '@playwright/test';

test('Day16 - Search for Joseph Evans in Leave List', async ({ page }) => {

  // 1. Go to Orange HRM
  console.log('Step 1: Maximize page & Go to Orange HRM home page');
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await expect(page).toHaveURL(/orangehrmlive\.com\/web\/index\.php\/auth\/login/);

  // 2. Login page
  console.log('Step 2: Login so we can fill out leave list');
  const usernameInput = page.locator("//input[@name='username']");
  await usernameInput.fill('Admin');
  const passwordInput = page.locator("//input[@name='password']");
  await passwordInput.fill('admin123');
  const loginBtn = page.locator("//button[normalize-space()='Login']");
  await expect(loginBtn).toBeVisible();
  await loginBtn.click();

  console.log('Step 3. Land on Dashboard Page');
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // 3. Navigate to Leave section
  // console.log('Step 3: Navigate to Leave page');
  // const leaveBtn = page.locator("//span[text()='Leave']");
  // await expect(leaveBtn).toBeVisible();
  // await leaveBtn.click();
  // await page.waitForLoadState('networkidle');
  // await expect(page).toHaveURL(/leave\/viewLeaveList/);

  // 4. Fill Leave List details
  // console.log('Step 4: Fill Leave List form');
  // const fromDate = page.locator("//label[contains(., 'From Date')]/following::input[1]");
  // await fromDate.fill('2025-06-03');
  // const toDate = page.locator("//label[contains(., 'To Date')]/following::input[1]");
  // await toDate.fill('2025-06-09');

   // Leave Status
  // console.log('Step 4.1: Select leave status');
  // const leaveStatusField = page.locator("//label[contains(., 'Show Leave with Status')]/../following-sibling::div//div[contains(@class,'oxd-select-text-input')]");
  // await expect(leaveStatusField).toBeVisible();
  // await leaveStatusField.click();
  // const scheduledOption = page.locator("//div[@role='option']//span[normalize-space()='Scheduled']");
  // await scheduledOption.waitFor({ state: 'visible' });
  // await scheduledOption.click(); 
  // Leave Type
  // console.log('Step 4.2: Select leave type');
  // const leaveTypeField = page.locator("//label[contains(., 'Leave Type')]/../following-sibling::div//div[contains(@class,'oxd-select-text')]").first();
  // await expect(leaveTypeField).toBeVisible();
  // await leaveTypeField.click();
  // const leaveTypeDropdown = page.locator("//div[@role='listbox']");
  // await leaveTypeDropdown.first().waitFor({ state: 'visible' });
  // const leaveTypeOption = page.locator("//div[@role='option']//span[normalize-space()='CAN - Vacation']");
  // await leaveTypeOption.waitFor({ state: 'visible' });
  // await leaveTypeOption.click();
  
  // console.log('Step 4.0: Enter Employee Name');

  // Click into the Employee Name input box (custom OrangeHRM typeahead)
  // const employeeNameField = page.locator("//label[contains(., 'Employee Name')]/following::input[1]");
  // await expect(employeeNameField).toBeVisible();
  // await employeeNameField.click();
  // await employeeNameField.fill('Joseph Evans');
  // const employeeSuggestion = page.locator("//div[@role='option']//span[contains(normalize-space(), 'Joseph Evans')]");
  // await employeeSuggestion.first().waitFor({ state: 'visible' });
  // await employeeSuggestion.first().click();
  // Sub Unit
  // console.log('Step 4.3: Select sub unit');
  // const subUnitField = page.locator("//label[contains(., 'Sub Unit')]/../following-sibling::div//div[contains(@class,'oxd-select-text-input')]");
  // await expect(subUnitField).toBeVisible();
  // await subUnitField.click();
  // const subUnitOption = page.locator("//div[@role='option']//span[normalize-space()='Administration']");
  // await subUnitOption.waitFor({ state: 'visible' });
  // await subUnitOption.click();

  // Search Button
  // console.log('Step 4.4: Click Search');
  // const searchBtn = page.locator("//button[normalize-space()='Search']");
  // await expect(searchBtn).toBeEnabled();
  // await searchBtn.click();
  
  // Verify results
  // console.log('Step 5: Verify results');
  // const tableLoader = page.locator("//div[contains(@class,'oxd-table-loader') or contains(@class,'oxd-loading-spinner')]");
  // if (await tableLoader.count()) {
  //   await tableLoader.first().waitFor({ state: 'hidden' });
  // }
  // const resultTable = page.locator("//div[contains(@class, 'oxd-table-body')]");
  // await expect(resultTable).toBeVisible({ timeout: 15000 });
});
