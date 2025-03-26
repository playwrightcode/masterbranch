import{test, expect} from '@playwright/test';

test('Screenshots test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.screenshot({path:'tests/screenshot'+Date.now()+'homepage.png'}) //it will take screen shot till the page is visible
})

test.only('Screenshots full page', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.screenshot({path:'tests/screenshot'+Date.now()+'homepage.png', fullPage: true}) // will take full page screeshot
})

