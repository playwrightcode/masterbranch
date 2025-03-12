const{test, expect} = require('@playwright/test')

test.skip('Frame Handling', async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const allframes = await page.frames();
    console.log('No of frames in a page', allframes.length);

//Using Frame object (name or url of frame)
    //const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //await frame1.fill('[name="mytext1"]', 'Kanaga')

    //Using frame locator
    const frame1 = await page.frameLocator('//frameset[1]/frame[1]').locator('[name="mytext1"]')
    await frame1.fill('Kanaga')

    await page.waitForTimeout(4000)

})

test('Nested Frames', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = await page.frame({url :'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.locator('input[name="mytext3"]').fill('Kanaga')
    
    //nested frame
    const childframe = await frame3.childFrames()

    await childframe[0].locator('//*[@id="i6"]/div[3]/div').check();

    await page.waitForTimeout(4000)



})