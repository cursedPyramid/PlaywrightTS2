// Example from m5-basic-actions: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, expect } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Select test', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/savings.html');

    // Store a locator/result in a constant so it can be reused below.
    const deposit = page.getByTestId('deposit');
    // Store a locator/result in a constant so it can be reused below.
    const period = page.getByTestId('period');
    // Store a locator/result in a constant so it can be reused below.
    const result = page.getByTestId('result');

    // Fill the form control with the supplied value.
    await deposit.fill('100');

    // Select an option from the drop-down control.
    await period.selectOption('6 Months');

    // Assert the element contains the expected text.
    await expect(result).toContainText('After 6 Months you will earn $2.00 on your deposit');

    // Select an option from the drop-down control.
    await period.selectOption({ label: '1 year' });
    // Assert the element contains the expected text.
    await expect(result).toContainText('After 1 Year you will earn $5.00 on your deposit');

});
