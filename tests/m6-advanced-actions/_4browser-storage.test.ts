// Example from m6-advanced-actions: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { expect, test } from '@playwright/test';

const name = 'Sofia';

// Define a test case (or setup step) with an async function as its body.
test('Storage - test from the UI perspective', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // Store a locator/result in a constant so it can be reused below.
    const input = page.getByLabel('First name');
    // Fill the form control with the supplied value.
    await input.fill(name);
    // Reload the current page.
    await page.reload();
    // Assert the form control contains the expected value.
    await expect(input).toHaveValue('');

    // Fill the form control with the supplied value.
    input.fill(name);
    // Locate the element by its accessible role/name and click it.
    await page.getByRole('button', { name: 'Save Input' }).click();
    // Reload the current page.
    await page.reload();
    // Assert the form control contains the expected value.
    await expect(input).toHaveValue(name);

});

// Define a test case (or setup step) with an async function as its body.
test('Local Storage', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/');
    // Locate a form control using its associated accessible label.
    page.getByLabel('First name').fill(name)
    // Locate the element by its accessible role/name and click it.
    await page.getByRole('button', { name: 'Save Input' }).click();

    // Store a snapshot of the storage state so it can be reused below.
    const storage = await page.context().storageState();

    console.log(storage.cookies);
    console.log(storage.origins[0].localStorage);

});

// Define a test case (or setup step) with an async function as its body.
test('Session (or Local) Storage', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // Store a locator/result in a constant so it can be reused below.
    const input = page.getByLabel('First name');
    // Fill the form control with the supplied value.
    input.fill(name);
    // Locate the element by its accessible role/name and click it.
    await page.getByRole('button', { name: 'Save Input' }).click();

    // Store a piece of JavaScript inside the evaluate function. For example, get the localStorage from the global window object, and this function returns a result.
    const storage = await page.evaluate(() => window.localStorage);
    console.log(storage);

    // clear
    await page.evaluate(() => window.localStorage.clear());
    // Reload the current page.
    await page.reload();
    // Assert the form control contains the expected value.
    await expect(input).toHaveValue('');

    // set
    // Here we can set the state, and if it's a big piece of code, it can be wrapped it into a function and pass it in.
    await page.evaluate(setLocalStorage);
    // Reload the current page.
    await page.reload();
    // Assert the form control contains the expected value.
    await expect(input).toHaveValue('Cursed');

});

function setLocalStorage() {
    // Store a value directly in the browser's localStorage.
    localStorage.setItem('firstName', 'Cursed');
}
