// let user={
//     name:"Majid"
// }
// let surname={
//     sn:"Bekov"
// }
// let age={
//     age:17
// }
// Object.assign(user,surname,age)
// console.log(user);


let obj = { 
    food1: { 
      id: 1, 
      name: "burger", 
      cost: 1000, 
    }, 
    food2: { 
      id: 2, 
      name: "chesburger", 
      cost: 550, 
    }, 
    food3: { 
      id: 3, 
      name: "pizza", 
      cost: 150, 
    }, 
  };



  let customer = { 
    customer1: { 
      id: 1, 
      foodId: 1, 
      count: 4, 
      total: function () { 
        let k=0
        for ( let i in obj){
                if( obj[i].id === this.foodId ){
                   k+=this.count*obj[i].cost
                }

            }
            return(k)
        } 
      }, 
    customer2: { 
      id: 2, 
      foodId: 2, 
      count: 2, 
      total: function () { 
        let k=0
        for ( let i in obj){
                if( obj[i].id == this.foodId ){
                    k+=this.count*obj[i].cost
                    return k
                }

        }
      }, 
    }, 
  };

  function newId(foodId,count){
    let length=0
    for( let i in customer){
        length++
    }
    customer["customer"+(length+1)]={
        id:length+1,
        foodId: foodId,
        count: count,
        total: function () { 
            let k=0
            for ( let i in obj){
                    if( obj[i].id == this.foodId ){
                        k+=this.count*obj[i].cost
                        return k
                    }
            }
          }, 
    }
  }
  newId(2,4)
  console.log(customer.customer2.total());
  



// let user = {
//   user1: {
//     id: 1,
//     name: "Barsbek",
//     status: "barmen",
//     salary: 5000,
//   },
//   user2: {
//     id: 2,
//     name: "Eldos",
//     status: "Povar",
//     salary: 1000,
//   },
//   user3: {
//     id: 3,
//     name: "Aziz",
//     status: "admin",
//     salary: 2000,
//   },
//   user4: {
//     id: 4,
//     name: "Aziz",
//     status: "admin",
//     salary: 4000,
//   },
//   user5: {
//     id: 5,
//     name: "Aziz",
//     status: "Pova",
//     salary: 2000,
//   },
//   user6: {
//     id: 6,
//     name: "Aziz",
//     status: "Pova",
//     salary: 50000000,
//   },
//   user7: {
//     id: 7,
//     name: "Aziz",
//     status: "kassa",
//     salary: 250000,
//   },
// };

// let foods = {
//   food1: {
//     id: 1,
//     name: "Burger",
//     cost: 100,
//   },
//   food2: {
//     id: 2,
//     name: "cheesburger",
//     cost: 150,
//   },
//   food3: {
//     id: 3,
//     name: "Plov",
//     cost: 100,
//   },
//   food4: {
//     id: 4,
//     name: "samsa",
//     cost: 100,
//   },
// };

// function newId( workerId,name,cost){
//      for ( let i in user){
//         if(user[i].id == workerId){
//             if(user[i].status == "Povar"){
//                 let length=0
//                 for(let i2 in foods){
//                     length++
//                 }
//                 foods["food" + (length + 1)]={
//                     id: length+1,
//                     name: name,
//                     cost: cost

//                 }
//             }

//         }
//      }
// }
// newId(2,"Pizza",200)
// console.log(foods);


// function delId(workerId, foodId) {
//   for (i in user) {
//     if (user[i].id == workerId) {
//       if (user[i].status == "admin") {
//         for (let i2 in foods) {
//           if (foods[i2].id == id) {
//             delete foods[i2]
//           }
//         }
//       }
//     }
//   }
// }
// delId(2, 2)






// let category = {
//   cat1: {
//     id: 1,
//     name: "Ujas",
//   },
//   cat2: {
//     id: 2,
//     name: "Komedia",
//   },
//   cat3: {
//     id: 3,
//     name: "Boevik",
//   },
// }
// let films = {
//   film1: {
//     id: 1,
//     name: "Astral",
//     catId: 1,
//     cost: 100,
//   },
//   film2: {
//     id: 2,
//     name: "povorot ne tuda",
//     catId: 1,
//     cost: 120,
//   },
//   film3: {
//     id: 3,
//     name: "Mister Bin",
//     catId: 2,
//     cost: 150,
//   },
//   film4: {
//     id: 4,
//     name: "Chas pik",
//     catId: 2,
//     cost: 120,
//   },
//   film5: {
//     id: 5,
//     name: "Zashitnik",
//     catId: 3,
//     cost: 100,
//   },
//   film6: {
//     id: 6,
//     name: "ne osporimyi",
//     catId: 3,
//     cost: 150,
//   },
//   film7: {
//     id: 7,
//     name: "ne osporimyi2",
//     catId: 3,
//     cost: 150,
//   },
//   film8: {
//     id: 8,
//     name: "kukla",
//     catId: 1,
//     cost: 150,
//   },
// }
// function find(name) {
//   for (let i in films) {
//     if (films[i].name == name) {
//       for (let j in category) {
//         if (films[i].catId == category[j].id) {
//           console.log(category[j].name);

//         }
//       }
//     }
//   }
// }
// find('ne osporimyi')



// let users = {
//   user1: {
//     id: 1,
//     name: "Barsbek",
//     status: "barmen",
//     salary: 50000,
//   },
//   user2: {
//     id: 2,
//     name: "Eldos",
//     status: "Povar",
//     salary: 10000,
//   },
//   user3: {
//     id: 3,
//     name: "Aziz",
//     status: "admin",
//     salary: 70000,
//   },
//   user4: {
//     id: 4,
//     name: "Aziz",
//     status: "admin",
//     salary: 20000,
//   },
//   user5: {
//     id: 5,
//     name: "Aziz",
//     status: "Pova",
//     salary: 30000000,
//   },
//   user6: {
//     id: 6,
//     name: "Aziz",
//     status: "Pova",
//     salary: 5000,
//   },
//   user7: {
//     id: 7,
//     name: "Aziz",
//     status: "kassa",
//     salary: 250000,
//   },
// };

// function deletUsere(id) {
//   for (let i in users) {
//     if (users[i].id == id) {
//       delete users[i]
//     }
//   }
//   console.log(users);

// }

// deletUsere(5)