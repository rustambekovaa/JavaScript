// let a=prompt("number"   )
// if (a%2==0){
//     alert("четный")
// }
// else{
//     alert("не четный")
// }

//Проверка на четность: Напишите функцию, которая принимает целое число в качестве аргумента и возвращает true, если число четное, и false, если число нечетное.
// let a=prompt()
// for (a;a>0;){
//     if (a%2==0){
//         alert(true)
//     }
//     else{
//         alert(false)
//     }
// }


//Поиск наибольшего элемента: Напишите функцию, которая принимает массив чисел в качестве аргумента и возвращает наибольшее число из этого массива.


// let a=[1,2,43,122,3,4,5,44,66,7]
// let k=[]
// for (let i of a){
//     if (i%2==0){
//         k+=" "
//         alert(k)
//     }

// }

// function getS(x,y){
//     let z=(x**2+y**2)
//     console.log(Math.sqrt(z))
// }
// getS(8,6)


//Расчет площади прямоугольника:
//Напишите функцию calculateRectangleArea, которая принимает два параметра - длину и ширину прямоугольника, и возвращает его площадь.


// function S(x,y){
//     console.log(x*y)
// }
// S(7,8)

//Проверка на четность числа:

// function s(x){
//     if (x%2==0){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }
// s(49)

//7.5 Фирма осуществляет набор сотрудников. Условия приема требуют не менее 5 лет рабочего стажа
 //и возраст не более 40 лет. Напишите программу, проверяющую, подходит ли кандидат по этим
 //параметрам.

// let age=+prompt("Введите возраст сотрудника")
// let stage=+prompt("Введите стаж работы")
// let pol=prompt("1-woman \n 2-man")
// if ((20<=age)&&(age<=40)&&(stage>=5)&& (pol==1)){
//     alert("Принимаем \n Вы будете работать президентом страны!!!")
// }
// else if ((20<=age)&&(age<=40)&&(stage>=5) && (pol==2)){
//     alert("Принимаем \n Вы будете работать министером страны!!!")
// }
// else{
//     alert("Не принимаем")
// }

// 7.6) Напишите программу, которая вычисляет оптимальный вес пользователя, сравнивает его
//  с реальным и выдает рекомендацию о необходимости поправиться или похудеть на нужное
//  количество килограмм.
//  Для простоты оптимальный вес вычисляйте по формуле: Рост (в сантиметрах) – 100.

    // let tall=+prompt("Введите рост в см")
    // let weight=+prompt("Введите вес в кг")
    // if (tall-100<weight){
    //     alert(`Вам надо похудеть на ${tall-100-weight} кг`)
    // }
    // else if (tall-100>weight){
    //         alert(`Вам надо поправиться на ${tall-100-weight } кг`)
    // }
    // else{
    //     alert("Ваш вес оптимален")
    // }


//7.7 ) Развивая предельно возможную скорость движения, жираф пробегает S1 метров за t1 секунд.
 //Заяц пробегает S2 метров за t2 секунд. Напишите программу, чтобы определить, кто бегает быстрее?

// let j=confirm("Показатели жирафа")
let s1=+prompt("Сколько метров")
let t1=+prompt("Сколько секунд")

// let z=confirm("Показатели зайца")
let s2=+prompt("Сколько метров")
let t2=+prompt("Сколько секунд")

let v1=s1/t1
let v2=s2/t2

// switch(true){
//     case v1>v2:
//         alert("Жираф чемпион")
//         break;
//     case v2>v1:
//         alert("Заец чемпион")
//         break;  
//     default:
//         alert( "Победила дружба" ); 
// }


s1=s2/2
t1=t2/2
if((s1)>(s2)&&(t1==t2/2>t2)){
    alert("Жираф чемпион")
}
else if ((s1<s2)&&(t1<t2)){
    alert("Заец чемпион")``
}
else if ((s1==s2/2==s2)&&(t1==t2/2==t2)){ 
    alert("Победила дружба")
}


//8.1) Напишите программу, вычисляющую стоимость междугороднего телефонного разговора.
//  Пользователь вводит код города и продолжительность разговора (название соответствующего
//     города и стоимость минуты должны выводиться в программе по коду):
// let M="Москва"
// let V="Владивосток "
// let MU="Мурманск"
// let C="Самара"
// let Mcom=3.15
// let Vcom=1.2
// let MUcom=1.8
// let Ccom=2.4

