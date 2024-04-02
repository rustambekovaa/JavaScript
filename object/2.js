
// let p = 'hellow';

// let k = Array.from(p).reverse().join('');
// console.log(k);


// function reverse_a_number(num) {
//     let result = 0;
//   while (num) {
//     result = result * 10 + num % 10;
//     num = Math.floor(num / 10);
//   }
//   return result;
//     };
// console.log(reverse_a_number(258961));



// function a(n) {
//     n = n + "";
//     return n.split("").reverse().join("");
//   }

//   console.log(a(258961));

// function k (n){
// let p=""
// for (let i=0;i<n.length;i++){
// p+= n[n.length-1-i]
// }
// return p

// }
// console.log(k("Akmaanai"));


//Напишите функцию JavaScript, которая проверяет, является ли переданная строка палиндромом? Палиндром - это слово,
// фраза или последовательность, которые читаются так же, как вперед, назад, например, level.


// function k(n) {
//   let p1 = ""

//   for (let i = 0; i < n.length; i++) {
//     p1 += n[n.length - 1 - i]
//   }
//   if (n == p1) {
//     return p1
//   }
//   else {
//     return " Это  не палиндромом"
//   }

// }
// console.log(k("level"));

//Напишите функцию substrings(str), которая генерирует все комбинации строки.
//Пример строки: 'dog'.
//Ожидаемый результат: d, o, do, g, dg, og, dog.

// function k(n) {
//   let p1 = ""
//   let p2 =""
//   for (let i = 0; i < n.length; i++) {
//     p1 += n[n.length-1-i]
//     p2+=p1+","
//   }
//     return p2


// }
// console.log(k("god"));



// Напишите функцию alphabet_order(str), которая возвращает переданную строку с буквами в алфавитном порядке.
// Пример строки: 'alphabetical'
// Ожидаемый результат: 'aaabcehillpt'


// function k(str) {
//   let p = []
//   let p2 = ""
//   p = str.split(" ")
//   if (p[0].length > p[1].length && p[0].length > p[2].length)
//     return p[0]
//   if (p[1].length > p[0].length && p[1].length > p[2].length)
//     return p[1]
//   if (p[2].length > p[0].length && p[2].length > p[1].length)
//     return p[2]
// }
// console.log(k("erty errjgfghjkltyt uiopqwertyui"));



// let a = (n) =>{
//   let s = {}
//   let d = 0
//   let f = 0
//   for(let i=0; i<n.length; i++){
//     if(n[i] != " "){
//       d++
//     }
//     if((n[i] == " " && d != 0)|| n.length-1 == i ){
//       s[f] = d
//       f++
//       d = 0
//     }
//   }
//   console.log(s);
// }
// a("2345 678    dasd")



// a("qwertyuio")

// 6. Подсчитать количество гласных в строке
// Напишите функцию vowel_count(str), которая принимает строку в качестве параметра
// и подсчитывает количество гласных в строке.


// function vowel_count(str){
//   var count=0
//   var k=""
//   var vowel=['a','i','e','y','o','u']

//   for(let i=0;i<vowel.length;i++){ 
//     if (str.includes(vowel.at(i))){
//       count++ 
//     }

//   }

//   return count

// }
// console.log(vowel_count("Web evelopment Tutorial"));






// function vowel_count(str) {
//   var count = 0
//   var k = ""
//   var vowel = ['a', 'i', 'e', 'y', 'o', 'u']

//   for (let i = 0; i < vowel.length; i++) {
//     if (str.includes(vowel.at(i))){
//             count+=1
//           } 
//           return count
//   }

//   return count

// }
// console.log(vowel_count("Web evelopment Tutorial"));


// 7. Проверьте, является ли число простым или нет
// Напишите функцию test_prime(n), которая принимает число в качестве параметра и проверяет, является ли число простым или нет.

// Примечание. Простое число (или простое число) - это натуральное число больше 1, не имеющее положительных делителей, кроме 1 и самого себя.


// function test_prime(n){
// if (n%2==0 || n%1==0 || n%n==1){
// return true
// }
// else{
//   return false
// }

// }
// console.log(test_prime(52));


// 8. Получить тип данных
// Напишите функцию detect_data_type(value), которая принимает аргумент и возвращает тип.

// Примечание. Существует шесть возможных значений, которые возвращает typeof: объект, логическое значение, функция, число, строка и неопределенное значение.


