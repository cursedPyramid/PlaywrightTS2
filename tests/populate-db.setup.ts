// This file contains Playwright setup logic used by the configured project dependencies.
// Import the Playwright classes/functions needed by this file.
import { test as setup } from '@playwright/test';

setup.use({  });

// Define a test case (or setup step) with an async function as its body.
setup('Populate DB', async ({ page }) => {
     
     console.log('Populate DB');
     
  });