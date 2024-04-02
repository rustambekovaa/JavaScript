// let user =[
//     {
//         id:1,
//         name:"Maanai",
//         age:18
//     }
// ]

// function getUser(name, surname, age){
//     user.push({
//         id:user.length + 1,
//         name:name,
//         surname:surname,
//         age:age
//     })
// }
// getUser("Nurullo", "Taalaibekov", 20)
// console.log(user);


// function getUser2(name, surname, age){
//     user.unshift({
//         id:user.length + 1,
//         name:name,
//         surname:surname,
//         age:age
//     })
// }
// getUser2("Nurullo", "bekov", 20)
// console.log(user);

//  user.pop()



/////////////////////////////splice///////////////////

// let arr = [1,2,"hello","llll"]
// arr.splice(2,-2)
// console.log(arr); 

let people = [
    {
        id:1,
        name:"Majid",
        age:18
    },
    {
        id:2,
        name:"Maanai",
        age:17
    },
    {
        id:3,
        name:"Belek",
        age:19
    },
    {
        id:4,
        name:"Amantur",
        age:17
    },
    {
        id:5,
        name:"Ali",
        age:18
    },
    {
        id:6,
        name:"Samagan",
        age:16
    },
    {
        id:7,
        name:"Erjan",
        age:17
    },
    {
        id:8,
        name:"Nurullo",
        age:18
    },
    {
        id:9,
        name:"Ulanbek",
        age:24
    },
    {
        id:10,
        name:"Kanat",
        age:18
    },
]

// function delId( id){
//     for (let i = 0; i < people.length; i++) {
//         console.log(i);
//         if (people[i].id === id) {
//           people.splice(i, 1);
//           break; 
//         }
//       }  
// console.log(people);
// }
// delId(5)


// function deleteUser(id){ 
//     for(let item of people){ 
//         if(id === item.id){ 
//         people.splice(id-1, 1) 
//         } 
//     } 
// } 
// deleteUser(4) 
// console.log(people)

// let arr = [1,2,"hello","llll"]
// arr.splice(2,-2)
// console.log(arr); 
 


// function showPeople( start,end,arg){
//    people.splice(start-1,end,arg);
//     console.log(people);

// }

// showPeople(2,5,"*")



// function showPeople( start,end,arg){
//     people.splice(start-1,end,arg);
//      console.log(people);
 
//  }
 
//  showPeople(2,5,"*")
 
// function showPeople( start,end,arg){
//     for( i of people){
//         if ( i.id >= start || i.id <= end){
//          people.splice(start-1,end,arg);
//         }   
//     }  
// }
// showPeople(2,5,"*")
// console.log(people);



function showPeople(start, end, arg) {
    for (let i = 1; i < people.length; i++) {
      if (people[i].id >= start && people[i].id <= end) {
          people[i]= arg;
      }
    }
  }
  
  showPeople(2, 5,"*");
  console.log(people);









// const arr = [[1, 2, 3, 4], [10, 22, 4, 7], [10, 11, 5, 4]];
// let k = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     k += arr[i][j];
//   }
// }

// console.log(k); 


// let arr = [[2,4,5,10], [10,2,8,10],[20,8,20]] 
//     let result = 0 
//     for(let item of arr){ 
//         for(let item2 of item){ 
//             result += item2 
//         }  
//     } 
//     console.log(result);










let foods = [ 
    { 
        id:1, 
        name:'chocolate', 
        catid:1, 
        cost:100 
    },    { 
        id:2, 
        name:'shaurma', 
        catid:2, 
        cost:150 
    },    { 
        id:3, 
        name:'cola', 
        catid:3, 
        cost:200 
    }, 
  ]
  let custmers = [ 
    { 
        id:1, 
        foods:[1,2,2,2,3,3,1] 
    },    { 
        id:2, 
        foods:[1,2,3,1] 
    }, 
  ]
//   function cFoods(id){
//     let k = {}
//     for( i of custmers){
//         if(i.id == id){
//             for( i2 of i.foods){
//                 if ( i2 in k){
//                     k[i2] += 1 
//                 }else{
//                     k[i2] =1
//                 }
//             }
//         }
//     }
//     return k 
//   }
//  console.log( cFoods(1));


function getTop3(id){
    let k = {}
    for( i of custmers ){
        if(i.id == id){
            for ( i2 of foods ){
                for( let i3 = 0; i3 < i.foods.length; i3++ ){
                    if( i2.catid == i3){
                        if( [i2.cost] in k){
                            k[i3] += i2.cost
                        }
                        else{
                            k[i3] = i2.cost 
                        }
                    }
                }
               
            }
        }
    }
    let v = {};
    let maxCost = -Infinity;
    for (let r in k) {
      if (k[r] > maxCost) {
        maxCost = k[r];
      }
    }
  
    for (let r in k) {
      if (k[r] === maxCost) {
        v[r] = k[r];
      }
    } 
  console.log(v);
   console.log(k); 
}
getTop3(2)