// function detect_data_type(value) {
//   let k;
//   k=typeof(value)
//   return k
// };
// console.log(detect_data_type(false));

// 9. Вернуть единичную матрицу n строк и n столбцов.
// Напишите функцию matrix(n), которая возвращает единичную матрицу n строк и n столбцов.

// Пример вывода:

// 1 0 0 0
// 0 1 0 0
// 0 0 1 0
// 0 0 0 1


// function matrix(n) {

//   var i;
//   var j;

//   for (i=0; i < n; i++)  {
//     for (j=0; j < n; j++)  {
//          if (i === j)  {

//            document.writeln(' 1 ');
//          }

//          else  {
//            document.writeln(' 0 ');}
//           }
//        document.writeln('<br>') ;
//      }
//  }
// matrix(4);



// 10. Найдите второе наименьшее и второе наибольшее числа из массива
// Напишите функцию second_greatest_lowest(arr_num), которая будет принимать
// массив сохраненных чисел и находить второе наименьшее и второе наибольшее числа соответственно.



// function second_greatest_lowest(arr_num) {
//   let k=Math.min(...arr_num)+1
//   let p=Math.max(...arr_num)-1

//   return k+","+p ;
// };

// console.log(second_greatest_lowest([8,9,10,11,12]));



//OBJECT


// let users = {
//   user1:{
//     id:1,
//     name:"majid",
//   },
//   user2:{
//     id:2,
//     name:"akmaanai",
//   },
//   user3:{
//     id:3,
//     name:"tynybek",
//   },
//   user4:{
//     id:4,
//     name:"jasur",
//   },
//   user5:{
//     id:5,
//     name:"ulan",
//   }
// }


// let getId = (id) =>{
//   for(let key in users){
//     if ( users[key].name == id){
//       console.log( users[key].name);
//     }
//   }


// } 
// getId("akmaanai")




// function second_greatest_lowest(arr_num) {

// }



// let users = {
//   user1:{
//     id:1,
//     name:"majid",
//   },
//   user2:{
//     id:2,
//     name:"oroz",
//   },
//   user3:{
//     id:3,
//     name:"tynybek",
//   },
//   user4:{
//     id:4,
//     name:"jasur",
//   },
//   user5:{
//     id:5,
//     name:"Ulanbek",
//   }
// }

// let delId =(id)=>{
//   for(let key in users){
//     if(users[key].id==id){
//       delete users[key]
//     } 
//   }

// }


// delId(4)

// console.log(users);



