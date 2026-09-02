// Example from m6-advanced-actions: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Cookies', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // Read the cookies associated with the current browser context.
    console.log(await page.context().cookies());

    // Add a cookie directly to the browser context.
    await page.context().addCookies([{
        name: 'cookie1',
        value: 'abc',
        url: 'https://playwright.dev/'
    }]);

    // Read the cookies associated with the current browser context.
    console.log(await page.context().cookies());

    // Remove cookies from the browser context.
    await page.context().clearCookies();
    // Read the cookies associated with the current browser context.
    console.log(await page.context().cookies());

});
