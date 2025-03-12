const{test, expect} = require('@playwright/test');

test('Handling checkboxes', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

const allcheckboxes = [ ('#sunday') ,('#monday'),('#wednesday') ];

//selecting multiple check boxes
for(const locator of allcheckboxes){

    await page.locator(locator).check();

}

await page.waitForTimeout(5000);

//Unselecting the selected check boxes

for(const locator of allcheckboxes){
    if(await page.locator(locator).isChecked())
    {
        await page.locator(locator).uncheck();
    }

}
})