const{ test, expect } = require('@playwright/test');
const { time } = require('console');
test('Democases', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill('//input[@placeholder="Username"]', 'Admin');
    await page.fill('//input[@placeholder="Password"]', 'admin123');
    await page.click("button[type='submit']");   
  //  await page.waitForTimeout(2000);

    //await page.locator("//a[contains(@class,'oxd-text oxd-text--span oxd-main-menu-item--name' and text()='Admin')]").click();
    await page.getByRole('link', { name: 'Admin' }).click();

   // await page.waitForTimeout(2000);

/*  clicking Add
await page.click("//button[normalize-space()='Add']");
//await page.waitForTimeout(2000);


//selecting role 
await page.click("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div");
await page.waitForTimeout(1500);
await page.click("//div[normalize-space()='ESS']"); 
await page.waitForTimeout(1000);

//Employee Name
await page.fill('//input[@placeholder="Type for hints..."]',"Kum");
await page.waitForTimeout(3000);
//await page.waitForSelector('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div[2]')
await page.waitForSelector("//div[@role='listbox']", { state: "visible" });


//const NameOptions =await page.$$("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div[2]");
const NameOptions =await page.$$("//div[@role='listbox']//span");
for (let NameOption of NameOptions){
    const Name = await NameOption.textContent();
   if(Name.includes('bala kumar ravi'))
    {
       await NameOption.click();
        break;
       //console.log(Name);
    }
}
    //hi 

//selecting status
await page.click("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div/div[2]/i");
await page.click("//div[normalize-space()='Enabled']");
//await page.waitForTimeout(1000);




//inserting username
const username = await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input");
console.log('Username locator:', username);
 await username.click();
await username.fill('KumarH');





//inserting password
const password =await page.locator("div[class='oxd-grid-item oxd-grid-item--gutters user-password-cell'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']");
await password.click();
await page.waitForTimeout(1000); // Waits for 2 seconds
await password.fill('Kumar@123');
await page.waitForTimeout(1000); // Waits for 2 seconds




//confirm password
const confirmPassword =await page.locator("div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']");
await confirmPassword.click();      
await confirmPassword.fill('Kumar@123');
await page.waitForTimeout(2000); // Waits for 2 seconds


//save
await page.click("button[type='submit']");
await page.waitForTimeout(1000); // Waits for 1 second */



//const rows =await page.$$("div.oxd-table");
//const table = await page.locator("div[class='oxd-table-body']");
//console.log('Table:', table);
//const rows = await page.$$("div.oxd-table-body div.oxd-table-card"); 
//console.log(`Total rows found: ${rows.length}`);
const rows = page.locator("div.oxd-table-body div.oxd-table-card");
const rowCount = await rows.count();
console.log(`Total rows found: ${rowCount}`);

const tableBody = await page.locator("div.oxd-table-body").textContent();
console.log("Table content:", tableBody);

});