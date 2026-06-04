import {test,expect} from '@playwright/test'

test('Built-inLocators',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //page.getByAltText() - to locate an element, usually an image by text alternative.

    const logo= await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { type: 'submit' }).click();
    await expect(await page.getByText('Orange Test')).toBeVisible();
    
})
