//const{test, expect} = require('@playwright/test');
const {test, expect} = require('@playwright/test');

test.setTimeout(60000);

test ('login page', async({page})=>{

await page.goto('https://www.zimyo.work/accounts/login?redirect=https://www.zimyo.work');
//await page.getByAltText('logo').click();
//page.getByPlaceholder().fill('');
await page.fill('#username', 'kanaga@flyhub.com');
await page.fill('#password', 'Kanaga@123');
await page.locator('button[type="submit"]').click();
await expect(page.getByText('My Dashboard')).toBeVisible();

}) 