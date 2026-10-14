// Example from m4-locators: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Fill test', async ({ page }) => {
    
    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // These ways of locating an element are discouraged in the vast majority of cases.
    // Check the checkbox if it is not already checked.
    await page.check('#heard-about');

    // Fill the form control with the supplied value.
    await page.fill('#textarea', 'So I was thinking the other day...'); // Promise<void> - in other words, they return nothing. They don't return a locator.

});
