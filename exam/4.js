let foods = {
    food1: {
        id: 1,
        name: "Burger",
        cost: 150,
    },
    food2: {
        id: 2,
        name: "ChikenBurger",
        cost: 200,
    },
    food3: {
        id: 3,
        name: "Pizza",
        cost: 300,
    },
    food4: {
        id: 4,
        name: "Doner",
        cost: 15,
    },
    food5: {
        id: 5,
        name: "Shaurma",
        cost: 170,
    },
};


let clients = {
    client1: {
        id: 1,
        name: "Majid",
        count: 20,
        discountId: 1,
        money: 20000,
        foods: { 0: 1, 1: 2, 3: 5, 4: 4, },
        total: function () {
            let total = 0
            let all = 0
            for (i in foods) {
                for (i2 in this.foods) {
                    if (foods[i].id == this.foods[i2]) {
                        total += this.count * foods[i].cost
                        for (i3 in discount) {
                            if (discount[i3].id == this.discountId) {
                                total = total - (total / 100 * discount[i3].title)
                                this.money = this.money - total

                            }
                        }
                    }
                }


            }
               console.log(total);
        },
    },
    client2: {
        id: 2,
        name: "Nurullo",
        count: 1,
        discountId: 2,
        foods: { 0: 1, 1: 2, 3: 5, 4: 4, 5: 3, 4: 4, 5: 3 },
        money: 20000,
        total: function () {
            let total = 0
            let all = 0
            for (i in foods) {
                for (i2 in this.foods) {
                    if (foods[i].id == this.foods[i2]) {
                        total = this.count * foods[i].cost
                        for (i3 in discount) {
                            if (discount[i3].id == this.discountId) {
                                total = total - (total / 100 * discount[i3].title)
                                console.log(total);
                                this.money = this.money - total

                            }
                        }
                    }
                }


            }
               console.log(` У вас остался ${0}c \n Счет со скидкой ${total}`);
        },
    },
};

let discount = {
    discount1: {
        id: 1,
        title: 100,
    },
    discount2: {
        id: 2,
        title: 50,
    },
};
clients["client1"]["total"]()
clients["client2"]["total"]()
console.log(clients);


/////////////////////11111111111/////////////////////////
// Задача 1: Вычеслить самый дорогой товар в foods используя cost. 

// function gettop1(){ 
//     let top1 = {} 
//     for(let key in foods){ 
//         if(Object.keys(top1).length === 0){ 
//             top1[key] = foods[key] 
//             continue 
//         } 
//         if(top1[Object.keys(top1)[0]]["cost"] <foods[key]["cost"]){ 
//             delete top1[Object.keys(top1)[0]] 
//             top1[key] = foods[key] 
//         } 
//     } 
//     console.log(top1); 
// } 
// gettop1()

/////////////////////2222222222222222222222/////////////////////////
// Задача 2: Вычеслить total внутри объекта clients. 




////////////////////////////////////44444444444444444444/////////////////
// Задача 4: Вычеслить какой клиент купил больше блюд.
// let sum = 0;
// let userName = 0;
// let fix = 0
// for (let k in clients) {

//     let client = clients[k];
//     let foods = client.foods;
//     let foodOrderCount = Object.keys(foods).length;
//     if (!fix) {
//         sum = foodOrderCount * clients[k].count
//         userName = clients[k].name
//         fix++
//         continue
//     }
//     if (foodOrderCount * clients[k].count > sum) {
//         sum = foodOrderCount * clients[k].count;
//         userName = clients[k].name
//     }
// }

// console.log(`Клиент ${userName} `);












////////////////////////////////////3333333333333333333333///////////////
// function gettop1(){
//     let top1 = {}
//     for(let key in foods){
//         if(Object.keys(top1).length === 0){
//             top1[key] = foods[key]
//             continue
//         }
//         if(top1[Object.keys(top1)[0]]["cost"] > foods[key]["cost"]){
//             delete top1[Object.keys(top1)[0]]
//             top1[key] = foods[key]
//         }
//     }
//     console.log(top1);
// }
// gettop1()