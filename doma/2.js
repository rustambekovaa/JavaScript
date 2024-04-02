let bil=0
let money =1000 
let card=""
let f1="Аватар" 
let f2="Разбой"
let fcost=120
let dcost=80;
let popCorn=120;
let popCorn1="Поп Корн";
let d1="cola";
let d2="fanta";
let discount=10;

let a=prompt("1) Аватар \n 2) Разбой")
if (a==1){
    let p=prompt("Сколько билетов вы хотите?")
    let dick=fcost*p
    let dick2=dick*discount/100;
    let dick3=dick-dick2
    let popCorn2=confirm("Попкорн хотите ?")
    if( popCorn2){
        let popCorn3=prompt("Сколько хотите?")
        let drink=confirm("Воду хотите ?")
        if (drink){
            let drink2=prompt(`1.${d1} \n 2.${d2}`)
            if(drink2==1){
                let drink3=prompt("Сколько хотите?")
                bil=dick3+popCorn*popCorn3+drink3*dcost
               let card= confirm(`${f1}  ${fcost} * ${p}шт =${fcost*p} \n Со скидкой билет стоит: ${fcost*p*discount/100}\n ${popCorn1}  ${popCorn} * ${popCorn3}шт =${popCorn*popCorn3} \n${d1}     ${dcost} * ${drink3}шт = ${ drink3*dcost} \nСумма ${bil} `) 
               if (card){
                if (bil<=money){
                    alert(`Сдача ${money} - ${bil} = ${money-bil} \n Всего хоршего вам`)
                }
                else {
                    alert("У вас не достаточно денег!!")
                }
               }
               else{
                alert('Хотиту что то убрать?')
               }
            }
            else if(drink2==2){
                let drink3=prompt("Сколько хотите?")
                bil=dick3+popCorn*popCorn3+drink3*dcost
               let card= confirm(`${f2}  ${fcost} * ${p}шт =${fcost*p}\n Со скидкой билет стоит: ${fcost*p*discount/100} \n${popCorn1}  ${popCorn} * ${popCorn3}шт =${popCorn*popCorn3} \n${d1}     ${dcost} * ${drink3}шт = ${ drink3*dcost} \nСумма ${bil} `) 
               if (card){
                if (bil<=money){
                    alert(`Сдача ${money} - ${bil} = ${money-bil} \n Всего хоршего вам`)
                }
                else {
                    alert("У вас не достаточно денег!!")
                }
               }
               else{
                alert('Хотиту что то убрать?')
               }
            }
          
           
            // alert(card)
        }
        else{
            let a="ваш чек"
            bil=dick2
            let card=confirm(`${f1} ${fcost} * ${p}шт =${fcost*p} \n Со скидкой билет стоит: ${fcost*p*discount/100}\nСумма ${bil} `)
            if (card){
                if (bil<=money){
                    alert(`Сдача ${money} - ${bil} = ${money-bil} \n Всего хоршего вам`)
                }
                else {
                    alert("У вас не достаточно денег!!")
                }
               }
        }
    }
    else{
        let drink=confirm("Воду хотите ?")
        if (drink){
            let drink2=prompt(`1.${d1} \n 2.${d2}`)
            if(drink2==1){
                let drink3=prompt("Сколько хотите?")
                bil=dick3+popCorn*popCorn3+drink3*dcost
               let card= confirm(`${f1}  ${fcost} * ${p}шт =${fcost*p}\n Со скидкой билет стоит: ${fcost*p*discount/100} \n${d1}     ${dcost} * ${drink3}шт = ${ drink3*dcost} \nСумма ${bil} `) 
               if (card){
                if (bil<=money){
                    alert(`Сдача ${money} - ${bil} = ${money-bil} \n Всего хоршего вам`)
                }
                else {
                    alert("У вас не достаточно денег!!")
                }
               }
               else{
                alert('Хотиту что то убрать?')
               }
            }
            else if(drink2==2){
                let drink3=prompt("Сколько хотите?")
                card=`${d2} ${drink3}шт. \n summa ${ drink3*dcost}`   
                alert(card)
            }
          
           
            // alert(card)
        } else{
            let a="ваш чек"
            bil=fcost*p
            let card=confirm(`${f1} ${fcost} * ${p}шт =${fcost*p} \nСумма ${bil} `)
            if (card){
                if (bil<=money){
                    alert(`Сдача ${money} - ${bil} = ${money-bil} \n Всего хоршего вам`)
                }
                else {
                    alert("У вас не достаточно денег!!")
                }
               }
        }
    }
    
}

