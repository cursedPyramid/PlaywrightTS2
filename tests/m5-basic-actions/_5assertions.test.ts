// Example from m5-basic-actions: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { expect, test } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Check test', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/');
    // Assert that the page has the expected title.
    await expect(page).toHaveTitle('Credit Association');

    // Store a locator/result in a constant so it can be reused below.
    const checkbox = page.getByRole('checkbox');
    // Store a locator/result in a constant so it can be reused below.
    const textarea = page.locator('#textarea');
    const message = 'Recommended by a friend';

    // Assert that the control is disabled.
    await expect(textarea).toBeDisabled();
    // Assert that the element has no value/content.
    await expect(textarea).toBeEmpty();

    // Check the checkbox if it is not already checked.
    await checkbox.check();
    // Assert that the control is enabled.
    await expect(textarea).toBeEnabled();

    // Fill the form control with the supplied value.
    await textarea.fill(message);
    // Assert the form control contains the expected value.
    await expect(textarea).toHaveValue(message);

    // Locate the element by its accessible role/name and click it.
    await page.getByRole('button', { name: 'Register' }).click();

    // Store a locator/result in a constant so it can be reused below.
    const feedback = page.locator('.invalid-feedback');
    // Assert the locator matches the expected number of elements.
    await expect(feedback).toHaveCount(3);

    // Resolve all currently matched elements into an array of locators.
    for(const message of await feedback.all()) {
        // Assert that the element is visible.
        await expect(message).toBeVisible();
    }

    // Select the first element from the matched set.
    await expect(feedback.first()).toContainText('Valid first name is required');

});

// Define a test case (or setup step) with an async function as its body.
test('Test with negating matchers', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // Locate an element using its data-testid attribute.
    await expect(page.getByTestId('location')).toContainText('New York');

    // Not negates the function.
    await expect(page.getByTestId('location')).not.toContainText('London');
});

// Define a test case (or setup step) with an async function as its body.
test('Test with soft assertions', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // The soft keyword means that the test will keep running even on failure.
    await expect.soft(page.getByTestId('location')).toContainText('Mumbai');
    // Locate an element using its data-testid attribute.
    await expect.soft(page.getByTestId('location')).toContainText('Tokyo');

    // Locate an element using its data-testid attribute.
    await expect(page.getByTestId('location')).toContainText('New York');

});
