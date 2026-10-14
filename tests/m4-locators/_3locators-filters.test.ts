// Example from m4-locators: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Filtering demo', async ({ page }) => {
    
    // Navigate the browser page to the specified URL.
    await page.goto('/savings.html');

    // Store a locator/result in a constant and print the result to the console.
    const rows = page.getByRole('row');
    console.log(await rows.count());

    // Filter and store a locator/result in a constant so it can be reused below.
    const row = page.getByRole('row')
        // Narrow the locator to elements matching the supplied condition.
        .filter({ hasText: 'Competition' });

    console.log(await row.textContent());

    // Store a locator/result in a constant so it can be reused below.
    const cell = page.getByRole('row')
        // Narrow the locator to elements matching the supplied condition.
        .filter({ hasText: 'Competition' })
        .getByRole('cell')
        // Select the element at this zero-based position in the matched set.
        .nth(1);        // 2%

    console.log(await cell.textContent());

});
