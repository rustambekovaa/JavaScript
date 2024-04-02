// let foods = [
//     {
//         id: 1,
//         name: "Burger",
//         cost: 200,
//         startTime: "2023-10-10",
//         endTime: "10",
//         dicount: 50,
//     },
//     {
//         id: 2,
//         name: "Shaurma",
//         cost: 220,
//         startTime: "2023-10-10",
//         endTime: "20",
//         dicount: 50,
//     },
//     {
//         id: 3,
//         name: "Pizza",
//         cost: 200,
//         startTime: "2023-10-10",
//         endTime: "50",
//         dicount: 50,
//     },
// ];

// function get(){
//     for(k1 of foods){
//         let k = new Date(k1.startTime)
//         k.setDate(k.getDate()+parseInt(k1.dicount))
//         k1.startTime = k
//     }
// }
// get()
// console.log(foods);


let foods = [
    {
        id: 1,
        name: "Burger",
        cost: 200,
        startTime: "2023-10-10",
        endTime: "50",
    },
    {
        id: 2,
        name: "Shaurma",
        cost: 220,
        startTime: "2023-10-10",
        endTime: "10",
    },
    {
        id: 3,
        name: "Pizza",
        cost: 200,
        startTime: "2023-10-10",
        endTime: "366",
    },

];

// function get() {
//     for (let k1 of foods) {
//         let k = new Date(k1.startTime);
//         k.setDate(k.getDate() + parseInt(k1.endDay));
//         k1.endDay = k.toLocaleDateString(); 
//     }
// }

// get();
// console.log(foods);


function updateFoodTime() { 
  foods.forEach(elem => { 
 
    let start = new Date(elem.startTime).getTime() 
    let end = new Date(start + +elem.endTime * 24 * 3600 * 1000).toISOString() 
    console.log(end); 
    let [date] = end.split("T") 
    elem.endTime = date; 
  }); 
} 
updateFoodTime(); 
 
console.log(foods);