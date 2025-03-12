/*import{test, expect} from '@playwright/test'

test.setTimeout(60000);

test('Login Page', async({page})=>{

    await page.goto('https://uat.flyhub.com/');
    await page.click("//span[contains(text(),'Login')]");
    await page.click("//span[contains(text(),'BANGLADESH')]");


    //This is another methode to locate the elements
   // await page.locator("//span[contains(text(),'BANGLADESH')]").click();

    await page.fill('id = txtUserName', 'k.vkanaga.1993@gmail.com'); // enter user name
    await page.fill('id=txtPassword', 'Test@123'); // enter password
    await page.click('id=load'); // click on password
})*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uat.flyhub.com/');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'BANGLADESH' }).click();
  await page.goto('https://bduat.flyhub.com/login/');
  await page.getByRole('textbox', { name: 'User Name/Email Address' }).click();
  await page.getByRole('textbox', { name: 'User Name/Email Address' }).fill('kv.kanaga1993@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Ok' }).click();
});

