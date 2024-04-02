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


// let obj = { 
//     food1: { 
//       id: 1, 
//       name: "burger", 
//       cost: 1000, 
//     }, 
//     food2: { 
//       id: 2, 
//       name: "chesburger", 
//       cost: 550, 
//     }, 
//     food3: { 
//       id: 3, 
//       name: "pizza", 
//       cost: 150, 
//     }, 
//   };



//   let customer = { 
//     customer1: { 
//       id: 1, 
//       foodId: 1, 
//       count: 4, 
//       total: function () { 
//         let k=0
//         for ( let i in obj){
//                 if( obj[i].id === this.foodId ){
//                    k+=this.count*obj[i].cost
//                 }
                
//             }
//             return(k)
//         } 
//       }, 
//     customer2: { 
//       id: 2, 
//       foodId: 2, 
//       count: 2, 
//       total: function () { 
//         let k=0
//         for ( let i in obj){
//                 if( obj[i].id == this.foodId ){
//                     k+=this.count*obj[i].cost
//                     return k
//                 }
            
//         }
//       }, 
//     }, 
//   };

//   function newId(foodId,count){
//     let length=0
//     for( let i in customer){
//         length++
//     }
//     customer["customer"+(length+1)]={
//         id:length+1,
//         foodId: foodId,
//         count: count,
//         total: function () { 
//             let k=0
//             for ( let i in obj){
//                     if( obj[i].id == this.foodId ){
//                         k+=this.count*obj[i].cost
//                         return k
//                     }
                
//             }
//           }, 
//     }

//   }
//   newId(2,4)
//   console.log(customer.customer1.total());



  let user = { 
    user1: { 
      id: 1, 
      name: "Barbek", 
      status: "barmen", 
      salary: 500000, 
    }, 
    user2: { 
      id: 2, 
      name: "Eldos", 
      status: "Povar", 
      salary: 10000, 
    }, 
    user3: { 
      id: 3, 
      name: "Aziz", 
      status: "admin", 
      salary: 200000, 
    }, 
    user4: { 
      id: 4, 
      name: "Aziz", 
      status: "admi", 
      salary: 20000, 
    }, 
    user5: { 
      id: 5, 
      name: "Aziz", 
      status: "Pova", 
      salary: 2000, 
    }, 
    user6: { 
      id: 6, 
      name: "Aziz", 
      status: "Pova", 
      salary: 5000, 
    }, 
    user7: { 
      id: 7, 
      name: "Aziz", 
      status: "kassa", 
      salary: 250000, 
    }, 
  }; 

  let foods = { 
    food1: { 
      id: 1, 
      name: "Burger", 
      cost: 100, 
    }, 
    food2: { 
      id: 2, 
      name: "cheesburger", 
      cost: 150, 
    }, 
  };


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
 

function delId(workerId,id){
  for( i in user){  
    if(user[i].id == workerId ){
      if (user[i].status == "admin"){
        for(let i2 in foods){
          if (foods[i2].id==id){
              delete foods[i2]
            }  
          }  
      }
    }
  }
}
delId(3,1) 
console.log(foods);
