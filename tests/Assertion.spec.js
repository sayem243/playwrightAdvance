import { test, expect } from '@playwright/test';

test('Assertion test', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await page.waitForTimeout(9000);

    //1) expect(page).toHaveURL() - to verify the URL of the page.
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    //2) expect(page).toHaveTitle() - to verify the title of the page.
    //await expect(page).toHaveTitle('nopCommerce demo store. Register');
    //3) expect(locator).toBeVisible() - to verify the visibility of an element.
    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();
    //4) expect(locator).toBeEnabled () - to verify if an element is enabled or not.
    const searchSearchBox = await page.locator('#small-searchterms');
    await expect(searchSearchBox).toBeEnabled();

    //5) expect(locator).toBechecked() - to verify if a checkbox or radio button is checked or not.
    const maleRadioButton = await page.locator('#gender-male');
    await expect(maleRadioButton).toBeChecked();

    //checkbox
    const newsLetterCheckBox=await page.locator('#Newsletter');
    await expect(newsLetterCheckBox).toBeChecked();

    //6) expect(locator).toHaveAttribute() - to verify if an element has a specific attribute or not.
    const regButton= page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type','submit');


});