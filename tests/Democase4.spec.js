const{test, expect} = require('@playwright/test');  
test('Democase4', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill('//input[@placeholder="Username"]','Admin');
    await page.fill('//input[@placeholder="Password"]','admin123');
    await page.click("button[type='submit']");   
    //await page.waitForTimeout(2000);

    await page.getByRole('link', { name: 'Admin' }).click();

    //selecting Job dropdown
    await page.locator("//ul/li/span[contains(text(), 'Job ')]").click();
    
    //selecting employment status,
    await page.locator("//a[normalize-space()='Employment Status']").click();
    await page.waitForTimeout(1000);

    //add new
    await page.click("button[class='oxd-button oxd-button--medium oxd-button--secondary']");

    //name 
    await page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").fill("Temporary");
    await page.waitForTimeout(1000);

    //save
    await page.click("button[type='submit']");
    await page.waitForTimeout(3000);


    const errorMessage = page.locator('.oxd-form-row .oxd-input-group .oxd-input-field-error-message'); // Use the correct error message
  //await expect(errorMessage).toBeVisible(); // Assert that the error message is visible
// 
  console.log(await errorMessage.textContent());
  
});