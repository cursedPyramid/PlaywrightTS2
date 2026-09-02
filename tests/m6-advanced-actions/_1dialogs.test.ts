// Example from m6-advanced-actions: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, expect } from '@playwright/test';

const name = 'Sofia';

// Define a test case (or setup step) with an async function as its body.
test('Dialog test - Default handling is to dismiss', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // Store a locator/result in a constant so it can be reused below.
    const input = page.getByLabel('First name');
    // Fill the form control with the supplied value.
    await input.fill(name);
    // Assert the form control contains the expected value.
    await expect(input).toHaveValue(name);

    // Locate the element by its accessible role/name and click it.
    await page.getByRole('button', { name: 'Clear' }).click();
    // Assert the form control contains the expected value.
    await expect(input).toHaveValue(name);

});

// Define a test case (or setup step) with an async function as its body.
test('Dialog test - OK or Dismiss', async ({ page }) => {

    // Register an event listener that handles the next occurrence only.
    page.once('dialog', dialog => dialog.accept());

    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // Store a locator/result in a constant so it can be reused below.
    const input = page.getByLabel('First name');
    // Fill the form control with the supplied value.
    await input.fill(name);

    // Locate the element by its accessible role/name and click it.
    await page.getByRole('button', { name: 'Clear' }).click();
    // Assert the form control contains the expected value.
    await expect(input).toHaveValue('');
    
});
