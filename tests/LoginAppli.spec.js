const{test, expect} = require('@playwright/test')
const LoginPage = require("../pages/LoginPage.spec")

 test ('Login to the application using POM' , async ({page}) => {

await page.goto('https://freelance-learn-automation.vercel.app/');

const loginpage = new LoginPage(page)

await loginpage.loginApp()
 



});