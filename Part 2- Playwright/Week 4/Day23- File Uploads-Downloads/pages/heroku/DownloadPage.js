// pages/heroku/DownloadPage.js
import {expect} from '@playwright/test';

export class DownloadPage {
    /** @param {import('@playwright/test').Page} page*/
    constructor(page) {
        this.page = page;
        this.firstFileLink = page.locator('#content a').first();
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/download');
    }

    async downloadFirstFile() {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.firstFileLink.click()
        ]);

        // Useful Info:
        const suggested = download.suggestedFilename();
        const path = await download.path();
        return {suggested, path};
    }

    async expectDownloadedFileName(suggested) {
        await expect.soft(suggested).toBeTruthy();
    }
}
