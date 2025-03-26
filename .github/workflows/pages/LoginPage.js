exports.LoginPage = 
class LoginPage{
    constructor(page){
        this.page = page;
        this.Useramefield = "//input[@placeholder='Username']";
        this.Passwordfield = "//input[@placeholder='Password']";
        this.loginButton = "button[type='submit']";
    }

    async goToLoginPage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async login(username, password){
        await this.page.locator(this.Useramefield).fill(username)
        await this.page.locator(this.Passwordfield).fill(password)
        await this.page.locator(this.loginButton).click();
    }
}

//module.exports = LoginPage;