const {test, expect} = require('@playwright/test'); 

//Login test
test ('Login page', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const ptitle = await page.title();
    console.log("Page title is : ", ptitle)
    await expect(page).toHaveTitle('OrangeHRM');
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.click('button[type="submit"]');

   const dasbordtext =  await page.locator('//span[@class="oxd-topbar-header-breadcrumb"]').textContent()
   await expect(await page.locator('//span[@class="oxd-topbar-header-breadcrumb"]')).toContainText('Dashboard')
   console.log('your redirected to :', dasbordtext, 'Page')

    await page.waitForTimeout(3000)

    await page.locator('//span[text()="Admin"]').click();
    await page.locator('(//i[@class="oxd-icon bi-chevron-down"])[1]').click();
    await page.locator('//a[normalize-space()="Users"]').click();
    await page.locator('//button[normalize-space()="Add"]').click();

})