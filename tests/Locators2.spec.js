/*page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByPlaceholder() - to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content. 
page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute. vhich is called company iPhone branding so now once you get the locator and then element then page.getByTestId() to locate an element based on its data-testid attribute (other attributes are also supported).
page.getByValue() to locate an input by its value attribute.
page.getByDisplayValue() to locate an input by its displayed value. 
page.getBySelectOption() to locate a select option by its text content. 
page.getBySelectValue() to locate a select option by its value attribute
page.getByText() to locate by text content. */
const {test, expect} = require('@playwright/test'); // importing test & expect function from playwright/test
//import{test, expect} from '@playwright/test' // another method to import test & expect functions
test ('Built In Locators', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo =  await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
     await page.getByRole('button',{type:'submit'}).click();
     
     await page.getByText('Dashboard').isVisible();

     const name =await page.locator("//img[@class='oxd-userdropdown-img']").textContent;
     await expect(await expect(page.getByText(name))).toBeVisible();
  

    


    









})