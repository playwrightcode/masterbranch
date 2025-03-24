const{test, expect} = require('@playwright/test');
test('DragandDrop', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const source=await page.locator('#draggable')
    const target=await page.locator('#droppable')

    await source.dragTo(target)

    await page.waitForTimeout(3000);
});

// 