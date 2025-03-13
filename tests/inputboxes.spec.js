const { test, expect } = require('@playwright/test');

test('handle inputbox', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html', {
        timeout: 20000, // Increased timeout
        waitUntil: 'domcontentloaded' // Faster page load
    });

    const firstNameInput = page.getByPlaceholder('First Name');
    await expect(firstNameInput).toBeVisible();
    await firstNameInput.fill("FLY");

    const lastNameInput = page.getByPlaceholder('Last Name');
    await expect(lastNameInput).toBeVisible();
    await lastNameInput.fill("HIS");

    const addressField = page.locator('textarea.form-control');
    await addressField.fill('123 Main Street, City, Country');
    await expect(addressField).toHaveValue('123 Main Street, City, Country');


    const emailAddress =page.locator('input[ng-model="EmailAdress"]');
    await emailAddress.fill('test12@gmail.com');

    const phoneNumber =page.locator('//input[@type="tel"]');
    await phoneNumber.fill('1789898989');

    await expect(addressField).toHaveValue('123 Main Street, City, Country');
    await expect(emailAddress).toHaveValue('test12@gmail.com');
    await expect(phoneNumber).toHaveValue('1789898989');


    await page.waitForTimeout(5000);
});
