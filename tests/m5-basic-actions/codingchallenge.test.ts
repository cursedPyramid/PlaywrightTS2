import { test, expect } from '@playwright/test';

const homeTitle = 'Credit Association';

test('Coding challenge', async ({ page }) => {

    await page.goto('/');

    // Click on register

    await page.getByRole('button', { name: 'Register', exact: true }).click();

    // Check validation messages are visible

    const firstNamefeedback = page.getByText('Valid first name is required');
    const lastNamefeedback = page.getByText('Valid last name is required');
    const emailfeedback = page.getByText('Please enter a valid email address');

    await expect(firstNamefeedback).toBeVisible();
    await expect(lastNamefeedback).toBeVisible();
    await expect(emailfeedback).toBeVisible();

    // Using CSS selectors to locate the validation messages in case the message text changes in the future

    const firstNameFeedback = page.locator('#firstName + .invalid-feedback');
    const lastNameFeedback = page.locator('#lastName + .invalid-feedback');
    const emailFeedback = page.locator('#email + .invalid-feedback');

    await expect(firstNameFeedback).toBeVisible();
    await expect(lastNameFeedback).toBeVisible();
    await expect(emailFeedback).toBeVisible();

    // Refresh the page

    await page.reload();
    await expect(page).toHaveTitle(homeTitle);

    // Check validation messages are no longer visible

    await expect(firstNamefeedback).not.toBeVisible();
    await expect(lastNamefeedback).not.toBeVisible();
    await expect(emailfeedback).not.toBeVisible();

    await expect(firstNameFeedback).not.toBeVisible();
    await expect(lastNameFeedback).not.toBeVisible();
    await expect(emailFeedback).not.toBeVisible();

});