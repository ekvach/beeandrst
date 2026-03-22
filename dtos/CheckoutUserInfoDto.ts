export class CheckoutUserInfoDto {
    private readonly _brand = 'CheckoutUserInfoDto';

    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly postalCode: string,
    ) { }
}