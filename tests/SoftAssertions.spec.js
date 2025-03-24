const{test, expect} = require('@playwright/test');

test('SoftAssertions', async({page})=>{

await page.goto('https://www.demoblaze.com/index.html');
//Hard Assertions - if any assertion fails, it will stop the execution of the test case
await expect(page).toHaveTitle('STORE');
await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
await expect(page.locator('.navbar-brand')).toBeVisible();





    


})