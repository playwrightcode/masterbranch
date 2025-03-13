import { test, expect } from '@playwright/test';

test("Handle Checkboxes", async ({ page }) => {
     
    await page.goto("https://testautomationpractice.blogspot.com/");

    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(3000);
    const checkboxes = [
        "#sunday",
        "#monday",
        "#saturday"
    ];

     
    for (const ch of checkboxes) {
        await page.locator(ch).check();
        console.log(`Checked: ${ch}`);
        await expect(page.locator(ch)).toBeChecked();
    }

   
    await page.waitForTimeout(3000);

     
    for (const ch of checkboxes) {
        await page.locator(ch).uncheck();
        console.log(`Unchecked: ${ch}`);
        await expect(page.locator(ch)).not.toBeChecked();
    }

    
    await page.waitForTimeout(3000);
});
