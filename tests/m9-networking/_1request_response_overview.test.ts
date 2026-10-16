// Example from m9-networking: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { expect, test } from '@playwright/test';

// Playwright can access network information from the HTTP layer by creating a browser instance using the page fixture.
test('Request / Response overview', async ({ page }) => {

    // Navigation to a URL returns a Promise of a response. This saves the response to a constant.
    const response = await page.goto ('');

    if (response === null) return;

    // Could assert the response with expect but here they are printed
    console.log(response.url());
    // Read the HTTP response status code.
    console.log(response.status());
    // Check whether the HTTP response status code was in the 200-299 range.
    console.log(response.ok());
    // Assert that the actual value satisfies the expected condition.
    expect(response.ok()).toBeTruthy(); // await is not needed here

    // Inspect the HTTP headers returned by the response.
    console.log(await response.allHeaders()); // as object with properties and values
    // Inspect the HTTP headers returned by the response.
    console.log(await response.headersArray());

    // The body function returns a promise of a buffer object, so not immediately readable.
    console.log(await response.body());
    // Use the text function if the text representation of the response body, whether it is JSON or HTML or something else is required.
    //  This will work in this scenario because the response contains HTML. The navigation is to a web page here, and so the payload will be the HTML of that page.
    console.log(await response.text());

    // Alternatively, if JSON is expected, then the JSON function can be invoked.
    // console.log(await response.json()); // will error if response is not parsable json

    //  Invoke the request function and save it as a constant.
    const request = response.request();
    // Inspect the HTTP headers returned by the response.
    console.log(await request.allHeaders());
    console.log(request.method()); // GET

});

// Playwright can be used as a pure API testing tool without creating a browser instance using the request fixture.
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
