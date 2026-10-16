// Example from m9-networking: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { expect, test } from '@playwright/test';

// 1) Create repo via web API
// 2) Go to UI and check it exists

const REPO = 'Playwright-Test-Repo';

// Override Playwright settings for the following test scope.
test.use({
    // Base URL used when tests call page.goto() with a relative path.
    baseURL: 'https://api.github.com/',
    // Headers that Playwright will send with API requests in this scope.
    extraHTTPHeaders: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token INSERT GITHUB API TOKEN VALUE HERE` // WARNING Do not store secrets as plain text in code
    }
});

// Test lifecycle hook: Runs before every test in the scope. This is the API layer. Request fixture is used to make an API call directly without going through the browser.
test.beforeEach('Create repo', async ({ request }) => {

    // data is what Playwright calls the payload or body of the request.
    const response = await request.post('user/repos', {
        data: {
            name: REPO
        }
    });

    // Assert that the actual value satisfies the expected condition.
    expect(response.ok()).toBeTruthy();

});

// This is the UI layer. This is the End to End test to verify that the API integration has worked correctly.
test('Work with newly created repo', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('https://github.com/cursedPyramid?tab=repositories');

    // Assert the locator matches the expected number of elements.
    await expect(page.getByRole('link', { name: REPO })).toHaveCount(1);

    // other actions with a clean, new repo
});

// Test lifecycle hook: Runs after every test in the scope. Request fixture is used to make an API call directly without going through the browser.
test.afterEach('Delete repo', async ({ request }) => {

    const response = await request.delete(`repos/cursedPyramid/${REPO}`);

    // Assert that the actual value satisfies the expected condition.
    expect(response.ok()).toBeTruthy();
    // Assert that the actual value satisfies the expected condition.
    expect(response.status() === 204);

});
