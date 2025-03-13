const {test, expect} = require('@playwright/test'); 

//Login test
test ('Create New USer', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const ptitle = await page.title();
    console.log("Page title is : ", ptitle)
    await expect(page).toHaveTitle('OrangeHRM');

    //1. login to the portal
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.click('button[type="submit"]');

    //2.Click on PIM from left side navigation menu
    await page.locator('//span[text()="PIM"]').click();
   const PIM_text = await page.locator('//h6[text()="PIM"]').textContent()
   await expect(await page.locator('//h6[text()="PIM"]')).toHaveText('PIM')
   console.log('you are redirected to : ', PIM_text, 'Page')


    //3.Click on add employees menu from the top menus & check name of the page
    await page.locator('//a[normalize-space(text())="Add Employee"]').click();
    const emp_text = await page.locator('//h6[text()="Add Employee"]').textContent();
    await expect(await page.locator('//h6[text()="Add Employee"]')).toContainText('Add Employee');

    //4.Add employee details and save it 

    await page.locator('[name="firstName"]').fill('Vedha')
    await page.locator('[name="middleName"]').fill('Test')
    await page.locator('[name="lastName"]').fill('Crm')

    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill('100192')
    await page.locator('//span[contains(@class,"oxd-switch-input oxd-switch-input--active")]').click()

    //create login details
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[3]').fill('Vedha')

    //check password weak message
    await page.locator('(//input[@type="password"])[1]').fill('Test')
    const password1 = await page.inputValue('//input[@type="password"][1]')
    console.log(password1)
    //await page.waitForTimeout(3000)
    //await page.locator('//span[text()="Should have at least 7 characters"]').textContent()
    //await page.locator('(//input[@type="password"])[2]').fill('Test@123')

    await page.waitForTimeout(3000)

    

})