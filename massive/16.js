let categories = [
    {
        id:1,
        title:"Горячие блюда",
    },
    {
        id:2,
        title:"Напитки",
    },
    {
        id:3,
        title:"Десерты",
    },
    
]
let foods = [ 
    {
        id:1,
        catId:1,
        title:"Lagman",
        price:200
    },
    {
        id:2,
        catId:2,
        title:"Napoleon",
        price:170
    },
    {
        id:3,
        catId:3,
        title:"Shoro",
        price:70
    },
]
let users = [
    {
        id:1,
        name:'Aziz',
    },
    {
        id:2,
        name:'Ilmurat',
    },
    {
        id:3,
        name:'Ulan',
    }

]
let custamers = [
    {
        id:1,
        userId:1,
        foodsId:[1,1,2,2,3],
        discount:10
    },
    {
        id:2,
        userId:2,
        foodsId:[2,2,2,1,1],
        discount:10
    },
    {
        id:3,
        userId:3,
        foodsId:[1,2,2,1,1],
        discount:10
    },
]




// function getFoodsTotal(name) {
//     let food = foods.find(el => el.title == name)
//     if (!food) {
//         return console.log('Такого блюда нету')
//     }
//     let result = custamers.reduce((acc, item) => {
//         let user = users.find(el => el.id == item.userId).name
//         let size = item.foodsId.filter(el => el == food.id).length
//         if (user in acc) {
//             acc[user] = { count: acc[user].count + size, total: acc[user].total + ((size / 100) * (100 - item.discount)) * food.price }
//         } else {
//             acc[user] = { count: size, total: ((size / 100) * (100 - item.discount)) * food.price }
//         }
//         return acc
//     }, {})
//     console.log(result);

// }
// getFoodsTotal('Lagman')



function getTop(){
    let result = custamers.refuce((acc,item)=>{
        let user =  users.find(el => el.id == item.userId).name
        let size = item.foodsId.filter(el => el == food.id).length
        if(title in acc){
            
        }
    },{})
}
getTop()