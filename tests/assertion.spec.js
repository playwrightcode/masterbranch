import {test, expect} from '@playwright/test'

test ('Test Assertion', async({page})=>{
    await page.goto('https://id.atlassian.com/login')
    const purl = await page.url();
    expect(page).toHaveURL('https://id.atlassian.com/login');
    console.log('page url is', purl);
    const ptitle = await page.title();
    expect(page).toHaveTitle('Log in to continue - Log in with Atlassian account');
    console.log('Page title is', ptitle);
    const username = await page.locator('#username')
    await expect(username).toBeEnabled();

    const text = await page.locator('#ProductHeadingSuffix h5')
    await expect(text).toHaveText('Log in to continue');

    //console.log('The text is', text)..., Hiii

    expect(await page.locator('#ProductHeadingSuffix h5')).toContainText('Log')

    const useremail = await page.locator('#username')
    await useremail.fill('kanaga@flyhub.com');
    expect(await(useremail)).toHaveValue('kanaga@flyhub.com');






})