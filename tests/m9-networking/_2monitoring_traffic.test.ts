// Example from m9-networking: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { expect, test } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Monitoring HTTP Traffic', async ({ page }) => {

    // page.on('console', msg => {
    //    expect(msg.type()).not.toEqual('error');
    // });

    // Register an event listener that remains active for the page. This allows access the request object. Example output: >> GET http://localhost:3000/
    page.on('request', request => console.log(`>> ${request.method()} ${request.url()}`));

    // Register an event listener that remains active for the page. This allows access to the response object. Example output: << 200 http://localhost:3000/
    page.on('response', response => console.log(`<< ${response.status()} ${response.url()}`));

    // Navigate the browser page to the specified URL.
    await page.goto('');

});

// Define a test case (or setup step) with an async function as its body.
test('Testing HTTP Traffic', async ({ page }) => {

    // Register an event listener that remains active for the page to assert that every response status code is less than 300
    page.on('response', response => {
        expect(response.status()).toBeLessThan(300);
    });

    // However, the above will fail at the first error. The same but with a soft assertion will to see all errors
    page.on('response', response => {
        // A soft assertion records the failure but allows the test to continue.
        expect.soft(response.status()).toBeLessThan(300);
    });

    // However, the above will not provide a helpful message. Example output: Response with status 404 for URL: http://localhost:3000/
    page.on('response', response => {
        // A soft assertion records the failure but allows the test to continue.
        expect.soft(response.status(), 
        // Overload the expect function with a custom message.
        `Response with status ${response.status()} for URL: ${response.url()}`).toBeLessThan(300);
    });

    // Navigate the browser page to the specified URL.
    await page.goto('');

});
