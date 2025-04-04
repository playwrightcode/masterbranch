const{test,expect} = require('@playwright/test');

test("Get Users",async ({request})=>{

   const response = await request.get('https://reqres.in/api/users?page=2');
   console.log(await response.json());
   expect(response.status()).toBe(200);

})

test.only("Post Users",async ({request})=>{ 

   const response = await request.post('https://reqres.in/api/users',{
      data:{
         name:'morpheus',
         job:'leader'
      }
   });
   console.log(await response.json());
   expect(response.status()).toBe(201);

}   )   