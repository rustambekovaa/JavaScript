// let category = {  
//     category1: {  
//       id: 1,  
//       name: "vip",  
//     },  
//     category2: {  
//       id: 2,  
//       name: "sredniy",  
//     },  
//     category3: {  
//       id: 3,  
//       name: "ekanom",  
//     },  
//   };  

//   let rooms = {  
//     room1: {  
//       id: 1,  
//       name: "pokoi sultan shaha",  
//       catId: 1,  
//       cost: 1000,  
//       costPerson: 100,  
//     },  
//     room2: {  
//       id: 2,  
//       name: "pokoi sultan sulaimana",  
//       catId: 3,  
//       cost: 0,  
//       costPerson: 100,  
//     },  
//     room3: {  
//       id: 3,  

//       name: "pokoi gitlera",  
//       catId: 2,  
//       cost: 0,  
//       costPerson: 150,  
//     },  
//     room4: {  
//       id: 4,  
//       name: "pokoi programmista",  
//       catId: 1,  
//       cost: 1000,  
//       costPerson: 150,  
//     },  
//     room5: {  
//       id: 5,  
//       name: "pokoi cheloveka",  
//       catId: 1,  
//       cost: 0,  
//       costPerson: 120,  
//     },  
//     room6: {  
//       id: 6,  
//       name: "pokoi stalina",  
//       catId: 2,  
//       cost: 0,  
//       costPerson: 170,  
//     },  
//   };  
//   let clients = {  
//     client1: {  
//       id: 1,  
//       roomId: 1,  
//       people: 4,  
//       days: 15,  
//       date: {  
//         day: 15,  
//         month: 3,  
//         year: 2023,  
//       },  
//     },  
//     client2: {  
//       id: 2,  
//       roomId: 2,  
//       people: 4,  
//       days: 10,  
//       date: {  
//         day: 11,  
//         month: 3,  
//         year: 2023,  
//       },  
//     },  
//     client3: {  
//       id: 3,  
//       roomId: 3,  
//       people: 4,  
//       days: 6,  
//       date: {  
//         day: 12,  
//         month: 3,  
//         year: 2023,  
//       },  
//     },  
//     client4: {  
//       id: 4,  
//       roomId: 6,  
//       people: 5,  
//       days: 6,  
//       date: {  
//         day: 12,  
//         month: 3,  
//         year: 2023,  
//       },  
//     },  
//   };





// //   function getid(id){
// //     let bill= 0
// //     for ( i in clients){
// //         for ( i2 in rooms ){
// //         if( clients[i].id == id && clients[i].roomId == rooms[i2].id  ){
// //             bill = (clients[i].people*rooms[i2].costPerson)*clients[i].days+rooms[i2].cost  
// //             }
// //         }
// //     }
// //   console.log(bill);
// //   }
// //   getid(3)


// // function get(){ 
// //     let total = 0 
// //     for(let key in clients){ 
// //             for(let key2 in rooms){ 
// //                 if(clients[key]["roomId"] === rooms[key2]["id"]){ 
// //                     total += rooms[key2]["cost"] + (clients[key]["people"] * rooms[key2]["costPerson"] * clients[key]["days"]) 
// //                 }
// //              } 
// //         }console.log(total); 
// //     } get(3)


// function get(id){
//   let bill = 0 
//    for ( i in category){
//     if( category[i].id == id){
//       for ( i2  in rooms){
//         for( i3 in clients){
//         if(category[i].id == rooms[i2].catId &&  rooms[i2].id == clients[i3].roomId ){
//             bill += (clients[i3].people*rooms[i2].costPerson)*clients[i3].days+rooms[i2].cost  

//           }
//         }
//       }
//     }
//    }
//   console.log(bill);
// }
// get(2)


















let category = {
  category1: {
    id: 1,
    name: "vip",
  },
  category2: {
    id: 2,
    name: "sredniy",
  },
  category3: {
    id: 3,
    name: "ekanom",
  },
};

