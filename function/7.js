let wallet =2000 
let history="" 
let bonus=0 
let food1="Bishtexs" 
let food2="lagman" 
let food3="pasta" 
let drink="Cola" 
let drink2="fanta" 
let drink3='pepsi' 
let sum=0 
 
function main(){ 
  while(true){ 
    let menu=prompt("1)bludo \n2)napitki \n3)bonus \n4)koshelek \n5)history \n6)next") 
    if(menu==1){ 
      bludo() 
    }else if(menu==2){ 
      napitki() 
    }else if(menu==3){ 
     alert(`${bonus}`) 
    }else if(menu==4){ 
      alert(`${wallet - sum}`) 
    }else if (menu==5){ 
    alert(`${wallet} Было \n${sum} потратили \n${wallet - sum} осталось`) 
    }else if(menu==6){ 
      main() 
   } 
  } 
} 
function bludo(){ 
    let menu1=+prompt(`1)${food1} \n2)${food2} \n3)${food3}`) 
    if(menu1==1){ 
      let ckolko=prompt("ckolko") 
      sum+=ckolko * 170 
      if(ckolko>=5){ 
        bonus+=700/100*5 
      } 
      else if(ckolko>=3){ 
        bonus+=500/100*3 
      }else if(ckolko>=2){ 
        bonus+=300/100*2 
      } 
      let s=confirm(`У вас ${bonus} бонусов.Хотите воспользоваться ими?`) 
      if(s){ 
        sum-=bonus 
        bonus=0 
      alert(`${wallet} Было \n${sum} потратили \n${wallet - sum} осталось \nвы купили ${food1}`) 
      }else{ 
        alert(`${wallet} Было \n${sum} потратили \n${wallet - sum} осталось \nвы купили ${food3}`) 
      } 
    } 
    else if(menu1==2){ 
      let ckolko=prompt("ckolko") 
      sum+=ckolko * 120 
      if(ckolko>=5){ 
        bonus+=700/100*5 
      } 
      else if(ckolko>=3){ 
        bonus+=500/100*3 
      }else if(ckolko>=2){ 
        bonus+=300/100*2 
      } 
       
      let s=confirm(`У вас ${bonus}% бонусов.Хотите воспользоваться ими?`) 
      if(s){ 
        sum-=bonus 
        bonus=0 
       alert(`${wallet} Было \n${sum} потратили \n${wallet - sum} осталось \nвы купили ${food2}`) 
      } 
      else{ 
        alert(`${wallet} Было \n${sum} потратили \n${wallet - sum} осталось \nвы купили ${food3}`) 
      } 
    } 
    else if(menu1==3){ 
      let ckolko=prompt("ckolko") 
      sum+=ckolko * 150 
      if(ckolko>=5){ 
        bonus+=700/100*5 
      } 
      else if(ckolko>=3){ 
        bonus+=500/100*3 
      }else if(ckolko>=2){ 
        bonus+=300/100*2 
      } 
        let s=confirm(`У вас ${bonus} бонусов.Хотите воспользоваться ими?`) 
        if(s){ 
          sum-=bonus 
          bonus=0 
          alert(`${wallet} Было \n${sum} потратили \n${wallet - sum} осталось \nвы купили ${food3}`) 
        } 
        else{ 
          alert(`${wallet} Было \n${sum} потратили \n${wallet - sum} осталось \nвы купили ${food3}`) 
        } 
    } 
  } 
 
function napitki(){ 
  let menu3=prompt(`1)${drink} \n2)${drink2} \n3)${drink3}`) 
  if(menu3==1){ 
  let ckolko=prompt("ckolko") 
  sum+=ckolko*90 
  if(ckolko>=5){ 
    bonus+=700/100*5 
  } 
  else if(ckolko>=3){ 
    bonus+=500/100*3 
  }else if(ckolko>=2){ 
    bonus+=300/100*2 
  } 
    let s=confirm(`У вас ${bonus} бонусов.Хотите воспользоваться ими?`) 
    if(s){ 
      sum-=bonus 
      bonus=0 
      alert(`${wallet} Было \n${sum} потратили \n${wallet - sum} осталось \nвы купили ${drink}`) 
    } 
    else{ 
      alert(`${wallet} Было \n${sum} потратили \n${wallet - sum} осталось \nвы купили ${drink}`) 
    } 
  } 
  if(menu3==2){ 
  let ckolko=prompt("ckolko") 
  sum+=ckolko*70 
  if(ckolko>=5){ 
    bonus+=700/100*5 
  } 
  else if(ckolko>=3){ 
    bonus+=500/100*3 
  }else if(ckolko>=2){ 
    bonus+=300/100*2 
  } 
    let s=confirm(`У вас ${bonus} бонусов.Хотите воспользоваться ими?`) 
    if(s){ 
      sum-=bonus 
      bonus=0 
      alert(`${wallet} Было \n${sum} потратили \n${wallet - sum} осталось \nвы купили ${drink2}`) 
    } 
    else{ 
      alert(`${wallet} Было \n${sum} потратили \n${wallet - sum} осталось \nвы купили ${drink2}`) 
    } 
   
  } 
  if(menu3==3){ 
  let ckolko=prompt("ckolko") 
  sum+=ckolko*80 
  if(ckolko>=5){ 
    bonus+=700/100*5 
  } 
  else if(ckolko>=3){ 
    bonus+=500/100*3 
  }else if(ckolko>=2){ 
    bonus+=300/100*2 
  } 
    let s=confirm(`У вас ${bonus} бонусов.Хотите воспользоваться ими?`) 
    if(s){ 
      sum-=bonus
      bonus=0 
      alert(`${wallet} Было \n${sum} потратили \n${wallet - sum} осталось \nвы купили ${drink3}`) 
    } 
    else{ 
      alert(`${wallet} Было \n${sum} потратили \n${wallet - sum} осталось \nвы купили ${drink3}`) 
    } 
  } 
} 
 
 
main()