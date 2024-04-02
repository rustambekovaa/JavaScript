// let values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// function getName(){
//     let k =[]
//     let k2 =  new Set()
//     values.forEach(element => {
//         k2.add(element)  
//     });
//     for( k3 of k2 ){
//         k.push(k3)
//     }
//     console.log(k);
// }
// getName()




// /////////////////////////////////////////
//  let k3=[
//     {
//         "id": 1,
//         "title": "Ноутбук Acer Aspire",
//         "price": 999,
//         "mark": 4.5
//     },
//     {
//         "id": 2,
//         "title": "Смартфон Samsung Galaxy S21",
//         "price": 1299,
//         "mark": 4.8
//     }
// ]
// function increasePrices(products) {
//     let k = products.map(elem =>{
//     elem.price= elem.price +(elem.price/100*10)
//     return elem
//     })
//     console.log(k);
//    }
//    increasePrices(k3)



function diffSubtract(date1, date2) {
    return date2 - date1;
    }
    function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
    }
    function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
    }
    alert( 'Время diffSubtract: ' + bench(diffSubtract) + 'мс' );
    alert( 'Время diffGetTime: ' + bench(diffGetTime) + 'мс' );