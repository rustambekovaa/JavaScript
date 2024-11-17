let students = { 
  student1:{ 
    id:1, 
    grade:"Front-End", 
    name:"Majid", 
    age:18 
  }, 
  student2:{ 
    id:2, 
    grade:"Front-End", 
    name:"Nurullo", 
    age:20 
  }, 
  student3:{ 
    id:3, 
    grade:"Front-End", 
    name:"Baibolot", 
    age:20 
  }, 
  student4:{ 
    id:4, 
    grade:"Back-End", 
    name:"Oroz", 
    age:20 
  }, 
  student5:{ 
    id:5, 
    grade:"Back-End", 
    name:"Hushbaht", 
    age:20 
  }, 
  student6:{ 
    id:6, 
    grade:"Back-End", 
    name:"Ali", 
    age:18 
  }, 
  student7:{ 
    id:7, 
    grade:"Back-End", 
    name:"Belek", 
    age:19 
  }, 
  student8:{ 
    id:8, 
    grade:"Back-End", 
    name:"Bayastan", 
    age:18 
  }, 
  student9:{ 
    id:9, 
    grade:"UX-UI", 
    name:"Jenya", 
    age:30 
  }, 
  student10:{ 
    id:10, 
    grade:"UX-UI", 
    name:"Ali", 
    age:20 
  }, 
  student11:{ 
    id:11, 
    grade:"UX-UI", 
    name:"Ali", 
    age:45 
  }, 
}

function findCount() {
  let newobj = {}
  for(let i in students){
    if(students[i].age in newobj ){
      newobj[students[i].age] += 1
    }
    else{
      newobj[students[i].age]  = 1
    }
  }
  console.log(newobj);
  
}
findCount()



// function devs() {
//    var devs2 = {}
//   for( i in students){
//     if( students[i].grade in devs2){
//       devs2[students[i].grade]+=  students[i].name+" "
//     }else{
//       devs2[students[i].grade] =  students[i].name+" "
//     }
  
//   }  console.log(devs2); 
// }
// devs()


// function age(){
//   let age2 = {}
//   for ( i in students){
//     if (students[i].age in age2 ){
//       age2[ students[i].age] +=1 
//     }else{
//       age2[ students[i].age] =1 
//     }
//   } console.log(age2); 
// }
// age()








