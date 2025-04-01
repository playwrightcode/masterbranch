const{test, expect} = require('@playwright/test')

test ('File Upload', async ({page}) => {  

await page.goto('https://testautomationpractice.blogspot.com/');


await page.setInputFiles('#singleFileInput', 'tests/screenshots/1743066541792Homepage.png');

await page.locator("//button[normalize-space()='Upload Single File']").click()

await page.waitForTimeout(4000);





  });
