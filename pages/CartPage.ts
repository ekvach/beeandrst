import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

    get removeButton(): Locator {
        return this.page.getByText('Remove');
    }

    get itemQuantityInput(): Locator {
        return this.page.getByTestId('item-quantity');
    }

    get checkoutButton(): Locator {
        return this.page.getByTestId('checkout');
    }
}