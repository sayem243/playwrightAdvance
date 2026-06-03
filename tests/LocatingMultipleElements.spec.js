import {test, expect} from '@playwright/test';

test('Locating multiple elements',async ({page})=>{ 
    await page.goto('https://www.demoblaze.com/');
    
    /*const links = await page.$$('a');
    console.log(links.length);
    for (const link of links) {
        const text = await link.textContent();
        console.log(text);
    }
        */
    await page.waitForSelector('xpath=//div[@id=\'tbodyid\']//div//h4/a');  
    const products = await page.$$('xpath=//div[@id=\'tbodyid\']//div//h4/a');
    for(const product of products){
        const ProductName= await product.textContent();
        console.log(ProductName);
    }

});