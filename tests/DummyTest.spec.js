        const { chromium } = require('@playwright/test');  


        (async () => {
        
         const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();

        
        await page.goto('https://www.google.com');
            
           await page.locator('/html/body/div[1]/div[1]/a[1]').click();
            await page.waitForTimeout(2000);
        
        //     await page.locator('/html/body/div[1]/div[1]/a[2]').click();
        //     await page.waitForTimeout(3000);
        //    // await page.goBack();

            
        //     await page.locator('a:text("Images")').click();
        //     await page.waitForTimeout(3000);
          //  await page.goBack();

            
            //await browser.close();
        })();
