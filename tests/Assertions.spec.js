const {test, expect} = require ('@playwright/test')

test ( 'Assertions', async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');

    //expect (page).toHaveURL()                    page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register') 

   // expect (page).toHaveTitle()                    page has Title

     await expect(page).toHaveTitle('nopCommerce demo store. Register')

     //expect (locator).toBeVisible()                     Element is visible
     const LogoElement = await page.locator('.header-logo')

    await expect (LogoElement).toBeVisible() 

    //expect (locator).toBeEnabled()                  Element/control is enabled
    const SearchStoreBox= await page.locator('#small-searchterms')
    await expect(SearchStoreBox).toBeEnabled()

    //    5)  expect (locator).toBeChecked()                  Radio/checkbox is checked
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    //checkbox
    const newsCheckBox = await page.locator('#Newsletter')
    
    await expect(newsCheckBox).toBeChecked()

  //  6)  expect (locator).toHaveAttribute() 
  const Registerbutton = await page.locator('#register-button')
  expect (Registerbutton).toHaveAttribute('type','submit') 

  //   7)  expect (locator).toHaveText()                     Element matches text
  //8)  expect (locator).toContainText()                 Element contains text

const register = await page.locator('.page-title h1')
await expect (register).toHaveText('Register') 
await expect (register).toContainText('Reg') 

//9) expect (locator).toHaveValue(value)           Input has a value

const Firstname = await page.locator('#FirstName')
await Firstname.fill('hi')

await expect (Firstname).toHaveValue('hi')
  
// 10) expect (locator).toHaveCount()                  List of elements has a  given length



})