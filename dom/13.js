let y = [1, 2, 3, 4, 5, 6, 7, 8]
let x = ['A', 'B', 'C', 'D', 'E', 'F', 'G', "H"]
let tr = document.querySelectorAll('tr')
let hod = true
let hods = []
let checkedEl = null

let blocks = document.querySelectorAll('td')
let fix = 8
let num = 0
let check = true
for (let i = 0; i < blocks.length; i++) {
    if (num == fix) {
        check = !check
        num = 0
    }
    if (check) {
        blocks[i].classList.add('brown')
        if (i <= 8 * 3) {
            let div = document.createElement('div')
            div.className = 'fig black'
            blocks[i].append(div)
        } else if (i >= 8 * 5) {
            let div = document.createElement('div')
            div.className = 'fig white'
            blocks[i].append(div)
        }
    }
    num++
    check = !check
}


function start() {

    for (let i = 0; i < tr.length; i++) {
        let tds = tr[i].children
        for (let a = 0; a < tds.length; a++) {
            tds[a].setAttribute('pos', `${x[a] + y[i]}`)
            let fig = tds[a].querySelector('div')
            if (fig) {
                fig.onclick = getHod
            }
        }

    }

}


function getHod(e) {
    for (let item of hods) {
        item.classList.remove('actived')
    }
    hods = []
    let par = e.currentTarget.parentElement
    let fig = e.currentTarget
    checkedEl = fig
    let pos = par.getAttribute('pos')
    if (hod && fig.classList.contains('white')) {
        let xIndex = x.findIndex(item => item == pos[0])
        let yIndex = +pos[1] - 1
        let right = document.querySelector(`td[pos="${x[xIndex + 1] + yIndex}"]`)
        let left = document.querySelector(`td[pos="${x[xIndex - 1] + yIndex}"]`)
        if (left && !left?.children[0]?.classList.contains('white')) {
            if(!left.children.length){
                hods.push(left)
            }
        }
        if (right && !right?.children[0]?.classList.contains('white')) {
           
            if(!right.children.length){
                hods.push(right)
            }
        }

        for (let item of hods) {
            item.classList.add('actived')
            item.onclick = function (e) {
                item.append(checkedEl)
                par.innerHTML = ''
                item.children[0].onclick = getHod
                for (let item of hods) {
                    item.classList.remove('actived')
                    item.onclick = null
                }
                hods = []
                checkedEl = null
                removeClick()
                hod = false
            }
        }



    } else if (hod == false && fig.classList.contains('black')) {
        let xIndex = x.findIndex(item => item == pos[0])
        let yIndex = +pos[1] + 1
        let right = document.querySelector(`td[pos="${x[xIndex + 1] + yIndex}"]`)
        let left = document.querySelector(`td[pos="${x[xIndex - 1] + yIndex}"]`)
        if (left && !left?.children[0]?.classList.contains('black')) {
            hods.push(left)
        }
        if (right && !right?.children[0]?.classList.contains('black')) {
            hods.push(right)
        }

        for (let item of hods) {
            item.classList.add('actived')
            item.onclick = function (e) {
                item.append(checkedEl)
                par.innerHTML = ''
                item.children[0].onclick = getHod
                for (let item of hods) {
                    item.classList.remove('actived')
                    item.onclick = null
                }
                hods = []
                checkedEl = null
                removeClick()
                hod = true
            }
        }

    }

}



function removeClick() {
    let tr = document.querySelectorAll('tr')
    for (let item of tr) {
        item.onclick = null
    }
}
start()



let a = document.querySelector(td[position="A5"])
console.log(a);