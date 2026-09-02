// Example from m9-networking: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, expect } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Monitoring HTTP Traffic', async ({ page }) => {

    // page.on('console', msg => {
    //    expect(msg.type()).not.toEqual('error');
    // });

    // Register an event listener that remains active for the page.
    page.on('request', request => console.log(`>> ${request.method()} ${request.url()}`));

    // Register an event listener that remains active for the page.
    page.on('response', response => console.log(`<< ${response.status()} ${response.url()}`));

    // Navigate the browser page to the specified URL.
    await page.goto('');

});

// Define a test case (or setup step) with an async function as its body.
test('Testing HTTP Traffic', async ({ page }) => {

    // Register an event listener that remains active for the page.
    page.on('response', response => {
        // A soft assertion records the failure but allows the test to continue.
        expect.soft(response.status(), 
        // Read the HTTP response status code.
        `Response with status ${response.status()} for URL: ${response.url()}`).toBeLessThan(300);
    });

    // Navigate the browser page to the specified URL.
    await page.goto('');

});
