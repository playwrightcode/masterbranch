const {test, expect} = require('@playwright/test'); 

test ('Create workshifts', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.setViewportSize({width:1538, height:818})

    const ptitle = await page.title();
    console.log("Page title is : ", ptitle)
    await expect(page).toHaveTitle('OrangeHRM');

    //1. login to the portal
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.click('button[type="submit"]');

    //Click on Admin menu from the left side navigation
    await page.locator('//span[text()="Admin"]').click();
    await page.locator('(//i[@with-container="false"])[2]').click()

    //Click on workshift option from the top job menu
    await page.locator('//a[normalize-space(text())="Work Shifts"]').click()
    const workshift = await page.locator('//h6[text()="Work Shifts"]').textContent()
    console.log("You are redirected to : ", workshift , "page")
    await expect(await page.locator('//h6[text()="Work Shifts"]')).toContainText('Work Shifts');
 
    //Adding new work_shift
    await page.locator('//button[contains(.,"Add")]').click()
    await page.waitForTimeout(4000)
    const addworkshift = await page.locator('//h6[text()="Add Work Shift"]').textContent()
    console.log("You are in : ", addworkshift)

    await page.locator('(//div[@class="oxd-input-group__label-wrapper"]/following-sibling::div)[1]').fill('New Test WorkShift')
    await page.waitForTimeout(2000)
    await page.locator('//button[@type="submit"]')
    await page.waitForTimeout(5000)
})