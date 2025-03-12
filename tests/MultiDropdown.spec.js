const { test ,expect} = require('@playwright/test');

test('MultiDropdown', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');


    //select multiple values from dropdown,
    await page.selectOption('#colors' , ['Red', 'Green', 'Blue']);
    await page.waitForTimeout(5000);




});