// let L=prompt("Введите код города");
// let S=prompt("Введите длительность разгавора")
// if (L==423){
//     alert(`Город ${M} \n Стоимость минуту ${Mcom} \n Стоимость разгавора ${S*Mcom}`)
// }
// else if (L==495){
//     alert(`Город ${V} \n Стоимость минуту ${Vcom} \n Стоимость разгавора ${S*Vcom}`)
// }
// else if (L==815){
//     alert(`Город ${MU} \n Стоимость минуту ${Vcom} \n Стоимость разгавора ${S*Vcom}`)
// }
// else if (L==846 ){
//     alert(`Город ${C} \n Стоимость минуту ${Ccom} \n Стоимость разгавора ${S*Ccom}`)
// }
// else{
//     alert("Не правильно ввели код ")
// }
// let M="Москва"
// let V="Владивосток "
// let MU="Мурманск"
// let C="Самара"
// let Mcom=3.15
// let Vcom=1.2
// let MUcom=1.8
// let Ccom=2.4

// let L=prompt("Введите код города");
// let S=prompt("Введите длительность разгавора")
// switch(true){
//     case L==423:
//         alert(`Город ${M} \n Стоимость минуту ${Mcom} \n Стоимость разгавора ${S*Mcom}`)
    
//     case L==495:
//         alert(`Город ${V} \n Стоимость минуту ${Vcom} \n Стоимость разгавора ${S*Vcom}`)
    
//     case L==815:
//         alert(`Город ${MU} \n Стоимость минуту ${Vcom} \n Стоимость разгавора ${S*Vcom}`)
    
//     case L==846:
//         alert(`Город ${C} \n Стоимость минуту ${Ccom} \n Стоимость разгавора ${S*Ccom}`)
    
//     default: 
//         alert("Не правильно ввели код ")
    
// }




// На станции автозаправки есть топливо пяти марок по разной цене. Клиент выбирает марку бензина
// и указывает количество литров. Напишите программу для расчета суммы, которую нужно заплатить.
 
// let M =+prompt("Выбериье марку бензина \n 1--A80 \n 2--A92 \n 3--A95 \n 4--A98 \n 5--ДТ")
// let L =+prompt("Укажите количество литров")
// if (M==1){
//     alert(`Заплатите в кассу ${18.50*L}c`)
// }
// else if (M==2){
//     alert(`Заплатите в кассу ${21.90*L}c`)
// }
// else if (M==3){
//     alert(`Заплатите в кассу ${23.20*L}c`)
// }
// else if (M==4){
//     alert(`Заплатите в кассу ${24.40*L}c`)
// }
// else if (M==5){
//     alert(`Заплатите в кассу ${15.80*L}`)
// }




// 8.3) Напишите программу, которая печатает «Доброе утро», «Добрый день», «Добрый вечер» или
//  «Спокойной ночи», в зависимости от времени суток, которое вводится с клавиатуры на запрос
//  программы. В случае ввода неверных чисел (больше 24 часов или больше 59 минут) выведите
//  сообщение об ошибке. При запуске проверьте все варианты.

// let t=+prompt("Введите час")
// let m=+prompt("Введите минута")
// if ((t=>1)&& (t<=5)&&(m>=1)&&(m<=60)){
//     alert("спокойгой ночи")
// }
// else if ((t=>6)&& (t<=10)&&(m>=1)&&(m<=60)){
//     alert("Доброе утро")
// }
// else if ((t=>11)&& (t<=14)&&(m>=1)&&(m<=60)){
//     alert("Добрый день")
// }
// else if ((t=>15)&& (t<=24)&&(m>=1)&&(m<=60)){
//     alert("Добрый вечер")
// }
// else{
//     alert("Ошибка")
// }

// let t=+prompt("Введите час")
// let m=+prompt("Введите минута")
// switch(true){
//     case((t=>1)&& (t<=5)&&(m>=1)&&(m<=60)):
//         alert("спокойгой ночи")
//         break;
    
//     case((t=>6)&& (t<=10)&&(m>=1)&&(m<=60)):
//         alert("Доброе утро")
//         break;
    
