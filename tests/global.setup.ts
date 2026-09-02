import { test as setup } from '@playwright/test';

setup.use({});

setup('Do setup', async ({ page }) => {

    console.log('Setup');

});