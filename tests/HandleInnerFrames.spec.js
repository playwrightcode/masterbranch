const {test,expect}=require('@playwright/test')

test('HandleInnerFrame', async({page})=>{


    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    //await frame3.fill("//input[@name='mytext3']",'hello')
     
    const childframes=await frame3.childFrames()
    childframes[0].locator("//*[@id='i6']/div[3]/div").check()


    await page.waitForTimeout(5000);
}


)