// let category={
//     cat1:{
//         id:1,
//         name:"FrontEnd"
//     },
//     cat2:{
//         id:2,
//         name:"BackEnd"
//     }
// }
// let devs={
//         dev1:{
//             id:1,
//             name:"Baibolot",
//             catId:1,
//             salary:40000
//         },
//         dev2:{
//             id:2,
//             name:"Aziz",
//             catId:1,
//             salary:30000
//         },
//         dev3:{
//             id:3,
//             name:"Oroz",
//             catId:2,
//             salary:4000
//         },
//         dev4:{
//             id:4,
//             name:"Hushbak",
//             catId:2,
//             salary:4000
//         }
// }
// function devops(id){
//     for (i in category ){
//         if (category[i].id==id){
//             for ( p in devs ){
//                 if(devs[p].catId==category[i].id){
//                     console.log(devs[p]);
//                 }   
//             }
//         }
//     } 
// }
// devops(1)


// function finddev(Id){
//     for( p in devs){
//         if(devs[p].id==Id){
//             for( i in category  ){
//                 if(category[i].id==devs[p].catId){
//                     console.log(category[i].name);
//                 }
//             }
//         }
//     }

// }
// finddev(1)



// let category={
//     cat1:{
//         id:1,
//         name:"FrontEnd"
//     },
//     cat2:{
//         id:2,
//         name:"BackEnd"
//     }
// }
// let devs={
//         dev1:{
//             id:1,
//             name:"Baibolot",
//             catId:1,
//             salary:40000
//         },
//         dev2:{
//             id:2,
//             name:"Aziz",
//             catId:1,
//             salary:30000
//         },
//         dev3:{
//             id:3,
//             name:"Oroz",
//             catId:2,
//             salary:4000
//         },
//         dev4:{
//             id:4,
//             name:"Hushbak",
//             catId:2,
//             salary:4000
//         }
// }
// function devops(id){
//     var sum = 0
//     for (i in category ){
//         if (category[i].id==id){
//             for ( p in devs ){
//                 if(devs[p].catId==category[i].id){
//                     sum +=devs[p].salary

//                 }  

//             }
//         }
//     } 
//     console.log(sum);
// }
// devops(1)



let category = {
    cat1: {
        id: 1,
        name: "FrontEnd"
    },
    cat2: {
        id: 2,
        name: "BackEnd"
    },
    cat3: {
        id: 3,
        name: "UX-UI"
    }
}
let devs = {
    dev1: {
        id: 1,
        name: "Baibolot",
        catId: 1,
        salary: 40000
    },
    dev2: {
        id: 2,
        name: "Aziz",
        catId: 1,
        salary: 30000
    },
    dev3: {
        id: 3,
        name: "Oroz",
        catId: 3,
        salary: 4000
    },
    dev4: {
        id: 4,
        name: "Hushbak",
        catId: 2,
        salary: 4000
    },
    dev5: {
        id: 5,
        name: "Jeka",
        catId: 3,
        salary: 3000
    }
}
function check() {
    var obj = {}
    for (var i1 in category) {
        for (var i2 in devs) {
            if (category[i1].id == devs[i2].catId) {
                if ([category[i1].name] in obj) {
                    obj[category[i1].name] += 1
                } else {
                    obj[category[i1].name] = 1
                }
            }
        }
    } 
    var k4=""
    for ( i4 in obj){
        k4+=`${i4}  ${obj[i4]} \n`
    }
    return k4
}
console.log(check());





// var k=0
// var p=0
// function check(){
//     for( i in category){
//         if(category[i].id==1){
//             for( i2 in devs){
//                 if(devs[i2].catId==category[i].id){
//                     k++
//                 }
//             }
//         }
//         if(category[i].id==2){
//             for( i2 in devs){
//                 if(devs[i2].catId==category[i].id){
//                     p++
//                 }
//             }
//         }
//     }
// }
// check()
// console.log(`Frontend ${k} \n BackEnd ${p} `);



let number = '6669'
function get_MAX() {
    let max;
    for (let i = 0; i < number.length; i++) {
        if (!i) {
            max = number[i]
        }
        if (number[i] > max) {
            max = number[i]
        }
    }
    let check = true
    let newString = ''
    for (let i = 0; i < number.length; i++) {
        if (number[i] < max && check) {
            newString += max
            check = false
            continue
        }
        newString += number[i]
    }
    number = newString
}

get_MAX()
console.log(number);