else if (a==2){
    let p=prompt("Сколько билетов вы хотите?")
    let dick=fcost*p
    let dick2=dick*discount/100;
    let dick3=dick-dick2
    let popCorn2=confirm("Попкорн хотите ?")
    if( popCorn2){
        let popCorn3=prompt("Сколько хотите?")
        let drink=confirm("Воду хотите ?")
        if (drink){
            let drink2=prompt(`1.${d1} \n 2.${d2}`)
            if(drink2==1){
                let drink3=prompt("Сколько хотите?")
                bil=dick3+popCorn*popCorn3+drink3*dcost
               let card= confirm(`${f1}  ${fcost} * ${p}шт =${fcost*p} \n Со скидкой билет стоит: ${fcost*p*discount/100}\n ${popCorn1}  ${popCorn} * ${popCorn3}шт =${popCorn*popCorn3} \n${d1}     ${dcost} * ${drink3}шт = ${ drink3*dcost} \nСумма ${bil} `) 
               if (card){
                if (bil<=money){
                    alert(`Сдача ${money} - ${bil} = ${money-bil} \n Всего хоршего вам`)
                }
                else {
                    alert("У вас не достаточно денег!!")
                }
               }
               else{
                alert('Хотиту что то убрать?')
               }
            }
            else if(drink2==2){
                let drink3=prompt("Сколько хотите?")
                bil=dick3+popCorn*popCorn3+drink3*dcost
               let card= confirm(`${f2}  ${fcost} * ${p}шт =${fcost*p}\n Со скидкой билет стоит: ${fcost*p*discount/100} \n${popCorn1}  ${popCorn} * ${popCorn3}шт =${popCorn*popCorn3} \n${d1}     ${dcost} * ${drink3}шт = ${ drink3*dcost} \nСумма ${bil} `) 
               if (card){
                if (bil<=money){
                    alert(`Сдача ${money} - ${bil} = ${money-bil} \n Всего хоршего вам`)
                }
                else {
                    alert("У вас не достаточно денег!!")
                }
               }
               else{
                alert('Хотиту что то убрать?')
               }
            }
          
           
            // alert(card)
        }
        else{
            let a="ваш чек" 
            bil=dick3
            let card=confirm(`${f1} ${fcost} * ${p}шт =${fcost*p} \n Со скидкой билет стоит: ${fcost*p*discount/100}\nСумма ${bil} `)
            if (card){
                if (bil<=money){
                    alert(`Сдача ${money} - ${bil} = ${money-bil} \n Всего хоршего вам`)
                }
                else {
                    alert("У вас не достаточно денег!!")
                }
               }
        } 
    }
    else{
        let dick=fcost*p
        let dick2=dick*discount/100;
        let dick3=dick-dick2
        let drink=confirm("Воду хотите ?")
        if (drink){
            let drink2=prompt(`1.${d1} \n 2.${d2}`)
            if(drink2==1){
                let drink3=prompt("Сколько хотите?")
                bil=dick3+popCorn*popCorn3+drink3*dcost
               let card= confirm(`${f1}  ${fcost} * ${p}шт =${fcost*p}\n Со скидкой билет стоит: ${fcost*p*discount/100} \n${d1}     ${dcost} * ${drink3}шт = ${ drink3*dcost} \nСумма ${bil} `) 
               if (card){
                if (bil<=money){
                    alert(`Сдача ${money} - ${bil} = ${money-bil} \n Всего хоршего вам`)
                }
                else {
                    alert("У вас не достаточно денег!!")
                }
               }
               else{
                alert('Хотиту что то убрать?')
               }
            }
            else if(drink2==2){
                let drink3=prompt("Сколько хотите?")
                card=`${d2} ${drink3}шт. \n summa ${ drink3*dcost}`   
                alert(card)
            }
          
           
            // alert(card)
        } else{
            let a="ваш чек"
            bil=dick3
            let card=confirm(`${f1} ${fcost} * ${p}шт =${fcost*p}\n Со скидкой билет стоит: ${fcost*p*discount/100}  \nСумма ${bil} `)
            if (card){
                if (bil<=money){
                    alert(`Сдача ${money} - ${bil} = ${money-bil} \n Всего хоршего вам`)
                }
                else {
                    alert("У вас не достаточно денег!!")
                }
               }
        }
    }
    
}


else{
    alert("Нету такого номера ")
}
