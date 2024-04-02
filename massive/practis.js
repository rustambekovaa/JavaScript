
//2.Преобразование массива в строку
//Напишите код, который преобразовывает и объединяет все элементы 
//массива в одно строковое значение. Элементы массива будут разделены 
//запятой. Получите результат двумя разными методами.

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
//  let k =[]
//  vegetables.forEach(el =>{
//     k.push(el)
//  })
//  console.log(k);



//3. Двоеточие между нечётными числами
//Пользователь вводит многозначное число через promt. 
//Напишите функцию colonOdd(num), которая принимает
// число num в качестве аргумента и вставляет двоеточие (:) 
//между двумя нечетными числами. Например, если вводится число 55639217,
// то на выход должно быть 5:563:921:7

// cost num = prompt('Введите число', 55);
// let k = 55
// function colonOdd (num) {
//     for (let i = 0; i < num.length; i++){
//         if( i % 2 != 0){
//             i += i +":"
//             console.log(i);
//         }
//     }
// console.log(k);
// }
// colonOdd (k)
// alert(colonOdd (num));



// const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

// const [dfgh,fghj,sdfg]= profile;
// console.log(fghj);


// const person = {
//     name: "Alice",
//     age: 30,
//     city: "New York",
//   };

 
//     const {name,age}= person
//     console.log(name,age);

//////////Деструктуризция//////////////////

// const student = {
//     name: "Bob",
//     university: "Harvard",
//     grades: [95, 89, 92, 88],
//   };


//   const {grades: study}= student
//   console.log(study);

//   const [bal]=study
//   console.log(bal);


//   const colors = ["red", "green", "blue"];
//   const [fdsd, , sdfg]= colors
//   console.log(fdsd, sdfg);


//   const numbers = [1, 2, 3, 4, 5];
//   let [ ,dfg, , ,dfghj]= numbers
//   console.log(dfg,dfghj);
//У вас есть объект user с данными о пользователе,
// включая вложенный объект address:
//Попробуйте извлечь имя пользователя, код города и почтовый индекс с помощью деструктуризации.


// const user = { 
//     name: "John",
//     age: 28,
//     address: {
//       city: "New York",
//       zipCode: "10001",
//     },
//   };
//   let {name,address}=user
//   let {city,zipCode}=address
//   console.log(name,city,zipCode);

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, , 5]; // Создание нового массива с элементами из arr1 и дополнительными элементами
// console.log(arr2); // Выведет: [1, 2, 3, 4, 5]


// let k = { data: [[{id:1}]]}
// let { data: [[{id: akk}]]}= k
// console.log(akk);

// let k = "1234"
// k.pa
  
// let k = "1234";
// function top(){
//   let k = 0
//   for( let i = 1; i<= k.length; i++){
//   const digits = k.split("").map(Number);
//   const maxDigit = Math.max(...digits);
//     const maxDigitIndex = digits.indexOf(maxDigit);
//   digits[maxDigitIndex] = maxDigit;
//   const newK = digits.join("");

//   return newK;
//   }
// }
// top() 

 


// let k = "f3h4j21";
// function tot(){
  
// }
//  tot()




// let inputString = "j21k3"; 

// function repeatCharacters(input) {
//   let resultString = "";
//   for (let i = 0; i < input.length; i++) {
//     const char = input[i];
//     if (isNaN(char)) {
//       resultString += char;
//     } else {
//       const repeatCount = parseInt(char); 
//       resultString += resultString.slice(-1).repeat(repeatCount - 1);
//     }
//   }
//   return resultString; // Возвращаем результат
// }

// inputString = repeatCharacters(inputString); // Присваиваем результат переменной inputString
// console.log(inputString);


// let   = "j21k3"; 

// function repeatCharacters(input) {
//   let resultString = "";
//   let repeatCount = ""; 
//   for (let i = 0; i < input.length; i++) {
//     const char = input[i];
//     if (!isNaN(char)) {
//      repeatCount += char;
//     } else {
//       if (repeatCount !== "") {
//         const count = parseInt(repeatCount); 
//         resultString += resultString.slice(-1).repeat(count - 1);
//         repeatCount = "";
//       }
//       resultString += char;
//     }
//   }
//   if (repeatCount !== "") {
//     const count = parseInt(repeatCount);
//     resultString += resultString.slice(-1).repeat(count - 1);
//   }
//   return resultString;
// }
// inputString = repeatCharacters(inputString);
// console.log(inputString);


    



// let obj = [ 
//   { 
//     id: 1, 
//     name: "Usuf", 
//     salary: "1000r", 
//   }, 
//   { 
//     id: 2, 
//     name: "Sabur", 
//     salary: "200$", 
//   }, 
//   { 
//     id: 3, 
//     name: "Malik", 
//     salary: "10$", 
//   }, 
//   { 
//     id: 4, 
//     name: "Sarvinbek", 
//     salary: "1000som", 
//   }, 
//   { 
//     id: 5, 
//     name: "Mashabek", 
//     salary: "300$", 
//   }, 
//   { 
//     id: 5, 
//     name: "Gulpiaz", 
//     salary: "300e", 
//   }, 
// ];


// function camelize(str){
//   let k = str.split()
//   if (k !="-"){
//     let k1 = k1.join(k)
//   }
// }
// camelize("background-color")
// amelize("background-color") == 'backgroundColor'


// let arr1 = [5, 3, 8, 1]
// function filterRange(arr, a, b){
// const k  = arr.filter((elem) =>elem >= a && elem <= b)
//   return k
// }
// let p = filterRange([5, 3, 8, 1], 1, 4) 
// console.log(p);



// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//   let val = arr[i];
//   if (val < a || val > b) {
//   arr.splice(i, 1);
//   i--;
//   }
//   }
//   }
//   filterRangeInPlace([5, 3, 8, 1,2,3,1], 2, 4); 
//   console.log(arr); 


// let arr = [2,3,6,7,8,0,14,22,-1] 
 
//   arr.sort((b,a)=>{ 
//     if(a>b){ 
//       return 0
//     }else if(a<b){ 
//       return -1
//     } 
    
//   }) 
//   console.log(arr);





  // let arr = [5, 2, 1, -10, 8]
  // arr.sort((a,b) => b-a) 
  //   console.log(arr);
  


  let calc = new Calculator;
 console.log(calc.calculate("3 + 7"));
 