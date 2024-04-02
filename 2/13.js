let bill = 0
let money = 1000
let card = ""
let film1 = "Аватар"
let film2 = "Разбой"
let filmCost = 120
let drink1 = "Кола"
let drink2 = "Фанта"
let drinksCost = 80
let popkorn = "Поп-корн"
let popkornCost = 120
let discount=100

let films = +prompt(`1) ${film1} \n2) ${film2}`)
if (films == 1) {
    card += film1
    let filmCount = +prompt("Сколько билетов")
    card += " " + filmCount + "шт."
    bill += filmCost * filmCount
    let popcorn = confirm( `${popkorn} будете брать?`)
    if (popcorn) {
        let popCount = +prompt("Сколько")
        card += " " + popkorn + " "+popCount + "шт."
        bill += popkornCost * popCount
    }
    let drink = confirm('Воду будете брать?')
    if (drink) {
        let drinks = +prompt(`1) ${drink1} \n2) ${drink2}`)
        if (drinks == 1) {
            let drinkCount = +prompt("Сколько")
            card += " " + drink1 + " " +drinkCount + "шт."
            bill += drinksCost * drinkCount
        }
        if (drinks == 2) {
            let drinkCount = +prompt("Сколько")
            card += " " + drink2 + " " +drinkCount + "шт."
            bill += drinksCost * drinkCount
        }
    }
    let conf = confirm(`Вы купили ${card} \nВаш счет ${bill} сом \nБудете брать?`)
    if (conf) {
        let a=confirm(`У вас есть ${discount}% скидка будете использовать?"`)
            if(a){
                let bill1=bill*discount/100
                let bill3=bill-bill1
                if (bill <= money) {
                    money -= bill3
                    alert(`Хорошего просмотра вам \n У вас остался ${money}`)
                } else {
                    alert("У вас не хватает денег. \nВсего доброго вам!")
                }
            }
            
    }
    alert("Досвидание")
} else if (films == 2) {
    card += film2
    let filmCount = +prompt("Сколько билетов")
    card += " " + filmCount + "шт."
    bill += filmCost * filmCount
    let popcorn = confirm(`${popkorn} будете брать?`)
    if (popcorn) {
        let popCount = +prompt("Сколько")
        card += " " + popkorn + " " +popCount + "шт."
        bill += popkornCost * popCount
    }
    let drink = confirm(`Воду будете брать?`)
    if (drink) {
        let drinks = +prompt(`1) ${drink1} \n2) ${drink2}`)
        if (drinks == 1) {
            let drinkCount = +prompt("Сколько")
            card += " " + drink1 + " " +drinkCount + "шт."
            bill += drinksCost * drinkCount
        } else if (drinks == 2) {
            let drinkCount = +prompt("Сколько")
            card += " " + drink2 + " " +drinkCount + "шт."
            bill += drinksCost * drinkCount
        }
    }
    let conf = confirm(`Вы купили ${card} \nВаш счет ${bill} сом \nБудете брать?`)
    if (conf) {
        if (bill <= money) {
            money -= bill
            alert(`Хорошего просмотра вам \nУ вас остался ${money}`)
        } else {
            alert("У вас не хватает денег. \nВсего доброго вам!")
        }
    }
    alert("Досвидание")
}