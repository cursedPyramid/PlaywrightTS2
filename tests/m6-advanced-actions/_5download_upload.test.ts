// Example from m6-advanced-actions: demonstrates the Playwright feature covered by this exercise.
// Import the Playwright classes/functions needed by this file.
import { expect, test } from '@playwright/test';
// Import a supporting Node.js/package module used by this example.
import fs from 'fs';

// Define a test case (or setup step) with an async function as its body.
test('Download a Single file and assert', async ({ page }) => {

    // Navigate the browser page to the specified URL.
    await page.goto('/savings.html');

    // This will fail in headless: false if a file can be previewed, like a text file or a PDF file is because there was no download event. Instead the browser will navigate to a new page.
    const downloadPromise = page.waitForEvent('download');

    // Locate an element by its visible text.
    await page.getByText('Download Our Offer').click();

    const download = await downloadPromise;

    // Get the filename suggested by the downloaded response.
    const suggestedFileName = download.suggestedFilename();
    const filePath = 'download/' + suggestedFileName;
    // Save the downloaded file to the specified path.
    await download.saveAs(filePath);

    // Downloads don't have to be saved, just checked if they were successful. Invoke the failure function, and if there was no failure, then it returns null.
    expect(await download.failure()).toBeNull();

    // Verifies that that the file exists after the download completes.
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

    // Locate the input, typically, it is of type file.
    const uploadInput = page.locator('input[type="file"]');

    // Pass in the path to the file, starting from the root of the project. The brackets make it an array for multiple files, else ('download/dummy.pdf') for a single file.
    await uploadInput.setInputFiles(['download/dummy.pdf']);

    //clear

    // Set the files selected by an <input type="file"> control.
    await uploadInput.setInputFiles([]);

    //submit

});
