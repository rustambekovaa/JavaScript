let users = [ 
    { 
        id: 1, 
        name: "Ali", 
        role: 4, 
        is_active: true, 
        is_superUser: false, 
    }, 
    { 
        id: 2, 
        name: "Majid", 
        role: 3, 
        is_active: true, 
        is_superUser: true, 
    }, 
    { 
        id: 3, 
        name: "Tynybek", 
        role: 1, 
        is_active: true, 
        is_superUser: true, 
    }, 
    { 
        id: 4, 
        name: "Abdullaziz", 
        role: 2, 
        is_active: true, 
        is_superUser: false, 
    }, 
    { 
        id: 5, 
        name: "Baibolot", 
        role: 4, 
        is_active: true, 
        is_superUser: true, 
    }, 
    { 
        id: 6, 
        name: "Eldos", 
        role: 4, 
        is_active: false, 
        is_superUser: true, 
    }, 
    { 
        id: 7, 
        name: "Ali1", 
        role: 4, 
        is_active: true, 
        is_superUser: true, 
    }, 
    { 
        id: 8, 
        name: "Ali3", 
        role: 4, 
        is_active: false, 
        is_superUser: false, 
    }, 
    { 
        id: 9, 
        name: "Ali4", 
        role: 2, 
        is_active: true, 
        is_superUser: false, 
    }, 
    { 
        id: 10, 
        name: "Ali5", 
        role: 3, 
        is_active: false, 
        is_superUser: true, 
    }, 
]

function getUser(){
    let k = new Map()
   users.forEach((elem1,index)=>{
    if((elem1.role == 4 || elem1.role == 3) && elem1.is_active == true ){
        k.set(index,elem1)
    }
   } )
   return k 

}
let k2 = getUser();
console.log(k2); 