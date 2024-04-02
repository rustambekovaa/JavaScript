let category = { 
    cat1: { 
      id: 1, 
      name: "Fast Food", 
    }, 
    cat2: { 
      id: 2, 
      name: "Pizza", 
    }, 
    cat3: { 
      id: 3, 
      name: "Rolly", 
    }, 
  }; 

  let foods = { 
    food1: { 
      id: 1, 
      name: "Burger", 
      cost: 200, 
      catId: 1, 
      discountId: 1, 
    }, 
    food2: { 
      id: 2, 
      name: "Shaurma", 
      cost: 220, 
      catId: 1, 
      discountId: 1, 
    }, 
    food3: { 
      id: 3, 
      name: "Chickken burger", 
      cost: 180, 
      catId: 1, 
      discountId: 1, 
    }, 
    food4: { 
      id: 4, 
      name: "S krabom", 
      cost: 150, 
      catId: 3, 
      discountId: 2, 
    }, 
    food5: { 
      id: 5, 
      name: "Yakudza", 
      cost: 170, 
      catId: 3, 
      discountId: 1, 
    }, 
    food6: { 
      id: 6, 
      name: "S krevetkoi", 
      cost: 160, 
      catId: 3, 
      discountId: 1, 
    }, 
    food7: { 
      id: 7, 
      name: "4 syra", 
      cost: 250, 
      catId: 2, 
      discountId: 1, 
    }, 
    food8: { 
      id: 8, 
      name: "Pay", 
      cost: 270, 
      catId: 2, 
      discountId: 2, 
    }, 
    food9: { 
      id: 9, 
      name: "S kolbasoi", 
      cost: 260, 
      catId: 2, 
      discountId: 1, 
    }, 
  }; 
   
  let drinks = { 
    drink1: { 
      id: 1, 
      name: "Cola", 
      cost: 80, 
      catId: 2, 
    }, 
    drink2: { 
      id: 2, 
      name: "Fanta", 
      cost: 80, 
      catId: 2, 
    }, 
    drink3: { 
      id: 3, 
      name: "Pepsi", 
      cost: 80, 
      catId: 2, 
    }, 
  }; 
   
  
  let statuses = { 
    status1: { 
      id: 1, 
      name: "Ali", 
      status: "Admin", 
    }, 
    status2: { 
      id: 2, 
      name: "Eldos", 
      status: "Barmen", 
    }, 
    status3: { 
      id: 3, 
      name: "Kanat", 
      status: "Shef-Povar", 
    }, 
    status4: { 
      id: 4, 
      name: "Majid", 
      status: "Povar", 
    }, 
  }; 
  
  let customers = { 
    customer1: { 
      id: 1, 
      name: "Muhammed", 
      foods: { 
        0: 3, 
        1: 2, 
        2: 9, 
        3: 1, 
        4: 4, 
        5: 7 
      }, 
      drinks: { 
        0: 3, 
        1: 2, 
      }, 
    }, 
    customer2: { 
      id: 2, 
      name: "MuhammedAli", 
      foods: { 
        0: 1, 
        1: 4, 
        2: 7, 
        3: 2, 
        4: 8, 
        5: 9, 
      }, 
      drinks: { 
        0: 3, 
        1: 2, 
        2: 1, 
      }, 
    }, 
  };
   
  let discount = { 
    dics1: { 
      id: 1, 
      procent: 100, 
    }, 
    disc2: { 
      id: 2, 
      procent: 25, 
    }, 
  }; 



// ////////////////////////////////111111111111111111///////////////////////////////////////

// // ////CRATE///

// function crudid( workerid,name,cost,catId,discountId){
//     for ( i in statuses ){
//         if (statuses[i].status =="Shef-Povar" && statuses[i].status == workerid ){
//             let length=0
//         for( let i in foods){
//             length++
//         }
//         foods["food"+(length+1)]={
//             id:length+1,
//             name:name,
//             cost:cost,
//             catId:catId,
//             discountId:discountId
//         }
//         }
//     }
// }
// crudid("Shef-Povar","pizza-pay",150,3,1)
// console.log(foods);

//  ////Read///

//  function crudId( workerid,id){
//     for ( i in statuses ){
//         if (statuses[i].status =="Shef-Povar" && statuses[i].status == workerid  ){
//             for ( let i in foods){
//                 if( foods[i].id == id){
//                     console.log(foods[i]);
//                 }
//             }
//         }
//     }
//  }
//  crudId("Shef-Povar",1)


