// tag [@attribute='value]
// Day16-Filling-forms.spec.js


import { test, expect } from '@playwright/test';

test('Day16 - Fill Mini Shop checkout form', async ({ page }) => {
// 1. Go to Mini Shop
console.log('Step 1: Maximize page & Go to Mini Shop home page');
await page.setViewportSize({width: 1920, height: 1080});
await page.goto('https://mini-shop.testamplify.com/');
await expect (page).toHaveURL('https://mini-shop.testamplify.com');

// 2. Add first product to cart (first "Add to cart" on the page)
console.log ('Step 2: Add first product to cart');
const addToCartBtn = page.locator("(//button[normalize-space()='Add to cart'])[1]");
await addToCartBtn.click();

// 3. Open cart (top right icon / link)
console.log('Step 3. Open cart page');
// cart link normally has /cart in href
const cartLink = page.locator("//a[contains(@href, '/cart')]");
await cartLink.click();
await expect(page).toHaveURL("https://mini-shop.testamplify.com/cart");

// 4. Click "Continue to checkout" -> shpuld send you to log in
console.log('Step 4: Click continue to checkout on cart page');
const cartCheckoutBtn = page.locator("//button[normalize-space()='Continue to checkout' or normalize-space()='Checkout']");
await cartCheckoutBtn.click();


// 5. Login page - fill email & password, click login
console.log('Step 5: Login so we can checkout');

// email
const emailInput = page.locator("//input [@type= 'email' or contains(@placeholder, 'email')or contains(@name, 'email')]");
await emailInput.fill('testuser2@yopmail.com');

// password
const passwordInput = page.locator("//input [@type= 'password' or contains(@placeholder, 'password')or contains(@name, 'password')]");
await passwordInput.fill('Pass2005#');

// login button (fixed)
const loginBtn = page.locator("//button[normalize-space()='Login' or @type='submit']");
await loginBtn.click();

// after login we should be sent back to cart / checkout
console.log('Step 6: After login, click contine to checkout again');

// wait to land somewhere
await page.waitForLoadState('networkidle');

// sometimes it returns to cart, so click the button again
const checkoutBtnAgain = page.locator("//button[normalize-space()='Continue to checkout' or normalize-space()='Checkout']");
await checkoutBtnAgain.click();

// 6.5 Assert we are on the checkout page
await expect(page).toHaveURL(/checkout/);
const billingHeading = page.locator("//h1[normalize-space()='Billing Details']");
await expect(billingHeading).toBeVisible();

// 7.Fill billing details (All XPath)
console.log('Step 7: Fill Billing Details form');

// First name
await page.locator("//Label[contains(., 'First name')]/following-sibling::input").fill('Testa');

// Last name
await page.locator("//Label[contains(., 'Last name')]/following-sibling::input").fill('Rossa');

// Country/Region (dropdown)
// Click select
// const countrySelect = page.locator("//label[contains(.,'Country') or contains(.,'Region')]/following-sibling::div//select | //select[contains(@name, 'country'")]""
// await countrySelect.selectOption({label: 'United States (US)' });

// Street Address
await page.getByPlaceholder('House number and street name').fill('201 Test Lane');

// Town / City
await page.locator("//input[@name='town']").fill('Atlanta');

// State
const stateField = page.locator("//input[@placeholder='Choose state']");
await stateField.click();
await page.waitForTimeout(500); // give the dropdown time to render
await page.locator("//div[text()='Georgia']").click();

// Zip Code
await page.locator("//input[@name='zip']").fill('30033');

// Phone
await page.locator("//input[@name='phone']").fill('3125026998');

// Email Address
await page.locator("//input[@name='email']").fill('testuser411@yopmail.com');

// 8. Payment Information  (right side)
console.log('Step 8: Fill payment information');

// Card Number
await page.locator("//input[@name='cardNo']").fill('4242 4242 4242 4242');

// Expiry Date
await page.locator("//label[contains(., 'Expiry') or contains(., 'MM/YYY')]/following-sibling::input").fill('10/26');

// CCV
await page.locator("//input[@name='ccv']").fill('200');

//Card Name
const cardNameField = page.locator("//input[@name='cardName']");
await cardNameField.waitFor({ state: 'visible', timeout: 10000 });
await cardNameField.fill('Testa Rossa');

console.log(' Day 16 form Flow completed successfully (XPath Only),');
});