// Example from m6-advanced-actions: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, expect } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Screenshot demo', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    page.goto('/');

    // Locate the element by its accessible role/name and click it.
    await page.getByRole('button', { name: 'Register' }).click();

    // Store a locator/result in a constant so it can be reused below.
    const s: Promise<Buffer> = page.screenshot({
        path: 'screenshots/screenshot.png'
    });

    // Capture a screenshot of the current page.
    page.screenshot({
        path: 'screenshots/screenshot-advanced.jpeg',
        fullPage: true,
        // Locate an element using its data-testid attribute.
        mask: await page.getByTestId('location').all()
    });

    // Locate an element using a CSS selector or other supported selector.
    await expect(page.locator('.invalid-feedback')).toHaveCount(4); // correct count is 3

});
