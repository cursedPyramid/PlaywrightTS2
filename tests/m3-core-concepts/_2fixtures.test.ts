// Example from m3-core-concepts: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Test with Page fixture', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('https://playwright.dev/');

    console.log("Text content: ", await page.title());
});


// Define a test case (or setup step) with an async function as its body.
test('Other fixtures', async ({ browserName, browser, context, page }) => {

    // Create a new page/tab in the browser context.
    const page1 = await context.newPage();
    // Create a new page/tab in the browser context.
    const page2 = await context.newPage();

});
