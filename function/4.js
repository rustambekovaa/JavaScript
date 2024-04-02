// function getkv(pod,etaj,skolkokv,kv){
    
// }getkvkv(4,5,10,24)


// let pod = +prompt("Введите количество подъездов"); 
// let etaj = +prompt("Введите количество этажей"); 
// let kvpod = +prompt("Введите количество квартир в каждом этаже"); 
// let kv = +prompt("Введите номер квартиры которую нужно найти"); 

// function naitekv(pod,etaj,kvpod,kv){
// let kvartira = false;
//   for (let i = 1; i <= pod; i++) { 
//     for (let j = 1; j <= etaj; j++) { 
//       for (let k = 1; k <= kvpod; k++) { 
//         let fix = (i - 1) * etaj * kvpod + (j - 1) * kvpod + k; 
//         if (fix === kv) { 
//           console.log(`Квартира ${kv} находится в  ${i}  подъезде на этаже ${j}`); 
//           kvartira = true; 
//           break; 
//         } 
//       } 
//     } 
//   }  
//   if (!kvartira) { 
//     console.log(`Нету`); 
//   }
// }
// naitekv(3, 4, 10, 20)


function naiteKv(pod, etaj, kvpod, kv) {
  for (let i = 1; i <= pod; i++) {
    for (let j = 1; j <= etaj; j++) {
      for (let k = 1; k <= kvpod; k++) {
        let kvNumber = (i - 1) * etaj * kvpod + (j - 1) * kvpod + k;
        if (kvNumber === kv) {
          return `Квартира ${kv} находится в ${j} подъезде на этаже ${i}`;
        }
      }
    }
  }
  return 'Квартира не найдена';
}

const result = naiteKv(5,4,20,45); 
console.log(result);

 