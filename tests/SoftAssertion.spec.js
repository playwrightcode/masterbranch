const {test, expect}=require('@playwright/test')

test("Soft assertion", async({page})=>{

await page.goto("https://www.demoblaze.com/index.html")

//hard A
await expect(page).toHaveTitle('STORE')
await expect(page).toHaveURL("https://www.demoblaze.com/index.html")
await expect(page.locator('.navbar-brand')).toBeVisible();











})