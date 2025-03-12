const { test, expect } = require('@playwright/test'); 

 test('Locators',async ({page})=>{
    
    await page.goto('https://www.demoblaze.com/index.html'); 
   
//click on Login button - using property
await page.locator('#login2').click();

//await page.click('id="login2"'); this is best approach.


//fill the username - using CSS property

 await page.locator('#loginusername').fill('pavanol');
// await page.fill('#loginusername','pavanol'); this is also best approcah



await page.locator("//input[@id='loginpassword']").fill('test@123');


//click on LOGIN button

await page.click("//button[normalize-space()='Log in']");

//verify LOGOUT button present or not

await page.locator("//a[normalize-space()='Log out']").isVisible();


 });

