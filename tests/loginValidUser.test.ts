import { expect, test } from '../fixtures/ui-test';
import { HomePage } from '../pages/HomePage';
import { getStandardUser } from '../providers';

test.describe('Valid User log in test', () => {
  test.use({
    user: getStandardUser(),
  });

  test('verify valid User is able to log in', async ({ page }) => {
    const homePage = new HomePage(page);

    await expect(homePage.cartButton, 'Cart button should be visible after successful login').toBeVisible();
    await expect(homePage.header.locator(homePage.burgerMenu), 'Header burger menu should be visible after successful login').toBeVisible();
    await expect(homePage.productItem.first(), 'At least one product card should be visible after successful login').toBeVisible();
  });
});
