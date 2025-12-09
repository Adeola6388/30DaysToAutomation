// tests/mini-shop.navigation.spec.js
import {test, expect} from 'playwright/test';

test('Mini Shop - Basic Navigation and Assertions', async ({ page }) => {
	// 1. Go to Home Page
    console.log('Step 1 : Go to Mini Shop home page');
    // Navgation
    await page.goto('https://mini-shop.testamplify.com/');
    // Assertions
    await expect(page).toHaveTitle(/Minishop/);
    await expect(page).toHaveURL(/mini-shop\.testamplify\.com/);

    // 2. Assert search bar is visible
    console.log('Step 2. Check that search bar is visible');
    const searchbox = page.getByPlaceholder('Search product, or category');
    // Assertions
    await expect(searchbox).toBeVisible();

    // 3. Click "Products" in the top navbar
    console.log('Step 3: Click Products Link');
    const productsLink = page.getByRole('link', {name: 'Products' }).first();
    await productsLink.click();
    // Assertions
    await expect(page).toHaveURL(/products/);

    // 4. Assert "All products" heading is visible
    console.log('Step 4: Confirm All Products section loaded');
    const allProductsHeading = page.getByRole('heading', {name: /All Products/i });
    // Assertions
    await expect(allProductsHeading).toBeVisible();

    // 5. Navigate BACK to home
    console.log('Step 5:Go back to homepage');
    // Navigation
    await page.goBack();
    // Assertions
    await expect(page).toHaveURL('https://mini-shop.testamplify.com/');

    // 6. Navigate FORWARD back to products
    console.log('Step 6: Go forward to products page again');
    // Navigation
    await page.goForward();
    // Assertions
    await expect(page).toHaveURL(/products/);

    // 7. Assert a product card exists (ist count)
    console.log( 'Step 7: Check that we have product cards');
    const productCards = page.locator('text=Add to cart');
    // Assertions
    await expect(productCards).toHaveCount(4);

    // 8. Assert button is enabled
    console.log('Step 8: Check that first "Add to cart" is enabled');
    // Assertions
    await expect(productCards.first()).toBeEnabled();

    // 9: Assert element is in viewport (heading)
    console.log ('Step 9: Check that All products heading is in viewport');
    // Assertions
    await expect(allProductsHeading).toBeInViewport();

    // 10. Optional check top bar text (toContainText)
    console.log ('Step 10: Check top promo bar text contains "Sign Up"');
    const topBar = page.getByText(/Sign Up & Get 15% Off/i);
    // Assertions
    await expect(topBar).toBeVisible();
});

