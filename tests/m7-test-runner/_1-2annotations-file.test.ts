import { test } from '@playwright/test';

test.skip();

test('Will not run 1', async () => {
    console.log("Test 1");
});

test('Will not run 2', async () => {
    console.log("Test 2");
});

test.fixme('Will not run 3', async () => {
    
    console.log("Test 3");
});

test('Will not run 4', async () => {

    test.fail();
    console.log("Test 4");
});