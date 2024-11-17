
// function sum(number1,number2,callbackFunction,callbackFunction2){
//     let total = number1+number2
//     let mines = number2- number1
//     callbackFunction(total)
//     callbackFunction2(mines)
// }

// function callbackFunction(total) {
//     console.log(" Sum:",total)
// }


// function callbackFunction2(mines){
//     console.log("Mines:",mines)
// }

// sum(5,20,callbackFunction,callbackFunction2)




// function sum(number1,number2,callbackFunction){
//     let total = number1+number2
//     callbackFunction(total)
// }

// function callbackFunction(total) {
//     console.log(" Sum:",total)
// }


// sum(5,20,callbackFunction)










// function make_burger(burger){
//     console.log("Making burger ")
//     burger()
// }

// function burger(){
//     console.log('burger is ready ')
// }
// make_burger(4,5,burger)





// function toy(callback){
//     console.log("I wanna buy toy....")
//     callback()
// }


// function callback(){
//     console.log("I have now money!!!")
// }

// toy(callback)










// function make_burger(burger) {
//     console.log(" making a burger... ")
//     burger()
// }

// function burger() {
//     console.log(" burger is ready!!!")
// }

// make_burger(burger)  




// let k1 = (value,callback) => {
//     console.log(value)
//     callback()
// }

// function callback() {
//     console.log("Argen")
// }
// k1("Akmaanai",callback)




// function checkup(num1,num2,sum,mines){
//     let total = num1+num2
//     let min = num1 -num2
//     sum(total)
//     mines(min)
// }

// function sum(total){
//     console.log(`Sum: ${total}`);
// }

// function mines(min){
//     console.log(`Mines: ${min}`);
// }
// checkup(20,15,sum,mines)




///Arrow function => стрелочная функция 
  
    let hello = (value,items) =>{
        console.log(`hello ${value} \n Age ${items}`);
    }
    hello('Aranai',20)

