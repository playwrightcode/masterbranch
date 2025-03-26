const {test, expect} = require ('@playwright/test')

test('Key Actions', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

     //Locating on elements
    const name = await page.locator('#name').fill('Kanaga Kadhiravan')

    //Ctrl + A
    await page.keyboard.press('Control+A')

    //Ctrl + C
    await page.keyboard.press('Control+C')
    //TAB
    await page.keyboard.down('Tab')
    await page.keyboard.up("Tab")
    //Ctrl + V
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(3000);
})