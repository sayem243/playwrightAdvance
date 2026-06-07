import {test, expect} from '@playwright/test'

test('Built-inLocators', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForLoadState('networkidle');
    
    //page.getByAltText() - to locate an element, usually an image by text alternative.
    const logo = page.getByAltText('company-branding');
    await logo.waitFor({ state: 'visible', timeout: 10000 });
    await expect(logo).toBeVisible();
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { type: 'submit' }).click();
    
    // Wait for navigation after login
    await page.waitForLoadState('networkidle');
    await page.getByText('Orange Test').waitFor({ state: 'visible', timeout: 10000 });
    await expect(page.getByText('Orange Test')).toBeVisible();
}, { timeout: 60000 });
