// Example from m8-configuration: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test } from '@playwright/test';

// Override Playwright settings for the following test scope.
test.use({ headless: false });

// Define a test case (or setup step) with an async function as its body.
test('Test 1', async ({ page }) => {
    // Navigate the browser page to the specified URL.
    await page.goto('');
    // Navigate back in the browser history.
    await page.goBack();
    console.log("test");
});
