// Example from m8-configuration: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test } from '@playwright/test';

// Override Playwright settings to all tests in a file.
test.use({
    // geolocation, httpCredentials, viewport, baseURL, javaScriptEnabled, screenshot, video...
    // Create an isolated browser context with its own configuration/state.
    actionTimeout: 3000,                            // browser.newContext()
    navigationTimeout: 5000,
    // Launch a browser instance with the supplied options.
    launchOptions: {slowMo: 2000, headless: true},   // browserType.launch()
    // Emulate the specified time zone in the browser context.
    timezoneId: 'America/New_York'
});

// Define a test case (or setup step) with an async function as its body.
test('Test 1', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('');
    const zone = await getTimeZone(page);
    console.log(zone);

});

// Group related tests together.
test.describe('Group Title', () => {

    // Override Playwright settings to apply to tests inside the describe group.
    test.use({
        // Emulate the specified time zone in the browser context.
        timezoneId: 'America/Toronto' // closer to test and so will override the top-level config
    });

    // Define a test case (or setup step) with an async function as its body.
    test('Test 2', async ({ page }) => {

        // Navigate the browser page to the specified URL.
        await page.goto('');
        const zone = await getTimeZone(page);
        console.log(zone);

    });
});

async function getTimeZone(page) {
    // Execute JavaScript in the context of the loaded web page.
    return await page.evaluate(() => Intl.DateTimeFormat().resolvedOptions().timeZone);
}
