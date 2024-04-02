let category = [
    {
      id:1,
      name:'desert'
    },
    {
      id:2,
      name:'Fast-Food'
    },
    {
      id:3,
      name:'Salad'
    },
  ]
  
  let foods = [
    {
      id:1,
      name:'Burger',
      catId:2,
      cost:120,
    },
    {
      id:2,
      name:'Tort',
      catId:1,
      cost:200,
    },
    {
      id:3,
      name:'Sezar',
      catId:3,
      cost:120,
    },
  ]
  
  let custamer = [
    {
      id:1,
      food:[1,1,2,3]
    },
    {
      id:2,
      food:[2,2,3]
    },
    {
      id:3,
      food:[3,3,2,1,1,2]
    },
  ] 



// function get(){
//     custamer.forEach(element => {
//       let k = []
//        element.food.forEach(element1 =>{
//         foods.forEach(element2 =>{        
//           if(element1 == element2.id){
//             k.push(element2.name)
              
//         }
//         })
//        })
//        element.food = k
//     });
//     console.log(custamer);
// }
// get()



// function del(id){
//   let k = category.findIndex(elem => elem.id== id)
//   category.splice(k,1)

// }
// del(2)
// console.log(category);



// function get(){
   
//   custamer.forEach(element => {
//     let k = []
//      element.food.forEach(element1 =>{
//       foods.forEach(element2 =>{        
//         if(element1 == element2.id){
//           category.forEach( element3 =>{
//             if(element2.catId == element3.id){
//               k.push(element3.name)
//             }
//           })    
//       }
//       })
//      })
//      element.food = k
//   });
//   console.log(custamer);
// }
// get()



// predmets = [{id:1, Pred:"Math"}, {id:2, Pred:"Fiz"}];
// temas = [{id:1, name: "vbnm", catId:1}, {id:2, name: "mnhgfds", catId:1}, {id:3, name: "vbnm", catId:2}];

// function getCat() {
//   predmets.forEach(elempred => {
//     const tem = temas.filter(elemtem => elemtem.catId === elempred.id);
//     elempred.temas = tem;
//   });

// }

// getCat();
// console.log(predmets);



 