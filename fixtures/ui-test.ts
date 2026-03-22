import { Page } from '@playwright/test';
import { UserDto } from '../dtos/UserDto';
import { CartPage } from '../pages/CartPage';
import { LoginPage } from '../pages/LoginPage';
import { getBaseUri, getCartUri } from '../providers';
import { test as base, expect } from './base-test';

export const test = base.extend({
    page: async ({ page, user }, use) => {
        await beforeTest(page, user);
        await use(page);
        await afterTest(page);
    },
});

async function beforeTest(page: Page, user: UserDto): Promise<void> {
    const loginPage = new LoginPage(page);

    await page.goto(getBaseUri());
    await loginPage.logIn(user);
}

async function afterTest(page: Page): Promise<void> {
    await page.goto(getCartUri());

    await page.waitForLoadState()
    const cartPage = new CartPage(page);

    //TODO: Remove waiter and redo to check 'empty cart' icon displaying instead, after the JIRA-XXX is fixed
    await cartPage.removeButton.first()
        .waitFor({ state: 'visible', timeout: 1000 })
        .catch(() => { });

    while (await cartPage.removeButton.count() > 0) {
        const rmvBtn = cartPage.removeButton.first();
        await rmvBtn.click();
        await rmvBtn.waitFor({ state: 'hidden' });
    }
}

export { expect };

