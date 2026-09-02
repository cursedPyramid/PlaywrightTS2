// Example from m3-core-concepts: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, expect } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Simple assertions', async () => {

    // Assert that the actual value satisfies the expected condition.
    expect('a').toEqual('a');
    
    // Assert that the actual value satisfies the expected condition.
    expect(2).toBeLessThan(3);
    // Assert that the actual value satisfies the expected condition.
    expect(null).toBeTruthy();

});

// Define a test case (or setup step) with an async function as its body.
test('Test with simple auto-retrying assertions', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('http://localhost:3000/');

    // Locate an element using its data-testid attribute.
    await expect(page.getByTestId('location')).toContainText('New York');

    // Assert that the page has the expected title.
    await expect(page).toHaveTitle('Credit Association');
    // Assert that the current URL matches the expected value/pattern.
    await expect(page).toHaveURL('http://localhost:3000/');

});

