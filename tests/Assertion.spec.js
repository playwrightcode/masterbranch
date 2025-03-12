const { test, expect } = require('@playwright/test');

test('Get all anchor tags href', async ({ page }) => { 
    //open app url  
    await page.goto('https://demo.nopcommerce.com/register') 

 //1) expect(page).toHaveURL() ‣ Page has URL 
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register") 
//2) expect(page).toHaveTitle() Page has title 
 await expect(page).toHaveTitle("nopCommerce demo store. Register") 
//3) expect(locator).toBeVisible() Element is visible 
  const logoElement=await page.locator('.header-logo')
     await expect(logoElement).toBeVisible();
//4) expect(locator).toBeEnabled() Element is enabled.
const searchbox =await page.locator('#small-searchterms') 
await expect(searchbox).toBeEnabled()

//5) expect(locator).toBeChecked() Radio button or checkbox is checked
  







  });