//     case((t=>11)&& (t<=14)&&(m>=1)&&(m<=60)):
//         alert("Добрый день")
//         break;
    
    
//     case ((t=>15)&& (t<=24)&&(m>=1)&&(m<=60)):
//         alert("Добрый вечер")
//         break;
    
//     default:
//         alert("Ошибка")
    
// }

// 8.5) Напишите программу, которая после введенного с клавиатуры числа (в диапазоне от 1 до 999),
//  дописывает слово «рубль» в правильной форме, например: 3 рубля, 45 рублей, 971 рубль и т.д.
//  Подумайте, от чего зависит форма слова «рубль», какие есть исключения, как можно это
//  математически реализовать?

// let n=+prompt("Ввeдити число от 1 до 999")
// let a;

// switch(n%10){
//     case 1:
//     alert(`${n} Рубль`)
//     break
//     case 2:
//     case 3:
//     case 4:
//         alert(`${n} Рубля`)
//         break; 
//     default:
//         alert(`${n} Рублей`)    
// }

// 8.7) Напишите программу, которая вычисляет дату следующего дня. Учтите количество дней в каждом
//  месяце, високосный год или нет. Особое внимание уделите последнему дню в каждом месяце
//  (установка 1 дня следующего месяца), последнему дню года (установка 1 дня 1 месяца следующего
//  года) и 28/29 февраля в високосном или невисокосном году.
//  Год является високосным:
// • если он кратен 4, и при этом не кратен 100;
// • или кратен 400.
//  Кратное число – целое число, делящееся на какое-либо число без остатка, т.е. остаток = 0
//  Сложное условие: ( (Y mod 4=0 ) and (Y mod 100<>0) ) or (Y mod 400=0 ) 
// if(d%10==1 && d%10==9 && d%10==8 ){
   
//     alert(`${d+1} ${m+1} ${y}`)

// }


// let d=+prompt("Введите день") 
// let m=+prompt("Введите месяц") 
// let y=+prompt("Введите год")
// let a=false
// if (y%4===0){
//     a=true
//         if(m==1 || m==3 ||m==5 ||  m==7|| m==8 || m==10 ){
//             if (d==31){
//              alert(`1 ${m+1} ${y}`)
//             }
//             else{
//              alert(`${d+1} ${m} ${y}`)
//             }
//          }
//          else if(m==4 || m==6 || m==9 ||  m==11){
//              if (d==30){
//               alert(`1 ${m+1} ${y}`)
//              }
//              else{
//               alert(`${d+1} ${m} ${y}`)
//              }
//          }
//          else if(m==12){
//              if (d==31){
//               alert(`1 1 ${y+1}`)
//              }
//              else{
//               alert(`${d+1} ${m} ${y}`)
//              }
//         }
//         else if (m===2){
//             if(a){
//                 d=29  
//                 alert(`1 ${m+1} ${y}`)
//             }else{
//                 d=28
//                 alert(`${d+1} ${m} ${y}`)
//             }
//         }
//         else{
//             alert(`ошибка`)
//         }
//     } 
// else if (y%4!==0){
//     a=true
//         if(m==1 || m==3 ||m==5 ||  m==7|| m==8 || m==10 ){
//             if (d==31){
//              alert(`1 ${m+1} ${y}`)
//             }
//             else{
//              alert(`${d+1} ${m} ${y}`)
//             }
//          }
//          else if(m==4 || m==6 || m==9 ||  m==11){
//              if (d==30){
//               alert(`1 ${m+1} ${y}`)
//              }
//              else{
//               alert(`${d+1} ${m} ${y}`)
//              }
//          }
//          else if(m==12){
//              if (d==31){
//               alert(`1 1 ${y+1}`)
//              }
//              else{
//               alert(`${d+1} ${m} ${y}`)
//              }
//         }
//         else if (m===2){
//             if(a){
//                 d=28
//                 alert(`${d+1} ${m} ${y}`)  
//             }
//             else{
//                 d=29  
//                 alert(`ошибка`)
//             }
//         }
//         else{
//             alert(`ошибка`)
//         }
//     } 
// else{
//         alert(`ошибка`)
//     }



