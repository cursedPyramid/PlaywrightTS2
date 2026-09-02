// Example from m8-configuration: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, chromium, devices } from '@playwright/test';

const iPad = devices['iPad Pro 11'];

const slowAndHeadless = { headless: false, slowMo: 2000 };

// Define the TypeScript shape of this data object.
interface LocationData {
    latitude: number;
    longitude: number;
}

// A Record maps string keys to values of the specified TypeScript type.
const locationCoordinates: Record<string, LocationData> = {
    London: { latitude: 51.509865, longitude: -0.118092 },
    Rome: { latitude: 41.9027835, longitude: 12.4963655 },
};

const london = locationCoordinates['London'];
const rome = locationCoordinates['Rome'];

// Define a test case (or setup step) with an async function as its body.
test('Test 1', async () => {

    // Launch a browser instance with the supplied options.
    const browser = await chromium.launch(slowAndHeadless);

    // Create an isolated browser context with its own configuration/state.
    const context = await browser.newContext({
        // Emulate the browser being at these geographic coordinates.
        geolocation: { longitude: london.longitude, latitude: london.latitude }
    });
});

// Define a test case (or setup step) with an async function as its body.
test('Test 2', async () => {

    // Launch a browser instance with the supplied options.
    const browser = await chromium.launch(slowAndHeadless);

    // Create an isolated browser context with its own configuration/state.
    const context = await browser.newContext({
        // Set the browser viewport dimensions.
        viewport: iPad.viewport,
        userAgent: iPad.userAgent,
        deviceScaleFactor: iPad.deviceScaleFactor,
        locale: 'en_GB',
        // Emulate the browser being at these geographic coordinates.
        geolocation: { longitude: london.longitude, latitude: london.latitude },
        // Grant the listed browser permissions to the context.
        permissions: ['geolocation'] // refer to https://playwright.dev/docs/api/class-browsercontext#browser-context-grant-permissions
    });

    // Create a new page/tab in the browser context.
    const page = await context.newPage();

    // Navigate the browser page to the specified URL.
    await page.goto('https://maps.google.com');
    // Locate the element by its accessible role/name and click it.
    await page.getByRole('button', { name: 'Accept all' }).click();
    // Locate the element by its accessible role/name and click it.
    await page.getByRole('button', { name: 'Stay on web' }).click();
    // Capture a screenshot of the current page.
    await page.screenshot({ path: 'London-iPad.png' });

});
