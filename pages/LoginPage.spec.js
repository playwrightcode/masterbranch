class LoginPage
{

 constructor(page)
 {
   this.page = page 
   this.username = "#email"
   this.password = "//input[@placeholder='Enter Password']"
   this.loginbutton ="//button[text()='Sign in']"

 }

async loginApp()
{
await this.page.fill(this.username,"admin@email.com")
await this.page.fill(this.password,"admin@123")
await this.page.click(this.loginbutton) 

}
 
}
module.exports = LoginPage;