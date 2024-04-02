// let a = setInterval((a) => {
//     console.log('Hello', a);
// }, 500, 'HEY ARG')


// setTimeout(() => {
//     clearInterval(a)
// }, 3000)


let num = 1
let trs = document.querySelectorAll('tr')
for (let i = 0; i < trs.length; i++) {
    if (!i  || i == trs.length - 1) {
        continue
    } else {
        for (let a = 0; trs[i].children.length > a; a++) {
            if (!a || a == trs[i].children.length - 1) {
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
let fix = 0

let prev;
function koleso() {
    if (prev) {
        prev.classList.remove('bg-green-500')
    }
    a[fix].classList.add('bg-green-500')
    prev = a[fix]
    fix++
}

setInterval(koleso, 1000)



