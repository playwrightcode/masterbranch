const { test, expect } = require('@playwright/test');

test('Authenticate via API and get token', async ({ request }) => {
  // Define the authentication endpoint and credentials
  const url = 'http://api.sandbox.flyhub.com/swagger/ui/index#!/AuthenticateV1/AuthenticateV1_Authenticate';
  const credentials = {
    username: 'messira786@gmail.com',
    apikey: 'yDite3I5tGLPV20+IShS+e=XwyNIs=wXr1VsJCh+wZ_Cd0RVIr',
  };

  // Send the POST request to the authentication endpoint
  const response = await request.post(url, {
    data: credentials, // POST body data (username and password)
  });
   // Parse the response as JSON
   const responseData = await response.json();

   // Extract token (if the response contains it)
   const accessToken = responseData.token;
   console.log('Access Token:', accessToken);
 
   // Proceed with further authenticated requests, etc.
 });
 
 

  // Assert the response status (200 indicates success)
  expect(response.status()).toBe(200);


  if (response.status() !== 200) {
    // Log the response body (to inspect the error message or HTML content)
    const textResponse = await response.text();
    console.error('Error Response:', textResponse);
    throw new Error(`Failed to authenticate. Status: ${response.status()}`);
  }

  // Parse the JSON response to get the access token
  const responseData = await response.json();
  const accessToken = responseData.token;

  // Log the token (for testing purposes)
  console.log('Access Token:', accessToken);

  // Use this token for subsequent authenticated requests, e.g., to access protected resources
});
