// var cat1="Fastfood"
// var food1="burger"
// var food2="pizza"
// var cat2="drinks"
// var rink1="cola"
// var drink2="fanta"


// function get(id){
// if (id==1){
// return ` Вы выьрали ${cat1} \n ${food1} ,${food2}`;
// }
// else if (id==2){
//     return` Вы выьрали ${cat2} \n ${rink1} ,${drink2}`;
//     }
// else{
//     return"Ошибка";
// }
// } 
// console.log(get(2))




// var a=prompt("Введите имя")
// var b=prompt("Введите Фио")
// function k(n,s){
// return `${n} ${s}`

// }
// console.log(k(a,b));


function getSquare(width, height) {
    let result = ""
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            if (i === j) {
                result += "x"
            }else if (i + j === width - 1 ){
                result += "y"
            }else if ( i > j && i + j > width - 1 ) {
                result += "4"
            }else if ( i > j && i + j < width - 1 ) {
                result += "3"
            }else if ( i < j && i + j > width - 1 ) {
                result += "2"
            }else if ( i < j && i + j < width - 1 ) {
                result += "1"
            }
             else {
                result += '*'
            }
        } 
        result += "\n"
    }
    console.log(result);
}
getSquare(10, 10)