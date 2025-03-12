const{test, expect} = require('@playwright/test');
 

test('check box', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    /*await page.locator('#country').selectOption({label:'France'});// by using lable or visible text
    await page.locator('#country').selectOption('France');// by using visible text
    await page.locator('#country').selectOption({value:'france'}); //by using value
    await page.locator('#country').selectOption({index:3}); //by using index

    await page.selectOption('#country', 'India'); // by visible text*/

    // check no of options in dropdown approach1
   /* await page.locator('#country option');
    const getalloptions = await page.locator('#country option');
    await expect(getalloptions).toHaveCount(10);
    
    // check no of options in dropdown approach2

    const optioninarray = await page.$$('#country option');
    console.log("number of options", optioninarray.length);

    await expect(optioninarray.length).toBe(10);

    // check whether india is present inside the dropdown or not
   const alltext = await page.locator('#country option').textContent();

   await expect(alltext.includes('India')).toBeTruthy();*/


   //check india is present in the dropdown using loops

   
   
   const alloptions = await page.$$('#country option')
    let status = false
   for(const option of alloptions)
   {
    const value = await option.textContent();
    if(value.includes("India")){
        console.log('India is available');
        status = true
        break;
    }
   }
   expect(status).toBeTruthy();

})