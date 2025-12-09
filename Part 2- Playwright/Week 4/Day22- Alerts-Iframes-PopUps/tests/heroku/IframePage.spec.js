import { test } from "@playwright/test";
import { IframesPage } from "../../pages/heroku/IframePage.js";

// WebKit is unreliable in this environment (context launch timeout), so skip there.
// test.skip(({ browserName }) => browserName === 'webkit', 'Skip on WebKit due to launch timeout in this environment');

test('Iframe:Type text in editor', async ({ page }) => {
    const iframePage = new IframesPage(page);
    await iframePage.goto();
    await iframePage.checkEditor();
    await iframePage.expectedEditorConatins('Your content goes here.');
});
