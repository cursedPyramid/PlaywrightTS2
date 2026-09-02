// Example from m7-test-runner: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test } from '@playwright/test';

// Group related tests together.
test.describe.skip('Feature A Group', () => {

    // Define a test case (or setup step) with an async function as its body.
    test('Test A.1', async ({ page }) => {
        // Navigate the browser page to the specified URL.
        await page.goto('');
        console.log("Test A.1");
    });

    // Define a test case (or setup step) with an async function as its body.
    test('Test A.2', async ({ page }) => {
        // Navigate the browser page to the specified URL.
        await page.goto('');
        console.log("Test A.2");
    });
    
});

// Group related tests together.
test.describe('Feature B Group', () => {

    // Define a test case (or setup step) with an async function as its body.
    test.skip(({ browserName }) => browserName === 'chromium', 'Does not work on Chromium, ticket ABC-123');

    // test.skip(browserName === 'chromium', 'Does not work on Chromium, ticket ABC-123'); // Incorrect. Use only to skip individual tests.

    // Define a test case (or setup step) with an async function as its body.
    test('Test B.1', async ({ page }) => {
        // Navigate the browser page to the specified URL.
        await page.goto('');
        console.log("Test B.1");
    });

    // Define a test case (or setup step) with an async function as its body.
    test('Test B.2', async ({ page }) => {
        // Navigate the browser page to the specified URL.
        await page.goto('');
        console.log("Test B.2");
    });

});
