export class ProductPriceDto {
    private readonly _brand = 'ProductPriceDto';

    constructor(
        public readonly currency: string,
        public readonly price: number,
    ) { }
}