const{test,expect}= require ('@playwright/test')

test('Handle dropdowns',async( {page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

// multiple ways to select the option from dropdown

//await page.locator('#country').selectOption({label:'India'});   //by using label
//await page.locator('#country').selectOption('India');  //by using visible text
//await page.locator('#country').selectOption({value:'uk'}); //by using value
//await page.locator('#country').selectOption({index:1}); //by using index
//await page.selectOption('#country','India'); //by using visible text

//Assertions
//1 Check number of options in the dropdowns -Approach 1
//const options=page.locator('#country option')
//await expect(options).toHaveCount(10);

//2 Check number of options in the dropdowns -Approach 2
//const options=await page.$$('#country option')
//console.log("Number of options:",options.length)
//await expect(options.length).toBe(10)

//3 Check the the presence of value in the dropdown - approach 1
//const content =await page.locator('#country').textContent()
//await expect(content.includes('India')).toBeTruthy();

//4 check presence of value in the dropdown - approach 2 using looping
//const options=await page.$$('#country option')
//let status=false;

//for(const option of options)
//{

 //  let value= await option.textContent()
 //  if(value.includes('France'))
 //  {
  //    status=true;
  //    break;

 //  }

//} 

//select option dropdown from using looping

const options=await page.$$('#Country option')
for (option of options)
{
    let value=await option.textContent()
    if(value.includes('France'))
    {
        await page.selectOption('#country',value);
        break;
    }
}







await page.waitForTimeout(5000);



})