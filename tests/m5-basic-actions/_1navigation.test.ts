// Example from m5-basic-actions: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { expect, test } from '@playwright/test';

const homeTitle = 'Credit Association';
const savingsTitle = 'Save with us';

// Define a test case (or setup step) with an async function as its body.
test('Back, forward, reload (refresh) test', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // Navigate the browser page to the specified URL.
    await page.goto('/savings.html');
    // Assert that the page has the expected title.
    await expect(page).toHaveTitle(savingsTitle);

    // Navigate back in the browser history.
    await page.goBack();
    // Assert that the page has the expected title.
    await expect(page).toHaveTitle(homeTitle);

    // Navigate forward in the browser history.
    await page.goForward();
    // Assert that the page has the expected title.
    await expect(page).toHaveTitle(savingsTitle);

    // Reload the current page.
    await page.reload();
    // Assert that the page has the expected title.
    await expect(page).toHaveTitle(savingsTitle);

});

// Define a test case (or setup step) with an async function as its body.
test('Navigation test', async ({ page }) => {

    // Navigate the browser page to the specified URL within a certain time.
    await page.goto('/', { waitUntil: 'load', timeout: 100 });
    // Assert that the page has the expected title.
    await expect(page).toHaveTitle(homeTitle);
});

// Override Playwright settings for the following test scope.
test.use ({ navigationTimeout: 8000});

// Define a test case (or setup step) with an async function as its body.
test('Load speed while navigating', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/savings.html', { timeout: 5000 });
    // Assert that the page has the expected title.
    await expect(page).toHaveTitle(savingsTitle);

    // Navigate back in the browser history.
    await page.goBack({ timeout: 8000 });
    // Assert that the page has the expected title.
    await expect(page).toHaveTitle(homeTitle);

    // Navigate forward in the browser history.
    await page.goForward();
    // Assert that the page has the expected title.
    await expect(page).toHaveTitle(savingsTitle);

    // Reload the current page.
    await page.reload();
    // Assert that the page has the expected title.
    await expect(page).toHaveTitle(savingsTitle);

});
