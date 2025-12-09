//pages/heroku/IframesPage.js
import { expect } from "@playwright/test";

export class IframesPage {
    /** @parm {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
        // Dismiss TinyMCE "upgrade" toast if it appears so the iframe is clickable
        this.closeInfo = page.locator('button.tox-notification__dismiss');
        this.editorFrame = page.frameLocator('iframe[id="mce_0_ifr"]');
        this.editorBody = this.editorFrame.locator('#tinymce p');
        this.heading = page.getByRole('heading', { name: 'An iFrame containing the TinyMCE WYSIWYG Editor' });
    }

    async goto() {
        // WebKit can be slower to finish loading the iframe; wait for DOM before moving on.
        await this.page.goto('https://the-internet.herokuapp.com/iframe', { waitUntil: 'domcontentloaded' });
        await expect(this.heading).toBeVisible();
        await expect(this.editorBody).toBeVisible({ timeout: 40000 });
    }

    async checkEditor() {
        // The TinyMCE toast is intermittent; ignore if not present to avoid test timeouts.
        await this.closeInfo.click({ timeout: 2000 }).catch(() => {});
    }

    async expectedEditorConatins(text) {
        await expect(this.editorBody).toContainText(text);
    }
}