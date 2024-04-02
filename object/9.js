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

let v = {
    сom: [
        {
            id: 1,
            name: "d",
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
    ],

    $: [
        {
            id: 1,
            name: "d",
            cost: 1
        },
        {
            id: 2,
            name: "E",
            cost: 1.09
        },
        {
            id: 3,
            name: "com",
            cost: 0.011
        }
    ],
    E: [
        {
            id: 1,
            name: "d",
            cost: 0.92
        },
        {
            id: 2,
            name: "E",
            cost: 1
        },
        {
            id: 3,
            name: "com",
            cost: 0.010
        }
    ]

}

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


// let cusTotal = (valuta, cutId) => {
//     let k = 0
//     for (let i in v) {
//         if (i == valuta) {
//             let k1 = cus.find(item => item.id == cutId)
//             for (i1 in k1.foods) {
//                 let k5 = foods.find(item => item.id == i1)






//                     let k0 = v[i].find(item => item.name == k5.v)
//                     console.log(k0);
//                     // k += (k5.cost * k0.cost) * k1.foods[i1]

//             }
//         }
//     }
//     return k

// }
let cusTotal = (valuta, cusId) => {
    let total = 0
    let valut = []
    for (let key in v) {
        if (key == valuta) {
            valut = v[key]
            break
        }
    }
    valut ? null : console.error("error")

    let trueCus = cus.find(item => item.id == cusId)
    trueCus ? null : console.error("error")

    for (let key in trueCus["foods"]) {
        let trueFoot = foods.find(item => item.id == key)
        trueFoot ? null : console.error("error")

        let vv = valut.find(item => item.name == trueFoot.v)
        vv ? null : console.error("error")
        total += (vv * trueFoot.cost)*trueCus.foods[key]
        // console.log(vv);
        // total += (trueFoot.cost * vv.cost) * trueCus["foods"][key]

    }
    return total
}

cusTotal("E", 2)

// if(k1){
//     // let dengi = v[i].find(item => item.name == k1.v )
//     if(dengi){
//         k += (k1.cost*dengi.cost)*
//     }
// }