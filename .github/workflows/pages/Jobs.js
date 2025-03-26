
exports.Jobs = 
class Jobs{

    constructor(page){
        this.page = page;
        this.adminmenu = '//span[text()="Admin"]';
        this.jobdroparrow = '(//i[@with-container="false"])[2]';
        this.jobTitle = '(//a[@role="menuitem"])[1]';
        this.addjobbutton = '//button[contains(@class,"oxd-button oxd-button--medium")]';
        this.jobtitleinput = '(//input[@class="oxd-input oxd-input--active"])[2]';
        this.jobdescription = '//textarea[@placeholder="Type description here"]';
        this.submitbutton = '//button[@type="submit"]';
        this.alljobs = '.oxd-table .oxd-table-body .oxd-table-cell:nth-of-type(2) div';

    }

    async createJob(jobtitle, description){
        await this.page.locator(this.adminmenu).click();
        await this.page.locator(this.jobdroparrow).click();
        await this.page.locator(this.jobTitle).click();
        await this.page.locator(this.addjobbutton).click()
        await this.page.locator(this.jobtitleinput).fill(jobtitle)
        await this.page.locator(this.jobdescription).fill(description)
        await this.page.locator(this.submitbutton).click()
    }

    async verifyCreatedJobInList(){
        const mynewjob = await this.page.$$(this.alljobs)
        console.log(mynewjob.length)
        for(let jobtest of mynewjob){
            
            const jobTitle = await jobtest.textContent();
            console.log(jobTitle);
       if(await jobTitle.includes('New Pom Job'))
       {
        console.log('Job Title created successfully')
       }
        }
    }


}