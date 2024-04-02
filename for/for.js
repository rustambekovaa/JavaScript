let bill1=0
let m =1000
let card1=""
let cat1="faastfood"
let cat2="pizza"
let cat3="drinks"
let cat11="burger"
let cat12="shaurma"
let cat21="pay"
let cat22="peperony"
let cat31="cola"
let cat32="fanta"
let cat1cost=120
let cat2cost=170
let cat3cost=70
let film1 = "Аватар"
let film2 = "Разбой"
let filmCost = 120
let popkorn = "Поп-корн"
let popkornCost = 120
while (true){
    let vacation=+prompt("1.Cafe\n 2.Kino\n 3.History")
        if (vacation==1){     
            let food=+prompt("1.drinks\n 2.faastfood\n 3.pizza")
            if (food==1){
                let drink=+prompt(`1.${cat31}\n 2.${cat32}`)
                bill1+=cat3cost
                if(drink==1){
                    let check=confirm(`Вы купили:${cat31}. Ваш счет составляет ${cat3cost} `) 
                    card1+=cat31 
                }
                else if(drink==2){   
                    let check=confirm(`Вы купили:${cat32} Ваш счет составляет ${cat3cost} `)
                    card1+=cat32 
                }
                else{
                    alert("Ощибка")
                } 
            }
            else if (food==2){
                let foods=+prompt(`1.${cat11}\n 2.${cat12}`)
                bill1+=cat2cost
                if(foods==1){                 
                    let check=confirm(`Вы купили:${cat11}. Ваш счет составляет ${cat2cost} `)
                    card1 += "," + cat11 
                }
                else if(foods==2){
                    let check=confirm(`Вы купили:${cat12} Ваш счет составляет ${cat2cost} `)
                    card1 += "," + cat12 
                }
                else{
                    alert("Ощибка")
                }
            }
            else if (food==3){
                let pizz=+prompt(`1.${cat21}\n 2.${cat22}`)
                bill1+=cat1cost
                if(pizz==1){
                    let check=confirm(`Вы купили:${cat21}. Ваш счет составляет ${cat1cost} `)
                    card1 += "," + cat21 
                }
                else if(pizz==2){
                    let check=confirm(`Вы купили:${cat22} Ваш счет составляет ${cat1cost} `)
                    card1 += "," + cat22 
                }
                else{
                    alert("Ощибка")
                }
            }     
        }
        else if (vacation==2){
            let films = +prompt(`1) ${film1} \n2) ${film2}`)
            if (films==1 ){
                card1+=film1
                let fC= +prompt("Сколько билетов")
                card1 += " " + fC + "шт."
                bill1+= filmCost * fC
                let popcorn = confirm( `${popkorn} будете брать?`)
                if (popcorn) {
                    let popCount = +prompt("Сколько")
                    card1 += " " + popkorn + " "+popCount + "шт."
                    bill1 += popkornCost * popCount
                } let drink = confirm('Воду будете брать?')
                if (drink) {
                    let drinks = +prompt(`1) ${cat31} \n2) ${cat32}`)
                    if (drinks == 1) {
                        let drinkCount = +prompt("Сколько")
                        card1 += " " + cat31 + " " +drinkCount + "шт."
                        bill1 += cat3cost * drinkCount
                    }
                    else  if (drinks == 2) {
                        let drinkCount = +prompt("Сколько")
                        card1 += " " + cat32 + " " +drinkCount + "шт."
                        bill1 += cat3cost * drinkCount 

                    }
                    
                }
                let conf = confirm(`Вы купили ${card1} \nВаш счет ${bill1} сом \nБудете брать?`)
            }
            else if (films==2 ){
                card1+=film1
                let fC= +prompt("Сколько билетов")
                card1 += " " + fC + "шт."
                bill1+= filmCost * fC
                let popcorn = confirm( `${popkorn} будете брать?`)
                if (popcorn) {
                    let popCount = +prompt("Сколько")
                    card1 += " " + popkorn + " "+popCount + "шт."
                    bill1 += popkornCost * popCount
                } let drink = confirm('Воду будете брать?')
                if (drink) {
                    let drinks = +prompt(`1) ${cat31} \n2) ${cat32}`)
                    if (drinks == 1) {
                        let drinkCount = +prompt("Сколько")
                        card1 += " " + cat31 + " " +drinkCount + "шт."
                        bill1 += cat3cost * drinkCount
                    }
                    else  if (drinks == 2) {
                        let drinkCount = +prompt("Сколько")
                        card1 += " " + cat32 + " " +drinkCount + "шт."
                        bill1 += cat3cost * drinkCount 

                    }
                    
                }
                let conf = confirm(`Вы купили ${card1} \nВаш счет ${bill1} сом \nБудете брать?`)
            }

        }
        else if (vacation==3){
            alert(`Вы купили: ${card1} \n Ваш счет ${bill1}`)
        }
}

