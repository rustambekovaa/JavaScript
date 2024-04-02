let bif="bif"
let chick="chick"
let borsh="borsh"
let bread="bread"
let cream="cream"
let bif2=140
let chick2=120
let borsh2=100
let bread2=30
let cream2=20
let discount=40
let card=''
let bill=0
let costomer=prompt("Кем вы явл?")
if (costomer=='клиент'){
    let eda=prompt(`1.bif \n2.chik \n3.borsh`)
    if (eda==1){
        card+=' ' +bif
        bill+=+bif2
        bill+=bif2
    }
    else if (eda==2){
        card+=' ' +chick
        bill+=chick2
    }
    else{
        card+=' ' +borsh
        bill+=borsh2
    }
    let chai =prompt(`1.cream \n2.bread`)
    if (chai==1){
        card+= ' ' +cream
        bill+=cream2
    }
    else{
        card+= ' ' +bread
        bill+=bread2
    }
    alert(`Вы купили: ${card} \nваш счет ${bill}`)
    let money2=prompt("Дайте деньги")
    if (money2>=bill){
        alert (`Ваша сдача: ${money2-bill} `)
    }
    else{
        alert("У вас не достаточно денег!!")
    }
   

}
else if (costomer=='сотрудник'){
    let eda=prompt(`1.bif \n2.chik \n3.borsh`)
   
    if (eda==1){
        card+=' ' +bif
        bill+=+bif2
        bill+=bif2
    }
    else if (eda==2){
        card+=' ' +chick
        bill+=chick2
    }
    else{
        card+=' ' +borsh
        bill+=borsh2
    }
    let chai =prompt(`1.cream \n2.bread`)
    if (chai==1){
        card+= ' ' +cream
        bill+=cream2
    }
    else{
        card+= ' ' +bread
        bill+=bread2
    }
     let k=bill*discount/100
    let k2=bill-k 
    alert(`Вы купили: ${card} \nваш счет ${bill}\n Со скидкой ${k2}`)
    let money2=prompt("Дайте деньги")
    if (money2>=k2){
        alert (`Ваша сдача: ${money2-k2}c `)
    }
    else{
        alert("У вас не достаточно денег!!")
    }
}


