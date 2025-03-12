import {test, expect} from '@playwright/test';

test('Web Tables', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   const table = await page.locator('#productTable')

   //count no of row of the table
   const trow = await table.locator('tbody tr')
   console.log('The row count is', await trow.count());
    expect(await trow.count()).toBe(5)

   //count the no of column of table
   const tcolumn = await table.locator('thead tr th')
   console.log('The column count is', await tcolumn.count());
   expect(await tcolumn.count()).toBe(4);

   const matchedrows = trow.filter({
    
    has:page.locator('td'),
    hasText: 'Product 3'

   })

   await matchedrows.locator('input').check();

   await page.waitForTimeout(4000);


})