let rooms = {
  room1: {
    id: 1,
    name: "pokoi sultan shaha",
    catId: 1,
    cost: 1000,
    costPerson: 120000,
  },
  room2: {
    id: 2,
    name: "pokoi sultan sulaimana",
    catId: 3,
    cost: 0,
    costPerson: 100,
  },
  room3: {
    id: 3,
    name: "pokoi gitlera",
    catId: 2,
    cost: 0,
    costPerson: 150,
  },
  room4: {
    id: 4,
    name: "pokoi programmista",
    catId: 1,
    cost: 1000,
    costPerson: 150,
  },
  room5: {
    id: 5,
    name: "pokoi cheloveka",
    catId: 3,
    cost: 0,
    costPerson: 120,
  },
  room6: {
    id: 6,
    name: "pokoi stalina",
    catId: 2,
    cost: 0,
    costPerson: 170,
  },
};
let clients = {
  client1: {
    id: 1,
    roomId: 1,
    people: 4,
    days: 15,
    date: {
      day: 15,
      month: 3,
      year: 2023,
    },
  },
  client2: {
    id: 2,
    roomId: 2,
    people: 4,
    days: 10,
    date: {
      day: 11,
      month: 3,
      year: 2023,
    },
  },
  client3: {
    id: 3,
    roomId: 3,
    people: 4,
    days: 6,
    date: {
      day: 12,
      month: 3,
      year: 2023,
    },
  },
  client4: {
    id: 4,
    roomId: 4,
    people: 4,
    days: 6,
    date: {
      day: 12,
      month: 3,
      year: 2023,
    },
  },
};

function get3(){
  let bill = 0 
  let top ={}
  let k1 = 0
  // let k2 = 0
  // let k3 = 0
  for( i in category){
    for ( i2 in rooms){
      if( category[i].id == rooms[i2].catId){
        for( i3 in clients){
          if ( rooms[i2].id == clients[i3].roomId ){
            bill =(clients[i3].people*rooms[i2].costPerson)*clients[i3].days+rooms[i2].cost  
            top[clients[i3].id] = bill
            
            
          }
        }
      }
    }
  }
  console.log(top);
  
  // for( i4 in top){
  //   let k0 = top[i4]
  //   if( k0 > k1){ 
  //     k1 = k0
  //   }
  // }

console.log(top);
// console.log(k1);
}
get3()



// for( i4 in top){
//   let k0 = top[i4]
//   if( k0 > k1){ 
//     k3 = k2
//     k2 = k1
//     k1 = k0
//   }
//   else if( k0 > k2){
//     k3 = k2
//     k2 = k0
//   }else if( k0 > k3){
//     k3 = k0     
//   }
// }
// console.log(top);
// console.log(k1);
// console.log(k2);
// console.log(k3);



// let sortTopTotal = () => {
//   let top = {}
//   for (i in category) {
//     for (i2 in rooms) {
//       if (category[i].id == rooms[i2].catId) {
//         for (i3 in clients) {
//           if (rooms[i2].id == clients[i3].roomId) {
//             top[clients[i3].id] = (clients[i3].people * rooms[i2].costPerson) * clients[i3].days + rooms[i2].cost
//           }
//         }
//       }
//     }
//   }
//   let sortObj = {}
//   for( i in top){
//     if( Object.keys(sortObj).length < top[i]){
//       sortObj[i] =  Object.values(top )
//     }
//   }

// console.log(sortObj);
// }
// sortTopTotal()


// function getTT() { 
//   let grade = {}; 
//   for (let key in category) { 
//     let total = 0; 
//     for (let key2 in rooms) { 
//       if (category[key]["id"] === rooms[key2]["catId"]) { 
//         for (let key3 in clients) { 
//           if (clients[key3]["roomId"] === rooms[key2]["id"]) { 
//             total += rooms[key2]["cost"] +  clients[key3]["people"] * rooms[key2]["costPerson"] * clients[key3]["days"]; 
//           } 
//         } 
//       } 
//     } 
//     grade[category[key]["name"]] = total; 
//   } 
//   console.log(grade); 
//   let maxTotal = 0;  
//   for (let key in grade) { 
//     if (grade[key] > maxTotal) { 
//       maxTotal = grade[key]; 
//     } 
//   } 
//   console.log(maxTotal); 
// } 
// getTT();