let obj = new Map([ 
    ['category1', { id: 1, name: 'desert' }], 
    ['category2', { id: 2, name: 'fast-food' }], 
    ['category3', { id: 3, name: 'sup' }], 
    ['category4', { id: 4, name: 'salad' }], 
    ['category5', { id: 5, name: 'wok' }], 
]) 
 
let foods = new Map([ 
    ["food1", { id: 1, catId: 1, name: "cake", cost: 100 }], 
    ["food2", { id: 2, catId: 2, name: "burger", cost: 120 }], 
    ["food3", { id: 3, catId: 3, name: "ramen", cost: 140 }], 
    ["food4", { id: 4, catId: 4, name: "cezar", cost: 120 }], 
    ["food5", { id: 5, catId: 5, name: "lapwa", cost: 150 }], 
    ["food6", { id: 6, catId: 5, name: "Ramen", cost: 150 }], 
]) 
 
let customers = new Map([ 
    ["customer1", { id: 1, foods: [1, 3, 3, 3, 3,3, 3, 3, 3,3, 3, 3, 3,3, 3, 3, 3,3, 3, 3, 3, 2, 3], date: "2023:05:08" }], 
    ["customer2", { id: 2, foods: [1, 1, 1, 1, 1, 5, 4], date: "2023:05:07" }], 
    ["customer3", { id: 3, foods: [2, 4, 4, 4, 4, 4, 4, 4, 2], date: "2023:05:06" }], 
    ["customer4", { id: 4, foods: [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2], date: "2023:05:05" }], 
    ["customer5", { id: 5, foods: [2, 5, 5, 5, 6, 2], date: "2023:05:04" }], 
])


function getTotal(){
    let k = {}
    let a = []
    for( item1 of customers ){
        for( item2 of item1[1]["foods"]){
            if( item2 in k){
                k[item2]+=1
            }else{
                k[item2]=1
            }
        }
    }
    for (let[key,value] of Object.entries(k)){
        a.push([key,value])
    }
    a.sort((a,b) => b[1]-a[1])
    let arr =[]
    for( itemFood of foods){
        if(itemFood[1]["id"] == a[0][0]){
            arr.push(itemFood)
        }
    }
    console.log(arr);
}
getTotal()
