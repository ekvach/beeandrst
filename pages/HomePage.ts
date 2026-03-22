import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    get cartButton(): Locator {
        return this.page.getByTestId('shopping-cart-link');
    }

    get addToCartButton(): Locator {
        return this.page.getByText('Add to cart');
    }
}