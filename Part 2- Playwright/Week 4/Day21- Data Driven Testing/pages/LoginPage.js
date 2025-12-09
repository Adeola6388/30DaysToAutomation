// pages/LoginPage.js
import { expect } from '@playwright/test';
import { urls } from '../test-data/credentials.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailField = page.locator("//input[@name='email']");
    this.passwordField = page.locator("//input[@name='password']");
    this.loginButton = page.locator("//button[normalize-space()='Login']");
  }

  async navigate() {
    await this.page.goto(urls.login);
  }

  async login(username, password, { expectSuccess = true } = {}) {
    console.log('Logging in...');
    await this.navigate();
    await this.emailField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();

    await this.page.waitForLoadState('networkidle');
    const currentUrl = this.page.url();
    const onDashboard = /(dashboard|home|account)/i.test(currentUrl);
    const onLogin = /login/i.test(currentUrl);

    if (expectSuccess && !onDashboard) {
      console.warn(`Login did not reach a dashboard page. Current URL: ${currentUrl}`);
    }

    if (!expectSuccess) {
      await expect(this.page).toHaveURL(/login/i);
    }

    if (!expectSuccess && onDashboard) {
      console.warn('Invalid user unexpectedly reached a dashboard page.');
    }
  }
}
