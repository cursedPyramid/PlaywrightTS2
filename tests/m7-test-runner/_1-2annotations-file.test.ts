// Example from m7-test-runner: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test } from '@playwright/test';

// Unconditional skip - it will always take effect for all tests in the file..
test.skip();

// Test will not run because of top level skip.
test('Will not run 1', async () => {
    console.log("Test 1");
});

// Test will not run because of top level skip.
test('Will not run 2', async () => {
    console.log("Test 2");
});

// Test will not run because of top level skip. But there is no conflict because fixme will be skipped.
test.fixme('Will not run 3', async () => {
    
    console.log("Test 3");
});

// Test will not run because of top level skip
test('Will not run 4', async () => {

    test.fail();
    console.log("Test 4");
});
