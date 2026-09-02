// Example from m8-configuration: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, chromium } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Playwright: top-level API', async ({ playwright }) => {

    // Launch a browser instance with the supplied options.
    const firefoxType = await playwright.firefox.launch();
    // Create an isolated browser context with its own configuration/state.
    const ctx = await firefoxType.newContext();
    // Create a new page/tab in the browser context.
    const page = await ctx.newPage();

    // Navigate the browser page to the specified URL.
    await page.goto('');

    // Launch a browser instance with the supplied options.
    const chromium = await playwright.chromium.launch();
    // ...

});

// Define a test case (or setup step) with an async function as its body.
test('Config of Browser / Context', async () => {

    // Launch a browser instance with the supplied options.
    const browser = await chromium.launch({
        headless: false,
        slowMo: 2000
    });

    // Create an isolated browser context with its own configuration/state.
    const context = await browser.newContext({
        // Base URL used when tests call page.goto() with a relative path.
        baseURL: 'https://google.com/',
        // Emulate the specified time zone in the browser context.
        timezoneId: 'America/New_York',
        locale: 'es-ES',
        // Emulate the browser being at these geographic coordinates.
        geolocation: { longitude: 12.492507, latitude: 41.889938 },
        // Set the browser viewport dimensions.
        viewport: { width: 1280, height: 720 },
        javaScriptEnabled: true, // default, can disable
        acceptDownloads: true,  // default, can disable
    });

    // Create a new page/tab in the browser context.
    const page = await context.newPage();
    // Navigate the browser page to the specified URL.
    await page.goto('');
    // Locate the element by its accessible role/name and click it.
    await page.getByRole('button', {name: 'Aceptar todo'}).click();

});
