const{test, expect} = require('@playwright/test');

test('Multi select dropdown', async({page})=>{

    await page.goto('https://www.redbus.in/');
    await page.locator('#src').fill('Delhi');

    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
    const allvalues = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

    for(let value of allvalues)
        
    {
       const selectvalue = await value.textContent();

       if(selectvalue.includes('Dhaula Kuan')){
        await value.click()
        break;
       }

    }


})