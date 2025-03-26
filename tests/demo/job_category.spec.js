const {test, expect} = require('@playwright/test'); 

test ('Create Job Category', async({page})=>{

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

    //Click on employeement status option from the top job menu
    await page.locator('//a[normalize-space(text())="Job Categories"]').click()
    const job_category = await page.locator('//h6[text()="Job Categories"]').textContent()
    console.log("You are redirected to : ", job_category , "page")
    await expect(await page.locator('//h6[text()="Job Categories"]')).toContainText('Job Categories');

   
    //Adding new job_category
    await page.locator('//button[contains(.,"Add")]').click()
    await page.waitForTimeout(4000)
    const addjob_category = await page.locator('//h6[text()="Add Job Category"]').textContent()
    console.log("You are in : ", addjob_category)
    await page.locator('//label[normalize-space(text())="Name"]/following::input').fill('New Job Category')
    await page.waitForTimeout(3000)
    await page.locator('//button[@type="submit"]').click()
    await page.waitForTimeout(6000)

    //Verifying the records from the table
   const noOfJobCategory = await page.locator('.oxd-table-row.oxd-table-row--with-border');
   const jobcount = await noOfJobCategory.count()
   console.log('Number of Records :', jobcount)
   
   for(let i=0; i<jobcount; i++)
    {
   const allrowtext = await noOfJobCategory.nth(i).textContent();

   if(allrowtext.includes('New Job Category'))
        {
            await noOfJobCategory.nth(i).locator('.oxd-icon.bi-trash').click();
            break;
        }

   }

   await page.waitForTimeout(4000)
   await page.locator('//button[contains(.,"Yes, Delete")]').click()
   
   //Verifying the record after deleting specific record
   await page.reload();
   await page.waitForSelector('.oxd-table-row.oxd-table-row--with-border')
    const updatedJobCategory = await page.locator('.oxd-table-row.oxd-table-row--with-border');
    const updatedJobCount = await updatedJobCategory.count();
    console.log('No of records presents after deleteion', updatedJobCount);

    for (let j = 0; j < updatedJobCount; j++) {
        const allrowtext = await updatedJobCategory.nth(j).textContent();
    
        if (allrowtext.includes('New Job Category')) {
            console.log('Unable to delete the record');
            break;
        } else {
            console.log('Record deleted successfully');
            break;
        }
    }
  
  // await page.waitForTimeout(5000)

})