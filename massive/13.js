let places = [
    {
        id:1,
        place:20
    },
    {
        id:2,
        place:15
    },
    {
        id:3,
        place:25
    }
]


// function getsits(){
//     let p = []
//     let k = prompt(`Выберите зал`) 
//     places.forEach(elem => {
//         let sits = 0
//         if (elem.id == k ){
//             for ( let i = 1 ; i <= elem.place; i++){
//                 if (elem.place % 5 == 0 ){
//                     p.push(i)  
//                     p.push('\n')
//                 }else{
//                     p.push(i)
//                 }
               
//             }
//         }

//     })
    
//     alert(`Зал ${k} \n ${p}`)
// }
// getsits() 

function getsits() {
    let p = "";
    let k = prompt(`Выберите зал`);
    places.forEach((elem) => {
    if (elem.id == k) {
        console.log(elem);
        for (let i = 1; i <= elem.place; i++) {
            p += i + " "
          if (i % 5 === 0) {
            p+= `\n`;
          }
        } 
      }
    });
  
    alert(`Зал ${k} \n ${p}`);
  }
  getsits();
  