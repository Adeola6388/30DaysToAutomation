import { test } from '@playwright/test';
import { bankUsers, deposits, customers } from '../test-data/customers.js';
import { LoginPage } from '../Pages/LoginPage.js';
import { DashboardPage } from '../Pages/DashboardPage.js';
import { CheckoutPage } from '../Pages/CheckoutPage.js';

test('Data driven flows', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const checkoutPage = new CheckoutPage(page);

  for (const user of bankUsers) {
    await test.step(`login as ${user.label}`, async () => {
      await loginPage.login(user.email, user.password, { expectSuccess: user.valid });
    });
  }

  for (const amount of deposits) {
    await test.step(`deposit ${amount}`, async () => {
      await dashboardPage.makeDeposit(amount);
    });
  }

  for (const customer of customers) {
    await test.step(`checkout ${customer.name}`, async () => {
      await checkoutPage.checkout(customer);
    });
  }
});
