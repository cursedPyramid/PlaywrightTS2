// Example from m7-test-runner: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { expect, test } from '@playwright/test';

// test.skip(); // Unconditional skip - it will always take effect for all tests in the file.

// PLaywright will not run a test with .skip.
test.skip('Will not run', async () => {

    console.log("This should not be printed");

});

// Define a test case (or setup step) with an async function as its body.
test('Skip (un)conditionally', async ({ page, browserName }) => {

    // Conditional skip. Will skip when boolean parameter (fixture of browserName is true) followed by why the test is skipped.
    test.skip(browserName === 'chromium', 'Does not work on Chromium, ticket ABC-123');

    // Another conditional skip. Will skip when boolean parameter (if element is not found) followed by why the test is skipped.
    test.skip(await page.getByTestId('someId').count() === 0, 'Skipping because at least 1 element X must be present')

});

// Tests with fixme will be skipped because they need to be fixed.
test.fixme('Fixme', async () => {

});

// Define a test case (or setup step) with an async function as its body.
test('Will fail', async () => {

    // Fail cannot be used at top level; only within the test. Can also use boolean parameters similar to skip.
    test.fail();        // the test SHOULD fail

    // This test will actually fail because the expectation is that the functionality will fail.
    expect(3).toEqual(3);

    // This test will pass because the expectation is that the functionality will fail.
    expect(2).toEqual(3);

});
