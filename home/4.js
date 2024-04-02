// let name1=""
// let count=0
// while(true){
//     let a =+prompt("1.Кто \n 2.История \n 3.Выход")
//     if (a==1){
//         for (let i = 0; i < 5; i++){
//             let name2=prompt("Имя")
//             count++
//             name1+=count+ ") "+name2 +"\n"
//         }
        
//     }
//     else if (a==2){
//         alert(name1)    
//     }
//     else if (a == 3){
//         name1=""

//     } 
// }

// b=0
// let bread="bread"
// let cola= "cola"
// let colbasa="colbasa"
// let cmetana="cmetana"
// let card=""
// let count=0
// let money=500
// while(true){
//     let a=+prompt("1.Пакупка \n 2.Счет \n 3.Мои деньги \n 4.Выход")
//     if (a==1){
//         for (let i=0; i < 7; i ++){
//             let buy=+prompt(`1.${bread} \n 2.${cola} \n 3.${colbasa} \n 4.${cmetana} \n 5.Выход`)
//             if (buy==1){
//                 b+=30
//                 count++
//                 card+=count +")" +bread +","
//             }
//             else if (buy==2){
//                 b+=70
//                 count++
//                 card+=count+")"+cola +","  
//             }
//             else if (buy==3){
//                 b += 100
//                 count++
//                 card+=count+")"+colbasa +","
//             }
//             else if (buy==4){
//                 b+=120
//                 count++
//                 card+=count+")"+cmetana +","  
//             } 
//             else if (buy==5){
//                 break
//             }
//             else if (buy=""){
//                 break
//             }
//         } 
//     let  k=confirm(`Вы купили ${card} \n Счет ${b}сом \n будете брать?` )
//     if (k) {
//         if (b<money){

//         }
//         else if (b>money){
//             alert("У вас не достаточно денег")
            
//         } 
//     }      
//     } 
//     else if (a==2){
//         if(b<=money){
//             alert (`Вы купили ${card} \n Счет ${b}сом`)
//         }else{
//             alert(`Вы ничего не купили`)
//         }
//     }
//     else if(a==3){
//         if (b<=money){
//             alert(`${money-b}сом`)
//         }
//         else{
//             alert(`Вы ничего не купили \n Ваш счет ${money} сом`)
//         }
//     }
//     else if (a==4){
//         b=0
//         card=""
        
//     }
//}


let username1="Akmaanai"
let userpassword1="1234"
let username2=""
let userpassword2=""


function login() {
    let k=prompt("Name")
    let p=prompt("password")
    if(k==username1 && p==userpassword1){
        m()
    } 
    else{
        alert("Не правильный пароль или логин")
        login()
    }
}
function sigin(){
    let user2=prompt("login")
    username2=user2
    let password2=prompt("Password")
    userpassword2=password2
    let password3=prompt("Password")
    if (password3==userpassword2){
        m()
    }
    else{
        alert("Не правильный пароль!!")
        sigin()
    }
}

function m(){
    let m1 = prompt("1.Кафе \n 2.Ресторан")
    if (m1==1){
         
    }
}


function panel(number) {
    
    let a = prompt("1.Войти \n 2.Регистрация")
    if(1== a){
        login()
    }
    else if (a==2){
    sigin()
    }
}

panel(123456)

