let f1 = "4$"
let f2 = "6$"
let f3 = "12$"
let f4 = "4$"
let song = ""
let bonus = 0
let tottal = 0
let bonussong = ""
while (true) {
    let choose_m_b_k_v = +prompt("1) song \n 2) bonus \n 3) basket \n 4) exit")
    if (choose_m_b_k_v == 1) {
        choose_singer()
    }
    else if (choose_m_b_k_v == 2) {
        alert(`${bonus}$`)
    }
    else if (choose_m_b_k_v == 3) {
        let check = confirm(`You have ${song} \n are you going to buy?`)
        if (check) {
            let checking = confirm(`You have ${bonus}$ \n want to use?`)
            if (checking) {
                if (bonus >= 4 || bonus <= 8) {
                    let bonus_song_choose = +prompt("You can get on of the this song for bonus: 1)Am I Dreaming \n 2)Running \n 3)Calling \n 4)West Coast \n 5)Burn To Die \n 6)Rolling In The Deep \n 7)Skyfall \n  8)Set Fire To The Rain \n 9)Sad Girl")
                    if (bonus_song_choose == 1) {
                        bonussong += "Am I Dreaming"
                    }
                    if (bonus_song_choose == 2) {
                        bonussong += "Am I Dreaming"
                    } if (bonus_song_choose == 3) {
                        bonussong += "Running"
                    } if (bonus_song_choose == 4) {
                        bonussong += "Calling"
                    } if (bonus_song_choose == 5) {
                        bonussong += "Burn To Die"
                    } if (bonus_song_choose == 6) {
                        bonussong += "Rolling In The Deep"
                    } if (bonus_song_choose == 7) {
                        bonussong += "Skyfall"
                    } if (bonus_song_choose == 8) {
                        bonussong += "Set Fire To The Rain"
                    } if (bonus_song_choose == 9) {
                        bonussong += "Sad Girl"
                    }
                    kor()
                }
                else if (bonus < 4) {
                    alert("You cat't take sing for this bonus")
                    kor()
                }
            }
        }
    }
    else if (choose_m_b_k_v == 4) {
        bonus = 0
        song = ""
        let tottal = 0
        let bonussong = ""
    }
}


function kor() {
    alert(`You buy ${song} \n For bonus you take this song ${bonussong}`)
}
function choose_singer() {
    let choose = +prompt('1)Metro \n 2)Lana Del Rey \n 3)The Weekend \n 4) Adele')
    if (choose == 1) {
        singer1()
    }
    else if (choose == 2) {
        singer2()
    }
    else if (choose == 3) {
        singer3()
    }
    else if (choose == 4) {
        singer4()
    }
}
function singer1() {
    let choose_song = +prompt("1) Am I Dreaming \n 2) Running \n 3) Calling")
    if (choose_song == 1) {
        song += choose_song + `${f1}` + ','
        bonus += parseInt(f1) / 2
        alert("Yiou add to baset the song: Am I Dreaming it costet 4$")
    }
    else if (choose_song == 2) {
        song += choose_song + `${f1}` + ","
        bonus += parseInt(f1) / 2
        alert("Yiou add to baset the song: Running 4$")
    }
    else if (choose_song == 3) {
        song += choose_song + `${f1}` + ","
        bonus += parseInt(f1) / 2
        alert("Yiou add to baset the song: Calling 4$")
    }
}

function singer2() {
    let choose_song = +prompt("1) West Coast \n 2) Burn To Die \n 3) Sad Girl")
    if (choose_song == 1) {
        song += choose_song + `${f2}` + ","
        bonus += parseInt(f2) / 2
        alert("Yiou add to baset the song: West Coast 6$")
    }
    else if (choose_song == 2) {
        song += choose_song + `${f2}` + ","
        bonus += parseInt(f2) / 2
        alert("Yiou add to baset the song: Burn To Die 6$")
    }
    else if (choose_song == 3) {
        song += choose_song + `${f2}` + ","
        bonus += parseInt(f3) / 2
        alert("Yiou add to baset the song: Sad Girl 6$")
    }
}

function singer3() {
    let choose_song = +prompt("1) Save Your Tears \n 2) Lost In The Fire \n 3) House Of Balloons")
    if (choose_song == 1) {
        song += choose_song + `${f3}` + ","
        bonus += parseInt(f4) / 2
        alert("Yiou add to baset the song: Save Your Tears 12$")
    }
    else if (choose_song == 2) {
        song += choose_song + `${f3}` + ","
        bonus += parseInt(f4) / 2
        alert("Yiou add to baset the song: Lost In The Fire 12$")
    }
    else if (choose_song == 3) {
        song += choose_song + `${f3}` + ","
        bonus += parseInt(f4) / 2
        alert("Yiou add to baset the song: House Of Balloons 12$")
    }
}

function singer4() {
    let choose_song = +prompt("1)Rolling In The Deep \n 2) Skyfall \n 3) Set Fire To The Rain")
    if (choose_song == 1) {
        song += choose_song + `${f1}` + ","
        bonus += parseInt(f1) / 2
        alert("Yiou add to baset the song: Rolling In The Deep 4$")
    }
    else if (choose_song == 2) {
        song += choose_song + `${f1}` + ","
        bonus += parseInt(f1) / 2
        alert("Yiou add to baset the song: Skyfall 4$")
    }
    else if (choose_song == 3) {
        song += choose_song + `${f1}` + ","
        bonus += parseInt(f1) / 2
        alert("Yiou add to baset the song: Set Fire To The Rain4$")
    }
}