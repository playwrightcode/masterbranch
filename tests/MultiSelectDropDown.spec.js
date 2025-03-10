const {test,expect} = require('@playwright/test')

test( 'Handledropdowns', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // select multiple options from multi select dropdown
    // await page.selectOption('#colors',['Blue','Red','yellow'])


// Assertions 

 // 1 const dropdowncount=await page.locator('#colors option')
 // await expect(dropdowncount).toHaveCount(7)

//2  const dropdowncount=await page.$$('#colors option')
 //await expect(dropdowncount.length).toBe(7)
 // await page.waitForTimeout(5000);

//3 check presence of value in the dropdown
const content = await page.locator('#colors').textContent()
//await expect(content.includes('Red')).toBeTruthy()
await expect(content.includes('Black')).toBeFalsy()

}
)