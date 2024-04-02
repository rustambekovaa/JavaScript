// let arr = [3, 3, 3, 4, 4, 4, 2, 2, 2, 1, 1,]

// function get(){
//     let k =[]
//     for(i of arr){
//         if(!k.includes(i)){
//             k.push(i)
//         }
//     }
//     console.log(k);
// }
// get()



// function get() {
//     let k2 = [];
//     for (let i of arr) {
//         let k1 = false;
//         for (let i2 of k2) {
//             if (i === i2) {
//                 k1 = true;
//             }
//         }
//         if (!k1) {
//             k2.push(i);
//         }
//     }
//     console.log(k2);
// }
// get();


let foods = [
    {
        id: 1,
        name: 'burger',
        cost: '200som',
        discount: '20%'
    },
    {
        id: 2,
        name: 'pizza',
        cost: '220som',
        discount: '30%'
    },
    {
        id: 3,
        name: 'sushi',
        cost: '250som',
        discount: '50%'
    }
]

let customers = {
    customer1: {
        id: 1,
        food: [1, 1, 2, 3, 3]
    },
    customer2: {
        id: 2,
        food: [1, 2, 2, 3, 1]
    },
}

const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);

function getSum() {
    for (let k in customers) {
        let l = []
        for (i of foods) {
            for (i2 of customers[k].food) {
                if (i2 == i.id) {
                   l = parseInt(i.cost)
                   const sum =l.map(parseInt(i.cost)-(parseInt(i.cost)/100 * parseInt(i.discount)))
                    i2 = sum
                // const sum =(k.food).map()
                }
            }
             
        }
    }
    console.log(customers);
}
getSum()



