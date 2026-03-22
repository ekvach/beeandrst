import { Locator, Page } from '@playwright/test';
import { ProductCardDto } from '../dtos/ProductCardDto';
import { ProductPriceDto } from '../dtos/ProductPriceDto';

export abstract class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page
    }

    get header(): Locator {
        return this.page.getByTestId('primary-header');
    }

    get secondaryHeader(): Locator {
        return this.page.getByTestId('secondary-header');
    }

    get title(): Locator {
        return this.page.getByTestId('title');
    }

    get continueButton(): Locator {
        return this.page.getByTestId('continue');
    }

    get burgerMenu(): Locator {
        return this.page.locator('//button[@id="react-burger-menu-btn"]')
    }

    get productItem(): Locator {
        return this.page.getByTestId('inventory-item');
    }

    get productItemName(): Locator {
        return this.page.getByTestId('inventory-item-name');
    }

    get productItemPrice(): Locator {
        return this.page.getByTestId('inventory-item-price');
    }

    get productItemDescription(): Locator {
        return this.page.getByTestId('inventory-item-desc');
    }

    get cartIconCounter(): Locator {
        return this.page.getByTestId('shopping-cart-badge');
    }

    public async createProductCardDto(productItem: Locator): Promise<ProductCardDto> {
        const name = await productItem.locator(this.productItemName).textContent();
        const rawPrice = await productItem.locator(this.productItemPrice).textContent();
        const description = await productItem.locator(this.productItemDescription).textContent() ?? "";

        if (!name || !rawPrice) throw Error(`Cannot create product Dto with empty fields`)

        const priceDto = await this.parceProductItemPrice(rawPrice);

        return new ProductCardDto(name, priceDto, description);
    }

    public async parceProductItemPrice(rawPrice: string): Promise<ProductPriceDto> {
        const ccy = rawPrice.substring(0, 1);
        const price = rawPrice.substring(1);

        return new ProductPriceDto(ccy, Number(price))
    }
}