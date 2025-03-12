const { test ,expect} = require('@playwright/test');

test('Checkbox', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    // single checkbox
    await page.locator("//input[@id='monday' and @type='checkbox']").check();
    // await page.check("//input[@id='monday' and @type='checkbox']");
    expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();
    expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);


    // multiple checkboxes
    const checkboxLocators = [
              "//input[@id='sunday' and @type='checkbox']",
              "//input[@id='monday' and @type='checkbox']",
              "//input[@id='saturday' and @type='checkbox']", 


            ];
for (const locator of checkboxLocators) {
    await page.check(locator);
    await page.waitForTimeout(5000);
}
})