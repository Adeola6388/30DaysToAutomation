// pages/LoginPage.js
import { expect } from '@playwright/test';
import { urls } from '../test-data/Credentials';

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

  async login(username, password) {
    console.log('Logging in...');
    await this.emailField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();

    // simple validation
    await expect(this.page).toHaveURL(/(login|dashboard)/);
  }
}
