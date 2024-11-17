let category = {
    category1: {
       id: 1,
       name: "fast-food",
    },
    category2: {
       id: 2,
       name: "hot_food",
    },
    category3: {
       id: 3,
       name: "turkey_food",
    },
 }
 
 let foods = {
    food1:{
       id: 1,
       name: "burger",
       catId: 1,
       cost: 200
    },
    food2: {
       id: 2,
       name: "Xod-Dog",
       catId: 1,
       cost: 250
 
    },
    food3: {
       id: 3,
       name: "Good_food",
       catId: 3,
       cost: 450
    },
    food4: {
       id: 4,
       name: "Bliny",
       catId: 2,
       cost: 150
    },
    food5: {
       id: 5,
       name: "shorpo",
       catId: 2,
       cost: 150
    },
    food6: {
       id: 6,
       name: "best_food",
       catId: 3,
       cost: 300
    },
    food7: {
       id: 7,
       name: "Pizza",
       catId: 1,
       cost: 230
    },
 }
 
 let users = {
    user1: {
       id: 1,
       name: "Argen",
       order: {
          1: 1,
          2: 3,
          3: 2,
          4: 5,
          5: 2,
          6: 7
       },
       discount:{
          disId:2
       }
    },
    user2: {
       id: 1,
       name: "Aranai",
       order: {
          1: 1,
          2: 6,
          3: 2,
          4: 5,
          5: 1,
          6: 5
       },
       discount:{
          disId:3
       }
    }
 
 }
 
 let discount = {
    discount1:{
       id:1,
       discound: "20%"
    },
     discount2:{
       id:2,
       discound: "10%"
    },
    discount3:{
       id:4,
       discound: "15%"
    }
 }
 
 
 function check() {
    let newobj = {}
    let total = 0
    for (i in users) {
       for (j in users[i].order) {
          for(k in foods){
             if(foods[k].id == users[i].order[j]){
                for(l in category){
                   if(category[l].id == foods[k].catId){
                      total +=foods[k].cost
                      newobj['total'] = total
                      if(category[l].name in newobj){
                         newobj[category[l].name] += foods[k].name +','
                      }
                      else{
                         newobj[category[l].name] = foods[k].name +','
                        
                        
                      }
                   }
                }
             }
          }
       }
    }
    console.log(newobj);
    
 }
 
 check()
 
 