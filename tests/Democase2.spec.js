const{ test, expect } = require('@playwright/test');
const { time } = require('console');
test('Democase2', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //await page.locator('input[@placeholder="Username"]', 'Admin');
    //await page.locator('input[@placeholder="Password"]', 'admin123');
    await page.locator('input[placeholder="Username"]').fill('KumarYH');
    await page.locator('input[placeholder="Password"]').fill('Test@321');
    await page.click("button[type='submit']");   
  //  await page.waitForTimeout(2000);
  //hi

    //await page.locator("//a[contains(@class,'oxd-text oxd-text--span oxd-main-menu-item--name' and text()='Admin')]").click();
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.locator("//ul/li/span[contains(text(), 'Job ')]").click();
    

    await page.locator("//ul/li/a[contains(text(), 'Job Titles')]").click();
    await page.waitForTimeout(1000);

    await page.click("button[class='oxd-button oxd-button--medium oxd-button--secondary']"); 
    await page.waitForTimeout(1000);

    const jobtitle =await page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']");
    await jobtitle.fill("Quality Analyst K");
    //await page.waitForTimeout(1000);
  
    const desc =await page.locator("textarea[placeholder='Type description here']");
    await desc.fill("Quality Analyst is responsible for the quality of the software");
    //await page.waitForTimeout(4000);

    const note =await page.locator("textarea[placeholder='Add note']");
    await note.fill("Quality Analyst level 1");
    await page.waitForTimeout(2500);


    await page.click("button[type='submit']");
    await page.waitForTimeout(3000);



});
   