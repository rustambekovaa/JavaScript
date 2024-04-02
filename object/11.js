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
      status: "admi", 
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
      name: "Barsbek", 
      status: "Pova", 
      salary: 5000, 
    }, 
    user7: { 
      id: 7, 
      name: "Eldos", 
      status: "kassa", 
      salary: 250000, 
    }, 
  };

//   function getuser(){
//     var k= {}
//     for ( i in user){
//         if([user[i].status]  in k){
//             k[user[i].status]+=1
//         }else{
//             k[user[i].status]=1
//         }
//     }
    
//    return k
//   }
//   console.log(getuser());


function getId(workerid,id,name){
    for ( i in user){
        if(user[i].id == workerid ){
            if( user[i].status == "admin"){ 
                for( i in user){
                    if(user[i].id == id){
                        user[i].status=name
                    }
                }
                
            }
        }
    }
}
getId(3,7,"Print ")
console.log(user);

