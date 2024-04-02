let foods = [ 
  { 
    id: 1, 
    name: "Burger", 
    cost: 200, 
    startTime: "2023-10-10", 
    endTime: "2023-11-10", 
    dicount: 50, 
  }, 
  { 
    id: 2, 
    name: "Shaurma", 
    cost: 220, 
    startTime: "2023-10-10", 
    endTime: "2023-11-10", 
    dicount: 50, 
  }, 
  { 
    id: 3, 
    name: "Pizza", 
    cost: 200, 
    startTime: "2023-10-10", 
    endTime: "2023-11-10", 
    dicount: 50, 
  }, 
]; 
 
let customers = [ 
  { 
    id: 1, 
    foodId: [1, 1, 2, 2, 3, 3], 
    time: "2023-10-09", 
  }, 
  { 
    id: 2, 
    foodId: [1, 2, 3, 3, 2], 
    time: "2023-11-17", 
  }, 
  { 
    id: 3, 
    foodId: [2, 2, 3, 3, 2], 
    time: "2023-10-20", 
  }, 
];
function getId(id){
    let total = 0 
    for( let k1 of customers){
        if (k1.id == id){
            for( let k2  of k1.foodId){
                for( let k3 of foods){
                    if (k2 == k3.id){
                      let t1 = new Date(k3.startTime).getTime()
                      let t2 = new Date(k1.time).getTime()
                      let t3 = new Date(k3.endTime).getTime()
                      if (t1 <= t2 && t2 <= t3){
                        total+=k3.cost -(k3.cost*k3.dicount/100)
                      }  
                      else{
                          total+=k3.cost
                        }
                    }
                }
            }
        }
    }
 console.log(total);
}
 getId(1)
