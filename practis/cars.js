let cars = { 
    car1:{ 
        id:1, 
        name:'BMW', 
        cost: 2000, 
        color: 'red', 
        currency:1 
    }, 
    car2:{ 
        id:2, 
        name:'Mersedes-benz', 
        cost: 3000, 
        color: 'silver', 
        currency:1 
    }, 
    car3:{ 
        id:3, 
        name:'Matiz', 
        cost: 1000, 
        color: 'white', 
        currency:2 
    }, 
    car4:{ 
        id:4, 
        name:'Porshe', 
        cost: 3000, 
        color: 'red', 
        currency:1 
    }, 
    car5:{ 
        id:5, 
        name:'Audi', 
        cost: 1500, 
        color: 'black', 
        currency:2 
    }, 
    car6:{ 
        id:6, 
        name:'Tico', 
        cost: 800, 
        color: 'red', 
        currency:2 
    }, 
    car7:{ 
        id:7, 
        name:'Lada', 
        cost: 900, 
        color: 'silver', 
        currency:1 
    }, 
    car8:{ 
        id:8, 
        name:'Toyota', 
        cost: 3000, 
        color: 'white', 
        currency:2 
    }, 
} 
 
let currencies = { 
    currency1:{ 
        id:1, 
        name:'dollar', 
        course: 87 
    }, 
    currency2:{ 
        id:1, 
        name:'euro', 
        course: 90 
    }, 
     
} 
 
function showCarsbyColor(id,currencies){ 
    object = {}
    for(i in cars){
        for (i2 in currencies ){
            if (id == cars[i].id){
                cars[i].cost = currencies*cars[i].cost
            }
            else if(currencies == ""){
                cars[i].cost = cars[i].cost*currencies[i2].course
            }
        }
    }
}
showCarsbyColor(1,2)