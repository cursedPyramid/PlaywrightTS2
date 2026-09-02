// Example from m5-basic-actions: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, expect } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Fill test', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // Locate a form control using its associated accessible label.
    await page.getByLabel('First name').fill('Cursed');

    // Locate a form control using its associated accessible label.
    await page.getByLabel('Date of birth').fill('2023-10-10');

});

// Define a test case (or setup step) with an async function as its body.
test('Click demo', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // Store a locator/result in a constant so it can be reused below.
    const btn = page.getByRole('button', { name: 'Register' });

    // Click the target element.
    await btn.click();
    // Click the target element.
    await btn.click();
    // Click the target element.
    await btn.click();
    // ...

    for (let i = 0; i < 5; i++) {
        // Click the target element.
        await btn.click();
    }

    // Click the target element.
    await btn.click({ clickCount: 5 });

    // Click the target element.
    await btn.click({ button: 'right' });

    // Perform a double-click.
    await btn.dblclick();
    
});
