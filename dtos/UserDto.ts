export class UserDto {
    private readonly _brand = 'UserDto';

    constructor(
        public readonly login: string,
        public readonly password: string,
    ) { }
}