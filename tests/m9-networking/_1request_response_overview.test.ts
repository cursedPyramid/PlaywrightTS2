// Example from m9-networking: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, expect } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Request / Response overview', async ({ page }) => {

    // Store a locator/result in a constant so it can be reused below.
    const response = await page.goto ('');

    if (response === null) return;

    console.log(response.url());
    // Read the HTTP response status code.
    console.log(response.status());
    // Check whether the HTTP response status indicates success.
    console.log(response.ok());
    // Assert that the actual value satisfies the expected condition.
    expect(response.ok()).toBeTruthy();

    // Inspect the HTTP headers returned by the response.
    console.log(await response.allHeaders()); // as object with properties and values
    // Inspect the HTTP headers returned by the response.
    console.log(await response.headersArray());

    console.log(await response.body());
    console.log(await response.text());

    // console.log(await response.json()); // will error if response is not parsable json

    // Get the request that produced this response.
    const request = response.request();
    // Inspect the HTTP headers returned by the response.
    console.log(await request.allHeaders());
    console.log(request.method()); // GET

});

// Define a test case (or setup step) with an async function as its body.
test('Request / Response', async ({ request }) => {

    const response = await request.get('https://api.github.com/');

    // Check whether the HTTP response status indicates success.
    console.log(response.ok());
    // Read the HTTP response status code.
    console.log(response.status());

    // Inspect the HTTP headers returned by the response.
    console.log(response.headersArray());
    // Parse the response body as JSON.
    console.log(await response.json());

});
