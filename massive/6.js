let arr = [ 
    { 
      id: 1, 
      name: "Usuf", 
      salary: "1400r", 
    }, 
    { 
      id: 2, 
      name: "Sabur", 
      salary: "200$", 
    }, 
    { 
      id: 3, 
      name: "Malik", 
      salary: "20$", 
    }, 
    { 
      id: 4, 
      name: "Sarvinbek", 
      salary: "1000som", 
    }, 
    { 
      id: 5, 
      name: "Gulpiaz", 
      salary: "300$", 
    }, 
    { 
      id: 6, 
      name: "Gulpiaz", 
      salary: "300e", 
    }, 
  ]; 

   function getName(id) {
    let k = arr.filter(elem => {
     if (elem.name == id){
       return elem
    }
   })
   console.log(k); 
}
getName("Gulpiaz")    