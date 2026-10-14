// Example from m4-locators: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { expect, test } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Generic locators examples', async ({ page }) => {
    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // Locate an element using a CSS selector.
    await page.locator('.needs-validation label[for="firstName"]').fill('Cursed');
    // Locate an element using xpath selector.
    await page.locator('//form//button[2]').click();

    // Locate an element by its visible text.
    await expect(page.getByText('Valid last name is required')).toBeVisible();

});
