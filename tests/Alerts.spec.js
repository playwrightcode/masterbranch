const {test,expect} = require('@playwright/test')

test.skip('Alerts', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling Dailogue window handler
    page.on('dialog', async dailog=>{
        expect(dailog.type()).toContain('alert')
        expect(dailog.message()).toContain('I am an alert box!')
        await dailog.accept()
}
)

await page.click("//button[normalize-space()='Simple Alert']")
await page.waitForTimeout(5000)

//djjdhghghh hhhfdjfj
}

)

test.skip('Confirmation dailogue-Alert with ok and cancel', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling Dailogue window handler
    page.on('dialog', async dailog=>{
        expect(dailog.type()).toContain('confirm')
        expect(dailog.message()).toContain('Press a button!')
        await dailog.accept()   ; //close by using ok button
        //await dailog.dismiss(); //close by using cancel button
}
)

await page.click("(//button[normalize-space()='Confirmation Alert'])")

await expect(page.locator("//p[@id='demo']")).toContainText('You pressed OK!')
await page.waitForTimeout(5000)
})

test('Prompt dailogue', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling Dailogue window handler
    page.on('dialog', async dailog=>{
        expect(dailog.type()).toContain('prompt')
        expect(dailog.message()).toContain('Please enter your name:')
        expect(dailog.defaultValue()).toContain('Harry Potter')
        await dailog.accept('john')   ; //close by using ok button
        //await dailog.dismiss(); //close by using cancel button
}
)

await page.click("(//button[normalize-space()='Prompt Alert'])")

await expect(page.locator("//p[@id='demo']")).toContainText('Hello john! How are you today?')
await page.waitForTimeout(5000)
})