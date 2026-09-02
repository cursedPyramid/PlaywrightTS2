// Example from m7-test-runner: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, expect } from '@playwright/test';

// test.skip(); // Unconditional skip - it will always take effect.

// Define a test case (or setup step) with an async function as its body.
test.skip('Will not run', async () => {

    console.log("This should not be printed");

});

// Define a test case (or setup step) with an async function as its body.
test('Skip (un)conditionally', async ({ page, browserName }) => {

    // Define a test case (or setup step) with an async function as its body.
    test.skip(browserName === 'chromium', 'Does not work on Chromium, ticket ABC-123');

    // Define a test case (or setup step) with an async function as its body.
    test.skip(await page.getByTestId('someId').count() === 0, 'Skipping because at least 1 element X must be present')

});

// Define a test case (or setup step) with an async function as its body.
test.fixme('Fixme', async () => {

});

// Define a test case (or setup step) with an async function as its body.
test('Will fail', async () => {

    // Define a test case (or setup step) with an async function as its body.
    test.fail();        // the test SHOULD fail

    // Assert that the actual value satisfies the expected condition.
    expect(3).toEqual(3);

});
