import{test, expect} from '@playwright/test'

test('Drag and Drop', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const source = await page.locator('#draggable')
    const target = await page.locator('#droppable')

    //Approach 1
    /*await source.hover();
    await page.mouse.down();

    await target.hover();
    await page.mouse.up();*/

    //Approach 2
    await source.dragTo(target);

    await page.waitForTimeout(3000)
})