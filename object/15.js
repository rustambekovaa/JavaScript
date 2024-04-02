let people={  
    person1:{  
      id:1,  
      name:'Majid',  
      surname:'Kamilov',  
      age:17,  
    },  
    person2:{  
      id:2,  
      name:'Abdulla',  
      surname:'Sulaimanov',  
      age:26,  
    },  
    person3:{  
      id:3,  
      name:'Baibolot',  
      surname:'Zakirov',  
      age:21,  
    },  
    person4:{   
      id:4,  
      name:'Ulanbek',  
      surname:'Ergeshov',  
      age:23,  
    }  
  }


// //   function gettop1(){ 
// //     let top1 = {} 
// //     for(let key in people){ 
// //         if(Object.keys(top1).length === 0){ 
// //             top1[key] = people[key] 
// //             continue 
// //         } 
// //         if(top1[Object.keys(top1)[0]]["age"] < people[key]["age"]){ 
// //             delete top1[Object.keys(top1)[0]] 
// //             top1[key] = people[key] 
// //         } 
// //     } 
// //     console.log(top1); 
// // } 

// function getTop3() {
//   let top1 = {}
//   let top2 = {}
//   let top3 = {}
//   for ( key in people) {
//     var x = people[key];
//     if (Object.keys(top1).length === 0 || x.age > top1[Object.keys(top1)[0]].age) {
//       top3 = top2
//       top2 = top1
//       top1 = { [key]: x }; 
//     } else if (Object.keys(top2).length === 0 || x.age > top2[Object.keys(top2)[0]].age) {
//       top3 = top2;
//       top2 = { [key]: x };
//     } else if (Object.keys(top3).length === 0 || x.age > top3[Object.keys(top3)[0]].age) {
//       top3 = { [key]: x };
//     }
//   }
//   console.log(top1)
//   console.log(top2)
//   console.log(top3)
// }

// getTop3();










let tops = {
  a: 10,
  b: 100,
  c: 10,
  d: 44,
  e: -12,
};

function getTop() {
  let k1 = 0
  let k2 = 0
  let k3 = 0
  for (i in tops) {
    let k0 = tops[i]
    if (k0 > k1) {
      k3 = k2
      k2 = k1
      k1 = k0
    } else if (k0 > k2) {
      k3 = k2
      k2 = k0
    } else if (k0 > k3) {
      k3 = k0
    }
  }
  console.log(k1);
  console.log(k2);
  console.log(k3);
}
getTop()




// function gettop3(){
//   let top1 = 0
//   let top2 = 0
//   let top3 = 0
//  for ( i in tops){
//    var x = tops[i]
//   if(Object.values(gettop3)){

//   }
//   }


// }
// gettop3()