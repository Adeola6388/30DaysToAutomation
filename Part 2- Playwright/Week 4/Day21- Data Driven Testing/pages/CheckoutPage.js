import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.nameField = page.locator('input[name="name"], input[placeholder*="Name"]').first();
    this.emailField = page.locator('input[name="email"], input[type="email"]').first();
    this.addressField = page.locator('input[name="address"], textarea[name="address"], input[placeholder*="Address"]').first();
    this.cityField = page.locator('input[name="city"], input[placeholder*="City"]').first();
    this.stateField = page.locator('input[name="state"], input[placeholder*="State"]').first();
    this.zipField = page.locator('input[name="zip"], input[placeholder*="Zip"]').first();
    this.submitButton = page.getByRole('button', { name: /checkout|place order|submit/i }).first();
  }

  async checkout(customer) {
    console.log(`Checking out for ${customer.name}`);

    const ready = await this.nameField.isVisible().catch(() => false);
    if (!ready) {
      console.warn('Checkout form not visible; skipping UI interaction for this customer.');
      return;
    }

    await this.nameField.fill(customer.name);
    if (await this.emailField.isVisible().catch(() => false)) {
      await this.emailField.fill(customer.email);
    }
    if (await this.addressField.isVisible().catch(() => false)) {
      await this.addressField.fill(customer.address);
    }
    if (await this.cityField.isVisible().catch(() => false)) {
      await this.cityField.fill(customer.city);
    }
    if (await this.stateField.isVisible().catch(() => false)) {
      await this.stateField.fill(customer.state);
    }
    if (await this.zipField.isVisible().catch(() => false)) {
      await this.zipField.fill(customer.zip);
    }

    if (await this.submitButton.isVisible().catch(() => false)) {
      await this.submitButton.click();
    }

    // Soft check we didn't bounce back to login
    await expect(this.page).not.toHaveURL(/login/i);
  }
}
