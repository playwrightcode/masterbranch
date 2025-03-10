const {test,expect} = require ('@playwright/test')

test ('Checkboxes', async({page})=>
{
 
    await page.goto('https://www.ironspider.ca/forms/checkradio.htm');

    await page.locator("//input[@type='checkbox' and @value='red']").check();

    await expect(await page.locator("//input[@type='checkbox' and @value='red']")).toBeChecked()
    await expect(await page.locator("//input[@type='checkbox' and @value='red']").isChecked()).toBeTruthy();
    await expect(await page.locator("//input[@type='checkbox' and @value='yellow']").isChecked()).toBeFalsy()

    await page.waitForTimeout(5000);
    
    const checkboxLocators= [
        "//input[@type='checkbox' and @value='red']",
        "//input[@type='checkbox' and @value='green']",
        "//input[@type='checkbox' and @value='purple']"
]
for (const locator of checkboxLocators)
    {    
    await page.locator(locator).check()
    }

    await page.waitForTimeout(15000);

    for (const locator of checkboxLocators)
        {    
            if (await page.locator(locator).isChecked())
            {
                await page.locator(locator).uncheck()
            }
            
        
        }
        
        await page.waitForTimeout(15000);

})