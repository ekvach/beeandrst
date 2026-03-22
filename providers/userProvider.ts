import { UserDto } from '../dtos/UserDto';

export function getStandardUser() {
    return new UserDto('standard_user', 'secret_sauce')
}

export function getLockedOutUser() {
    return new UserDto('locked_out_user', 'secret_sauce')
}