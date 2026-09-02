import { test, expect } from '@playwright/test';

test('Request / Response overview', async ({ page }) => {

    const response = await page.goto ('');

    if (response === null) return;

    console.log(response.url());
    console.log(response.status());
    console.log(response.ok());
    expect(response.ok()).toBeTruthy();

    console.log(await response.allHeaders()); // as object with properties and values
    console.log(await response.headersArray());

    console.log(await response.body());
    console.log(await response.text());

    // console.log(await response.json()); // will error if response is not parsable json

    const request = response.request();
    console.log(await request.allHeaders());
    console.log(request.method()); // GET

});

test('Request / Response', async ({ request }) => {

    const response = await request.get('https://api.github.com/');

    console.log(response.ok());
    console.log(response.status());

    console.log(response.headersArray());
    console.log(await response.json());

});