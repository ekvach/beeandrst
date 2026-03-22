import { ProductPriceDto } from './ProductPriceDto';

export class ProductCardDto {
    private readonly _brand = 'ProductCard';

    constructor(
        public readonly name: string,
        public readonly price: ProductPriceDto,
        public readonly description: string,
    ) { }
}