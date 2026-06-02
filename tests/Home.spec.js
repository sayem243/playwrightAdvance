    import { test, expect } from '@playwright/test';

    test('Home page should load and display correct title',async ({page})=>{
        await page.goto('https://www.demoblaze.com/');
        const title = await page.title();
        await expect(title).toBe('STORE');
        await expect(page).toHaveTitle(/STORE/);
    })