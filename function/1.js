//Напишите функцию getSum, которая принимает два аргумента - числа a и b, и возвращает их сумму. 
// let a=7
// let b=5
// function sum(x,y){
//     return x+y;
// }
// console.log(sum(a,b))



// let p=function(name){
// console.log("hello,"+name);
// };
// p("Akmaanai")
// p("Aidana")

// function chineseZodiac(year) {
//     const zodiacAnimals = [
//       "Крыса", "Бык", "Тигр", "Кролик", "Дракон", "Змея", "Лошадь", "Овца", "Обезьяна", "Петух", "Собака", "Свинья"
//     ];
    
//     return zodiacAnimals[(year - 4) % 12];
//   }
  
//   const year = 2020 ;
//   const zodiacAnimal = chineseZodiac(year);
//   console.log(`Год ${year} по восточному календарю соответствует животному: ${zodiacAnimal}`);
// function chineseZodiac(year) {
//     const zodiacAnimal = year % 12;
//     switch (zodiacAnimal) {
//       case 0:
//         return "Обезьяна";
//       case 1:
//         return "Петух";
//       case 2:
//         return "Собака";
//       case 3:
//         return "Свинья";
//       case 4:
//         return "Крыса";
//       case 5:
//         return "Бык";
//       case 6:
//         return "Тигр";
//       case 7:
//         return "Кролик";
//       case 8:
//         return "Дракон";
//       case 9:
//         return "Змея";
//       case 10:
//         return "Лошадь";
//       case 11:
//         return "Овца";
//       default:
//         return "Неверный год";
//     }
//   }
  
//   const year = 2023;
//   const zodiacAnimal = chineseZodiac(year);
//   console.log(`Год ${year} по восточному календарю соответствует животному: ${zodiacAnimal}`);





// let p;
// let k=+prompt("Введите год")
//     // const zodiacAnimal = year % 12;
//     switch (k) {
//       case k%12==0:
//        p="Обезьяна";
//        break
//       case k%12==1:
//       p="Петух";
//       break
//       case k%12==2:
//       p="Собака";
//       break
//       case k%12==3:
//       p="Свинья";
//       break
//       case k%12==4:
//       p="Крыса";
//       break
//       case k%12==5:
//       p="Бык";
//       break
//       case k%12==6:
//       p="Тигр";
//       break
//       case k%12==7:
//       p="Кролик";
//       break
//       case k%12==8:
//       p="Дракон";
//       break
//       case k%12==9:
//       p="Змея";
//       break
//       case k%12==10:
//         "Лошадь";
//         break
//       case k%12==11:
//       p="Овца";
//       break
//       default:
//       p="Неверный год";
//     }
//   alert(`Год ${k} по восточному календарю соответствует животному: ${p}`);




// let count=""
// let b=prompt("Напишите  слово")
// for (let i=b.length-1;i>=0;i--){
// count+=i
// alert(count)
// }


// for(let i=0;i>100;i++){ 
//     k()

// }
// function k(){
//     alert("Привет всем")
// }


// function k(name,age){
//     alert(name+" 0 "+age)
// }k("Акмаанай","Рустамбекова")

// let name ="Majid"
// function getName(){
//     let surname="Bekov"
//     alert(name+" " + surname)
// }
// getName()  
// alert(name)



// let name="maanai"
// function k(){
//     return name
// }
// console.log(k())


// let state= prompt("Столица Кр.")
// function k(name){
//     for(let i=0;i<4;i++){
//         if (name=="Бишкек"){
//             alert(" молодец")
//             break
//         }
//         else  if(name!="Бишкек"){
//             alert(" повторите еще")
//         }
//     }
// }
// k(state)



// function square(width, height){ 
//     let result = "" 
//     for(let i = 0; i < width; i++){ 
//         for(let j = 0; j< height; j++){ 
//             if(i === j){ 
//                 result+= "0" 
//             } 
//             else if (i>j){
//                 result+= "2" 
//             }
            
//             else{ 
//                 result+="1" 
//             } 
//         } 
//         result+= "\n" 
//     } 
//     console.log(result); 
//     } 
//     square(4,4)



function square(width, height){ 
    let result = "" 
    for(let i = 0; i < width; i++){ 
        for(let j = 0; j< height; j++){ 
            if(i === j){ 
                result+= "1" 
            }  
            else if (i+j==width-1){
                result+= "2" 
            }
            else{ 
                result+="*" 
            } 
        } 
        result+= "\n" 
    } 
    console.log(result); 
    } 
    square(5,5)




// function square(width, height){ 
//     let result = "" 
//     for(let i = 0; i < width; i++){ 
//         for(let j = 0; j< height; j++){ 
//             if(i === j){ 
//                 result+= "0" 
//             } 
//             else if (i>j){
//                 result+= "2" 
//             }  
//             else{ 
//                 result+="1" 
//             } 
//         } 
//         result+= "\n" 
//     } 
//     console.log(result); 
//     } 
//     square(4,4)




