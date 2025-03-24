const { test, expect } = require('@playwright/test');

test('Tables ', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/')
 const table = await page.locator( '#productTable')

 const columns = await table.locator ('thead tr th')
console.log('Number of columns:',await columns.count())
expect(await columns.count()).toBe(4)

const rows = await table.locator ('tbody tr')
console.log('Number of rows:',await  rows.count())        
expect(await rows.count()).toBe(5)

//single click 
 //const matchedrow = rows.filter({
//has : page.locator('td'),

//hasText : 'Tablet'

// })
//await matchedrow.locator('input').check()

//multiple click
/*
 async function SelectProducts(rows,page,name){
   
    const matchedrow = rows.filter({
        has : page.locator('td'),
        
        hasText : name
        
      })
         await matchedrow.locator('input').check()
}
*/
//await SelectProducts(rows,page,'Smartphone')

//await SelectProducts(rows,page,'Smartphone')
//await SelectProducts(rows,page,'Laptop')

//await page.waitForTimeout(5000)


//4) print all product details using loop
   // for(let i=0;i<await rows.count();i++)
     //{
       // const row=rows.nth(i);
        //const tds=row.locator('td')

        //for(let j=0 ;j< await tds.count()-1;j++)
        //{
         //   console.log(await tds.nth(j).textContent())
        //}
    //}

//5)read data from all pages in the table
  

const pages = await page.locator('.pagination li a')
console.log('Number of pages:',await pages.count())
   
for (let p=0 ;p<await pages.count(); p++)
{ 

if (p>0)
{
    await pages.nth(p).click()
    await page.waitForTimeout(3000)
    for(let i=0;i<await rows.count();i++)
        {
           const row=rows.nth(i);
           const tds=row.locator('td')
   
           for(let j=0 ;j< await tds.count()-1;j++)
           {
               console.log(await tds.nth(j).textContent())
           }
       }

await page.waitForTimeout(3000) 
        }
    }
})

    
 




