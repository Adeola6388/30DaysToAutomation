import { test, expect } from "@playwright/test";
import { EntryAdPage } from "../../pages/heroku/EntryAdPage.js";

test('Pop-up (Entry Ad) appears and can be closed', async ({ page }) => {
    const entryAd = new EntryAdPage(page);
    await entryAd.goto();
    await entryAd.waitForModal();
    await entryAd.closeModal();
});
