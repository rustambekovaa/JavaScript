let foods = { 
    food1: { 
        id: 1, 
        name: "Burger", 
        objId: 1, 
        cost: 150, 
        discId: 1, 
    }, 
    food2: { 
        id: 2, 
        name: "ChickenBurger", 
        objId: 1, 
        cost: 170, 
        discId: 2, 
    }, 
    food3: { 
        id: 3, 
        name: "Pizza Pay", 
        objId: 2, 
        cost: 150, 
        discId: 3 
    }, 
} 


let discount = { 
    discount1: { 
        id: 1, 
        title: 0
    }, 
    discount2: { 
        id: 2, 
        title: 0 
    }, 
    discount3: { 
        id: 3, 
        title: 0 
    }, 
} 
let clients = { 
    client1: { 
        id: 1, 
        name: "Majid", 
        foodsId: { 
            0: 1, 
            1: 2, 
            3: 3, 
            4: 1, 
            5: 2, 
            6: 3, 
        }, 
    } 
}

function getTotal(){
    let total = 0 
    for(let i in clients){
        for (let i2 in clients[i].foodsId){
           for (let  i3 in foods){
            if( clients[i].foodsId[i2] == foods[i3].id ){
                for( i4 in discount ){
                    if( discount[i4].id == foods[i3].discId ){
                        foods[i3].cost = foods[i3].cost-(foods[i3].cost/100* discount[i4].title) 
                        total+=foods[i3].cost
                    }   
                }
            }
           }
        }
    }
    console.log(total);
}
getTotal()

let obj = {

}

// function User(name, surname, prolab) {
//     for (let key in obj) {
//         this[key] = obj[key]
//     }
//     let size = Object.keys(obj).length
//     this["obj" + (size + 1)] = {
//         id: size + 1,
//         name: name,
//         surname: surname,
        
//     }
// }
// obj = new User("Majid", "Kamilov", "Prolab")
// console.log(obj);