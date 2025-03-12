const{test, expect} = require('@playwright/test')

test.skip('Demo Phase1', async ({page})=>{

    page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#name').fill('Kanaga')
    await page.fill('#email', 'kanaga@test.com')
    await page.locator('#phone').fill('9008789876')
    await page.locator('#textarea').fill('My test address is automation text area');

    await page.locator('#female').check();

    expect(await page.locator('#female')).toBeChecked();
    expect(await page.locator('#female').isChecked()).toBeTruthy();
    expect(await page.locator('#male').isChecked()).toBeFalsy();


    const alldays = [ ('#sunday') ,('#monday'),('#wednesday') ]

    for(const day of alldays){
        await page.locator(day).check();
        const selectedtext = await page.locator(day) .textContent();

    }

    await page.waitForTimeout(3000);
})

test.skip('Select dropdowns', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.selectOption('#country', 'Australia');

     const countryloc = await page.$$('#country option')
     console.log ('No of options : ', await countryloc.length);
    const alltext = await page.locator('#country').textContent();
    console.log(alltext);

    for(const options of countryloc)
    {
       const values = await options.textContent()

        if(values.includes('Australia')){
            console.log('Your selected country is', values )
            break;
        }

    }

    const selected_values = await page.selectOption('#colors', ['Red', 'Blue', 'Green'])
    //console.log(selected_values);
   const colorsloc = await page.$$('#colors option')
   await expect(colorsloc.length).toBe(7);
   console.log('No of colors listed in dropdown is :', colorsloc.length)


    await page.waitForTimeout(3000);

})


test('Checking Alerts', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('Simple Alert', async dialog=>{
        expect(dialog.type()).toContain('Alert');
        expect(dialog.message()).toContain('I am an alert box!');

        await dialog.accept();
    })

    await page.click('#alertBtn');

    await page.waitForTimeout(5000)

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept(); // closing the alert by clicking ok
        //await dialog.dismiss(); // closing the alert by clicking cancel

    })

   await page.click('#confirmBtn');
   await expect(await page.locator('#demo')).toHaveText('You pressed OK!');
   const alerttext = await page.locator('#demo').textContent();
   console.log(alerttext);

    await page.waitForTimeout(5000)


    /*page.on('Prompt alert', async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')

    })*/
})