let b = 0  
let card = '' 
var howmuch1
let film1 = 'Аяш' 
let film2 = 'Разбой' 
let film3 = 'Аватар' 
 
let cost1 = 200 
var cost;
let count=0
let cost2 = 200 
let cost3 = 300 
let popkorn = 'Поп-корн' 
let voda1 = 'Адыгене' 
let voda2 = 'Кола' 
let voda3 = 'Фанта' 
 
let costMag1 = 80 
let costMag2 = 50 
let costMag3 = 120

while (true){
    let k=+prompt(`1.Фильм \n 2.Магазин \n 3.Счет \n 4.Выход`)
    if (k==1){
        var  kino=+prompt(`1.${film1} \n 2.${film2} \n  3.${film3}`)
        if (kino==1){
            var howmush=+prompt("Cколько вас?")
            howmuch1=howmush
            b+=cost1*howmuch1
            card+=film1+" " +howmush +" "+"шт билет"+","
            var baby=confirm ("Дети есть?")
            if (baby){
                var babycheck=+prompt("Сколько их?")
                if (babycheck<=howmuch1){
                    cost=babycheck*cost1
                    b-=cost*50/100
                    var babyage=+prompt("Сколько им лет?")
                    
                }
                else if(babycheck>howmuch1){
                    alert("Выберите заново")
                }
            }
        }
        else if (kino==2){
            let howmush=+prompt("Cколько вас?")
            howmuch1=howmush
            b+=cost2*howmush
            card+=film2+" " +howmush +" "+"шт билет"+","
            var baby=confirm ("Дети есть?")
            if (baby){
                var babycheck=+prompt("Сколько их?")
                if (babycheck<=howmuch1){
                    cost=babycheck*cost1
                    b-=cost*50/100
                    var babyage=+prompt("Сколько им лет?")
                    
                }
                else if(babycheck>howmuch1){
                    alert("Выберите заново")
                }
            }
        }
        else if (kino==3){
            let howmush=+prompt("Cколько вас?")
            howmuch1=howmush
            b+=cost3*howmush
            card+=film3+" " +howmush +" "+"шт билет"+","
            var baby=confirm ("Дети есть?")
            if (baby){
                var babycheck=+prompt("Сколько их?")
                if (babycheck<=howmuch1){
                    cost=babycheck*cost1
                    b-=cost*50/100
                    var babyage=+prompt("Сколько им лет?")
                    
                }
                else if(babycheck>howmuch1){
                    alert("Выберите заново")
                }
            }
        }
    }
    else if (k==2){
        for (let i = 0;i < howmuch1; i++){
            let eda=+prompt(`1.${popkorn} \n 2.${voda1} \n  3.${voda2} \n  4.${voda3}`)
            if(eda==1){
                b+=costMag1
                    if (babyage<=6){
                        count++
                        if(count==1){
                            b-=costMag1
                        }

                    }             
                card+=popkorn +","
            }
            else if(eda==2){
                b+=costMag2
                card+=voda1 +","
            }
            else if(eda==3){
                b+=costMag3 
                card+=voda2 +","
            }
            else if(eda==4){
                b+=costMag3
                card+=voda3 +","
            }  
        }
        alert("Ждем вас еще!!")  
    } 
    else if (k==3){
        if(baby){   
            alert(`Вы купили:   \n ${card} \n ${babycheck} билет со 50% скидкой для детей стоит  ${cost*50/100} сомов \n Ваш счет ${b}  `)
        }
        else{
        alert(`Вы купили:  \n ${card} \n Ваш счет ${b}сом`)
        }
    }
    else if (k==4){
        card=""
        b=0
    }
    
}



