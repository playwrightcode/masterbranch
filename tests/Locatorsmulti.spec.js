const { test, expect } = require('@playwright/test');

test('Get all anchor tags href', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');  // Navigate to the page

  // Get all <a> (anchor) elements
  const links = await page.$$('a');

  // Iterate over each link and get the href attribute
  for (const link of links) {
    const href = await link.getAttribute('href');  // Get the 'href' attribute of each <a> element
    console.log(href);  // Output the href to the console
  }
});

