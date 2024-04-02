const myArray = [1,2,3]
let k1 = 0 
myArray.forEach(el =>  {if (el == 2){
    k1 = el * 10
    console.log(k1);
}})


// // const myArray = [1, 2, 3, 4, 5];

// // myArray.forEach(function(element) {
// //     console.log(element * 2); // Умножаем каждый элемент на 2 и выводим в консоль
// // });


// const myObject = {
//     key1: "value1",
//     key2: "value2"
// };

// const keyToUpdate = "key1";
// const newWord = "new";

// if (myObject.hasOwnProperty(keyToUpdate)) {
//     // Создаем новый ключ, комбинируя старое значение и новое слово
//     myObject[`${keyToUpdate}_${newWord}`] = myObject[keyToUpdate];
    
//     // Удаляем старый ключ, если нужно
//     delete myObject[keyToUpdate];
// }

// console.log(myObject);
