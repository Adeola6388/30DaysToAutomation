// tests/LoginTest.spec.js
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { credentials } from '../test-data/credentials.js';

test('Login test using LoginPage class', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(credentials.username, credentials.password);
});
