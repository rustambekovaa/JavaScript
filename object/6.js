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
      name: "Aziz", 
      status: "Pova", 
      salary: 5000, 
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

    
let drinks = { 
  drink1: { 
    id: 1, 
    name: "pepsi", 
    cost: 50, 
  }, 
  drink2: { 
    id: 2, 
    name: "Fanta", 
    cost: 60, 
  }, 
};



function getDis(good,id,procent){
    if(good == "drinks"){
        for ( i in drinks){
            if(drinks[i].id == id){
                drinks[i].cost = drinks[i].cost*100/procent - drinks[i].cost
            }
        }
        console.log(drinks);
    }
    else  if(good == "foods"){
        for ( i in foods){
            if(foods[i].id == id){
                foods[i].cost = foods[i].cost*100/procent - foods[i].cost
            }
        }
        console.log(foods);
    }

} 
getDis("foods",1,100)