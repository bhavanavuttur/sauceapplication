
const { TITLE, INVENTORY_PAGE_HEADER, CART_PAGE_HEADER, CHECKOUT_PAGE_HEADER, FINISH_PAGE_HEADER, SUCCESS_MSG } = require('../constants/constant');
const app = require('../pageobjects/application')
const data = require('../resources/inputdata.json')
describe('open sause demo page', () => {

    it('should verify the page title then login', async () => {

        await app.openBrowser();
        await expect(browser).toHaveTitle(TITLE);
        const credentials = data.login;
        app.login(credentials.uname, credentials.pwd);

    });

    it('should verify header and add product to cart', async () => {
        await expect(app.inventorytitle).toHaveTextContaining(INVENTORY_PAGE_HEADER);
        await app.inventory();
    });

    it('should verify header and naviagte to checkout', async () => {
        await expect(app.carttitle).toHaveTextContaining(CART_PAGE_HEADER);
        await app.cart();

    });

    it('fill details and click on continue', async () => {
        await expect(app.checkouttitle).toHaveTextContaining(CHECKOUT_PAGE_HEADER);
        const checkout = data.checkoutinfo;
        await app.checkout(checkout.FirstName, checkout.LastName, checkout.PostalCode);

    });

    it('should verify header and click on finish', async () => {

        await expect(app.finishpagetitle).toHaveTextContaining(FINISH_PAGE_HEADER);
        await app.finish();
        await expect(app.thankyouheader).toHaveTextContaining(SUCCESS_MSG);

    });
});