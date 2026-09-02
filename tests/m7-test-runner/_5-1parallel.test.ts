// Example from m7-test-runner: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test } from '@playwright/test';

// Group related tests together.
test.describe.configure({ mode: 'serial' }); // Serial not recommended; use beforeAll or beforeEach hooks if one test relies on another

// Define a test case (or setup step) with an async function as its body.
test('Test 1', async () => {
    console.log('Test 1');
});

// Define a test case (or setup step) with an async function as its body.
test('Test 2', async () => {
    console.log('Test 2');
});

// Define a test case (or setup step) with an async function as its body.
test('Test 3', async () => {
    console.log('Test 3');
});

// Define a test case (or setup step) with an async function as its body.
test('Test 4', async () => {
    console.log('Test 4');
});

// Define a test case (or setup step) with an async function as its body.
test('Test 5', async () => {
    console.log('Test 5');
});

// Define a test case (or setup step) with an async function as its body.
test('Test 6', async () => {
    console.log('Test 6');
});
