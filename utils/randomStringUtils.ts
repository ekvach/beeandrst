export function getRandomNumber(length: number = 5): string {
    if (length <= 0) {
        throw new Error('Length must be greater than 0');
    }

    return Math.floor(Math.random() * 10 ** length)
        .toString()
        .padStart(length, '0');
}

export function getRandomFirstName(): string {
    return `FirstName-${getRandomString()}`;
}

export function getRandomFLastName(): string {
    return `LastName-${getRandomString()}`;
}

export function getRandomString(length: number = 5): string {
    if (length <= 0) {
        throw new Error('Length must be greater than 0');
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    return Array.from({ length }, () =>
        chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');
}