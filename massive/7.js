let obj = [ 
    { 
      id: 1, 
      name: "Erulan", 
      surname: "Kokulov", 
    }, 
    { 
      id: 2, 
      name: "Baibolot", 
      surname: "Zakirov", 
    }, 
    { 
      id: 3, 
      name: "Ulanbek", 
      surname: "Ergeshov", 
    }, 
    { 
      id: 4, 
      name: "Tynybek", 
      surname: "Zhanybekov", 
    }, 
    { 
      id: 5, 
      name: "Abdulhai", 
      surname: "Bakirjanov", 
    }, 
    { 
      id: 6, 
      name: "Muhammed", 
      surname: "Altynbekov", 
    }, 
    { 
      id: 7, 
      name: "Nurullo", 
      surname: "Badalov", 
    }, 
    { 
      id: 8, 
      name: "Majid", 
      surname: "Kamilov", 
    }, 
    { 
      id: 9, 
      name: "Beka", 
      surname: "Baltabaev", 
    }, 
    { 
      id: 10, 
      name: "Andrei", 
      surname: "Okulov", 
    }, 
  ];

  function name(surname,name) {
    let k = obj.filter(elem =>{
        if( (elem.surname).includes(surname) && (elem.name).includes(name) ){
            return elem
        }
    })
    console.log(k);
  }
  name("lov","")




// let a = [ 
//   { 
//     0: "H", 
//     1: "e", 
//     2: "l", 
//     3: "l", 
//     4: "o", 
//   }, 
//   { 
//     0: "W", 
//     1: "o", 
//     2: "r", 
//     3: "d", 
//   }, 
// ];

// function revers() {
//   for(  k1 in a[0]){
//      let str ={}
//      let k0=a[0][k1]
//      for (let  key in k0) {
//       const newIndex = Object.keys(k0).length - 1 - key;
//       str[newIndex] = k0[key];
//     }
//     return str
//   }
// }
// revers()

// // console.log(str);




// let a = [ 
//   { 
//     0: "H", 
//     1: "e", 
//     2: "l", 
//     3: "l", 
//     4: "o", 
//   }, 
//   { 
//     0: "W", 
//     1: "o", 
//     2: "r", 
//     3: "d", 
//   }, 
// ];

// for (let obj of a) {
//   let keys = Object.keys(obj);
//   let start = 0;
//   let end = keys.length - 1;
//   while (start < end) {
//     let temp = obj[start];
//     obj[start] = obj[end];
//     obj[end] = temp;
//     start++;
//     end--;
//   }
// }

// console.log(a);
