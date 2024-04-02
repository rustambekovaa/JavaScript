let foods = [ 
    { 
        id: 1, 
        catId: 1, 
        name: 'Shakarap', 
        cost: '100$' 
    }, 
    { 
        id: 2, 
        catId: 3, 
        name: 'Burger', 
        cost: '50e' 
    }, 
    { 
        id: 3, 
        catId: 2, 
        name: 'Cake', 
        cost: '150$' 
    } 
  ] 
   
  let customers = [ 
    { 
        id: 1, 
        food: [1, 1, 2, 2], 
        date: '2023-01-02' 
    }, 
    { 
        id: 2, 
        food: [2, 3, 3], 
        date: '2022-12-03' 
    }, 
    { 
        id: 3, 
        food: [1, 1, 2, 2], 
        date: '2023-01-02' 
    }, 
    { 
        id: 4, 
        food: [2, 3, 3, 3], 
        date: '2023-02-12' 
    } 
  ]


// function get() {
//     customers.forEach(elem => {
//         elem.food = elem.food.map(foodId => {
//             let k2 = foods.filter(food => food.catId === foodId);
//             if (k2.length > 0) {
//                 return k2[0].cost;
//             }
//         });
//     });
//     console.log(customers);
// }

// get();



// function changeFood(){ 
//     customers.forEach(customer =>{ 
//       customer.food = customer.food.map(id =>{ 
//         let result = foods.find(food=> food.id === id) 
//         console.log(result); 
//         return result.cost 
//       }) 
//     }) 
//   } 
//   changeFood()



  function getTotal(){
    customers.forEach(elem =>{
        let k = 0
        elem.food.forEach(elem2 =>{
            if(elem2.includes("$")){
               k += parseInt(elem2)* 85
            }
            if(elem2.includes("e")){
                k += parseInt(elem2)* 95
             }
        })
       elem.total = k
    })
  }
  getTotal()
  console.log(customers);

  