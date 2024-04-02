let people=[ 
    { 
        id:1, 
        name:"Majid", 
    }, 
    { 
        id:1, 
        name:"Nurullo", 
    }, 
    { 
        id:2, 
        name:"Abdulhai", 
    }, 
    { 
        id:2, 
        name:"Tynybek", 
    }, 
    { 
        id:3, 
        name:"Ulan", 
    }, 
    { 
        id:3, 
        name:"Roma", 
    }, 
    { 
        id:3, 
        name:"Eldos", 
    } 
]

function getPeople(){ 
    let a = [] 
    let b = new Set() 
    console.log(b); 
  people.forEach(elem => b.add(elem.id)) 
  console.log(b); 
    for(let value of b.values()){ 
        console.log(value); 
        a.push(people.find(item=>item.id == value)) 
    } 
    console.log(a); 
} 
getPeople()

