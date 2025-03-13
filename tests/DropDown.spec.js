
import test, { expect } from "playwright/test";

test("Handle dropdown" , async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
  //  await page.pause();
  //  await page.locator('#country').selectOption({label:'India'}); //lavel/visible text
  //  await page.locator('#country').selectOption('India'); //visible text 
  //  await page.locator('#country').selectOption({value: 'canada'});// by using value
  //await page.locator('#country').selectOption({index: 2});// by using index
  //await page.selectOption("#country",'India');



  //Asertion
//  const options= await page.locator('#country option');
//  await expect(options).toHaveCount(10);


// const options=await page.$$('#country option');
// //console.log("Number of options:", options.length)
// await expect(options.length).toBe(10);


// const content=await page.locator('#country').textContent()
// await expect(content.includes('India')).toBeTruthy()

// const options=await page.$$('#country option');
// let status=false;

// for(const option of options)

//     {
//        // console.log(await option.textContent())
//        let value=await option.textContent();
//        if(value.includes('France '))
//        {
//         status=true;
//         break;
//        }
//     }
// expect(status).toBeTruthy();


//5--------------------
const options=await page.$$('#country option')
for(const option of options)

        {
            
           let value=await option.textContent();
           if(value.includes('France '))
           {
            await page.selectOption('#country' , value);
            break;
           }
        }

    await page.waitForTimeout(3000);






})