import {test, expect} from '@playwright/test';

test.skip('Simple alert', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Simple Alert
    //Enabling dialog window handle
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();

    })

   await page.click('#alertBtn');

    await page.waitForTimeout(5000)

})


test('Confirmation alert', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Confirmation Alert
    //Enabling dialog window handle
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept(); // closing the alert by clicking ok
        //await dialog.dismiss(); // closing the alert by clicking cancel

    })

   await page.click('#confirmBtn');
   await expect(await page.locator('#demo')).toHaveText('You pressed OK!');
   const alerttext = await page.locator('#demo').textContent();

    await page.waitForTimeout(5000)

})

test.skip('prompt alert', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Confirmation Alert
    //Enabling dialog window handle
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('ABCDEFG'); // closing the alert by clicking ok
        //await dialog.dismiss(); // closing the alert by clicking cancel

    })

   await page.click('#promptBtn');
   await expect(await page.locator('#demo')).toHaveText('Hello ABCDEFG! How are you today?');

    await page.waitForTimeout(5000)

})