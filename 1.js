
// function removeDigit(number, digitToRemove) {
//     let numberStr = number.toString();
    
//     let digitStr = digitToRemove.toString();
    
//     let newNumberStr = numberStr.replace(new RegExp(digitStr, 'g'), '');
//         if (newNumberStr === '') {
//         return -1;
//     }

//     let newNumber = parseInt(newNumberStr);
    
//     return newNumber;
// }

// var originalNumber = parseInt(prompt("Введите натуральное число:"));

// var  digitToRemove = parseInt(prompt("Введите цифру, которую нужно удалить:"));

// let newNumber = removeDigit(originalNumber, digitToRemove);
// alert(newNumber);



let k = prompt("")

function Delete(number, removenumber) {
    let numberStr = number.toString();
    let k = removenumber.toString();
    let newNumberStr = numberStr.replace(new RegExp(k, 'g'), '');
    
    if (newNumberStr === '') {
        return -1;
    }
    
    let newNumber = parseInt(newNumberStr);
    
    return newNumber;
}

let number1 = 12345671111;
let removenumber = 1;

let newNumber = Delete(number1, removenumber);
console.log(newNumber); 




function sumNumber(number) {
    let sum = 0;
    while (number > 0) {
      sum += number % 10; 
      number = Math.floor(number / 10);
    }
    return sum;
  }
  
  var number = 12345;
  var sum = sumNumber(number);
  console.log(`The sum of the digits of ${number} is ${sum}`);


