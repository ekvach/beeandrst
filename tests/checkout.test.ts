import { expect, test } from '../fixtures/ui-test';
import { CartPage } from '../pages/CartPage';
import { CheckoutYourInfoPage } from '../pages/CheckoutYourInfoPage';
import { HomePage } from '../pages/HomePage';

test.describe('Checkout test', () => {
    test('verify a checkout procces can be started', async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.productItem.first().locator(homePage.addToCartButton).click();
        await homePage.cartButton.click();

        await new CartPage(page).checkoutButton.click();

        const checkoutYourInfoPage = new CheckoutYourInfoPage(page);

        expect(
            await checkoutYourInfoPage.secondaryHeader.locator(checkoutYourInfoPage.title).textContent(),
            'Checkout is not started after clicking the Checkout button'
        ).toEqual('Checkout: Your Information');
    });
});