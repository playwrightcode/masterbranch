const {test,expect} = require ('@playwright/test')

test ( 'BootstrapDropdown ', async({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')


    await page.locator('.multiselect').click()

    //1
  //  const options = await page.locator('ul >li label input')
  //  await expect (options).toHaveCount(11)

  //2
 // const options=await page.$$('ul >li label input')
 // await expect(options.length).toBe(11)

 //3 select options from dropdown
 /*const options=await page.$$('ul >li label')
 for(let option of options)
 {
    const value=await option.textContent()
    //console.log("the value",value)
    if(value.includes  ('Java') || value.includes ('Angular')){
        await option.click();
    }


 } */
    const options=await page.$$('ul >li label input')
    for(let option of options)
    {
       const value=await option;
       //console.log("the value",value)
       if(value.isChecked){
           await option.uncheck();
       }
   
   
    } 
 await page.waitForTimeout(15000); 

}



)