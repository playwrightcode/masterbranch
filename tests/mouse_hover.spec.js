const {test, expect} = require('@playwright/test'); 

test ('Mouse hover', async({page})=>{

    await page.goto('https://demo.opencart.com/');
    const desktop = await page.locator('//a[normalize-space(text())="Desktops"]')
    const PC = await page.locator('//a[normalize-space(text())="PC (0)"]')

    //Mouse hover
    await desktop.hover()
    await PC.hover()

    await page.waitForTimeout(3000);

})