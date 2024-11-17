// let foods = {
//     food1: {
//         id: 1,
//         name: "Burger",
//         cost: 70,
//     }
//     , food2: {
//         id: 2,
//         name: "Pizza",
//         cost: 170,
//     },


// }

//CRUD
////CRATE///
// function newId(name,cost){
//     let length=0
//     for( let i in foods){
//         length++
//     }
//     foods["food"+(length+1)]={
//         id:length+1,
//         name:name,
//         cost:cost
//     }
// }
// newId("cola",150)
// console.log(foods);




////Read///
// function letId(id){
//     for (let i in foods){
//         if(foods[i].id==id){
//             console.log(foods[i]);
//         }
//     }
// }
// letId(1)  


// //// UPDATE///
// function update(id,name,cost){
//     for (let i in foods){
//         if (foods[i].id==id){
//             foods[i].name=name
//             foods[i].cost=cost
//         }
//     }

// }
// update(1,"fanta",140)
// console.log(foods);


// //// DELETE///
// function delId(id){
//     for(let i in foods){
//         if (foods[i].id==id){
//             delete foods[i]
//         }
//     }
// }
// delId(2)
// console.log(foods);


// let foods={
//     food1:{
//         id:1,
//         name:"Burger",
//         cost:170,
//     }
//     ,food2:{
//         id:2,
//         name:"Pizza",
//         cost:170,
//     }
// }


// function newUser(name,cost){
//     let k=0
//     for(let i in foods){
//         k++
//     }
//     foods["food"+(k+1)]={
//         id:k+1,
//         name:name,
//         cost:cost
//     }
// }
// newUser("eda",200)
// console.log(foods);




// let people={
//     people1:{
//         id:1,
//         name:"Majid",
//         surname:"Bekov",
//         age:18,
//         salary:2000
//     }
// }

// function newUser (name,surname,age,salary){
//     let p=0
//     for(let i in people){
//         p++
//     }
//     people["people"+(p+1)]={
//         id:p+1,
//         name: name,
//         surname:surname,
//         age:age,
//         salary:salary
//     }
// }
// newUser("Maanai","Bekova",17,20000)
// newUser("Ai","Va",37,90000)
// newUser("Nai","kova",10,18000)
// newUser("Aanai","Rekova",71,40000)
// console.log(people);

// let win1=0
// let win2=0
// let win3=0
// var sal=[]
// for( i in people){
//     let money = people[i]
//     for( k in money){

//     }
// }
// top3()
// const allSalaries = [];
// for (const department in departments) {
//   const employees = departments[department];
//   for (const employee in employees) {
//     allSalaries.push({ name: employee, salary: employees[employee] });
//   }
// }

// Сортировка зарплат по убыванию и вывод топ 3 на консоль
// allSalaries.sort((a, b) => b.salary - a.salary);
// for (let i = 0; i < 3 && i < allSalaries.length; i++) {
//   console.log(`${i + 1}. ${allSalaries[i].name}: $${allSalaries[i].salary}`);
// }

// function read(id){
//     for(let i in people){
//         if (people[i].id==id){
//             console.log(people[i]);
//         }
//     }
// }
// read(5)


// function up(id ,name,salary){
//     for (let i in people){
//         if( people[i].id==id){
//             people[i].name=name,
//             people[i].salary=salary
//         }
//     }
// }
// up(5,"Akmaanai",400000)
// console.log(people);


// function del(id){
//     for(let i in people){
//         if(people[i].id==id){
//             delete people[i]
//         }
//     }
// }
// del(5)
// console.log(people); 


let user = {
    user1: {
        id: 1,
        name: "Azalia",
        surname: "Azamatova",
        email: 'azamatova@gmail.com'
    },
    user2: {
        id: 2,
        name: "Eldar",
        surname: "Argenov",
        email: 'argenov@gmail.com'
    },
    user3: {
        id: 3,
        name: "Nurel",
        surname: "Timurov",
        email: 'timurov@gmail.com'
    },
    user4: {
        id: 4,
        name: "Muhammadysuf",
        surname: "Temirov",
        email: 'temirov@gmail.com'
    },
    user5: {
        id: 5,
        name: "Husniddin",
        surname: "Aliev",
        email: 'aliev@gmail.com'
    },
}

function cherck(name, surname, email) {
    let length = 0
    for (let i in user) {
        if (user[i].email == email) {
            return
        }
    }
    for (let i in user) {
        length++
    }
    if (email.endsWith('@gmail.com') && !email.startsWith('@gmail.com')) {
        user['user' + (length + 1)] = {
            id: length + 1,
            name: name,
            surname: surname,
            email: email
        }
    }

    console.log(user);

}

cherck('Argen', 'Usenov', 'qwerty');