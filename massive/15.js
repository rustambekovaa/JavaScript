
let people = [ 
    { 
        id : 1 , 
        name : "Majid", 
        surname : 'Kamilov', 
        age : 36, 
        data : "2023-02-03" 
    }, 
    { 
        id : 2, 
        name : "Tunubek", 
        surname : 'Janubekov', 
        age : 19, 
        data : "2023-02-02" 
    }, 
    { 
        id : 3, 
        name : "Ulan", 
        surname : 'Ergeshov', 
        age : 23, 
        data : "2023-02-01" 
    }, 
    { 
        id : 4, 
        name : "Aziz", 
        surname : 'Bakirjanov', 
        age: 30, 
        data : "2023-02-01" 
    }, 
    { 
        id : 5, 
        name : "Baibolot", 
        surname : 'Zakirov', 
        age : 20, 
        data : "2023-02-10" 
    } 
]


function get (){
  let k =[]
  people.forEach(elem => {
    k.push(elem.age)
  })  
  let k1 = k.reduce((l,m) => l+m,0)
  console.log(k1);
}
get ()


let arr = people.reduce((acc, val) =>{
    return acc + val.age
},0)
console.log(arr);




