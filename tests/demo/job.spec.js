const {test, expect} = require('@playwright/test'); 

test ('Create New USer', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const ptitle = await page.title();
    console.log("Page title is : ", ptitle)
    await expect(page).toHaveTitle('OrangeHRM');

    //1. login to the portal
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.click('button[type="submit"]');

    //Click on Admin menu from the left side navigation
    await page.locator('//span[text()="Admin"]').click();


    await page.locator('(//i[@with-container="false"])[2]').click()
    await page.waitForTimeout(2000)

    await page.locator('(//a[@role="menuitem"])[1]').click()
   /* const jobtitle = await page.locator('//h6[text()="Job Titles"]').textContent()
    console.log("You are redirected to", jobtitle, 'Page' )
    await page.locator('//button[contains(@class,"oxd-button oxd-button--medium")]').click()
   const create_job = await page.locator('//h6[text()="Add Job Title"]').textContent()
    console.log(create_job, "Page has been opened")

    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill('Test Manager')

    await page.locator('//textarea[@placeholder="Type description here"]').fill('Managing the testing process over the team & application')

    await page.locator('//input[@type="file"]').setInputFiles('tests/demo/uploadFiles/Screenshot (197).png', { force: true })
    await page.locator('//textarea[@placeholder="Add note"]').fill('Job Added')
    await page.locator('//button[@type="submit"]').click()*/


    //Getting job titles from the table
   await page.waitForTimeout(5000);
   const alljobs = await page.$$('.oxd-table .oxd-table-body .oxd-table-cell:nth-of-type(2) div');

    for(let job of alljobs)
    {
       const jobtitile = await job.textContent()
       console.log(jobtitile);
       if(await jobtitile.includes('HR Manager'))
       {
        console.log('Test')
       }
    }


    /*const joblist = await page.$$('//div[@class="oxd-table-header"]/following-sibling::div[1]')

    const matchedrow = joblist.filter(async (job) => {
        const hasText = await job.locator('.oxd-table .oxd-table-body .oxd-table-cell:nth-of-type(2) div').textContent();
        return hasText.includes('HR Manager');
    });
    
    const matchedrow = joblist.filter
    (async (job) =>{
        has: page.locator('.oxd-table .oxd-table-body .oxd-table-cell:nth-of-type(2) div'),
        hasText: 'HR Manager'

    })*/
   // matchedrow.locator('.oxd-icon bi-pencil-fill').click();


})