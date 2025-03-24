const{test, expect} = require('@playwright/test');
test('Democase5', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill('//input[@placeholder="Username"]','Admin');
    await page.fill('//input[@placeholder="Password"]','admin123');
    await page.click("button[type='submit']");   
    //await page.waitForTimeout(2000);

    await page.getByRole('link', { name: 'Admin' }).click();

    //selecting Job dropdown
    await page.locator("//ul/li/span[contains(text(), 'Job ')]").click();
    
    //selecting employment status,
    await page.locator("//a[normalize-space()='Work Shifts']").click();
    //await page.waitForTimeout();

    //add new
    await page.click("button[class='oxd-button oxd-button--medium oxd-button--secondary']");
   await page.waitForTimeout(1000);

    //shiftname
    //await page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").first().fill("REGULAR");
    //await page.waitForTimeout(3000);


    //await page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").nth(1).fill("04:00");
    //await page.waitForTimeout(3000);


    //employee Name
    await page.fill('.oxd-autocomplete-wrapper .oxd-autocomplete-text-input input',"A");
    await page.waitForTimeout(2000);
    //await page.waitForSelector("//div[@role='listbox']", { state: "visible" });

    //const NameOptions =await page.$$("//div[@role='listbox']//span");
//for (let NameOption of NameOptions){
  //  const Name = await NameOption.textContent();
   //if(Name.includes('Krishna Kumari KM'))
    //{
    //   await NameOption.click();
      //  break;
       //console.log(Name);
    //}
//} 

//await page.waitForTimeout(2000);
//const firstOption = await page.locator("(//div[@role='option']//span)[1]");
//await firstOption.click();  // Click the first span inside an option



    //save
    //await page.click("button[type='submit']");
     await page.waitForTimeout(9000);

});
