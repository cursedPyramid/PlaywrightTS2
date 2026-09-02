// Example from m2-setup: demonstrates the Playwright feature covered by this exercise.
const { chromium } = require('@playwright/test');

(async function firstScript() {
    // Launch a browser instance with the supplied options.
    const browser = await chromium.launch();
    // Close the browser resource when it is no longer needed.
    await browser.close();
    console.log('Setup verification script executed successfully.');
    
})();
