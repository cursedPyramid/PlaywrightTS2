// Example from m6-advanced-actions: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { expect, test } from '@playwright/test';

// Define a test case (or setup step) with an async function as its body.
test('Check console', async ({ page }) => {

  // Register an event listener that remains active for the page. Listener must be registered before any action.
  page.on('console', msg => {
    console.log(msg)
    // A soft assertion records the failure but allows the test to continue.
    expect.soft(msg.type()).not.toEqual('error');
  });

  page.on('pageerror', error => {
    console.log(`Found an error: ${error.name}, ${error.message}`);
    // A soft assertion records the failure but allows the test to continue.
    expect.soft(error.name).not.toEqual('Error');
    
  });

  // Navigate the browser page to the specified URL.
  page.goto('/');
  
  // Locate the element by its accessible role/name and click it.
  await page.getByRole('button', { name: 'Register' }).click();

});

