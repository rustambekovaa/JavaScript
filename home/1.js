// for (let i = 0; i < 10; i++) { //! Эту строку можно изменить
//     for (let j = 0; j < 10; j++) {
//       if (i === 5 && j === 5) {
//         break
//         console.log(i, j);
//         //! Эту строку можно изменить
//       }
   
//       console.log(i, j);   
//     }
//    }
// let lines = "";
// let str = "";
// let star = "*";
// for (let i = 0; i < 5; i++) {
//     for (let e=0; e<5; e++){
//         str += "*"
//     }
//     str+"\n"
//     lines= lines.push(str)
// }
// alert(lines);
   

// let h=5;
// let s="";
// for (let i = 0; i<5; i++){
//     for (let e = 0; e<=i; e++){
//         s+="*"
//     }12
//     s+="\n" 
// }
// alert(s);



// let a=""
// for (let i=0; i<5;i++){
//     for (let k=0; k<5; k++){
//         if (i==k){
//             a+="0"
//         }
//         else{
//             a+="*"
//         }
        
//     }
//     a+="\n"
    
// }
// alert(a)



// let a=""
// for (let i=0; i<5;i++){
//     for (let k=0; k<5-i; k++){
//         a+="    *"
        
//     }
//     a+="\n" 
    
// }
// alert(a)


// var rows = 15; 
 
// for (var i = 1; i <= rows; i++) { 
//     var output = ""; 
//     for (var j = 1; j <= rows - i; j++) { 
//         output += " "; 
//     } 
//     for (var k = 1; k <= 2 * i -1; k++) { 
//         output += "*"; 
//     } 
//     console.log(output)
// } 





// let height = 10
// let a=""
// for (let i=0; i<height ;i++){
//     let b=""
//     for (let k=0; k<height; k++){
//         if(k<=height-i-1){
//             b+=" "
//         }
//         else{
//             b+=" *"
//         }  
//     }
//     a+=b+"\n" 
    
// }
// alert(a)


// let a="" 



// let w=8;
// let h=5;
// let a=""

// for (let i=1;i<=5;i++){
//     for(let k=1;k<=8;k++){
//         if (i==1 || i==5 || k==1 ||k==8){
//             a+="*"
//         }
//         else{
//             a+="  n "
//         }
        
//     }
//     a+='\n'
    
// }
// console.log(a)

let login, 
  loginPass, 
  registerEmail, 
  registerPPass, 
  registerName, 
  registerPass, 
  registerSurname, 
  age; 
while (true) { 
  let register = +prompt("1) Войти\n2) Регистрация"); 
 
  while (register !== 1 && register !== 2) { 
    register = +prompt("1) Войти\n2) Регистрация"); 
  } 
 
  if (register === 1) { 
    login = prompt("Введите email"); 
 
    while (login !== registerEmail) { 
      login = prompt( 
        "Такой пользователь не зарегистрирован. Введите email снова" 
      ); 
    } 
 
    loginPass = prompt("Введите пароль"); 
 
    while (loginPass !== registerPass) { 
      loginPass = prompt("Неправильный пароль. Введите пароль снова"); 
    } 
    let count = 0; 
    let ball = 0; 
    let question1 = prompt("Где вы обучаетесь?"); 
    for (let i = 1; i < 3; i++) { 
      if (question1 !== "Prolab") { 
        count++; 
        question1 = prompt("Где вы обучаетесь?"); 
        if (question1 === "Prolab") { 
          alert("верно"); 
          count = 0; 
          ball += 5; 
          break; 
        } 
      } else if (question1 === "Prolab") { 
        alert("верно"); 
        count = 0; 
        ball += 5; 
        break; 
      } 
    } 
    let question2 = prompt("На кого обучаетесь?"); 
    for (let i = 1; i < 3; i++) { 
      if (question2 !== "IT") { 
        count++; 
        question2 = prompt("На кого обучаетесь?"); 
        if (question2 === "IT") { 
          alert("верно"); 
          count = 0; 
          ball += 5; 
          break; 
        } 
      } else if (question2 === "IT") { 
        alert("верно"); 
        count = 0; 
        ball += 5; 
        break; 
      } 
    } 
 
    let question3 = prompt("Направление?"); 
    for (let i = 1; i < 3; i++) { 
      if (question3 !== "Back-End") { 
        count++; 
        question3 = prompt("Направление?"); 
        if (question3 === "Back-End") { 
          alert("верно"); 
          count = 0; 
          ball += 5; 
          break; 
        } 
      } else if (question3 === "Back-End") { 
        alert("верно"); 
        count = 0; 
        ball += 5; 
        break; 
      } 
    } 
 
    let question4 = prompt("Вам нравится?"); 
    for (let i = 1; i < 3; i++) { 
      if (question4 !== "Da") { 
        count++; 
        question4 = prompt("Вам нравится?"); 
        if (question4 === "Da") { 
          alert("верно"); 
          count = 0; 
          ball += 5; 
          break; 
        } 
      } else if (question4 === "Da") { 
        alert("верно"); 
        count = 0; 
        ball += 5; 
        break; 
      } 
    } 
 
    let question5 = prompt("Что планируете?"); 
    for (let i = 1; i < 3; i++) { 
      if (question5 !== "66`") { 
        count++; 
        question5 = prompt("Что планируете?"); 
        if (question5 === "Rabotat") { 
          alert("верно"); 
          count = 0; 
          ball += 5; 
          break; 
        } 
      } else if (question5 === "Rabotat") { 
        alert("верно"); 
        count = 0; 
        ball += 5; 
        break; 
      } 
    } 
    alert(`Вы ${registerName} ${registerSurname} \nВаш балл ${ball}`); 
  } else if (register === 2) { 
    registerEmail = prompt("Введите email"); 
 
    while (registerEmail === "") { 
      registerEmail = prompt("Введите email снова"); 
    } 
 
    registerPass = prompt("Введите пароль"); 
 
    while (registerPass.length < 4) { 
      registerPass = prompt( 
        "Пароль должен содержать не менее 4 символов. Введите пароль снова" 
      ); 
    } 
 
    registerPPass = prompt("Введите пароль еще раз"); 
 
    while (registerPass !== registerPPass) { 
      registerPPass = prompt("Пароли не совпадают. Введите пароль еще раз"); 

} 
 
    registerName = prompt("Введите имя"); 
 
    while (registerName === "") { 
      registerName = prompt("Имя не должно быть пустым. Введите имя снова"); 
    } 
 
    registerSurname = prompt("Введите фамилию"); 
 
    while (registerSurname === "") { 
      registerSurname = prompt( 
        "Фамилия не должна быть пустой. Введите фамилию снова" 
      ); 
    } 
 
    age = +prompt("Введите возраст"); 
 
    while (isNaN(age)) { 
      age = +prompt("Введите возраст числом"); 
    } 
  } 
}