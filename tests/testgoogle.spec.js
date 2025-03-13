import { test, expect } from '@playwright/test';

test('Click and navigate', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.waitForTimeout(2000);

  const staySignedOutButton = page.getByRole('button', { name: 'Stay signed out' });

  if (await staySignedOutButton.isVisible()) 
    {
    await staySignedOutButton.click();
  }
  
  await page.getByRole('link', { name: 'About' }).click();
  await page.waitForLoadState('load');
  await expect(page).toHaveURL("https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header");
  await page.waitForTimeout(3000);
  await page.goBack();
  await expect(page).toHaveURL('https://www.google.com');

  await page.getByRole('link', { name: 'Store' }).click();
  await page.waitForLoadState('load');
  await expect(page).toHaveURL("https://store.google.com/in/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN");
  //await page.waitForTimeout(3000);
  await page.goBack();
  await expect(page).toHaveURL('https://www.google.com');


});

