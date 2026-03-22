import { CheckoutUserInfoDto } from '../dtos/CheckoutUserInfoDto';
import { getRandomFirstName, getRandomFLastName, getRandomNumber } from '../utils';

export function getRandomChekoutUserInfo(): CheckoutUserInfoDto {
    return new CheckoutUserInfoDto(getRandomFirstName(), getRandomFLastName(), getRandomNumber())
}
