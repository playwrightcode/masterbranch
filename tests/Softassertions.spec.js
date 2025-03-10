const {test , expect} = require ('@playwright/test')

test ('SoftAsssertions' , async({page})=>{

  await page.goto('https://www.demoblaze.com/index.html')


  // Hard assertions
/*  await expect (page).toHaveURL('https://www.demoblaze.com/index.html')
  await expect (page).toHaveTitle("STORE123")
  await expect (page.locator('#nava')).toBeVisible()
  */

  await expect.soft (page).toHaveURL('https://www.demoblaze.com/index.html')
  await expect.soft (page).toHaveTitle("STORE123")
  await expect.soft (page.locator('#nava')).toBeVisible()




}



)