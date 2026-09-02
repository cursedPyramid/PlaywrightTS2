// Example from m2-setup: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, chromium, webkit, firefox } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Browser support demo', async () => {

    // Repeat the test/action for each item in the collection.
    for (const browserType of [chromium, webkit, firefox]) {

        console.log('Running: ', browserType.name());

        // Launch a browser instance with the supplied options.
        const browser = await browserType.launch();
        // Create a new page/tab in the browser context.
        const page = await browser.newPage();

        // Navigate the browser page to the specified URL.
        await page.goto('https://www.whatsmybrowser.org/');
        // Capture a screenshot of the current page.
        await page.screenshot({ path: `pw-${browserType.name()}.png` });

        // Close the browser resource when it is no longer needed.
        await page.close();
        // Close the browser resource when it is no longer needed.
        await browser.close();

    }
});
