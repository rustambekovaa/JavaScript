let category = { 
    cat1:{ 
      id:1, 
      name:"Ujas", 
    }, 
    cat2:{ 
      id:2, 
      name:"Komedia", 
    }, 
    cat3:{ 
      id:3, 
      name:"Boevik", 
    }, 
  } 
  



  let films = { 
    film1:{ 
      id:1, 
      name:"Astral", 
      catId:1, 
      cost:100, 
    }, 
    film2:{ 
      id:2, 
      name:"povorot ne tuda", 
      catId:1, 
      cost:120, 
    }, 
    film3:{ 
      id:3, 
      name:"Mister Bin", 
      catId:2, 
      cost:150, 
    }, 
    film4:{ 
      id:4, 
      name:"Chas pik", 
      catId:2, 
      cost:120, 
    }, 
    film5:{ 
      id:5, 
      name:"Zashitnik", 
      catId:3, 
      cost:100, 
    }, 
    film6:{ 
      id:6, 
      name:"ne osporimyi", 
      catId:3, 
      cost:150, 
    }, 
    film7:{ 
      id:7, 
      name:"ne osporimyi2", 
      catId:3, 
      cost:150, 
    }, 
    film8:{ 
      id:8, 
      name:"kukla", 
      catId:1, 
      cost:150, 
    }, 
  }


//   function getId( id){
//     for ( i in category) {
//         if (category[i].id == id){
//             for( i2 in films){
//                 if(category[i].id == films[i2].catId){
//                     console.log(films[i2]);
//                 }
//             }
//         }
//     }
//   }
//   getId( 2)



// function getId(name ){
//     for ( i in films) {
//         if (films[i].name == name){
//             for( i2 in category){
//                 if(films[i].catId == category[i2].id){
//                     console.log(category[i2]);
//                 }
//             }
//         }
//     }
//   }
//   getId("Astral" )
//   getId("Zashitnik " )  


function getId( ){
    let cat ={}
    for ( i in category){
        for ( i2 in films){
            if ( category[i].id == films[i2].catId){
                if ( category[i].name in cat){
                    cat [category[i].name] += films[i2].name +" "
                }else{
                    cat [category[i].name] = films[i2].name +" "
                }
            } 
        }
    }
    console.log(cat);
  }
  getId()


// function getSal(){
//     for ( i in films){
//         let 
//     }
// }
// getSal()