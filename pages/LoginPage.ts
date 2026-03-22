import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { UserDto } from '../dtos/UserDto';

export class LoginPage extends BasePage {

    get usernameInput(): Locator {
        return this.page.getByTestId('username');
    }

    get passwordInput(): Locator {
        return this.page.getByTestId('password');
    }

    get loginButton(): Locator {
        return this.page.getByTestId('login-button');
    }

    get lockedOutUserErrorMessage(): Locator {
        return this.page.getByText('Epic sadface: Sorry, this user has been locked out.');
    }

    public async logIn(user: UserDto): Promise<void> {
        await this.usernameInput.fill(user.login);
        await this.passwordInput.fill(user.password);
        await this.loginButton.click();
    }
}