let foods = [
    {
        id: 1,
        name: "buger",
        cost: 10,
        v: "$"
    },
    {
        id: 2,
        name: "samsa",
        cost: 150,
        v: "som"
    },
    {
        id: 3,
        name: "manty",
        cost: 5,
        v: "E"
    },
    {
        id: 4,  
        name: "plov",
        cost: 15,
        v: "$"
    },
    {
        id: 5,
        name: "shorpo",
        cost: 250,
        v: "com",
    }
]


let v = [
    {
        id: 1,
        name: "$",
        cost: 87
    },
    {
        id: 2,
        name: "E",
        cost: 93
    },
    {
        id: 3,
        name: "com",
        cost: 1
    }
]
let cus = [
    {
        id: 1,
        foods: {
            1: 2,
            4: 4,
            5: 5,
            3: 4
        }
    },
    {
        id: 2,
        foods: {
            1: 3,
            2: 4,
            3: 3,
            4: 1,
            5: 4,
        }
    },
    {
        id: 3,
        foods: {
            3: 5,
            1: 4,
            3: 2,
            2: 4
        }
    }
]
let totleCus = (cusId) => {
    var k = 0
    let k3 = cus.find(item => item.id == cusId)
    for (let check in k3.foods) {
        
        let k4 = foods.find(item => item.id == k3.foods[check])
        if (k4) {
            
            let k5 = v.find(item3 => item3.name == k4.v)  
            if (k5) { 
                k += (k4.cost * k5.cost) * k3.foods[check]

            }
        }
    }
    return k;
}

console.log(totleCus(2));