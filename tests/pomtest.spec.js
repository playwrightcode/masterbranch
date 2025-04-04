import { test, expect } from '@playwright/test';
import { LoginnPage } from '../pages/LoginnPage.spec';
import { Homepage } from '../pages/Homepage.spec';
import { CartPage } from '../pages/CartPage.spec';


test('test', async ({ page }) => {

  //Login
  const login=new LoginnPage(page);
  await login.gotoLoginPage();
  await login.login('pavanol','test@123')
  await page.waitForTimeout(3000)

  //Home
    
  const home=new Homepage(page)
  await home.addProductToCart("Nexus 6")
  await page.waitForTimeout(3000)
  await home.gotoCart();

  //Cart
  const cart=new CartPage(page)
  await page.waitForTimeout(3000)
  const status=await cart.checkProductInCart('Nexus 6')
  expect(await status).toBe(true);
});