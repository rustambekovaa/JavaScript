let people = {
  person1: {
    id: 1,
    name: 'Majid',
    surname: 'Kamilov',
    age: 17,
  },
  person2: {
    id: 2,
    name: 'Abdulla',
    surname: 'Sulaimanov',
    age: 26,
  },
  person3: {
    id: 3,
    name: 'Baibolot',
    surname: 'Zakirov',
    age: 21,
  },
  person4: {
    id: 4,
    name: 'Ulanbek',
    surname: 'Ergeshov',
    age: 23,
  }
}





//   function gettop1(){ 
//     let top1 = {} 
//     for(let key in people){ 
//       console.log(Object.keys(people[0]));

//         if(Object.keys(top1).length === 0){ 
//             top1[key] = people[key] 
//             continue 
//         } 
//         if(top1[Object.keys(top1)[0]]["age"] < people[key]["age"]){ 
//             delete top1[Object.keys(top1)[0]] 
//             top1[key] = people[key] 
//         } 
//     } 
//     console.log(top1); 
// } 
// gettop1()













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

// function getTop() {
//   let k1 = 0
//   let k2 = 0
//   let k3 = 0
//   for (i in tops) {
//     let k0 = tops[i]
//     if (k0 > k1) {
//       k3 = k2
//       k2 = k1
//       k1 = k0
//     } else if (k0 > k2) {
//       k3 = k2
//       k2 = k0
//     } else if (k0 > k3) {
//       k3 = k0
//     }
//   }
//   console.log(k1);
//   console.log(k2);
//   console.log(k3);
// }
// getTop()



let user = {
  user1: {
    id: 1,
    name: "Barsbek",
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
    status: "admin",
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



// function getTop3() {
//     let top1 = 0 
//     let top2 = 0 
//     let top3 = 0 
//     for(i in user){
//       let top0 = user[i].salary
//       if(top0 > top1){
//         top3 = top2
//         top2 = top1
//         top1 = top0
//       }
//       else if( top0 > top2){
//         top3 = top2 
//         top2 = top0
//       }
//       else if( top0 > top3){
//         top3 = top0
//       }
//     }
//     console.log(top1);
//     console.log(top2);
//     console.log(top3);

// }
// getTop3() 

let exam_answer = {
  exam_math1: {
    id: 1,
    answer: {
      1: "a",
      2: "c",
      3: "a",
      4: "b",
      5: "c"
    }
  },
  exam_math2: {
    id: 2,
    answer: {
      1: "b",
      2: "b",
      3: "a",
      4: "b",
      5: "c"
    }
  },
  exam_math3: {
    id: 3,
    answer: {
      1: "a",
      2: "b",
      3: "c",
      4: "a",
      5: "b"
    }
  },
}


let students = {
  student1:{
    id:1,
    name:"Argen",
    mathId:3,
    stud_answer:{ 
      1: "a",
      2: "b",
      3: "c",
      4: "a",
      5: "b"
    }
    
    
  }
}
function find(){
  let gpa = 0
  for(i in exam_answer){
    for(j in students){
      if(exam_answer[i].id == students[j].mathId){
        for( k in exam_answer[i].answer){
          for(l in students[j].stud_answer ){
            if(exam_answer[i].answer[k] == students[j].stud_answer[l]){
              gpa += 5
            }
          }
        }
      }
    }
  }
  return gpa
}
console.log(find());