// //// UPDATE///

// function update( workerid,id,name,cost){
//     for ( i in statuses ){
//         if (statuses[i].status =="Shef-Povar" && statuses[i].status == workerid ){
//             for ( let i in foods){
//                 if( foods[i].id == id ){
//                     foods[i].name = name 
//                     foods[i].cost = cost
//                 }
//             }
//         }
//     }
// }
// update("Shef-Povar",2,"pizza-pay",100)
// console.log(foods);


// //// DELETE///

// function delId(workerid,id){
// for ( i in statuses ){
//     if (statuses[i].status =="Shef-Povar" && statuses[i].status == workerid  ){
//         for(let i in foods){
//             if (foods[i].id==id){
//                 delete foods[i]
//             }
//         }
//     }
// }
// }
// delId("Shef-Povar",5)
// console.log(foods);



// //////////////////////////////222222222222222222222222//////////////////////////////

// // function shtk(){
// //     let howmuch = {}
// //     for( i1 in category){
// //        for ( i in foods) {
// //         if ( category[i1].id == foods[i].catId){
// //             if (category[i1].name in howmuch){
// //                 howmuch [ category[i1].name] += 1 
// //             }else{
// //                 howmuch[category[i1].name] = 1 
// //             }
            
// //         }
// //        }
// //     }
// //     console.log(howmuch);
// // }
// // shtk()



// //////////////////////////////33333333333333333333333//////////////////////////////

// function getCustomer(id) {
//     let bill = 0
//    for ( i in discount){
//     for(i2 in customers ){
//         if ( id == customers[i2].id){
//             for (let i3 in customers[i2].foods ) {
//                 for ( i0 in foods){
//                     if(customers[i2].foods[i3].id == foods[i0].id ){
//                         console.log(foods[i0].cost);
//                         bill += foods[i0].cost - ( foods[i0].cost / 100*discount[i].procent)
                        
//                     }
//                 }
               
//                 // console.log( customers[i2].foods);
//                 bill += customers[i2].foods[i3].cost -( customers[i2].foods[i3].cost / 100 * discount[i].procent)  
//                 // console.log(customers[i2].foods[i3]);
//             } 
//             for (let i4 in customers[i2].drinks) {
//                 bill+= customers[i2].drinks[i4].cost -(customers[i2].drinks[i4].cost / 100 * discount[i].procent)   
//             }
//         }
//     }    
//    }
// //    console.log(bill); 
//   }
// getCustomer(1)






// //////////////////////////////444444444444444444//////////////////////////////

// function getCustomer() {
//     for (let key in customers) {
//       for (let key2 in customers[key].foods) {
//         for (let key3 in customers[key].drinks) {
//           for (let key4 in foods) {
//             for (let key5 in drinks) {
//               if (customers[key].foods[key2] == foods[key4].id) {
//                 customers[key].foods[key2] = foods[key4]
//               }
//               if (customers[key].drinks[key3] == drinks[key5].id) {
//                 customers[key].drinks[key3] = drinks[key5]
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// getCustomer()
// console.log(customers);



// function getCustomer(id) {
//   let bill =0 
//   for (let key in customers) {
//     for (let key2 in customers[key].foods) {
//       for (let key3 in customers[key].drinks) {
//         for (let key4 in foods) {
//           for (let key5 in drinks) {
//             if( customers[key].id == id){
//               if (customers[key].foods[key2] == foods[key4].id) {
//                 customers[key].foods[key2] = foods[key4]
//                 for( i0 in discount){
//                   if( discount[i0].id == foods[key4].discountId){
//                     bill +=customers[key].foods[key2].cost- customers[key].foods[key2].cost / 100 * discount[i0].procent
//                   }
//                 }
//               }
//               if (customers[key].drinks[key3] ==  drinks[key5].id) {
//                 customers[key].drinks[key3] =  drinks[key5]
//                 // for( i0 in discount){
//                   // if( discount[i0].id == customers[key].id){
//                     bill +=customers[key].drinks[key3].cost
//                     // - customers[key].drinks[key2].cost / 100 * discount[i0].procent
//                   // }
//                 // }
//               }
//               // if (customers[key].drinks[key3] == drinks[key5].id) {
//               //   customers[key].drinks[key3] = drinks[key5]
//               // }
//             }
           
//           }
//         }
//       }
//     }
//   }
//   console.log(bill);
// }
// getCustomer(1)
