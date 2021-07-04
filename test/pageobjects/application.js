
const Page = require("./page");

class Application extends Page {

    async openBrowser() {
        await browser.url('/');
        await browser.maximizeWindow();
    }

    get Username() { return $('//input[@id="user-name"]'); }
    get Password() { return $('//input[@id="password"]'); }
    get submit() { return $('//input[@type="submit"]'); }
    get inventorytitle() { return $('//span[@class="title"]'); }
    get addtocart() { return $('//button[@id="add-to-cart-sauce-labs-backpack"]'); }
    get clickcarticon() { return $('//a[@class="shopping_cart_link"]'); }
    get carttitle() { return $('//span[@class="title"]'); }
    get clickcheckout() { return $('//button[@data-test="checkout"]'); }
    get checkouttitle() { return $('//span[@class="title"]'); }
    get firstname() { return $('//input[@id="first-name"]'); }
    get lastname() { return $('//input[@id="last-name"]'); }
    get postalcode() { return $('//input[@id="postal-code"]'); }
    get clickcontinue() { return $('//input[@name="continue"]'); }
    get finishpagetitle() { return $('//span[@class="title"]'); }
    get clickfinish() { return $('//button[@id="finish"]'); }
    get thankyouheader() { return $('//h2[@class="complete-header"]'); }

    async login(uname, pwd) {
        (await this.Username).waitForDisplayed(2000);
        await (await this.Username).setValue(uname);
        await (await this.Password).waitForExist(2000);
        await (await this.Password).setValue(pwd);
        await (await this.submit).waitForClickable(2000);
        await (await this.submit).click();

    }
    async inventory() {
        await (await this.addtocart).waitForClickable(2000);
        await (await this.addtocart).click();
        await (await this.clickcarticon).waitForClickable(2000);
        await (await this.clickcarticon).click();

    }
    async cart() {
        await (await this.clickcheckout).waitForClickable(2000);
        await (await this.clickcheckout).click();

    }
    async checkout(fname, lname, pcode) {
        await (await this.firstname).setValue(fname);
        await (await this.lastname).setValue(lname);
        await (await this.postalcode).setValue(pcode);
        await (await this.clickcontinue).waitForClickable(2000);
        await (await this.clickcontinue).click();
    }
    async finish() {
        await (await this.clickfinish).waitForClickable(2000);
        await (await this.clickfinish).click();

    }

}
module.exports = new Application();