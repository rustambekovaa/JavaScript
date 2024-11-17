
// let arr=[[1],[[[234]]],[123456],[123456]]
// let k=arr.flat(4)
// console.log(k);



////////////////////////////////1/////////////////////////////
// [
//     {
//         name: 'Iphone 11 pro',
//         price: 500,
//         category: 'phones'
//     },
//     {
//         name: 'Iphone 12 pro',
//         price: 600,
//         category: 'phones'
//     },
//     {
//         name: 'Ipad 4',
//         price: 300,
//         category: 'tablets'
//     },
//     {
//         name: 'Macbook pro 2017',
//         price: 300,
//         category: 'laptops'
//     },
// ]



/////////////////////////////////////////2//////////////////////


const k=+prompt("Введити цифру")

const massive=[
    {
        name: 'Iphone 11 pro',
        price: 500,
        category: 'phones'
    },
    {
        name: 'Iphone 12 pro',
        price: 600,
        category: 'phones'
    },
    {
        name: 'Ipad 4',
        price: 700,
        category: 'tablets'
    },
    {
        name: 'Macbook pro 2017',
        price: 500,
        category: 'laptops'
    },
       {
        name: 'Ihpone 14',
        price: 900,
        category: 'phones'
    },
    {
        name: 'Macbook pro 2019',
        price: 1100,
        category: 'laptops'
    },
       {
        name: 'Ipad 7',
        price: 900,
        category: 'tablets'
    },
    {
        name: 'Macbook pro 2021',
        price: 1600,
        category: 'laptops'
    },
]
    

const newUser=massive.find(function(i){
        if(i.price < k){
            alert(i)
        }
    });



/////////////////////////////////////////////////////////////////////////
// const newCost=+prompt("Введити процент скидки который вы хотите")

//  let massive=[
//     {
//         name: 'Iphone 11 pro',
//         price: 500,
//         category: 'phones'
//     },
//     {
//         name: 'Iphone 12 pro',
//         price: 600,
//         category: 'phones'
//     },
//     {
//         name: 'Ipad 4',
//         price: 700,
//         category: 'tablets'
//     },
//     {
//         name: 'Macbook pro 2017',
//         price: 500,
//         category: 'laptops'
//     },
//        {
//         name: 'Ihpone 14',
//         price: 900,
//         category: 'phones'
//     },
//     {
//         name: 'Macbook pro 2019',
//         price: 1100,
//         category: 'laptops'
//     },
//        {
//         name: 'Ipad 7',
//         price: 900,
//         category: 'tablets'
//     },
//     {
//         name: 'Macbook pro 2021',
//         price: 1600,
//         category: 'laptops'
//     },
// ]

// const cost  =massive.find(function(i){
    
//     i.price = i.price/100*newCost-i.price
//     console.log(i);
    
// });