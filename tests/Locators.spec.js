import {test, expect} from '@playwright/test';


test('Locators demo',async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    await page.locator('id=login2').click();
    await page.locator('#loginusername').fill('testuser');
    await page.fill('#loginpassword','testpassword');
    //await page.locator('#loginpassword').fill('testpassword');
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('button', { name: 'Log in' })

})