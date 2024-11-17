let wallet = 2000;
let bonus = 0;
let freebonus;
let cart = "";
let history = "";
let count = 0;
let food1 = "Bishtexs"
let food2 = "lagman"
let food3 = "Gulash"
let cola = "cola"
let pepsi = "pepsi"
let sok = "sok"
let medovik = "medovik"
let krasnyi = "krasnyi"
let tvoroj = "tvoroj"

while (true) {
    let menu = prompt("1)bludo \n2)napitki \n3)desert \n4)korzinka \n5)history \n6)bonus  \n7)history \n8)bonus")
    if (menu == 1) {
        bludo()
    }
    else if (menu == 2) {
        napitki()
    }
    else if (menu == 3) {
        desert()
    }
    else if (menu == 4) {
        korzinka()
    }
    else if (menu == 5) {
        history()
    }
    else if (menu == 6) {
        bonus()
    }
    else if (menu == 7) {
        koshelek()
    }
    else if (menu == 8) {
        exit()
    }
}

function bludo() {
    let bludo = +prompt(`1)${food1} \n2)${food2} \n3)${food3}`)
    if (bludo == 1) {
        count += 170
        cart += food1 + " ,"
    }
    else if (bludo == 2) {
        count += 270
        cart += food2 + " ,"
    }
    else if (bludo == 3) {
        count += 200
        cart += food3 + " ,"
    }
}

function napitki() {
    let napitki = +prompt(`1)${cola} \n2)${pepsi} \n3)${sok}`)
    if (napitki == 1) {
        count += 70
        cart += cola + " ,"
    }
    else if (napitki == 2) {
        count += 90
        cart += pepsi + " ,"
    }
    else if (napitki == 3) {
        count += 50
        cart += sok + " ,"
    }
}

function desert() {
    let desert = +prompt(`1)${medovik} \n2)${krasnyi} \n3)${tvoroj}`)
    if (desert == 1) {
        count += 170
        cart += medovik + " ,"
    }
    else if (desert == 2) {
        count += 120
        cart += krasnyi + " ,"
    }
    else if (desert == 3) {
        count += 90
        cart += tvoroj + " ,"
    }
}

function korzinka() {
    let choose = +prompt(`You buy: \n ${cart} \n Sum: ${count}c \n Bonus ${count3}c \n 1) Buy \n 2)Clear `)
    if (count <= 300 && count >= 500) {
        let count2 = count - (count * 2 / 100)
        let count3 = count * 2 / 100
        let choose = +prompt(`You buy: \n ${cart} \n Sum: ${count}c \n Bonus ${count3}c \n 1) Buy \n 2)Clear `)
        if (choose == 1) {
            wallet -= count2
            history = cart
        }
        else if (choose == 2) {
            count = 0
            cart = ''
        }
    }
    else if (count <= 500 && count >= 300) {
        let count2 = count - (count * 2 / 100)
        let count3 = count * 4 / 100
        let choose = +prompt(`You buy: \n ${cart} \n Sum: ${count}c \n Bonus ${count3}c \n 1) Buy \n 2)Clear `)
        if (choose == 1) {
            wallet -= count2
            history = cart
        }
        else if (choose == 2) {
            count = 0
            cart = ''
        }
    }
    else if (count >= 800) {
        let choose2 = +prompt(`1)you can take 1 water or dessert,it's gift for you 2) or you can get a 7% discount`)
        if (choose2 == 1) {
            let a = 1
            while (a = 1) {
                free()
                a++
            }
            let choose = +prompt(`You buy: \n ${cart} \n Sum: ${count}c \n Bonus ${freebonus} c \n 1) Buy \n 2)Clear `)
            if (choose == 1) {
                wallet -= count
                history = cart
            }
            else if (choose == 2) {
                count = 0
                cart = ''
            }
        }
        else if (choose2 == 2) {
            let count2 = count - (count * 7 / 100)
            let count3 = count * 7 / 100
            let choose = +prompt(`You buy: \n ${cart} \n Sum: ${count}c \n Bonus ${count3} c \n 1) Buy \n 2)Clear `)
            if (choose == 1) {
                wallet -= count2
                history = cart
            }
            else if (choose == 2) {
                count = 0
                cart = ''
            }
        }

    }

}

function history(){
    alert(`You buy ${cart}`)
}

function bonus() {
    alert(`you get bonus ${freebonus}`)
}``
function koshelek() {
    alert(`you have ${wallet}money`)
}
function exit() {
    wallet = 2000;
    bonus = 0;
    freebonus;
    cart = "";
    history = "";
    count = 0;
}


function free() {
    let choosedesnap = +prompt(`1)${cola} \n2)${pepsi} \n3)${sok}\n 4)${medovik} \n 5)${krasnyi} \n6)${tvoroj}`)
    if (choosedesnap == 1) {
        freebonus += choosedesnap
    }
    if (choosedesnap == 2) {
        freebonus += choosedesnap
    } if (choosedesnap == 3) {
        freebonus += choosedesnap
    } if (choosedesnap == 4) {
        freebonus += choosedesnap
    } if (choosedesnap == 5) {
        freebonus += choosedesnap
    } if (choosedesnap == 6) {
        freebonus += choosedesnap
    }
}
