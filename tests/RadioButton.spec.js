import { test, expect } from '@playwright/test';

test("Handle Radio Button", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    
    // const maleRadio = page.locator('#male');
    // await maleRadio.check();
 
    // await expect(maleRadio).toBeChecked();

    // // Verify Female radio button is NOT selected
    // const femaleRadio = page.locator('#female');
    // await expect(femaleRadio).not.toBeChecked();

     await expect(await page.locator('#female').isChecked()).toBeFalsy();
    await page.waitForTimeout(3000);

    
});
