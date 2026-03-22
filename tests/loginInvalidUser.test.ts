import { expect, test } from '../fixtures/ui-test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { getLockedOutUser } from '../providers';

test.describe('Invalid User log in test', () => {
  test.use({
    user: getLockedOutUser(),
  });

  test('verify locked out User is not able to log in', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await expect(loginPage.lockedOutUserErrorMessage, 'Correct error message should be visible for locked out User').toBeVisible();

    const homePage = new HomePage(page);

    await expect(homePage.cartButton, 'Cart button should not be visible after unsuccessful login').not.toBeVisible();
    await expect(homePage.header.locator(homePage.burgerMenu), 'Header burger menu should not be visible after unsuccessful login').not.toBeVisible();
    await expect(homePage.productItem.first(), 'No product card should be visible after unsuccessful login').not.toBeVisible();
  });
});