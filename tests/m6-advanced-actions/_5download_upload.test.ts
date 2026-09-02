// Example from m6-advanced-actions: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { test, expect } from '@playwright/test';
// Import a supporting Node.js/package module used by this example.
import fs from 'fs';

// Define a test case (or setup step) with an async function as its body.
test('Download a Single file and assert', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/savings.html');

    // Store a locator/result in a constant so it can be reused below.
    const downloadPromise = page.waitForEvent('download');

    // Locate an element by its visible text.
    await page.getByText('Download Our Offer').click();

    const download = await downloadPromise;

    // Get the filename suggested by the downloaded response.
    const suggestedFileName = download.suggestedFilename();
    const filePath = 'download/' + suggestedFileName;
    // Save the downloaded file to the specified path.
    await download.saveAs(filePath);

    // Assert that the actual value satisfies the expected condition.
    expect(await download.failure()).toBeNull();

    // Assert that the actual value satisfies the expected condition.
    expect(fs.existsSync(filePath)).toBeTruthy();

    // Read file metadata, such as its size.
    const fileSizeInBytes = fs.statSync(filePath).size;
    console.log(fileSizeInBytes);
    // Assert that the actual value satisfies the expected condition.
    expect(fileSizeInBytes).toBeLessThan(20_000);

});

// Define a test case (or setup step) with an async function as its body.
test('Upload', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/loans.html');

    // Store a locator/result in a constant so it can be reused below.
    const uploadInput = page.locator('input[type="file"]');

    // Set the files selected by an <input type="file"> control.
    await uploadInput.setInputFiles(['download/dummy.pdf']);

    //clear

    // Set the files selected by an <input type="file"> control.
    await uploadInput.setInputFiles([]);

    //submit

});
