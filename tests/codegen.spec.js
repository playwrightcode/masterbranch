import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uat.flyhub.com/');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'BANGLADESH' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'BANGLADESH' }).click();
  await page.goto('https://bduat.flyhub.com/login/');
  await page.getByRole('textbox', { name: 'User Name/Email Address' }).click();
  await page.getByRole('textbox', { name: 'User Name/Email Address' }).fill('k.vkanaga1993@gmail.com');
  await page.getByRole('textbox', { name: 'User Name/Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Ok' }).click();
});