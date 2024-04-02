let food = [ 
    { 
        id:1, 
        name:'burger', 
        cost:200, 
    }, 
    { 
        id:2, 
        name:'cheseburger', 
        cost:200, 
    }, 
    { 
        id:3, 
        name:'macburger', 
        cost:200, 
    }, 
    { 
        id:4, 
        name:'chickenburger', 
        cost:200, 
    }, 
] 
let users = [ 
    { 
        id:1, 
        name:"Beka", 
        card:[1,2,3,4,2,3,2,4,1] 
    }, 
    { 
        id:2, 
        name:"Majid", 
        card:[1,2,2,3,4,1,2,2,3,4,2,3,2,4,1] 
    }, 
    { 
        id:3, 
        name:"Nurullo", 
        card:[1,2,3,4,2,3,4,2,4,1,1,2,3,4,2,3,2,4,1] 
    }, 
]


let a = JSON.stringify(food,["id","name"],3)   
let b = JSON.parse(a)
let a2 = JSON.stringify(users)   
let b2 = JSON.parse(a2)


 function tot(id) {
    for( i of b2){
        if(i.id == id){
            for( i2 of i.card){
                for ( k of b){
                    if (i2 == k.id){
                        let total= b.reduce((acc,item) => {
                        return acc+item.cost },0)
                    }
                   
                }
                
            }
        }
       
    }
 console.log(total);        
    
 }
 tot(1)

