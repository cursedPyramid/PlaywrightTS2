// Example from m7-test-runner: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { expect, test } from '@playwright/test';

const people = ['Alice', 'Bob'];

// Repeat the test/action for each item in the collection.
for(const name of people) {

    // Backticks are used for the test title so that string interpolation can be used to pass in the parameter value.
    test(`Testing ${name}`, async () => {

        console.log(name);

    });

}

// Create a Map containing key/value pairs for parameterised tests.
const map1 = new Map();
map1.set(2, 20);
map1.set(3, 30);

// Repeat the test/action for each item in the collection.
for(const [key, value] of map1) {

    // Define a test case (or setup step) with an async function as its body.
    test(`Testing 10x function with ${key} and ${value}`, async () => {

        // Assert that the actual value satisfies the expected condition.
        expect(key * 10).toEqual(value);

    });

}

// If there are three or more values to pass in when not stored in a .csv or external file.
const inputs = [
    ["a", 1, 2],
    ["b", 3, 4],
    ["c", 5, 6]
];

// Repeat the test/action for each item in the collection.
for(const [a, b, c] of inputs) {

    // Define a test case (or setup step) with an async function as its body.
    test(`Testing with ${a} ${b} ${c}`, async () => {

        console.log(a, b, c);

    });

}

// for more than two values, consider creating a csv file per https://playwright.dev/docs/test-parameterize#create-tests-via-a-csv-file

const deposits = [
    ["10", "6 months", "After 6 Months you will earn $0.20 on your deposit"],
    ["20", "1 year", "After 1 Year you will earn $1.00 on your deposit"],
];

// Repeat the test/action for each item in the collection.
for(const [sum, period, result] of deposits) {

    // Define a test case (or setup step) with an async function as its body.
    test(`Testing with ${sum} ${period} ${result}`, async ({ page }) => {

        // Navigate the browser page to the specified URL.
        await page.goto('/savings.html');
        // Locate an element using its data-testid attribute.
        await page.getByTestId('deposit').fill(sum);
        // Locate an element using its data-testid attribute.
        await page.getByTestId('period').selectOption(period);

        // Locate an element using its data-testid attribute.
        await expect(page.getByTestId('result')).toHaveText(result);

    });

}
