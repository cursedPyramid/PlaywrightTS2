// Example from m4-locators: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, expect } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Recommended built-in locators examples', async ({ page }) => {
    // Navigate the browser page to the specified URL.
    await page.goto('');

    // Store a locator/result in a constant so it can be reused below.
    const firstName = page.getByLabel('First name');
    // Fill the form control with the supplied value.
    await firstName.fill('Sofia');
    // Clear the current value from the input.
    await firstName.clear();

    // Locate a form control using its associated accessible label.
    await page.getByLabel('First name').fill('Cursed');

    // Locate the element by its accessible role/name and click it.
    await page.getByRole('button', { name: 'Register', exact: true }).click();

    // Store a locator/result in a constant so it can be reused below.
    const warning = page.getByText('Valid last name is required');

    // Assert that the element is visible.
    await expect(warning).toBeVisible();

});
