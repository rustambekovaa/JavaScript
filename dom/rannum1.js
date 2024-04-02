let num = 1
let ms = 200
let finish;
let trs = document.querySelectorAll('tr')
for (let i = 0; i < trs.length; i++) {
    if (!i || i == trs.length - 1) {
        continue
    } else {
        for (let a = 0; trs[i].children.length > a; a++) {
            if (!a ||  a == trs[i].children.length - 1) {
                continue
            } else {
                trs[i].children[a].classList.add('hidden')
            }
        }
    }
}
let tds = document.querySelectorAll('td')
let a = [].filter.call(tds, (item, index) => {
    if (!item.classList.contains('hidden')) {
        item.textContent = num
        num++
        return item
    }
})
let popytki = 3

function randomizer() {
    return Math.floor(Math.random() * 50)
}
let interValId;
function play() {
    let ourNum = document.getElementById('ourNumber').value ?? 5
    let finish = randomizer()
    let fix = 0
    let start = 0
    let prev;
    function koleso() {
        start++
        if (prev) {
            prev.classList.remove('bg-green-500')
        }
        if (a[fix].classList.contains('bg-red-500')) {
            fix++
            if (fix > a.length - 1) {
                fix = 0
            }
        }
        a[fix].classList.add('bg-green-500')
        prev = a[fix]
        if (start == finish) {
            if (a[fix].textContent == ourNum) {
                console.log(a[fix].textContent);
                alert('WIN')
            } else {
                a[fix].classList.add('bg-red-500')
                alert('LOSER')
            }
            stopGame()
            return
        }
        fix++
        if (fix > a.length - 1) {
            fix = 0
        }


    }

    interValId = setInterval(koleso, ms)
}

function stopGame() {
    popytki--
    if (popytki > 0) {
        alert(popytki)
    } else {
        alert('ВЫ ПРОИГРАЛИ !!!!')
        window.location.reload()
    }



    clearInterval(interValId)
}