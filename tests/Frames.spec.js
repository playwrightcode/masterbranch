const { test , expect } = require("@Playwright/test");

test('Handle the Frame ' , async ({ page })=>{
 await page.goto("https://ui.vision/demo/webtest/frames/")

 const allframes =await page.frames();
 console.log("Number of frames:" , allframes.length);

//1-------using name or url
 //const var=wait page.frame('name'); // if the name is availble 
 const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
 frame1.fill("[name='mytext1']", 'Hello');

 //2-------using frame locator 
const inputbox=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
inputbox.fill("Hello");


 await page.waitForTimeout(3000);



})