/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let category = {
//   cat1:{
//     id:1,
//     name:"Fast food"
//   },
//   cat2:{
//     id:2,
//     name:"Drink"
//   },
// }

// let foods = {
//   food1:{
//     id:1,
//     name:"Burger",
//     catID:1,
//     cost:150
//   },
//   food2:{
//     id:2,
//     name:"Shaurma",
//     catID:1,
//     cost:120
//   },
//   food3:{
//     id:3,
//     name:"Pizza",
//     catID:1,
//     cost:200
//   },
//   food4:{
//     id:4,
//     name:"Cola",
//     catID:2,
//     cost:80
//   },
//   food5:{
//     id:5,
//     name:"Pepsi",
//     catID:2,
//     cost:80
//   },
//   food6:{
//     id:6,
//     name:"Adrenaline",
//     catID:2,
//     cost:120
//   },
// }

// function getTotalByCAtID(id){
//   let total = 0
//   for( let key in category){
//     if (category[key].id==id){
//       for( let key2 in foods ){
//         if(foods[key2].catID==category[key]["id"]){
//           total+=foods[key2].cost
//         }
//       } 
//     }

//   }
// console.log(total);
// }
// getTotalByCAtID(1)



///////////////////////////////////////////////////////////////////////////////////////////////////



// let users = {
//   user1:{
//     id:1,
//     name:"majid",
//     age:18,
//   },
//   user2:{
//     id:2,
//     name:"oroz",
//     age:20,

//   },
//   user3:{
//     id:3,
//     name:"tynybek",
//     age:24,
//   },
//   user4:{
//     id:4,
//     name:"Muslima",
//     age:23
//   },
//   user5:{
//     id:5,
//     name:"akmaanai",
//     age:17
//   }
// }



// let newAgeNme = (id,newName,newAge) =>{
//   for(let key in users){
//     if (users[key].id == id){
//       users[key].name=newName
//       users[key].age=newAge
//     }
//   }



// }
// newAgeNme(4,"royona",16)

// console.log(users);


///////////////////////////////////////////////////////////////////////////////////////////////

// let users = {
//   user1:{
//     id:1,
//     catId:2,
//     name:"majid",
//     age:18,
//     profesia:"undefinet"
// },
// user2:{
//   id:2,
//   catId:3,
//   name:"oroz",
//   age:20,
//   profesia:"undefinet"
// },
// user3:{
//   id:3,
//   catId:1,
//     name:"tynybek",
//     age:24,
//     profesia:"undefinet"
//   },
//   user4:{
//     id:4,
//     catId:2,
//     name:"Muslima",
//     age:23,
//     profesia:"undefinet"
//   },
//   user5:{
//     id:5,
//     catId:1,
//     name:"akmaanai",
//     age:17,
//     profesia:"undefinet"
//   }
// }


// let NewCatId=(CatId, profesia) =>{
//   for (let key in users){
//     if (users[key].catId==CatId){
//       users[key].profesia= profesia
//     }
//   }
// }
// NewCatId(2, "mentor")
// NewCatId(3, "teacher")


// function profesiA (){
//   for (let key in users){
//   if(users[key].profesia =="undefinet" ){
//     delete users[key]
//   }
// }
// }
// console.log(users); 
// profesiA()
// console.log(users);

// users.user1.profesia =  mentor


/////////////////////////////////////////////////////////////////////////////////////////////////////////////



// let category = {
//   cat1:{
//     id:1,
//     name:"Fast food"
//   },
//   cat2:{
//     id:2,
//     name:"Drink"
//   },
// }

// let foods = {
//   food1:{
//     id:1,
//     name:"Burger",
//     catID:1,
//     cost:150
//   },
//   food2:{
//     id:2,
//     name:"Shaurma",
//     catID:1,
//     cost:120
//   },
//   food3:{
//     id:3,
//     name:"Pizza",
//     catID:1,
//     cost:200
//   },
//   food4:{
//     id:4,
//     name:"Cola",
//     catID:2,
//     cost:80
//   },
//   food5:{
//     id:5,
//     name:"Pepsi",
//     catID:2,
//     cost:80
//   },
//   food6:{
//     id:6,
//     name:"Adrenaline",
//     catID:2,
//     cost:120
//   },
// }
// function getCat(cat){
//   var k={}
//   for (let key in category){
//     if(category[key]["id"] == cat){
//       for ( let key2 in foods){
//         if(foods[key2].catID==category[key]["id"]){
//          k[key2]=foods[key2];
//         }
//       }
//     }
//   }
//   return k
// }
// console.log(getCat(2));

/////////////////////////////////////////////////////////////////

// let customer ={
//   cust1:{
//     id:1,
//     name:"Majid",
//     foods:{
//       0: 10 ,
//       1: 4, 
//       2: 2,
//     }
//   }
// }
// function total(sum){
//   var cost=0
//   for (let  i in customer ){
//     if (customer[i].id==sum){
//       for(let k in customer[i].foods){
//          cost+=customer[i].foods[k]
//       }
//     }
//   }
//   return cost

// }

// console.log(total(1))


////////////////////////////////////////////////////////////////////////////


// let obj={
//   per1:{
//     name:"Majid",
//     pas:1234,
//     age:2005
//   }
// }
// function letAge(name,pass,year){
//   var age2=0
//   for (let i in obj){
//     if(obj[i].name==name && obj[i].pas==pass && obj[i].age<year){
//       age2=year-obj[i].age
//       // console.log(`Name: ${name} \n Age:${year-age}`);
//     }
//   }
//   return age2
// }

// console.log(letAge("Majid",1234,2030));


//////////////////////////////////////////////////////////////////////////////////////////////////////


// let obj={
//   user1:{
//     id:1,
//     name:"Majid",
//     age:18,
//     city: "Osh",
//   }
// }


// function newUser(name,age,city){
//   for(let key in obj){
//     if(fvvh ){

//     }
//     obj[key]=newUser
//   }

// }
// newUser("Rayona",17,"Osh")
// console.log(obj);




////////////////////////////////////////////////////////////////

// let users=[
//   {
//     id:1,
//     name:"Maanai",
//     age:12,
//     status:"Admin",
//     password:12345,
//   }
// ]
// function read(id){
//   console.log(users.find(item=>item.id==id));
// }
// read(1)
// function create(name, age,status,password){
//   if (users.some(item=>item.name==name)){
//     return console.log("Уже есть");
//   }
//   users.puch(
//     {
//       id:users.length?users.at(-1).id+1:1,
//       name ,
//       age,
//       status,
//       password
//     }
//   )
// }
// function updateUsers(id,key,value){
//   users.map(item=>{
//     if(item.id==id){
//       if (key in item){
//         item[key]=value
//       }
//     } 
//    return item
//   })
// }
// updateUsers(1,"name","Imran")
// console.log(users);
// function deleteUser(id){
//   users.splice(users.findIndex(item=>item.id==id),1)
// }

///////////////////////////////////////////////////////////////////////////////////////


let users = {
  user1: {
    id: 1,
    name: "Majid",
    age: 18,
    monye: 2000,
  },
  user2: {
    id: 2,
    name: "Oroz",
    age: 58,
    monye: 2000,
  }, user3: {
    id: 3,
    name: "Baybolot",
    age: 19,
    monye: 2000,
  }
}



let foods = {
  food1: {
    id: 1,
    name: "samsa",
    cost: 90,
  },
  food2: {
    id: 2,
    name: "manty",
    cost: 140,
  }, food3: {
    id:3,
    name: "oromo",
    cost: 130,
  }
}

let custumers = {
  custemer1: {
    id: 1,
    userId: 1,
    foods: { 1: 2, 3: 2, 2: 5, }
  }, custemer2: {
    id: 2,
    userId: 3,
    foods: { 2: 2, 1: 2, 3: 5, }
  }, custemer3: {
    id: 3,
    userId: 2,
    foods: { 3: 2, 2: 5, 1: 5, 2: 3, }
  },
  custemer4: {
    id: 3,
    userId: 2,
    foods: { 3: 2, 2: 5, 1: 5, 2: 3, }
  }
}
let custemerTotal = (cusId) => {
  let cus = {}
  let total = 0
  for (let cusT in custumers) {
    if (custumers[cusT].id == cusId) {
      cus = custumers[cusT]
      break

    }
  }
  for (let k in cus["foods"]) {
    for (let p in foods) {
      if (foods[p].id == k) {
        total += cus.foods[k] * foods[p].cost
      }
    }
  }

  for (let key in users) {
    if (cus.userId == users[key].id) {
      users[key].monye -= total
      console.log(users[key].monye);
    }
  }  
}
// custemerTotal(2)
console.log(custumers);

let newCustemer = (userId, foods) => {
  let key = Object.values(custumers).at(-1).id + 1
  custumers[`custemer${key}`] = {
    id: key,
    userId: userId,
    foods: foods,
  }
  

}
newCustemer(3,{ 3: 2, 2: 5, 1: 5, 2: 3, })


// console.log(custumers)
// let deletCustemer = (id) => {
//   for (let deCus in custumers){
//     if (custumers[deCus].id==id){
//       delete custumers[deCus]
//     }
//   }
// }
// deletCustemer(2)
// console.log(custumers);
// let key2=( name,cost)=>{
//   let k =Object.values(foods).at(-1).id+1
//   foods[`foods${k}`]={
//     id:k,
//     name:name,
//     cost:cost,
//   }
// }
// key2("kartoshka",150)
// console.log(foods);
// const searchFood = (userId, foodId) => {
//   for (let id in users ){
//     if (users[id].id==userId){
//       for ( let cus in custumers){  
//         if(custumers[cus].userId== users[id].id){
//           for( let cus2 in custumers[cus].foods ){
//             for (let cus3 in foods){
//               if(foods[cus3].id==foodId && foods[cus3].id ==cus2){
//                 console.log(`${users[id].name}  ${custumers[cus].foods[cus2]}шт ${foods[cus3].name} купил, \nУ него остался ${users[id].monye-custumers[cus].foods[cus2]*foods[cus3].cost} сомов`);
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// searchFood(2,2)

//////////////////////////////////////////////////////////////////



// let users = {
//   user1: {
//     id: 1,
//     name: "Majid",
//     age: 18,
//     monye: 2000,
//   },
//   user2: {
//     id: 2,
//     name: "Oroz",
//     age: 58,
//     monye: 2000,
//   }, user3: {
//     id: 3,
//     name: "Baybolot",
//     age: 19,
//     monye: 2000,
//   }
// }



// var foods = {
//   food1: {
//     id: 1,
//     name: "samsa",
//     cost: 90,
//   },
//   food2: {
//     id: 2,
//     name: "manty",
//     cost: 140,
//   }, food3: {
//     id:3,
//     name: "oromo",
//     cost: 130,
//   }
// }

// let custumers = {
//   custemer1: {
//     id: 1,
//     userId: 1,

//     foods: { 0: 2, 1: 2, 2: 3, }
//   }, custemer2: {
//     id: 2,
//     userId: 3,
//     foods: { 0: 2, 1: 3, 2: 1, }
//   }, custemer3: {
//     id: 3,
//     userId: 2,
//     foods: { 0: 2, 1: 3, 2: 1 }
//   },
//   custemer4: {
//     id: 3,
//     userId: 2,
//     foods: { 0: 2, 1: 1, 2: 1 }
//   } 
// }
// function newId(id){
//   let cus={}
// for(let key in custumers){
//   if(id === custumers[key]["id"]){
//     for(let key2 in custumers[key]["foods"]){
//       for (let foods2  in foods){
//         if (custumers[key]["foods"][key2]==foods[foods2].id){
//           custumers[key]["foods"][key2]=foods[foods2 ]
          

//         }

//       }
   
//     }
//   }
// }
// }
// newId(1)
// console.log(custumers);

// let custumers = {
//     custemer1: {
//       id: 1,
//       userId: 1,
  
//       foods: { 0: 2, 1: 2, 2: 3, }
//     }, custemer2: {
//       id: 2,
//       userId: 3,
//       foods: { 0: 2, 1: 3, 2: 1, }
//     }, custemer3: {
//       id: 3,
//       userId: 2,
//       foods: { 0: 2, 1: 3, 2: 1 }
//     },
//     custemer4: {
//       id: 3,
//       userId: 2,
//       foods: { 0: 2, 1: 1, 2: 1 }
//     } 
// }

// var foods = {
//     food1: {
//       id: 1,
//       name: "samsa",
//       cost: 90,
//     },
//     food2: {
//       id: 2,
//       name: "manty",
//       cost: 140,
//     }, food3: {
//       id:3,
//       name: "oromo",
//       cost: 130,
//     }
// }
  
// function newId(){
   
// }





// ////////////////////////////////////////
// let customers = [
//   {
//     id: 1,
//     name: "Imron",
//     foods: [
//       {
//         id: 1,
//         foodId: 1,
//         count: 10,
//       },
//       {
//         id: 2,
//         foodId: 3,
//         count: 4,
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Islom",
//     foods: [
//       {
//         id: 1,
//         foodId: 3,
//         count: 4,
//       },
//       {
//         id: 2,
//         foodId: 1,
//         count: 2,
//       },
//     ],
//   },
// ];

// let foods = [
//   {
//     id: 1,
//     name: "Lagman",
//     price: 120,
//     catId: 2,
//   },
//   {
//     id: 2,
//     name: "Cake",
//     price: 200,
//     catId: 1,
//   },
//   {
//     id: 3,
//     name: "Cofe",
//     price: 120,
//     catId: 3,
//   },
// ];

// let category = [
//   {
//     id: 1,
//     name: "Desert",
//   },
//   {
//     id: 2,
//     name: "Hot Food",
//   },
//   {
//     id: 3,
//     name: "Drinks",
//   },
// ];

// function getCheck(userId) {
//   let user = customers.find((item) => item.id == userId);
//   user.foods = user.foods.map((item) => {
//     let myFood = foods.find((elemet) => elemet.id == item.foodId);
//     item.foodname = myFood.name;
//     let total = myFood.price * item.count;
//     item.catName = category.find((elem) => elem.id == myFood.catId).name;
//     return item;
//   });

//   return user;
// }

// console.log(getCheck(1));

// const cars = [
//   { make: 'Toyota', model: 'Camry', year: 2018 },
//   { make: 'Honda', model: 'Accord', year: 2019 },
//   { make: 'Tesla', model: 'Model S', year: 2020 },
// ];

// const car = cars.find(function (item) {
//   return item.make === 'Honda';
// });

// console.log(car); // { make: 'Honda', model: 'Accord', year: 2019 }


