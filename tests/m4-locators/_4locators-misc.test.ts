// Example from m4-locators: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, expect } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Multiple matches fails', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // Locate the element by its accessible role/name and click it.
    await page.getByRole('link').click();

});

// Define a test case (or setup step) with an async function as its body.
test('Multiple matches - first, last, nth', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // Store a locator/result in a constant so it can be reused below.
    const buttons = page.getByRole('button');

    // Select the first element from the matched set.
    console.log(await buttons.first().textContent());
    // Select the last element from the matched set.
    console.log(await buttons.last().textContent());
    // Select the element at this zero-based position in the matched set.
    console.log(await buttons.nth(1).textContent());

});

// Define a test case (or setup step) with an async function as its body.
test('Multiple matches test - count or iterate', async ({ page }) => {
    
    // Navigate the browser page to the specified URL.
    await page.goto('/');
    // Locate the element by its accessible role/name and click it.
    await page.getByRole('button', { name: 'Register' }).click();

    // Store a locator/result in a constant so it can be reused below.
    const feedback = page.locator('.invalid-feedback');

    // Assert the locator matches the expected number of elements.
    await expect(feedback).toHaveCount(3);

    // Resolve all currently matched elements into an array of locators.
    for(const message of await feedback.all()) {
        // click, other actions
        console.log(`${await message.textContent()}`);
    }

});
