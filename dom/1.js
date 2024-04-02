// let td = document.querySelectorAll('td')
// let check = true
// let fix = 8
// let num = 0
// console.log(td.length);
// for (let i = 0; i < td.length; i++) {
//     if (num == fix) {
//         check = !check
//         num = 0
//     }
//     if (check) {
//         td[i].classList.add('black')
//     }
//     check = !check
//     num++
// }

// var i = 0,
//   j = 0;
// var max = 15;
// var space = "",
//   star = "";

// while (i < max) {
//   space = "";
//   star = "";
//   for (j = 0; j < max - i; j++) space += " ";
//   for (j = 0; j < 2 * i + 1; j++) star += "*";
//   console.log(space + star);
//   i++;

// }


let td = document.querySelectorAll('tr')
console.log(td.length);
var k = 0 
var i = 0
while(k< tr.length){
    for (i = 0; i < tr.length-k; i++){
        td[i].classList.add('white');
    }  
    for(i = 0; i < 2 * k + 1; i++) {
        td[i].classList.add('black');
    } 
    k++
}







    
   
