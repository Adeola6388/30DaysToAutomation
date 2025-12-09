// Mini Shop
// pages/CheckoutPage.js
import { expect } from '@playwright/test';
import { urls } from '../test-data/Credentials';

export class MiniShopPage {
  constructor(page) {
    this.page = page;
    this.firstAddToCartButton = page.locator("(//button[normalize-space()='Add to cart'])[1]");
    this.cartLink = page.locator("//a[contains(@href, '/cart')]");
    this.continueToCheckoutButton = page.locator(
      "//button[normalize-space()='Continue to checkout' or normalize-space()='Checkout']",
    );
    this.emailField = page.locator(
      "//input[@type='email' or contains(@placeholder, 'email') or contains(@name, 'email')]",
    );
    this.passwordField = page.locator(
      "//input[@type='password' or contains(@placeholder, 'password') or contains(@name, 'password')]",
    );
    this.loginButton = page.locator("//button[normalize-space()='Login' or @type='submit']");
  }

  async gotoHome() {
    await this.page.goto(urls.shopHome);
    await expect(this.page).toHaveURL(urls.shopHome);
  }

  async addFirstProductToCart() {
    await expect(this.firstAddToCartButton).toBeEnabled();
    await this.firstAddToCartButton.click();
  }

  async openCart() {
    await this.cartLink.click();
    await expect(this.page).toHaveURL(urls.cart);
  }

  async continueToCheckout() {
    await expect(this.continueToCheckoutButton).toBeEnabled();
    await this.continueToCheckoutButton.click();
  }

  async loginDuringCheckout(username, password) {
    await this.emailField.fill(username);
    await this.passwordField.fill(password);
    await Promise.all([
      this.page.waitForLoadState('networkidle'),
      this.loginButton.click(),
    ]);
  }
}

export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.billingHeading = page.locator("//h1[normalize-space()='Billing Details']");
  }

  async expectLoaded() {
    await this.page.waitForURL('**/checkout', { timeout: 20000 });
    await expect(this.page).toHaveURL(urls.checkout);
    await expect(this.billingHeading).toBeVisible({ timeout: 16000 });
  }
}
