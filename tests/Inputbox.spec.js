const {test,expect} = require ('@playwright/test')

test ('Inputbox', async({page})=>
{
 
    await page.goto('https://www.demoblaze.com/index.html');

    await page.locator('#login2').click();

    await expect(page.locator ("//input[@id='loginusername']")).toBeVisible()
    await expect(page.locator ("//input[@id='loginusername']")).toBeEmpty()
    await expect(page.locator ("//input[@id='loginusername']")).toBeEditable()

    await page.locator ("//input[@id='loginusername']").fill("username@gmail.com")

    await page.waitForTimeout(5000);  //pausing code






})