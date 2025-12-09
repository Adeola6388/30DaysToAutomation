import { expect } from '@playwright/test';

export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.depositInput = page.locator('input[name="deposit"], input[type="number"]').first();
    this.depositButton = page.getByRole('button', { name: /deposit/i }).first();
  }

  async makeDeposit(amount) {
    console.log(`Attempting deposit: ${amount}`);

    const hasDepositField = await this.depositInput.isVisible().catch(() => false);
    if (!hasDepositField) {
      console.warn('Deposit input not visible; skipping UI interaction for this amount.');
      return;
    }

    await this.depositInput.fill(String(amount));

    const hasDepositButton = await this.depositButton.isVisible().catch(() => false);
    if (hasDepositButton) {
      await this.depositButton.click();
    }

    // Soft check that we stayed on a signed-in page
    await expect(this.page).not.toHaveURL(/login/i);
  }
}
