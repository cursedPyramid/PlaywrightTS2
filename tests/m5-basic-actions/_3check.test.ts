// Example from m5-basic-actions: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, expect } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Check test', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('');

    // Store a locator/result in a constant so it can be reused below.
    const checkbox = page.getByRole('checkbox');
    // Store a locator/result in a constant so it can be reused below.
    const textarea = page.locator('#textarea');
    const message = 'msg';

    // Check the checkbox if it is not already checked.
    await checkbox.check();
    
    // Fill the form control with the supplied value.
    await textarea.fill(message);

    // Assert the form control contains the expected value.
    await expect(textarea).toHaveValue(message);
});
