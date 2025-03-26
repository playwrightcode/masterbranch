const {test, expect} = require('@playwright/test'); 

test.skip ('Mouse right click', async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo/fontawesome-icons.html');
    const button = await page.locator('//span[normalize-space(text())="right click me"]')
    await button.click({button: 'right'});

    await page.waitForTimeout(3000);

})

test ('Mouse double click', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const copyButton = await page.locator('//button[normalize-space(text())="Copy Text"]')
    await copyButton.dblclick();
    await page.waitForTimeout(3000);

})