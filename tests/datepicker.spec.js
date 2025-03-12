import {test, expect} from '@playwright/test';

test('Date Picker', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //direct date fill approach
    //await page.fill('#datepicker', '03/27/2025')

    
    const year = "2025"
    const month = "June"
    const date = "25"

    await page.click('#datepicker')

    while(true)
        {
            const currentyear = await page.locator('.ui-datepicker-year').textContent()
           const currentmonth = await page.locator('.ui-datepicker-month').textContent()

           if(currentyear == year && currentmonth == month)
           {
            break;
           }

           await page.locator('[title="Next"]').click();
        }


        const alldates = await page.$$('//a[@class = "ui-state-default"]')

        for(const dt of alldates)
        {
            if(await dt.textContent() == date)
            {
                await dt.click()
                break;
            }
        }
        await page.waitForTimeout(3000);



})