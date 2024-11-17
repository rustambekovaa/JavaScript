let obj1 = [ 
  { 
    id: 1, 
    name: "Erulan", 
    surname: "Kokulov", 
    job: "Deputat", 
    salary: "2000$", 
  }, 
  { 
    id: 2, 
    name: "Baibolot", 
    surname: "Zakirov", 
    job: "Frontend-developer", 
    salary: "4000$", 
  }, 
  { 
    id: 3, 
    name: "Ulanbek", 
    surname: "Ergeshov", 
    job: "Frontend-developer", 
    salary: "3000$", 
  }, 
  { 
    id: 4, 
    name: "Tynybek", 
    surname: "Zhanybekov", 
    job: "Frontend-developer", 
    salary: "3500$", 
  }, 
  { 
    id: 5, 
    name: "Nurmuhammed", 
    surname: "Mamanov", 
    job: "Povar", 
    salary: "3000$", 
  }, 
];

// let name = prompt("Напишите профессию")

// function get(user){
//     let k1= " "
//     for( k of obj1 ){
//         if( k.job == user){
//             k1 += k.name +" "+k.surname +","
//         }
//     }
//     alert(k1) 
// }
// get(name)
// alert(`${k.name}  ${k.surname} `)




let name = prompt("Напишите имя")

function get(user){
    let k1= " "
    for( k of obj1 ){
        let p = k.surname
        if( p.includes(user.toUpperCase())){
            k1 += k.name +" "+k.surname +","
        }
    }
    alert(k1) 
}
get("Nurmuhammed") 








