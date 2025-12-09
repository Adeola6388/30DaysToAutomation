// Mini Bank
// tests/TransactionsPage.spec.js
import { test } from '@playwright/test';
import { LoginPage, TransactionsPage } from '../Pages/TransactionsPage';
import { credentials } from '../test-data/Credentials';

test('Verify Transactions button exists & Nav works', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(credentials.username, credentials.password);

  const transactionsPage = new TransactionsPage(page);
  await transactionsPage.expectTransactionsNavVisible();
  await transactionsPage.open();
  await transactionsPage.expectTransactionsLoaded();
});
