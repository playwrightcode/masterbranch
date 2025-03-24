const{test, expect}=require('@playwright/test')

test('Datepicker', async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/')

   // await page.fill('#datepicker','03/10/2024')

//date picking
   const year = "2027"
   const month = "October"
    const day = "10" 

    await page.click('#datepicker')

    while(true){
        const currentyear = await page.locator('.ui-datepicker-year').textContent()
       const currentmonth = await page.locator('.ui-datepicker-month').textContent()
        if(currentyear === year && currentmonth === month){
            break;
        }
        else{
            await page.click('[title="Next"]')
        }
    }
    //await page.$$eval('.ui-state-default', (dates, day) => {
      //  dates.find(date => date.textContent === day).click()


    //}, day)

    const dates =await page.$$("//a[@class='ui-state-default']")
    for(const date of dates){
        const text = await date.textContent()
        if(text === day){
            await date.click()
            break;
        }}

    await page.waitForTimeout(3000);
    //hi


})