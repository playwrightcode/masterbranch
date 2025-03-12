import {test, expect} from '@playwright/test'

test('Handling inputs', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(await page.locator('#name')).toBeVisible(); //To verify the field is present or not
    await expect(await page.locator('#name')).toBeEditable();
    await expect(await page.locator('#name')).toBeEmpty();

    await page.fill('#name', 'Kanaga');
    await page.locator('#female').check();

    await expect(await page.locator('#female')).toBeChecked();
    await expect(await page.locator('#female').isChecked()).toBeTruthy();

   await expect(await page.locator('#male').isChecked()).toBeFalsy();

    await page.waitForTimeout(5000); // Pausing the code

    
})