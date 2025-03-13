import test, { expect } from "playwright/test";

test("Handle dropdown", async({page})=>{

// await page.goto("https://testautomationpractice.blogspot.com/");
// await page.selectOption('#colours',['Blue','Red','Yellow']);

//Assertion - Check the no of options in dropdown
// const options=await page.locator('#colours option')
// await expect(options).toHaveCount(5);
 

// const options=await page.$$('#colors option');
// //console.log("Number of options:", options.length)
// await expect(options.length).toBe(5);

const content=await page.locator('#colors').textContent();
await expect(content.includes('Blue')).toBeTruthy();





})