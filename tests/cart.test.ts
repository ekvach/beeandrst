import { expect, test } from '../fixtures/ui-test';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';

test.describe('Cart test', () => {
    test('verify a product can be added to cart', async ({ page }) => {

        const homePage = new HomePage(page);

        const expectedProductItemDto = await homePage.createProductCardDto(homePage.productItem.first());
        await homePage.productItem.filter({ hasText: expectedProductItemDto.name }).locator(homePage.addToCartButton).click();

        expect(
            await homePage.header.locator(homePage.cartIconCounter).textContent(),
            'Product should be counted after adding to the Cart'
        )
            .toEqual("1")

        await homePage.cartButton.click();

        const cartPage = new CartPage(page);
        const addedProductItemLocator = cartPage.productItem.filter({ hasText: expectedProductItemDto.name });

        expect(
            await addedProductItemLocator.locator(cartPage.itemQuantityInput).textContent(),
            'Product quantity should be correct'
        )
            .toEqual("1")

        const addedProductItemDto = await cartPage.createProductCardDto(addedProductItemLocator);

        expect(addedProductItemDto.name).toEqual(expectedProductItemDto.name);
        expect(addedProductItemDto.price).toEqual(expectedProductItemDto.price);
        expect(addedProductItemDto.description).toEqual(expectedProductItemDto.description);
    });
});