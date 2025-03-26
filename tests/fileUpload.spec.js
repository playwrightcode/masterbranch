const {test, expect} = require('@playwright/test'); 

test ('File Upload                                                                                                                                                                                          ', async({page})=>{
    await page.goto('https://formstone.it/components/upload/demo/');

   // await page.locator('(//input[@type="file"])[1]').setInputFiles('tests/uploadfiles/Screenshot 2025-02-12 103024.png')
   // await page.waitForTimeout(5000)

    //upload multiple files
    await page.locator('(//input[@type="file"])[1]').setInputFiles(['tests/uploadfiles/Screenshot 2025-02-04 160138.png', 'tests/uploadfiles/Screenshot 2025-02-12 103024.png'])
    await page.waitForTimeout(5000)

    //Verify the uploaded files
    await expect(await page.locator('(//span[@class="content"])[1]')).toHaveText('Screenshot 2025-02-04 160138.png')
    await expect(await page.locator('(//span[@class="content"])[2]')).toHaveText('Screenshot 2025-02-12 103024.png')
    await page.waitForTimeout(3000) 

    //Removing uploaded files
    await page.locator('(//input[@type="file"])[1]').setInputFiles([]);
    await page.waitForTimeout(3000)


})



