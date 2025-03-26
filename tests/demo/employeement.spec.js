const {test, expect} = require('@playwright/test'); 

test ('Create Employeement', async({page})=>{

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
    await page.locator('(//a[@role="menuitem"])[3]').click()
    const employeement_text = await page.locator('//h6[text()="Employment Status"]').textContent()
    console.log("You are redirected to : ", employeement_text , "page")
    await expect(await page.locator('//h6[text()="Employment Status"]')).toContainText('Employment Status');
    await page.locator('//button[normalize-space()="Add"]').click()
    await page.waitForTimeout(4000)

    //Add employeement details
    await page.locator('//label[normalize-space(text())="Name"]/following::input').fill('OC employeement')
    await page.waitForTimeout(2000)
    await page.locator('//button[@type="submit"]').click()

    await page.waitForTimeout(5000)

    //Clicking on delete button on basis of row text
    await page.waitForTimeout(5000)
    const emprows = await page.locator('.oxd-table-row.oxd-table-row--with-border');

    const emprowCount = await emprows.count();
    console.log('row count is : ', emprowCount)
    
    for (let i = 0; i < emprowCount; i++) {
        
        const emprowText = await emprows.nth(i).textContent();
        if (emprowText.includes('OC employeement')) {
            await emprows.nth(i).locator('.oxd-icon.bi-trash').click();
            break;    
    }
}

    await page.waitForTimeout(6000)


})