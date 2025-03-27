const {test, expect} = require('@playwright/test');
test('take a screenshot', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
 // await page.screenshot({ path:'tests/screenshots/'+Date.now()+'Homepage.png' });


  await page.locator('xpath=/html/body/div[5]/div/div[2]/div/div[1]').screenshot({ path:'tests/screenshots/'+Date.now()+'samsung.jpg' });
  //expect(await page.screenshot()).toMatchSnapshot('screenshot.png');




});