const {test, expect} = require('@playwright/test'); 

let page;

test.beforeAll(async ({browser})=>{

    page = await browser.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.setViewportSize({width:1538, height:818})
    const ptitle = await page.title();
    console.log("Page title is : ", ptitle)
    await expect(page).toHaveTitle('OrangeHRM');

    //1. login to the portal
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.click('button[type="submit"]');

})

test.afterAll(async()=>{

    //Logout from the application
    await page.locator('(//i[contains(@class,"oxd-icon bi-caret-down-fill")])[1]').click()
    await page.getByText('Logout').click();
    await page.waitForTimeout(5000)
})

test ('Create new pay grade', async({})=>{

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

});

test ('Create Job Category', async({})=>{

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
})