// let day=+prompt("Введите день") 
// let month=+prompt("Введите месяц") 
// let year=+prompt("Введите год")



// let d=+prompt("Введите день") 
// let m=+prompt("Введите месяц") 
// let y=+prompt("Введите год")
//         if(m==1 || m==3 ||m==5 ||  m==7|| m==8 || m==10 ){
//             if (d<=31){
//                 if (d==31){
//                     alert(`1 ${m+1} ${y}`)
//                    }
//                    else{
//                     alert(`${d+1} ${m} ${y}`)
//                    }
//             }
//             else{
//                 alert(`ошибка`)
//             }
//         }
//         else if(m==4 || m==6 || m==9 ||  m==11){
//             if (d<=31){
//                 if (d==30){
//                     alert(`1 ${m+1} ${y}`)
//                 }
//                 else{
//                     alert(`${d+1} ${m} ${y}`)
//                 }
//             }
//             else{
//                 alert(`ошибка`)
//             } 
//          }
//         else if(m==12){
//             if (d<=31){
//                 if (d==31){
//                     alert(`1 1 ${y+1}`)
//                    }
//                    else{
//                     alert(`${d+1} ${m} ${y}`)
//                    }
//             }
//             else{
//                 alert(`ошибка`)
//             }  
//         }
//         else if ( y%4==0){
//             if(m===2){
//                 d=29  
//                 alert(`1 ${m+1} ${y}`)
//             }
//             else{
//                 alert(`ошибка`)
//             }
//         }
//         else if (y%4!==0){
//              if(m===2){
//                 d=28
//                  alert(`1 ${m+1} ${y}`) 
//                 }
//                 else{
//                     alert(`ошибка`)
//                 }
                
//             }
//         else{
//                 alert(`ошибка`)
//             }
       
 
// let d=+prompt("Введите день") 
// let m=+prompt("Введите месяц") 
// let y=+prompt("Введите год")
// let a=false;
//     if(m==1 || m==3 ||m==5 ||  m==7|| m==8 || m==10 ){
//             if (d==31){
//                 alert(`1 ${m+1} ${y}`)
//                }
//                else{
//                 alert(`${d+1} ${m} ${y}`)
//                }
//         }
//      else if(m==4 || m==6 || m==9 ||  m==11){
//             if (d==30){
//                 alert(`1 ${m+1} ${y}`)
//             }
//             else{
//                 alert(`${d+1} ${m} ${y}`)
//             }
//         }
//     else if(m==12){
//             if (d==31){
//                 alert(`1 1 ${y+1}`)
//                }
//                else{
//                 alert(`${d+1} ${m} ${y}`)
//                }
//         }
//     else if (m==2 && y%4==0){
//         if (d==29){ 
//             alert(`1 ${m+1} ${y}`)
//         }
//         else if (d>29){
//             alert(`${d+1} ${m} ${y}`)
//            }
//            else{
//             alert(`ошибка`)
//         }

//         }
        
//     else if (m==2){
//         d=29
//         if ( y%4!==0){ 
//             a=true
//             alert(`1 ${m+1} ${y}`)       
//         }
//         else{
//             alert(`${d+1} ${m} ${y}`)
//            }
        
        
             
//     }
//     else{
//         alert(`ошибка`)
//     }
         
    // else if (m==2){ 
    //      if( y%4!==0){
    //         d=28
    //          alert(`1 ${m+1} ${y}`) 
    //         }
    //         else{
    //             alert(`ошибка`)
    //         }
            
    //     }

       
    // }








    
// let d=+prompt("Введите день") 
// let m=+prompt("Введите месяц") 
// let y=+prompt("Введите год")
// let a=false;
// if (y%4==0){
//     a=true
//     if(m==1 || m==3 ||m==5 ||  m==7|| m==8 || m==10 ){
//         if (d<=31){
//             if (d==31){
//                 alert(`1 ${m+1} ${y}`)
//                }
//             else{
//             alert(`${d+1} ${m} ${y}`)
//             }
//         }
//         else{
//             alert(`ошибка`)
//         }
//      }
//      else if(m==4 || m==6 || m==9 ||  m==11){
//         if (d<=31){
//             if (d==30){
//                 alert(`1 ${m+1} ${y}`)
//             }
//             else{
//                 alert(`${d+1} ${m} ${y}`)
//             }
//         }
//         else{
//             alert(`ошибка`)
//         } 
//      }
//     else if(m==12){
//         if (d<=31){
//             if (d==31){
//                 alert(`1 1 ${y+1}`)
//                }
//                else{
//                 alert(`${d+1} ${m} ${y}`)
//                }
//         }
//         else{
//             alert(`ошибка`)
//         }  
//     }
//     else if (m===2){
        
