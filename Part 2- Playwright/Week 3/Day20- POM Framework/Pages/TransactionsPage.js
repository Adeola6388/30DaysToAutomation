// Mini Bank
// pages/TransactionsPage.js
import { expect } from '@playwright/test';
import { urls } from '../test-data/Credentials';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailField = page.locator(
      "//input[@type='email' or contains(@placeholder, 'email') or contains(@name, 'email')]",
    );
    this.passwordField = page.locator(
      "//input[@type='password' or contains(@placeholder, 'password') or contains(@name, 'password')]",
    );
    this.loginButton = page.locator("//button[normalize-space()='Login' or @type='submit']");
  }

  async navigate() {
    await this.page.goto(urls.login);
    await expect(this.page).toHaveURL(urls.login);
  }

  async login(username, password) {
    await this.emailField.fill(username);
    await this.passwordField.fill(password);
    await Promise.all([
      this.page.waitForURL('**/dashboard', { timeout: 20000 }),
      this.loginButton.click(),
    ]);
    await expect(this.page).toHaveURL(/\/dashboard/);
  }
}

export class TransactionsPage {
  constructor(page) {
    this.page = page;
    this.transactionsNavLink = page.getByRole('link', { name: /^transactions$/i });
    this.transactionsHeader = page.getByRole('heading', { name: /transactions/i });
  }

  async open() {
    await Promise.all([
      this.page.waitForURL('**/dashboard/transactions', { timeout: 20000 }),
      this.transactionsNavLink.click(),
    ]);
    await expect(this.page).toHaveURL(urls.transactions);
  }

  async expectTransactionsNavVisible() {
    await expect(this.transactionsNavLink).toBeVisible();
  }

  async expectTransactionsLoaded() {
    await expect(this.transactionsHeader).toBeVisible({ timeout: 16000 });
  }
}
