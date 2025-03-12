const{test, expect} = require('@playwright/test');
 

test('check box', async({page})=>
    
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();
    await page.click("//span[text()='Admin']")

    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/div[2]/i').click();

    const alloptions = await page.$$("//div[@role='listbox']//span")

    for(let options of alloptions){

        const dropvalues =await options.textContent();
        console.log(dropvalues);

        if(dropvalues.includes('Admin')){
            await options.click();
            break;
        }
    }
    await page.waitForTimeout(5000);

})