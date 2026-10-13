// Example from m3-core-concepts: demonstrates the Playwright feature covered by this exercise.
// By importing the expect function, we can use it to perform assertions in our tests;  expect some fields to be enabled, editable, visible, and even to have CSS.
import { expect, test } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Simple assertions', async () => {

    // Assert that the actual value satisfies the expected condition.
    expect('a').toEqual('a');
    
    // Assert that the actual value satisfies the expected condition.
    expect(2).toBeLessThan(3);
    // Assert that the actual value satisfies the expected condition. This will fail because the actual value is not truthy.
    expect(null).toBeTruthy();

});

// Define a test case (or setup step) with an async function as its body.
// async function is like saying, this part of the code might take some time, but don't wait for it.
// The top‑level function must have async if it contains await inside.
test('Test with simple auto-retrying assertions', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    // await means that the code will wait for the page to load before moving on to the next line of code.
    // await should be used when a function returns a Promise. The code will work without await, but it will not wait for the page to load before moving on to the next line of code.
    await page.goto('http://localhost:3000/');

    // Locate an element using its data-testid attribute.
    await expect(page.getByTestId('location')).toContainText('New York');

    // Assert that the page has the expected title.
    await expect(page).toHaveTitle('Credit Association');
    // Assert that the current URL matches the expected value/pattern.
    await expect(page).toHaveURL('http://localhost:3000/');

});

