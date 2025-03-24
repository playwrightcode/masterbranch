const{test,expect} = require('@playwright/test');

test ('Mouse hover', async ({page})=>{

  //  await page.goto('https://demo.opencart.com/')
    await page.goto('https://unixpapa.com/js/testover.html')

    const cleer =await page.locator("//a[normalize-space()='click here to clear']")

    //const desktops=await page.locator('//a[normalize-space()="Desktops"]')
    //const macbook=await page.locator('//a[normalize-space()="Mac (1)"]')
      const sometext = await page.locator('#red')
    //mouse hover
    //await desktops.hover()
    //await macbook.hover()
      await sometext.hover()
    await page.waitForTimeout(3000)
      await cleer.click()
      await sometext.hover()
    await page.waitForTimeout(3000)

});












