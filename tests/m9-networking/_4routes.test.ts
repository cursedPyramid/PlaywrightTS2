// Example from m9-networking: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, expect } from '@playwright/test'

// test.use({ javaScriptEnabled: false });

// Define a test case (or setup step) with an async function as its body.
test('Route Abort - JS block', async ({ page }) => {

    // or **/*.{png,jpg,jpeg}
    // Intercept matching network requests and decide how Playwright should handle them.
    page.route('**/*.{js}', route => route.abort());

    // Navigate the browser page to the specified URL.
    await page.goto('/savings.html');
    // Locate an element using its data-testid attribute.
    await page.getByTestId('deposit').fill('10');

    // Locate an element using its data-testid attribute.
    await expect(page.getByTestId('result')).not.toBeVisible();
});

// Define a test case (or setup step) with an async function as its body.
test('Route with a condition', async ({ page }) => {

    // Intercept matching network requests and decide how Playwright should handle them.
    await page.route('**/*', route => {
        // Inspect what kind of resource generated the network request.
        if (route.request().resourceType() === 'script') {
            // Block the intercepted request.
            route.abort();
        } else {
            // Allow the intercepted request to continue to the network.
            route.continue();
        }
    });

    // ...

});

// Define a test case (or setup step) with an async function as its body.
test('Route Fulfill', async ({ page }) => {

    // Intercept matching network requests and decide how Playwright should handle them.
    await page.route('**/*.pdf', route => {
        // Provide a synthetic response instead of allowing the original request to complete normally.
        route.fulfill({
            status: 404,
            contentType: 'text/plain',
            body: 'Not Found!'
        });
    });

    // Navigate the browser page to the specified URL.
    await page.goto('/savings.html');
    // Locate an element by its visible text.
    await page.getByText('Download Our Offer').click();

    // Capture a screenshot of the current page.
    await page.screenshot({ path: 'route.png' });

    // Wait until the page URL matches the supplied pattern.
    await page.waitForURL('**/*.pdf');

    // Store a locator/result in a constant so it can be reused below.
    const body = page.locator('body');

    // Assert the element contains the expected text.
    await expect(body).toContainText('Not Found!');
});
