import {test, expect} from '@playwright/test';
import { AlertsPage } from '../../pages/heroku/AlertsPage.js';

test('JS Alerts: accept / dismiss / prompt', async ({ page }) => {
    const alerts = new AlertsPage(page);
    await alerts.goto();

    // Accept Simple Alert
    await alerts.triggerAlertAccept();
    await alerts.expectResultsContains('You successfully clicked an alert');

    // Confirm Dismiss Alert
    await alerts.triggerConfirm(false);
    await alerts.expectResultsContains('You clicked: Cancel');

    // Prompt Send Text
    await alerts.triggerPrompt('Playwright');
    await alerts.expectResultsContains('You entered: Playwright');
});