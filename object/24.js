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
//   console.log(customer.customer2.total());











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
        }
    },
    customer2: {
        id: 2,
        foodId: 2,
        count: 2,
        total: function () {
        },
    },
    customer3: {
        id: 3,
        foodId: 3,
        count: 10,
        total: function () {
            
        },
    },
};


console.log(customer.customer1.total());

// let user = {
//     name: "John",
//     age: 30,
//     year: 2024,
//     birthday: function() {
//       let  k = this.year - this.age
//       return k 
//     }

// };

// console.log(user.birthday());



// let cal = {
//     number1: +prompt("Nuber1"),
//     number2: +prompt("Nuber2"),
//     sum:function(){
//        return this.number1 + this.number2
//     },
//     mines:function(){
//         return this.number1 - this.number2
//      },
//     um:function(){
//         return this.number1 * this.number2
//      },
//     del:function(){
//         return this.number1 / this.number2
//      }

// }
// alert(cal.sum());
// alert(cal.mines());
// alert(cal.um());
// alert(cal.del());

