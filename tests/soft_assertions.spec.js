const {test, expect} = require ('@playwright/test');

test('Soft Assertion', async({page}) =>{


//Hard Assertion
    /*await page.goto('https://id.atlassian.com/signup');

    await expect(page).toHaveTitle('Sign up - Log in with Atlassian account999');
    await expect(page).toHaveURL('https://id.atlassian.com/signup');

    await expect(page.locator('#ProductHeadingSuffix h5')).toHaveText('Sign up to continue');*/


    //Soft Assertions
    await page.goto('https://id.atlassian.com/signup');

    await expect.soft(page).toHaveTitle('Sign up - Log in with Atlassian account999');
    await expect.soft(page).toHaveURL('https://id.atlassian.com/signup');

    await expect.soft(page.locator('#ProductHeadingSuffix h5')).toHaveText('Sign up to continue');


})