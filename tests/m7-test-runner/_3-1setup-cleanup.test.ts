// Example from m7-test-runner: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { expect, test } from '@playwright/test';

// Test lifecycle hook: Runs once per worker process before all tests.
test.beforeAll('Meaningful description', async () => {

    console.log('Before All setup');

});

// Test lifecycle hook: Runs before every test in the scope.
test.beforeEach('Navigate to Home page', async ({ page }) => {

    console.log('Before each setup');
    // Navigate the browser page to the specified URL.
    page.goto('');

});

// Define a test case (or setup step) with an async function as its body.
test('Test 1', async ({ page }) => {

    console.log('Test 1');
    // Assert the locator matches the expected number of elements.
    await expect(page.getByRole('button')).toHaveCount(3);

});

// Define a test case (or setup step) with an async function as its body.
test('Test 2', async ({ page }) => {

    console.log('Test 2');
    // Assert the locator matches the expected number of elements.
    await expect(page.getByRole('checkbox')).toHaveCount(1);

});

// Test lifecycle hook: Runs after every test in the scope.
test.afterEach('Meaningful description', async () => {

    console.log('After Each cleanup');

});

// Test lifecycle hook: Runs once after the tests in the scope.
test.afterAll('Meaningful description', async () => {

    console.log('After All cleanup');

});
