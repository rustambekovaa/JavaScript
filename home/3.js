let b = 0
let m = 1000
let card = ""
let corzina = ""
let cat1 = "Горячие блюда"
let cat2 = "Салат"
let food1 = "биштекст"
let food2 = "Борш"
let food3 = "цезарь"
let cat1cost = 100
let cat2cost = 30
let cat3cost = 20
let garnir1 = "Рис"
let garnir2 = "Гречка"
let garnir3 = "Яйцо"
let garnir4 = "Котлеты"
let garnir5 = "Макарон"
let garnir1cost = 15
let garnir2cost = 20
let garnir3cost = 40
let garnir4cost = 70
let garnir5cost = 30
let garnir11 = "Сметана"
let garnir22 = "Айран"
let garnir33 = "Укроп"
let garnir44 = "уксуз"
let garnir11cost = 20
let salat11 = "цезарь"
let salat22 = "тещин язык"
let salat33 = "ошчкий"
let salat11cost=120
let salat22cost=150




while (true) {
    let a = +prompt('1.Горячие \n 2.Салат \n 3.Корзина \n 4.Выход')
    if (a == 1) {
        let gor = +prompt(`1.${food1} \n 2.${food2}`)
        b += cat1cost
        card += food1 + " ,"
        if (gor == 1) {
            let choose1 = +prompt("Сколько?")
            b += cat1cost * choose1
            let gor2 = confirm("Гарнир хотите?")
            if (gor2) {
                let question = confirm("Гарнир на все блюда?")
                if (question) {
                    for (let i = 0; i < 5; i++) {
                        let gor3 = +prompt(`1.${garnir1} \n 2.${garnir2} \n 3.${garnir3} \n 4.${garnir4} \n 5${garnir5}.`)
                        if (gor3 == 1) {
                            b += garnir1cost
                            card += garnir1 + " ,"
                        } else if (gor3 == 2) {
                            b += garnir2cost
                            card += garnir2 + " ,"
                        } else if (gor3 == 3) {
                            b += garnir3cost
                            card += garnir3 + " ,"
                        } else if (gor3 == 4) {
                            b += garnir4cost
                            card += garnir4 + " ,"
                        } else if (gor3 == 5) {
                            b += garnir5cost
                            card += garnir5
                        }
                    }
                }
            }
        }
        else if (gor == 2) {
             b += cat1cost
             card += food2 + " ,"
            let choose11 = +prompt("Сколько?")
            b += cat1cost * choose11

            let gor22 = confirm("Соус хотите?")
            if (gor22) {
                let question1 = confirm("Соус на все блюда?")
                if (question1) {
                    for (let i = 0; i < 2; i++) {
                        let gor33 = +prompt(`1.${garnir11} \n 2.${garnir22} \n 3.${garnir33}\n 4.${garnir44}`)
                        if (gor33 == 1) {
                            b += garnir11cost
                            card += garnir11 + " ,"
                        } else if (gor33 == 2) {
                            b += garnir11cost
                            card += garnir22 + " ,"
                        } else if (gor33 == 3) {
                            card += garnir33 + " ,"
                        }
                        else if (gor33 == 4) {
                            card += garnir44 + " ,"
                        } else {
                            break
                        }
                    }
                }
                else {
                    break
                }
            }
        }
    }
    else if (a==2){
        let salad=+prompt(`1.${salat11} \n 2.${salat22} \n 3.${salat33}`)
        if(salad==1){
            b+=salat11cost
            card+=salat11  + " ,"
        }
        else if(salad==2){
            b+=salat22cost
            card+=salat22  + " ,"
        } else if(salad==3){
            b+=salat22cost
            card+=salat33 + " ,"
        }
    }
    if (a == 3) {
        if(m<b){
            alert(`Вы купили: ${card} \n Ваш счет${b}\n У вас не достаточно денег!!`)
        }
        else{
            alert(`Вы купили: ${card} \n Ваш счет ${m}-${b}=сдача ${m - b}сом`)
        }  
    }
    else if (a==4){
        card=""
        b=0
    }
   
}