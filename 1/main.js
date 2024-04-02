 
// const name="Akmaanai"
// const surname="Rustambekova7"
// const age="17"
// alert(`name:${name} \n surname:${surname} \n age:${age}`)

// alert(` Мне $ {age} лет`)
// let a=13
// let b="hello"
// let  d= null
// alert(typeof(a))

// alert(type(b))
// alert(typeof d)
// let name = prompt("ФИО");
// let sername = prompt("имя");
// alert(`${name+" "+ sername}  snbgfe kjFDnae `)


let namee = ''
let paassword = ""
while (true) {
    let a1 = prompt("1)войти \n 2) регистрация")
    if (a1 == 1) {
        let namee1 = prompt("имя")
        let password1 = prompt("пароль")
        if (namee == namee1) {
            if (paassword == password1) {
                alert(namee + paassword)
            continue

            }
            else {
                alert("неправилный пароль")
            continue

            }
        } else {
            alert("нет такого юзера")
            continue

        }

    }
    if (a1 == 2) {
        let namee1 = prompt("имя")
        let password1 = prompt("пароль")
        let password2 = prompt(" ведите пароль еще раз")
       
        if (password1 == password2) {
            alert(`${namee1} ${password2}`)
            namee=namee1
            paassword=password2
            continue

        }else {
            alert(`повторите ешё раз`)
            continue
        }
        
    }
}



