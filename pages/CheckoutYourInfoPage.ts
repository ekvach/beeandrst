import { Locator } from '@playwright/test';
import { CheckoutUserInfoDto } from '../dtos/CheckoutUserInfoDto';
import { BasePage } from './BasePage';

export class CheckoutYourInfoPage extends BasePage {

    get firstNameInput(): Locator {
        return this.page.getByTestId("firstName");
    }

    get lastNameInput(): Locator {
        return this.page.getByTestId("lastName");
    }

    get postalCodeInput(): Locator {
        return this.page.getByTestId("postalCode");
    }

    public async fillYourInfoForm(yourInfo: CheckoutUserInfoDto): Promise<void> {
        await this.firstNameInput.fill(yourInfo.firstName)
        await this.lastNameInput.fill(yourInfo.lastName)
        await this.postalCodeInput.fill(yourInfo.postalCode)
    }
}
