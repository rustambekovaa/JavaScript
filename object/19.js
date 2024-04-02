let user = { 
    user1:{ 
        id:1, 
        name:"Majid", 
        money: "200$" 
    }, 
    user2:{ 
        id:2, 
        name:"Nurullo", 
        money: "100e" 
    }, 
    user3:{ 
        id:3, 
        name:"Ali", 
        money: "1500r" 
    }, 
    user4:{ 
        id:4, 
        name:"Belek", 
        money: "1500s" 
    }, 
}

function get(id){
    for (let  i in user ){
        if ( user[i].id == id ){
            let money = user[i].money
            if( money.endsWith("$")){
                let k = (parseInt(user[i].money))
                user[i].money = k * 87
                console.log(user[i]);
            }
            if( money.endsWith("e")){
                let k = (parseInt(user[i].money))
                user[i].money = k * 94
                console.log(user[i]);
            }
            if( money.endsWith("r")){
                let k = (parseInt(user[i].money))
                user[i].money = k * 0.86
                console.log(user[i]);
            } if( money .endsWith("s")){
                let k = (parseInt(user[i].money))
                user[i].money = k 
                console.log(user[i]);
            }
           
        } 
    }
    
}
get(3)

// let k = (parseInt(user[i].money))