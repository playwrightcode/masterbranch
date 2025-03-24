const{ test, expect } = require('@playwright/test');

test('Democase3', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   // await page.fill('//input[@placeholder="Username"]','Admin');
    //await page.fill('//input[@placeholder="Password"]','admin123');
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');

    await page.click("button[type='submit']");   
  //  await page.waitForTimeout(2000);

    await page.getByRole('link', { name: 'Admin' }).click();

    //selecting Job dropdown 
    await page.locator("//ul/li/span[contains(text(), 'Job ')]").click();
    
    //selecting paygrade
    //await page.locator("li[class='--active oxd-topbar-body-nav-tab --parent --visited'] li:nth-child(2) a:nth-child(1)").click();
      await page.locator("//a[normalize-space()='Pay Grades']").click();
    await page.waitForTimeout(1000);

    //add new
    await page.click("button[class='oxd-button oxd-button--medium oxd-button--secondary']");

    //name 
    await page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").fill("JLM 2");
    await page.waitForTimeout(3000);

    //save
    await page.click("button[type='submit']");
    await page.waitForTimeout(3000);
  
 /* search for the added paygrade and delete it
const tableLocator = page.locator('.oxd-table .oxd-table-body');
  await tableLocator.waitFor({ state: 'visible' });  // Wait until the table is visible
  
  // Get the rows of the table
  const emprows = page.locator('.oxd-table .oxd-table-body .oxd-table-row');
  
  // Wait for the rows to be visible
  await emprows.first().waitFor({ state: 'visible' });  // Wait for the first row to appear

  // Get the count of rows
  const emprowCount = await emprows.count();
  console.log('Row count is:', emprowCount);

  // Loop through each row and check for a specific value
  for (let i = 0; i < emprowCount; i++) {
    const rowText = await emprows.nth(i).textContent();  // Get the text content of each row

    if (rowText.includes('JLM 2')) {
      console.log('Found "JLM 2" in row:', i + 1);  // Log the row index (1-based)
      // Perform some action, for example, clicking a trash icon
      await emprows.nth(i).locator('.oxd-icon.bi-trash').click();  // Click the trash icon
      break;  // Exit loop after finding the first match
    }
  }
  await page.waitForTimeout(2000);
  */
});

