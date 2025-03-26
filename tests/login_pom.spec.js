const {test, expect} = require('@playwright/test'); 
import { LoginPage } from '../.github/workflows/pages/LoginPage';
import { Jobs } from '../.github/workflows/pages/Jobs';

test ('Login POM test', async({page})=>{

    const loginTest = new LoginPage(page);
    await loginTest.goToLoginPage();
    loginTest.login('Admin', 'admin123');
    await page.waitForTimeout(5000);


    //Create new job
    const newjob = new Jobs(page)
    await newjob.createJob('New Pom Job', 'This job is created using POM method');
    await page.waitForTimeout(5000);

    await newjob.verifyCreatedJobInList();


})

