const {test, expect} = require('@playwright/test'); 

test ('Create new pay grade', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.setViewportSize({width:1538, height:818})

    const ptitle = await page.title();
    console.log("Page title is : ", ptitle)
    await expect(page).toHaveTitle('OrangeHRM');

    //1. login to the portal
    //await page.waitForSelector('//input[@placeholder="Username"]')
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    //await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.click('button[type="submit"]');

    //Click on Admin menu from the left side navigation
    await page.locator('//span[text()="Admin"]').click();

    await page.locator('(//i[@with-container="false"])[2]').click()
    await page.waitForTimeout(2000)

    //Click on pay grade option from the top job menu
    await page.locator('(//a[@role="menuitem"])[2]').click()
    const paygradetext = await page.locator('//h6[text()="Pay Grades"]').textContent()
    console.log("You are redirected to : ", paygradetext , "page")
    await expect(await page.locator('//h6[text()="Pay Grades"]')).toContainText('Pay Grades');

   
    //Clicking Add button to add new grade 
    await page.locator('//button[contains(.,"Add")]').click()
    await page.waitForTimeout(2000)

    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill('My Grade test')

    await page.locator('//button[@type="submit"]').click()

    await page.waitForTimeout(5000)

    //Clicking add button to add currency for the grade
    await page.locator('//button[contains(.,"Add")]').click();

    await page.getByText('-- Select --').click();
    await page.getByText('INR - Indian Rupee').click();

    await page.locator('(//input[@class="oxd-input oxd-input--active"])[3]').fill('15000')
    await page.locator('(//span[normalize-space(text())="Configuration"]/following::input)[3]').fill('50000')
    
    await page.waitForTimeout(5000);

    await page.locator('(//button[@type="submit"])[2]').click()
    await page.waitForTimeout(4000)

    //check the no of records present in the pay grades table
    await page.locator('(//i[@with-container="false"])[2]').click()
    
   // await page.waitForTimeout(2000)

    //Click on pay grade option from the top job menu
    await page.locator('(//a[@role="menuitem"])[2]').click()
    await page.waitForTimeout(5000);
    const table_list = await page.$$('.oxd-table .oxd-table-body .oxd-table-cell:nth-of-type(2) div')
    console.log('Number of records present in the table is : ', table_list.length)
    await page.waitForTimeout(3000)

   for(let grades of table_list)
        {
           const gradelist = await grades.textContent()
           console.log(gradelist);
           if(await gradelist.includes('My Grade test'))
           {
            
            console.log('New Grade is listed')
            
           }
        }


await page.waitForTimeout(2000)
const allrows = await page.locator('.oxd-table-row.oxd-table-row--with-border');
const rowCount = await allrows.count();
console.log('row count is ', rowCount)

for (let i = 0; i < rowCount; i++) {
   
    const rowText = await allrows.nth(i).textContent();

    if (rowText.includes('Grade 2')) {
        
        await allrows.nth(i).locator('.oxd-icon.bi-pencil-fill').click();
        break; 
    }
}

await page.waitForTimeout(5000)

})