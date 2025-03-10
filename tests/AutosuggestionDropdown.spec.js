const {test,expect} = require ('@playwright/test')

test ( 'AutosuggestionDropdown', async({page})=>{

    await page.goto('https://www.redbus.in/')


    await page.locator('#src').fill("Delhi");

    await page.waitForSelector('.sc-dnqmqq.dZhbJF .placeHolderMainText');

   
    const fromcityoptions=await page.$$('.sc-dnqmqq.dZhbJF .placeHolderMainText')

    for(let option of fromcityoptions)
    {
       const value=await option.textContent();
       console.log("the value",value)
     if(value.includes('Badarpur')){

          await option.click()
       }
   
   
    } 
 await page.waitForTimeout(15000); 

}



)