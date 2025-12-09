import { expect } from "@playwright/test";

export class EntryAdPage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
        this.modal = page.locator('#modal');
        this.modalTitle = page.locator('#modal .modal-title h3');
        this.modalClose = page.getByText('Close', { exact: true });
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/entry_ad', { waitUntil: 'domcontentloaded' });
        await expect(this.page).toHaveURL(/entry_ad/);
    }

    async waitForModal() {
        await expect(this.modal).toBeVisible({ timeout: 15000 });
        await expect(this.modalTitle).toContainText(/This is a modal window/i);
    }

    async closeModal() {
        await this.modalClose.click();
        await expect(this.modal).toBeHidden();
    }
}
