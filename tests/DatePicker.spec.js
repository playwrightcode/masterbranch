const {test,expect} = require('@playwright/test')

test('DatePicker', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.fill('#datepicker','03/12/2025');
 await page.waitForTimeout(3000)


 //hello

 //jusbsvvs




})