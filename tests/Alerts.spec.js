const {test , expect } = require("playwright/test");

test.skip(" Alert with OK" , async ({ page })=>
{

await page.goto("https://testautomationpractice.blogspot.com/");
page.on('dialog' , async dialog=>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();

})
await page.click('(//button[normalize-space()="Simple Alert"])');

await page.waitForTimeout(4000);

});




test.skip (" Confirmation Dialog-Alert with OK and cancel" , async ({ page })=>
    {
    
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog' , async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain("Press a button!");
        await dialog.accept();
    
    })
    await page.click('#confirmBtn');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');  
    await page.waitForTimeout(4000);
    
    })
    


    test (" Prompt Dialog" , async ({ page })=>
        {
        
        await page.goto("https://testautomationpractice.blogspot.com/");
        page.on('dialog' , async dialog=>{
            expect(dialog.type()).toContain('prompt');
            expect(dialog.message()).toContain("Please enter your name:");
            expect(dialog.defaultValue()).toContain('Harry Potter');

            await dialog.accept('Amster');
        
        })
        await page.click('(//button[normalize-space()="Prompt Alert"])');
        await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Amster! How are you today?');  
        await page.waitForTimeout(4000);
        
        })