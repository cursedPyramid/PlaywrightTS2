// Playwright's central configuration file.
// Settings here apply to the test suite unless a project/group/test overrides them.
// Import the Playwright classes/functions needed by this file.
import { defineConfig, devices } from '@playwright/test';

// Export the Playwright configuration so the test runner can use it.
export default defineConfig({

  // Test suite level
  testDir: './tests',
  // Configure how Playwright reports test results.
  reporter: 'html',
  // Allow independent tests to run in parallel where Playwright can do so.
  fullyParallel: true, // Recommended setting for any project. Can be overridden in the individual files

  // nested
  expect: { //  This alters the behavior of the expect assertions
    timeout: 3000
  },

  use: {
    
    // Configure when Playwright records a trace for debugging.
    trace: 'on-first-retry',

    // timezoneId: 'Africa/Lagos', // applied to all tests, except those tests that override it
    // Base URL used when tests call page.goto() with a relative path.
    baseURL: 'http://localhost:3000/',
    // Configure when Playwright captures screenshots.
    screenshot: 'only-on-failure',
    // headless: false,
    // Browser launch options such as slow motion/headless mode.
    launchOptions: { slowMo: 100 }
  },

  /* Run your local dev server before starting the tests */
  // Start the local application server before running tests.
  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000/',
    // Read configuration from an environment variable when it is available.
    reuseExistingServer: !process.env.CI,
  },

  // Projects let you group and run tests on different browsers, emulated devices, and with different configurations.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },

    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
      testDir: './tests/mobile'  // Run tests only in this particular folder
    },

    // by purpose
    {
      name: 'Smoke',
      testMatch: /.*smoke.test.ts/,  //  Only run tests that match this pattern.
      // Number of times Playwright retries a failed test.
      retries: 0
    },

    {
      name: 'Regular',
      testIgnore: /.*smoke.test.ts/,  //  Ignore the smoke tests, but run everything else.
      // Number of times Playwright retries a failed test.
      retries: 2,
      use: {
        // Gives access to another 20 or so configurable properties to define the environment and the behavior of tests.
      }
    },

    {
      name: 'setup-cleanup-demo',
      testMatch: '_4global_config.test.ts',
      // This project depends on the named setup projects completing first.
      dependencies: ['setup', 'admin-auth', 'populate-db'],
      // teardown: 'cleanup' // Correct but per Playwright documentation, a common way to do things is to place or couple the teardown with the corresponding setup
    },

    {
      name: 'cleanup',
      testMatch: '**/global.teardown.ts'
    },

    {
      name: 'setup',
      testMatch: '**/global.setup.ts',
      // Run the named teardown project after this setup project.
      teardown: 'cleanup'
    },

    {
      name: 'admin-auth',
      testMatch: '**/admin-auth.setup.ts',
    },

    {
      name: 'populate-db',
      testMatch: '**/populate-db.setup.ts',
    }
    
  ]
});
