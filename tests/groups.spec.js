
const {test, expect} = require('@playwright/test'); 

test.beforeAll(async()=>{
    console.log('It will execute once before all test......')
})

test.afterAll(async()=>{
    console.log('It will execute once after all test......')
})

test.beforeEach(async()=>{
    console.log('This will execute before every test')
})

test.afterEach(async()=>{
    console.log('This will execute after every test')
})


test.describe('Group1', ()=>{

    test('Test 1', async({page})=>{
        console.log('My test 1......')
    })
    
    test('Test 2', async({page})=>{
        console.log('My test 2......')
    })
})

test.describe('Group2', ()=>{
    test('Test 3', async({page})=>{
        console.log('My test 3.....')
    })
    
    test('Test 4', async({page})=>{
        console.log('My test 4.....')
    })
})



