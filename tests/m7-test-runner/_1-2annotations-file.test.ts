// Example from m7-test-runner: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test.skip();

// Define a test case (or setup step) with an async function as its body.
test('Will not run 1', async () => {
    console.log("Test 1");
});

// Define a test case (or setup step) with an async function as its body.
test('Will not run 2', async () => {
    console.log("Test 2");
});

// Define a test case (or setup step) with an async function as its body.
test.fixme('Will not run 3', async () => {
    
    console.log("Test 3");
});

// Define a test case (or setup step) with an async function as its body.
test('Will not run 4', async () => {

    // Define a test case (or setup step) with an async function as its body.
    test.fail();
    console.log("Test 4");
});
