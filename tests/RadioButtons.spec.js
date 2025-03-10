const {test,expect} = require ('@playwright/test')

test ('RadioButton', async({page})=>
{
 
    await page.goto('https://demo.nopcommerce.com/register');

    await page.locator('#gender-male').check();


    await expect (await page.locator('#gender-male')).toBeChecked()
    await expect (await page.locator('#gender-male').isChecked()).toBeTruthy();


    await expect (await page.locator('#gender-female').isChecked()).toBeFalsy();



    

    await page.waitForTimeout(5000);  //pausing code






})