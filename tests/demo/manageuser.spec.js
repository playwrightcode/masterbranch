const {test, expect} = require('@playwright/test'); 

//Login test
test ('Manage Users', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const ptitle = await page.title();
    console.log("Page title is : ", ptitle)
    await expect(page).toHaveTitle('OrangeHRM');

    //login to the portal
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.click('button[type="submit"]');

   const dasbordtext =  await page.locator('//span[@class="oxd-topbar-header-breadcrumb"]').textContent()
   //verifying after login redirecting to dasbord or not
   await expect(await page.locator('//span[@class="oxd-topbar-header-breadcrumb"]')).toContainText('Dashboard')
   console.log('your redirected to :', dasbordtext, 'Page')

    await page.locator('//span[text()="Admin"]').click();

    //Click on "User Management" from the top menus
    await page.locator('(//i[@class="oxd-icon bi-chevron-down"])[1]').click();

    //Click on "User" option from the user management menu
    await page.locator('//a[normalize-space()="Users"]').click();

    //Click on "Add" button to add users & verify add user page is opened or not
    await page.locator('//button[normalize-space()="Add"]').click();
   const userpage =  await page.locator('//h6[text()="Add User"]')
   const usertext = await userpage.textContent()
   await expect(userpage).toHaveText('Add User');
    console.log('Your redirected to :', usertext)

    //Check cancel button is able to click or not, if its clicking verify its redirecting to user management page
    await page.locator('//button[contains(.,"Cancel")]').click()
    const return_text = await page.locator('//h6[text()="User Management"]').textContent();
    await expect(await page.locator('//h6[text()="User Management"]')).toContainText('User Management');

    //verifiy all fields are mandatory
    await page.locator('//button[normalize-space()="Add"]').click();
   const alllabes = await page.$$('(//label[@class="oxd-label oxd-input-field-required"])')
   const labelcount = await alllabes.length;

   await page.locator('//button[@type="submit"]').click();

   const required_fields = await page.$$('(//div[@class="oxd-input-group oxd-input-field-bottom-space"]//span)')
    const field_count = required_fields.length;

    if(labelcount == field_count){
        console.log('All the fields are required')
    }

    
   // await page.waitForTimeout(3000)


    // await page.locator('(//div[@class="oxd-select-text--after"]//i)[1]').click()

    await page.getByText('-- Select --').first().click();
    await page.getByRole('option', { name: 'Admin' }).click();
    await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
    await page.getByRole('option', { name: 'Enabled' }).click();
    await page.locator('//input[@placeholder="Type for hints..."]').fill('Kanaga')
    await page.waitForTimeout(3000)

    //await page.getByRole('textbox', { name: 'Type for hints...' }).fill('bala');
    await page.getByText('Vedha').click();
    await page.locator('(//input[contains(@class,"oxd-input oxd-input--active")])[2]').fill('TesterABC');
    await page.locator('(//input[@type="password"])[1]').fill('Test@123');
    await page.locator('(//input[@type="password"])[2]').fill('Test@123');
   // await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(5000);

    await page.locator('//i[contains(@class,"oxd-icon bi-caret-down-fill")]').click();
    await page.locator('//a[normalize-space(text())="Logout"]').click();
    await page.waitForTimeout(5000);

    await page.locator('//input[@placeholder="Username"]').fill('TesterABC');
    await page.locator('//input[@placeholder="Password"]').fill('Test@123');
    await page.waitForTimeout(5000);
    await page.click('button[type="submit"]');

   

    //Verify whether you are logged as a created user
  // const loggedinUser =  await page.locator('//p[normalize-space(text())="Vedha Crm"]').textContent()
  // console.log('You are logged in as a : ', loggedinUser)
   //await expect(await page.locator('//p[normalize-space(text())="Vedha Crm"]')).toHaveText('Kanaga New')
    

    

})