//         if(a){
//             d=29
//             alert(`1 ${m+1} ${y}`) 
//         }
//         else{
//             d=28
//             alert(`1 ${m+1} ${y}`) 
//         }
        
//     }
//     else{
//         alert(`ошибка`)
//     }  
   
// }  

// else{
//     alert(`ошибка`)
// }     




// if (y%4!==0){
//     if(m==1 || m==3 ||m==5 ||  m==7|| m==8 || m==10 ){
//         if (d==31){
//          alert(`1 ${m+1} ${y}`)
//         }
//         else{
//          alert(`${d+1} ${m} ${y}`)
//         }
//      }
//      if(m==1 || m==3 ||m==5 ||  m==7|| m==8 || m==10 ){
//         if (d==31){
//          alert(`1 ${m+1} ${y}`)
//         }
//         else{
//          alert(`${d+1} ${m} ${y}`)
//         }
//      }
//      else if(m==4 || m==6 || m==9 ||  m==11){
//          if (d==30){
//           alert(`1 ${m+1} ${y}`)
//          }
//          else{
//           alert(`${d+1} ${m} ${y}`)
//          }
//      }
//      else if(m==12){
//          if (d==31){
//           alert(`1 1 ${y+1}`)
//          }
//          else{
//           alert(`${d+1} ${m} ${y}`)
//          }
//      }
    //  else if(m==2){
    //     if (d==28 ){
    //      alert(`${d+1} ${m} ${y}`)
    //     }
    //     else if (d==29){
    //         alert(`1 ${m+1} ${y}`)
    //     }
    // }
    //  else{
    //      alert("Ошибка")
    //  }   




// else if( y%4==0){
//     a=true
//     if(m==2){
//         if (d==28 ){
//          alert(`${d+1} ${m} ${y}`)
//         }
//         else if (d==29){
//             alert(`1 ${m+1} ${y}`)
//         }
//     }
// }
// else{
//     alert("Ошибка")
// }



// if(m==1 || m==3 ||m==5 ||  m==7|| m==8 || m==10 ){
//    if (d==31){
//     alert(`1 ${m+1} ${y}`)
//    }
//    else{
//     alert(`${d+1} ${m} ${y}`)
//    }
// }
// else if(m==4 || m==6 || m==9 ||  m==11){
//     if (d==30){
//      alert(`1 ${m+1} ${y}`)
//     }
//     else{
//      alert(`${d+1} ${m} ${y}`)
//     }
// }
// else if(y%4==0){
//     if ((y==29)){
//      alert(`1 ${m+1} ${y}`)
//     }
//     else if(d==28){
//         alert(`1 ${m+1} ${y}`)
//      }
//     }
// else if(m==12){        
//     if (d==31){
//      alert(`1 1 ${y+1}`)
//     }
//     else{
//      alert(`${d+1} ${m} ${y}`)
//     }
// }
// else{
//     alert("Ошибка")
// }
 





// for (let age=18;age;age--){
//     alert(age)
// }


// let age=18;
// while (age){
//     alert(age)
//     age--;
// }


// let age=18;
// do{
//     alert(age)
//     age--;
    
// }while (age)


// let a=prompt("Как вас зовут?")
// while (a.length==0){
//     alert("Заполните поле ")
//     break
// }
// while(a.length!==0){
// alert("okokkok")
// break
// }


// let name1="Majid" 

// while (true){
//     let name2=prompt(" введите имя")
//     name2=prompt(" введите имя правильно")
//     while(name2==name1){
//         let p=+prompt("введите пароль")
//         p=prompt(" введите не менкк 4 слов ")
//         while(p.length>=4){
//             alert(`Имя ${name1} \n Пароль ${p}`)
        
//         } 
//         break
    
//     }
   
    
// }
