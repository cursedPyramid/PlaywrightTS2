// Example from m5-basic-actions: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, expect } from '@playwright/test';

const homeTitle = 'Credit Association';

// Define a test case (or setup step) with an async function as its body.
test('Coding challenge', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/');

    // Click on register

    // Locate the element by its accessible role/name and click it.
    await page.getByRole('button', { name: 'Register', exact: true }).click();

    // Check validation messages are visible

    // Store a locator/result in a constant so it can be reused below.
    const firstNamefeedback = page.getByText('Valid first name is required');
    // Store a locator/result in a constant so it can be reused below.
    const lastNamefeedback = page.getByText('Valid last name is required');
    // Store a locator/result in a constant so it can be reused below.
    const emailfeedback = page.getByText('Please enter a valid email address');

    // Assert that the element is visible.
    await expect(firstNamefeedback).toBeVisible();
    // Assert that the element is visible.
    await expect(lastNamefeedback).toBeVisible();
    // Assert that the element is visible.
    await expect(emailfeedback).toBeVisible();

    // Using CSS selectors to locate the validation messages in case the message text changes in the future

    // Store a locator/result in a constant so it can be reused below.
    const firstNameFeedback = page.locator('#firstName + .invalid-feedback');
    // Store a locator/result in a constant so it can be reused below.
    const lastNameFeedback = page.locator('#lastName + .invalid-feedback');
    // Store a locator/result in a constant so it can be reused below.
    const emailFeedback = page.locator('#email + .invalid-feedback');

    // Assert that the element is visible.
    await expect(firstNameFeedback).toBeVisible();
    // Assert that the element is visible.
    await expect(lastNameFeedback).toBeVisible();
    // Assert that the element is visible.
    await expect(emailFeedback).toBeVisible();

    // Refresh the page

    // Reload the current page.
    await page.reload();
    // Assert that the page has the expected title.
    await expect(page).toHaveTitle(homeTitle);

    // Check validation messages are no longer visible

    // Assert that the element is visible.
    await expect(firstNamefeedback).not.toBeVisible();
    // Assert that the element is visible.
    await expect(lastNamefeedback).not.toBeVisible();
    // Assert that the element is visible.
    await expect(emailfeedback).not.toBeVisible();

    // Assert that the element is visible.
    await expect(firstNameFeedback).not.toBeVisible();
    // Assert that the element is visible.
    await expect(lastNameFeedback).not.toBeVisible();
    // Assert that the element is visible.
    await expect(emailFeedback).not.toBeVisible();

});
