// Mini Shop
// tests/CheckoutPage.spec.js
import { test } from '@playwright/test';
import { MiniShopPage, CheckoutPage } from '../Pages/CheckoutPage';
import { credentials } from '../test-data/Credentials';

test('Add item to cart and navigate to checkout', async ({ page }) => {
  const miniShop = new MiniShopPage(page);
  await miniShop.gotoHome();
  await miniShop.addFirstProductToCart();
  await miniShop.openCart();
  await miniShop.continueToCheckout();

  await miniShop.loginDuringCheckout(credentials.username, credentials.password);
  await miniShop.continueToCheckout();

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.expectLoaded();
});
