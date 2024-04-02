//  11 Напишите функцию JavaScript, которая определяет, идеально ли число.

// Согласно Википедии: в теории чисел идеальное число - это положительное целое число, 
// которое равно сумме своих положительных делителей, то есть сумме его положительных делителей, 
// исключая само число (также известное как его аликвота). сумма). Точно так же совершенное число - это число, 
// равное половине суммы всех его положительных делителей (включая само себя). Пример : первое совершенное число - 6,
//  потому что 1, 2 и 3 являются его собственными положительными делителями, а 1 + 2 + 3 = 6. 
//  Эквивалентно число 6 равно половине суммы всех его положительных делителей: (1 + 2 + 3 + 6) / 2 = 6.
//   Следующее совершенное число - 28 = 1 + 2 + 4 + 7 + 14. За ним следуют совершенные числа 496 и 8128.

// function is_perfect(number) {
//     var numberSum=0
//     for(let i=0;i<number;i++){
//         if (number%i==0){
//             numberSum+=i  
//         } 
//     }
//     if(numberSum==number){
//         return "Это идеальное число"
//     }
//     else{
//         return "Это не идеальное число" 
//     }
// };

// is_perfect(6);
// console.log(is_perfect(6));




//////////////////////////////////////////////////////////////////////////////////////

// 12. Найти множители положительного целого числа.
// Напишите функцию JavaScript для вычисления множителей положительного целого числа.

// function factors(num) {
//     var numbers=[]
//     for(let i=0; i<=num;i++ ){
//         if(num%i==0){
//             numbers.push(i)
//         }
//     }
//     return numbers
// }
// factors(18)
// console.log(factors(18));  // [1,2,3,6,9,18] 



//////////////////////////////////////////////////////////////////////////////////

// 13. Преобразование суммы в монеты.
// Напишите функцию JavaScript для преобразования суммы в монеты.

// Пример функции : amount_coins(96, [25, 10, 5, 2,1])

// Здесь 96 - сумма, а 25, 10, 5, 2, 1 - монеты.

// Вывод : 25,25,25,10,10,



// let func=function(){
//     alert("privet")
// }
// let func1=function(){
//     alert("poka")
// }
// let a1=function(a,b){
//     let q=confirm("vam ect 18?")
//     if(q){
//     a()
//     }else{
//         b()
//     }
// }
// a1(func,func1)

/////////////////////////////////////////////////////////////////////////////////

// 14. Вычислить значение b n, где n - показатель степени, а b - основание.
// Напишите функцию JavaScript для вычисления значения b n, где n - показатель степени, а b - основание.

// function stepen(b,n){
//     var k=1
//     for (var i = 1; i <=n; i++){
//         k+=b*k
//     }
//     return k
// }   
// console.log(stepen(3, 4));


// 16. Поиск в массивах JavaScript с помощью двоичного поиска
// Напишите функцию для поиска позиции числа в массиве с помощью двоичного поиска.
// Примечание. При двоичном поиске выполняется поиск, разбивая массив на все меньшие и меньшие части, пока не будет найдено искомое значение.

// function binarySearch(value, list) {
//     var k=0
//    k+= list.findIndex(value)
    
//   }
  
//    var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
//    console.log(binarySearch(6, myArray)); // 4

// function BiggerElements(val)  {
//     var k=[]
//     for (let i  = 0; i <= val; i++){
        
//     }
//  }
// var result = [14, 45, 4, 31, 64, 10]. filter(BiggerElements(18));
// console.log(result); // 45,31,64



// let tovar1="netbook"
// let tovar2="keyboard"
// let cost1=12000
// let cost2=800
// let money=15000
// let bill=0
// let card=""


// let func1=function(){
//     alert(`Вы купили ${tovar1} \n ваш счет ${cost1}сом \n у вас осталось ${money-cost1} сом`)
// }
// let func2=function(){
//     alert(`Вы купили ${tovar2} \n ваш счет ${cost2}сом \n у вас осталось ${money-cost2} сом`)
// }
// let func3=function(){
// alert("Выберирте то что есть ")
// }

// let buy=function(a,b,k){
//     let noutkey=+prompt(`1.${tovar1} \n 2 ${tovar2}`)
//     if (noutkey==1){
//         a()
//     }
//     else if(noutkey==2){
//         b()
//     }
//     else{
//         k()
//     }
// }
// buy(func1,func2,func3)




let tovar1="netbook"
let tovar2="keyboard"
let tovar3="earlis"
let tovar4="mouse"
let cost1=12000
let cost2=800
let cost3=1200
let cost4=900
let money=35000
let bill=0
let card=""





function func2(){
    alert (`Вы купили ${card}`)
    checkBuy(func1,func2,func3,func4)
}
function func3 (){
    alert(`Вы потратили на Магазин электроники ${bill} сомов \n У  вас осталось  ${money-bill} сомов`)
    checkBuy(func1,func2,func3,func4)
}
function func4(){
    card=" "
    bill=0
    checkBuy(func1,func2,func3,func4) 
}

function func1(){ 
    for(let i = 0 ; i < 4; i++){
        let Magel=+prompt(`1.${tovar1} \n 2.${tovar2} \n 3.${tovar3} \n 4.${tovar2}`)
        if( Magel==1){
            bill+=cost1
            card+=tovar1 + ","
            
        }
        else if( Magel==2){
            bill+=cost2
            card+=tovar2 + ","
        }
        else if( Magel==3){
            bill+=cost3
            card+=tovar3 + ","
        }
        else if( Magel==4 ){
            bill+=cost4
            card+=tovar4 + ","
        }
    }
    if (money>=bill){
        let chack1=confirm(`Вы купили ${card} \n Ваш счет ${bill} \n Покупаете? `)
        if(chack1){
            alert("Джем вас еще ")
            checkBuy(func1,func2,func3,func4)
        }
    }
    else{
        alert("У вас не достаточно денег")
        card=""
        bill=0
        checkBuy(func1,func2,func3,func4) 
    }
   
}
function checkBuy(a,b,c,d){
    let noutkey=+prompt(`1.Магазин электроники \n 2 Корзина \n 3.Счет \n 4 Выход`)
    if (noutkey==1){ 
        a()
    }
    else if(noutkey==2){
        b()
    }
    else if(noutkey==3){
        c()
    }
    else{
        d()
    }
}
checkBuy(func1,func2,func3,func4)