
let user = { 
    user1: { 
      id: 1, 
      name: "Barbek", 
      status: "barmen", 
      salary: 500000, 
    }, 
    user2: { 
      id: 2, 
      name: "Eldos", 
      status: "Povar", 
      salary: 10000000, 
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
      name: "Aziz", 
      status: "Pova", 
      salary: 5000000, 
    }, 
    user7: { 
      id: 7, 
      name: "Aziz", 
      status: "kassa", 
      salary: 250000, 
    }, 
  }; 
  let foods = { 
    food1: { 
      id: 1, 
      name: "Burger", 
      cost: 100, 
    }, 
    food2: { 
      id: 2, 
      name: "cheesburger", 
      cost: 150, 
    }, 
  };

  
function id(){
    let k=0
    for ( i in user){
        if( user[i].salary>k){
            k = user[i].salary
        }
    }
    console.log(k);

}
id()