const {test, expect} = require('@playwright/test');
test('comprehensive locator strategies', async ({page}) => {
console.log('=== Playwright Locator Strategies ===');
  await page.goto('https://mini-bank.testamplify.com/');

  // 1. By Role
  const loginButton = page.getByRole('button', {name: 'Login'});
  await expect(loginButton).toBeEnabled();
console.log(' Role Locators working!');

// 2. By Text Content
  console.log('\n--- By Text Content ---');
  const heading = page.getByText('Manage Your Finances Seamlessly');
  await expect(heading).toBeVisible();
console.log(' Text Locators working!');

// 3. By Placeholder Text
  console.log('\n--- By Placeholder Text ---');
  loginButton.click();
  const usernamePlaceholder = page.getByPlaceholder('you@example.com');
  const passwordPlaceholder = page.getByPlaceholder('Enter your password');
  await expect(usernamePlaceholder).toBeVisible();
  await expect(passwordPlaceholder).toBeVisible();
  console.log(' Placeholder Locators working!');
  await usernamePlaceholder.fill('testuser2@yopmail.com');
  await passwordPlaceholder.fill('Pass2005#');

  // 4. By XPath
console.log('\n--- By XPath ---');
const loginButtonByXPath = page.locator('//button[contains(text(),"Login") or @type="submit"]');
await loginButtonByXPath.waitFor({ state: 'visible' });
await loginButtonByXPath.click();
const titleByXPath = page.locator('//h2[contains(text(),"Overview") or contains(text(),"Dashboard")]');
await expect(titleByXPath).toBeVisible({ timeout: 10000 });
console.log('XPath Locators working!');

  // 5. By CSS Selector
   console.log('\n--- By CSS Selector ---');
  const titleByCSS = page.locator('div.flex.justify-between.items-center small.text-gray-400');
  await expect(titleByCSS).toBeVisible();
  console.log(' CSS Selectors working!');

  // Bonus: Forgot Password Link
console.log('\n--- Forgot Password Link ---');

const forgotPasswordLink = page.locator('text=Forgot password');
await forgotPasswordLink.waitFor({ state: 'visible' });
await forgotPasswordLink.click();

await expect(page).toHaveURL(/forgot-password/i);

console.log('✅ Forgot Password Link Locator working!');

});
