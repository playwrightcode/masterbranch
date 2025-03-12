const {test, expect} = require('@playwright/test'); // importing test & expect function from playwright/test
//import{test, expect} from '@playwright/test' // another method to import test & expect functions
test ('Home page', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');
    const pagetitle = await page.title();
    console.log('Page title is ', pagetitle);

    await expect(page).toHaveTitle('STORE');

    const pageurl = await page.url();
    console.log('Page url is', pageurl);
    
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    await page.close();


})