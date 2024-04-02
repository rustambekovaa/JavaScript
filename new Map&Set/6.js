let users = { 
    user1:{ 
        id:1, 
        name:"Majid", 
        work: { 
            company: "Prolab" 
        } 
    }, 
    user2:{ 
        id:2, 
        name:"Belek", 
        study: { 
            company: "Prolab" 
        } 
    }, 
    user3:{ 
        id:3, 
        name:"Majid", 
        work: ['prolab', 'academy'] 
    }, 
}

let {
    user1:{
        work:{
            company: prolab1,
        }
        },
    user2:{
        study:{
            company: prolab2,
        }
    },
    user3:{
        work:[
            prolab3,
        ]
    }
    }=users;

    console.log(prolab1);
    console.log(prolab2);
    console.log(prolab3);