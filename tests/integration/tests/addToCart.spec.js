import { test, expect } from '@playwright/test';

test('Confirm Correct Product and Quantity Display in Cart', async ({ page }) => {
    let expectedText = ["botol - $100 x 1", "snack - $200 x 2"]

    await page.goto('http://localhost:8080/');
    await page.locator('li').filter({ hasText: 'botol - $100Add to Cart' }).getByRole('button').click();
    await page.locator('li').filter({ hasText: 'snack - $200Add to Cart' }).getByRole('button').click();
    await page.locator('li').filter({ hasText: 'snack - $200Add to Cart' }).getByRole('button').click();
    
    let itemsInCart = await page.locator('//ul[@id="cart"]/li').all();

    for (let i=0; i < itemsInCart.length; i++) {
        await expect(itemsInCart[i]).toContainText(expectedText[i]);
    }
})
